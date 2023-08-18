import{h as u,p as I}from"./hooks.module.a8b17ad8.js";import{S as x}from"./spinner.164b1eeb.js";import{a as G,T as k}from"./jwt.f0e0aa9c.js";import{a as w}from"./http.82ebf0f1.js";import{o as n}from"./jsxRuntime.module.60258b2e.js";import{k as v}from"./preact.module.e5fe34f1.js";const P="/_astro/github.ab5c33e4.svg",l="githubRedirectAt",m="githubLastPage";function B(R){const[i,e]=u(!1),[g,r]=u(""),f=i?x:P;return I(()=>{const t=new URLSearchParams(window.location.search),o=t.get("code"),a=t.get("state"),b=t.get("provider");!o||!a||b!=="github"||(e(!0),w(`https://api.roadmap.sh/v1-github-callback${window.location.search}`).then(({response:s,error:S})=>{if(!s?.token){const c=S?.message||"Something went wrong.";r(c),e(!1);return}let d="/";const h=localStorage.getItem(l),p=localStorage.getItem(m);if(h&&p){const c=parseInt(h,10);Date.now()-c<30*1e3&&(d=p)}localStorage.removeItem(l),localStorage.removeItem(m),G.set(k,s.token,{path:"/",expires:30}),window.location.href=d}).catch(s=>{r("Something went wrong. Please try again later."),e(!1)}))},[]),n(v,{children:[n("button",{class:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:i,onClick:async()=>{e(!0);const{response:t,error:o}=await w("https://api.roadmap.sh/v1-github-login");if(o||!t?.loginUrl){r(o?.message||"Something went wrong. Please try again later."),e(!1);return}if(!["/login","/signup"].includes(window.location.pathname)){const a=["/respond-invite","/befriend"].includes(window.location.pathname)?window.location.pathname+window.location.search:window.location.pathname;localStorage.setItem(l,Date.now().toString()),localStorage.setItem(m,a)}window.location.href=t.loginUrl},children:[n("img",{src:f,alt:"GitHub",class:`h-[18px] w-[18px] ${i?"animate-spin":""}`}),"Continue with GitHub"]}),g&&n("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:g})]})}export{B as GitHubButton};