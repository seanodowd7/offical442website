"use client";

import { useRef, useEffect } from "react";

const SHADER = `#version 300 es
/*
 * Nebula / fire shader — Matthias Hurrle (@atzedent)
 */
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
  }
  O=vec4(col,1);
}`;

function useShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, `#version 300 es\nprecision highp float;\nin vec4 position;\nvoid main(){gl_Position=position;}`);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, SHADER);
    gl.compileShader(fs);

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "resolution");
    const uTime = gl.getUniformLocation(prog, "time");

    let rafId: number;
    const render = (now: number) => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now * 1e-3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return canvasRef;
}

export function ShaderHero() {
  const canvasRef = useShaderCanvas();

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#080C18]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
      />
      {/* Dark overlay so text stays readable over the shader */}
      <div className="absolute inset-0 bg-[#080C18]/55" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8896B0]"
          style={{ animation: "shader-fade-down 0.8s ease-out forwards" }}
        >
          Get In Touch
        </p>

        <h1
          className="mb-10 font-display font-extrabold uppercase leading-none"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", letterSpacing: "-0.01em", lineHeight: 0.9 }}
        >
          <span
            className="block text-[#F2F2EE]"
            style={{ animation: "shader-fade-up 0.8s ease-out 0.1s forwards", opacity: 0 }}
          >
            Ready for
          </span>
          <span
            className="block text-brand-blue"
            style={{ animation: "shader-fade-up 0.8s ease-out 0.22s forwards", opacity: 0 }}
          >
            Liftoff?
          </span>
        </h1>

        <p
          className="mx-auto mb-14 max-w-md text-lg leading-relaxed text-[#8896B0]"
          style={{ animation: "shader-fade-up 0.8s ease-out 0.36s forwards", opacity: 0 }}
        >
          Launch your bar into the center of the soccer community.
        </p>

        <div style={{ animation: "shader-fade-up 0.8s ease-out 0.5s forwards", opacity: 0 }}>
          <a
            href="https://calendly.com/fourfourtwo-sales/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-blue/40 hover:border-brand-blue/70 bg-brand-blue/10 hover:bg-brand-blue/20 px-10 py-4 text-sm uppercase tracking-[0.15em] text-[#F2F2EE] transition-all duration-300"
          >
            Book a Free Strategy Call &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
