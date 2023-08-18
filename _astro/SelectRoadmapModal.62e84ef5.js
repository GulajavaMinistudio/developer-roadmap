import{_ as k,h as b,p as R}from"./hooks.module.a8b17ad8.js";import{D}from"./index.es.ebad3893.js";import{S as T}from"./Spinner.402490df.js";import{d as M}from"./http.82ebf0f1.js";import{a as I}from"./resource-progress.e28c933e.js";/* empty css                       */import{u as j}from"./use-outside-click.01d1cb6f.js";import{u as B}from"./use-keydown.bd05fadb.js";import{u as P}from"./use-toast.fb52de5d.js";import{u as q}from"./index.ba97eea8.js";import{b as A}from"./team.12f2469e.js";import{o as e}from"./jsxRuntime.module.60258b2e.js";import{C as F}from"./close.3a539829.js";function te(u){const{defaultRemovedItems:a=[],resourceId:r,resourceType:l,teamId:m,setTeamResourceConfig:v,onClose:i}=u,n=k(null),p=k(null),f=P(),[c,N]=b(!0),[h,w]=b(!1),[t,s]=b(a),g=q(A);R(()=>{function o(x){const C=x.target.closest(".clickable-group")?.dataset?.groupId;if(!C)return;const d=C.replace(/^\d+-/,"");t.includes(d)?(s(S=>S.filter(z=>z!==d)),I(d,"reset")):(s(S=>[...S,d]),I(d,"removed"))}return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[t]);let y="https://roadmap.sh";l==="roadmap"?y+=`/${r}.json`:y+=`/best-practices/${r}.json`;async function U(o){const E=await(await fetch(o)).json(),C=await D(E,{fontURL:"/fonts/balsamiq.woff2"});n.current?.replaceChildren(C),t.forEach(d=>{I(d,"removed")})}B("Escape",()=>{i()}),j(p,()=>{i()});async function $(){if(t.length===0)return;w(!0);const{error:o,response:x}=await M(`https://api.roadmap.sh/v1-update-team-resource-config/${m}`,{teamId:m,resourceId:r,resourceType:l,removed:t});if(o||!x){f.error(o?.message||"Error adding roadmap");return}v(x),i()}return R(()=>{!n.current||!y||!r||!l||!m||U(y).catch(o=>{console.error(o),f.error("Something went wrong. Please try again!")}).finally(()=>{N(!1)})},[]),e("div",{class:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e("div",{class:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e("div",{id:g?.type==="company"?"customized-roadmap":"original-roadmap",ref:p,class:"popup-body relative rounded-lg bg-white shadow",children:[e("div",{className:"sticky top-0 mb-3 rounded-2xl border-4 border-white bg-black p-4",children:[e("p",{className:"mb-2 text-gray-300",children:"Click and select the items to remove from the roadmap."}),e("div",{className:"flex flex-row items-center gap-1.5",children:[e("button",{disabled:t.length===0,onClick:()=>$().finally(()=>w(!1)),className:"rounded-md bg-blue-600 px-2.5 py-1.5 text-sm text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400",children:h?e("span",{className:"flex items-center gap-1.5",children:[e(T,{className:"h-3 w-3",innerFill:"white",isDualRing:!1})," ","Saving .."]}):"Save Changes"}),e("button",{onClick:i,className:"rounded-md bg-gray-600 px-2.5 py-1.5 text-sm text-white hover:bg-gray-700",children:"Cancel"})]})]}),e("div",{id:"resource-svg-wrap",ref:n,className:"px-4"}),c&&e("div",{class:"flex w-full justify-center",children:e(T,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})})]})})})}function L(u){const{isSelected:a,onClick:r,title:l}=u;return e("button",{className:`group flex min-h-[35px] items-stretch overflow-hidden rounded-md text-sm ${a?"bg-black text-white transition-colors hover:bg-gray-700":"border border-gray-300 hover:bg-gray-100"}`,onClick:r,children:[e("span",{className:"flex items-center px-3",children:l}),a&&e("span",{className:"flex items-center bg-gray-700 px-3 text-xs text-white transition-colors",children:"×"}),!a&&e("span",{className:"flex items-center bg-gray-100 px-2.5 text-xs text-gray-500",children:"+"})]})}function re(u){const{onClose:a,allRoadmaps:r,onRoadmapAdd:l,onRoadmapRemove:m,teamResourceConfig:v}=u,i=k(null),n=k(null),[p,f]=b(r),[c,N]=b("");B("Escape",()=>{a()}),j(i,()=>{a()}),R(()=>{n.current&&n.current.focus()},[n]),R(()=>{if(c.length===0){f(r);return}const t=r.filter(s=>s.title.toLowerCase().includes(c.toLowerCase())||s.id.toLowerCase().includes(c.toLowerCase()));f(t)},[c,r]);const h=p.filter(t=>t?.metadata?.tags?.includes("role-roadmap")),w=p.filter(t=>t?.metadata?.tags?.includes("skill-roadmap"));return e("div",{class:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e("div",{class:"relative mx-auto h-full w-full max-w-2xl p-4 md:h-auto",children:e("div",{ref:i,class:"popup-body relative mt-4 overflow-hidden rounded-lg bg-white shadow",children:[e("button",{type:"button",className:"popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900",onClick:a,children:[e("img",{alt:"close",src:F,className:"h-4 w-4"}),e("span",{class:"sr-only",children:"Close modal"})]}),e("input",{ref:n,type:"text",placeholder:"Search roadmaps",className:"block w-full border-b px-5 pb-3.5 pt-4 outline-none placeholder:text-gray-400",value:c,onInput:t=>N(t.target.value)}),e("div",{className:"min-h-[200px] p-4",children:[e("span",{className:"block pb-3 text-xs uppercase text-gray-400",children:"Role Based Roadmaps"}),h.length===0&&e("p",{className:"mb-1 flex h-full items-start text-sm italic text-gray-400"}),h.length>0&&e("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:h.map(t=>{const s=!!v.find(g=>g.resourceId===t.id);return e(L,{title:t.title,isSelected:s,onClick:()=>{s?m(t.id):l(t.id)}})})}),e("span",{className:"block pb-3 text-xs uppercase text-gray-400",children:"Skill Based Roadmaps"}),e("div",{className:"flex flex-wrap items-center gap-2",children:w.map(t=>{const s=!!v.find(g=>g.resourceId===t.id);return e(L,{title:t.title,isSelected:s,onClick:()=>{s?m(t.id):l(t.id)}})})})]})]})})})}export{re as S,te as U};