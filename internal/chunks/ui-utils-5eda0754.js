import{w as a}from"./index-49a3d453.js";import{N as n}from"./index-178d58bf.js";const y=new Event("ThemeChange");let s=a(null),o=a(!1),l;o.subscribe(e=>{l=e});const m=()=>{const e=document.getElementById("random-icon");e.classList.add("rotate-360"),setTimeout(()=>{e.classList.add("notransition"),e.classList.remove("rotate-360"),e.offsetHeight,e.classList.remove("notransition")},301)},c=()=>{const e=document.getElementById("overlay"),t=document.getElementById("overlay-bg");document.getElementById("overlay-container"),n(o)||(document.getElementById("close-overlay-btn").focus(),document.getElementById("close-overlay-btn").blur()),t.classList.remove("hidden"),t.offsetHeight,t.classList.replace("opacity-0","opacity-50"),e.classList.replace("-left-full","left-0"),o.update(()=>!0)},r=()=>{const e=document.getElementById("overlay"),t=document.getElementById("overlay-bg");document.getElementById("overlay-container"),t.classList.replace("opacity-50","opacity-0"),t.offsetHeight,e.classList.replace("left-0","-left-full"),setTimeout(()=>{t.classList.add("hidden")},300),o.update(()=>!1)},u=e=>{l?(r(),setTimeout(()=>{s.update(()=>e),c()},500)):s.update(()=>e),console.log("overlayContent: "+e)};export{y as T,u as a,r as c,s as o,m as r,c as s};
