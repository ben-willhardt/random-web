import{S as Q,i as Z,s as K,e as w,k as A,F as R,c as x,a as m,m as P,G as H,d as o,b as l,g as O,H as h,O as he,P as X,Q as Oe,E as U,R as ie,t as j,h as L,j as ae,T as Ae,w as ee,x as te,U as ze,y as re,V as Pe,W as Ce,q as G,o as J,B as le,n as Te,X as Ue,p as Be,Y as ge,Z as je,N as Le,v as Re}from"../chunks/index-178d58bf.js";import{w as Ne}from"../chunks/index-49a3d453.js";import{r as ne,c as ve,s as _e,o as He,a as Ie}from"../chunks/ui-utils-5eda0754.js";const q=Ne([]);q.update(n=>{let e=localStorage.getItem("options");return e!==null&&e!=="null"?(console.log("recovered entries from localStorage"),JSON.parse(e)):n}),q.subscribe(n=>localStorage.setItem("options",JSON.stringify(n)));const Xe=n=>{q.update(e=>[...e,{text:n,selected:!1,id:Date.now()}])},Ye=n=>{q.update(e=>e.filter(t=>t.id!==n))},qe=()=>{q.update(n=>n.filter(e=>!e.selected))},Fe=n=>{q.update(e=>{for(let t=0;t<e.length;t++)if(e[t].id===n){e[t].selected=!e[t].selected;break}return e})},Ge=()=>{q.update(n=>{for(let e=0;e<n.length;e++)n[e].selected=!0;return n})},Je=()=>{q.update(n=>{for(let e=0;e<n.length;e++)n[e].selected=!1;return n})},We=(n,e)=>{q.update(t=>{for(let r=0;r<t.length;r++)if(t[r].id===n){t[r].text=e;break}return t})};function Qe(n){let e,t,r,s,a,c,i,u,p,v,_,b,f,d;return{c(){e=w("form"),t=w("div"),r=w("input"),s=A(),a=w("div"),c=w("button"),i=R("svg"),u=R("path"),p=A(),v=w("button"),_=R("svg"),b=R("path"),this.h()},l(k){e=x(k,"FORM",{class:!0});var y=m(e);t=x(y,"DIV",{class:!0});var V=m(t);r=x(V,"INPUT",{class:!0,name:!0,id:!0,type:!0,placeholder:!0}),s=P(V),a=x(V,"DIV",{class:!0});var I=m(a);c=x(I,"BUTTON",{id:!0,type:!0,class:!0});var B=m(c);i=H(B,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var E=m(i);u=H(E,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),m(u).forEach(o),E.forEach(o),B.forEach(o),p=P(I),v=x(I,"BUTTON",{id:!0,type:!0,class:!0});var D=m(v);_=H(D,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var g=m(_);b=H(g,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),m(b).forEach(o),g.forEach(o),D.forEach(o),I.forEach(o),V.forEach(o),y.forEach(o),this.h()},h(){l(r,"class","shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-900 dark:border-zinc-400 focus:dark:bg-zinc-800 focus:border-violet-500 dark:focus:border-violet-600"),l(r,"name","option_entry"),l(r,"id","option_entry"),l(r,"type","text"),l(r,"placeholder","Trage hier deine Optionen ein..."),l(u,"fill-rule","evenodd"),l(u,"d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"),l(u,"clip-rule","evenodd"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class","h-5 w-5"),l(i,"viewBox","0 0 20 20"),l(i,"fill","currentColor"),l(c,"id","add-option-toggle"),l(c,"type","submit"),l(c,"class","mr-1 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-200 dark:focus:ring-green-700 rounded-lg text-sm p-2.5"),l(b,"stroke-linecap","round"),l(b,"stroke-linejoin","round"),l(b,"d","M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"),l(_,"xmlns","http://www.w3.org/2000/svg"),l(_,"class","h-6 w-6"),l(_,"fill","none"),l(_,"viewBox","0 0 24 24"),l(_,"stroke","currentColor"),l(_,"stroke-width","2"),l(v,"id","delete-entry-content-toggle"),l(v,"type","button"),l(v,"class","text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-2.5"),l(a,"class","relative flex items-center justify-between mx-1"),l(t,"class","w-full max-w-2xl flex"),l(e,"class","grid place-items-center")},m(k,y){O(k,e,y),h(e,t),h(t,r),he(r,n[0]),h(t,s),h(t,a),h(a,c),h(c,i),h(i,u),h(a,p),h(a,v),h(v,_),h(_,b),f||(d=[X(r,"input",n[2]),X(v,"click",n[3]),X(e,"submit",Oe(n[1]))],f=!0)},p(k,[y]){y&1&&r.value!==k[0]&&he(r,k[0])},i:U,o:U,d(k){k&&o(e),f=!1,ie(d)}}}function Ze(n,e,t){let r="";const s=()=>{r!==""&&(Xe(r),console.log("stored option:",r),t(0,r="")),setTimeout(ne)};function a(){r=this.value,t(0,r)}return[r,s,a,()=>{t(0,r=""),setTimeout(ne)}]}class Ke extends Q{constructor(e){super(),Z(this,e,Ze,Qe,K,{})}}function $e(n){let e,t,r,s,a,c,i,u,p,v,_,b;return{c(){e=w("div"),t=w("div"),r=w("input"),c=A(),i=R("svg"),u=R("path"),this.h()},l(f){e=x(f,"DIV",{class:!0});var d=m(e);t=x(d,"DIV",{class:!0});var k=m(t);r=x(k,"INPUT",{id:!0,class:!0,name:!0,type:!0}),c=P(k),i=H(k,"svg",{id:!0,xmlns:!0,class:!0,viewBox:!0,fill:!0});var y=m(i);u=H(y,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),m(u).forEach(o),y.forEach(o),k.forEach(o),d.forEach(o),this.h()},h(){l(r,"id",s="select-"+n[0].id),l(r,"class","form-tick appearance-none bg-white dark:bg-zinc-800 h-6 w-6 border border-gray-300 dark:border-gray-400 rounded-md checked:bg-violet-500 dark:checked:bg-violet-600 focus:border-violet-500 dark:focus:border-violet-600 checked:border-transparent dark:checked:border-transparent focus:outline-none"),l(r,"name","selected"),l(r,"type","checkbox"),r.checked=a=n[0].selected,l(u,"fill-rule","evenodd"),l(u,"d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"),l(u,"clip-rule","evenodd"),l(i,"id",p="tick-"+n[0].id),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class",v="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+(n[0].selected===!0?"":"hidden")),l(i,"viewBox","0 0 20 20"),l(i,"fill","currentColor"),l(t,"class","grid grid-cols-1"),l(e,"class","relative")},m(f,d){O(f,e,d),h(e,t),h(t,r),h(t,c),h(t,i),h(i,u),_||(b=X(r,"change",n[5]),_=!0)},p(f,d){d&1&&s!==(s="select-"+f[0].id)&&l(r,"id",s),d&1&&a!==(a=f[0].selected)&&(r.checked=a),d&1&&p!==(p="tick-"+f[0].id)&&l(i,"id",p),d&1&&v!==(v="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+(f[0].selected===!0?"":"hidden"))&&l(i,"class",v)},d(f){f&&o(e),_=!1,b()}}}function et(n){let e,t;function r(c,i){return c[0].text!==""?lt:rt}let s=r(n),a=s(n);return{c(){e=w("span"),a.c(),this.h()},l(c){e=x(c,"SPAN",{class:!0});var i=m(e);a.l(i),i.forEach(o),this.h()},h(){l(e,"class",t="flex-1 "+(n[1]?"ml-3":"")+" "+(n[3]?"text-center":"")+" overflow-auto")},m(c,i){O(c,e,i),a.m(e,null)},p(c,i){s===(s=r(c))&&a?a.p(c,i):(a.d(1),a=s(c),a&&(a.c(),a.m(e,null))),i&10&&t!==(t="flex-1 "+(c[1]?"ml-3":"")+" "+(c[3]?"text-center":"")+" overflow-auto")&&l(e,"class",t)},d(c){c&&o(e),a.d()}}}function tt(n){let e,t,r,s;return{c(){e=w("input"),this.h()},l(a){e=x(a,"INPUT",{class:!0,name:!0,id:!0,type:!0}),this.h()},h(){l(e,"class","focus:shadow ml-3 appearance-none focus:border focus:rounded w-full py-2 pl-2 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-900 dark:border-zinc-400 focus:dark:bg-zinc-800 focus:border-violet-500 dark:focus:border-violet-600"),l(e,"name","option_entry"),l(e,"id",t="edit-option-"+n[0].id),l(e,"type","text")},m(a,c){O(a,e,c),he(e,n[0].text),r||(s=[X(e,"input",n[6]),X(e,"change",n[7])],r=!0)},p(a,c){c&1&&t!==(t="edit-option-"+a[0].id)&&l(e,"id",t),c&1&&e.value!==a[0].text&&he(e,a[0].text)},d(a){a&&o(e),r=!1,ie(s)}}}function rt(n){let e;return{c(){e=j("\xA0")},l(t){e=L(t,"\xA0")},m(t,r){O(t,e,r)},p:U,d(t){t&&o(e)}}}function lt(n){let e=n[0].text+"",t;return{c(){t=j(e)},l(r){t=L(r,e)},m(r,s){O(r,t,s)},p(r,s){s&1&&e!==(e=r[0].text+"")&&ae(t,e)},d(r){r&&o(t)}}}function Ve(n){let e,t,r,s,a,c;return{c(){e=w("button"),t=R("svg"),r=R("path"),this.h()},l(i){e=x(i,"BUTTON",{id:!0,type:!0,class:!0});var u=m(e);t=H(u,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var p=m(t);r=H(p,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),m(r).forEach(o),p.forEach(o),u.forEach(o),this.h()},h(){l(r,"fill-rule","evenodd"),l(r,"d","M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"),l(r,"clip-rule","evenodd"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"class","h-5 w-5"),l(t,"viewBox","0 0 20 20"),l(t,"fill","currentColor"),l(e,"id",s="delete-option-"+n[0].id),l(e,"type","button"),l(e,"class","text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-2")},m(i,u){O(i,e,u),h(e,t),h(t,r),a||(c=X(e,"click",n[8]),a=!0)},p(i,u){u&1&&s!==(s="delete-option-"+i[0].id)&&l(e,"id",s)},d(i){i&&o(e),a=!1,c()}}}function nt(n){let e,t,r,s=n[1]&&$e(n);function a(p,v){return p[2]?tt:et}let c=a(n),i=c(n),u=n[1]&&Ve(n);return{c(){e=w("li"),s&&s.c(),t=A(),i.c(),r=A(),u&&u.c(),this.h()},l(p){e=x(p,"LI",{class:!0});var v=m(e);s&&s.l(v),t=P(v),i.l(v),r=P(v),u&&u.l(v),v.forEach(o),this.h()},h(){l(e,"class","flex items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight bg-white dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1")},m(p,v){O(p,e,v),s&&s.m(e,null),h(e,t),i.m(e,null),h(e,r),u&&u.m(e,null)},p(p,[v]){p[1]?s?s.p(p,v):(s=$e(p),s.c(),s.m(e,t)):s&&(s.d(1),s=null),c===(c=a(p))&&i?i.p(p,v):(i.d(1),i=c(p),i&&(i.c(),i.m(e,r))),p[1]?u?u.p(p,v):(u=Ve(p),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:U,o:U,d(p){p&&o(e),s&&s.d(),i.d(),u&&u.d()}}}function st(n,e,t){let{option:r}=e;const s=null;let{showActions:a=!0}=e,{editEnabled:c=!0}=e,{center:i=!1}=e;const u=()=>Fe(r.id);function p(){r.text=this.value,t(0,r)}const v=()=>{We(r.id,r.text)},_=()=>{Ye(r.id),setTimeout(ne)};return n.$$set=b=>{"option"in b&&t(0,r=b.option),"showActions"in b&&t(1,a=b.showActions),"editEnabled"in b&&t(2,c=b.editEnabled),"center"in b&&t(3,i=b.center)},[r,a,c,i,s,u,p,v,_]}class ot extends Q{constructor(e){super(),Z(this,e,st,nt,K,{option:0,optionIndex:4,showActions:1,editEnabled:2,center:3})}get optionIndex(){return this.$$.ctx[4]}}function at(n){const e=n-1;return e*e*e+1}function it(n,{from:e,to:t},r={}){const s=getComputedStyle(n),a=s.transform==="none"?"":s.transform,[c,i]=s.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*c/t.width-(t.left+c),p=e.top+e.height*i/t.height-(t.top+i),{delay:v=0,duration:_=f=>Math.sqrt(f)*120,easing:b=at}=r;return{delay:v,duration:Ae(_)?_(Math.sqrt(u*u+p*p)):_,easing:b,css:(f,d)=>{const k=d*u,y=d*p,V=f+d*e.width/t.width,I=f+d*e.height/t.height;return`transform: ${a} translate(${k}px, ${y}px) scale(${V}, ${I});`}}}function De(n,e,t){const r=n.slice();return r[11]=e[t],r[13]=t,r}function Me(n,e){let t,r,s,a,c=U,i,u,p;r=new ot({props:{option:e[11],optionIndex:e[13]}});function v(...f){return e[8](e[13],e[11],...f)}function _(...f){return e[9](e[13],...f)}function b(){return e[10](e[13])}return{key:n,first:null,c(){t=w("div"),ee(r.$$.fragment),s=A(),this.h()},l(f){t=x(f,"DIV",{draggable:!0,ondragover:!0});var d=m(t);te(r.$$.fragment,d),s=P(d),d.forEach(o),this.h()},h(){l(t,"draggable",!0),l(t,"ondragover","return false"),ze(t,"is-hovering",e[0]===e[13]),this.first=t},m(f,d){O(f,t,d),re(r,t,null),h(t,s),i=!0,u||(p=[X(t,"dragstart",v),X(t,"drop",Oe(_)),X(t,"dragenter",b)],u=!0)},p(f,d){e=f;const k={};d&4&&(k.option=e[11]),d&4&&(k.optionIndex=e[13]),r.$set(k),d&5&&ze(t,"is-hovering",e[0]===e[13])},r(){a=t.getBoundingClientRect()},f(){Pe(t),c()},a(){c(),c=Ce(t,a,it,{duration:300})},i(f){i||(G(r.$$.fragment,f),i=!0)},o(f){J(r.$$.fragment,f),i=!1},d(f){f&&o(t),le(r),u=!1,ie(p)}}}function ct(n){let e,t,r,s,a,c,i,u,p,v,_,b,f,d,k,y,V,I,B,E,D,g,M,Y,z,S,N=[],ce=new Map,W,se,ue,F=n[2];const de=$=>$[11].id;for(let $=0;$<F.length;$+=1){let T=De(n,F,$),C=de(T);ce.set(C,N[$]=Me(C,T))}return{c(){e=w("div"),t=w("div"),r=A(),s=w("span"),a=j("Optionenliste"),c=A(),i=w("div"),u=A(),p=w("div"),v=w("div"),_=w("div"),b=w("input"),f=A(),d=R("svg"),k=R("path"),V=A(),I=w("label"),B=j("alle ausw\xE4hlen"),E=A(),D=w("button"),g=R("svg"),M=R("path"),Y=A(),z=w("div"),S=w("ul");for(let $=0;$<N.length;$+=1)N[$].c();this.h()},l($){e=x($,"DIV",{class:!0});var T=m(e);t=x(T,"DIV",{class:!0}),m(t).forEach(o),r=P(T),s=x(T,"SPAN",{class:!0});var C=m(s);a=L(C,"Optionenliste"),C.forEach(o),c=P(T),i=x(T,"DIV",{class:!0}),m(i).forEach(o),T.forEach(o),u=P($),p=x($,"DIV",{class:!0});var oe=m(p);v=x(oe,"DIV",{class:!0});var me=m(v);_=x(me,"DIV",{class:!0});var fe=m(_);b=x(fe,"INPUT",{id:!0,class:!0,name:!0,type:!0}),f=P(fe),d=H(fe,"svg",{id:!0,xmlns:!0,class:!0,viewBox:!0,fill:!0});var be=m(d);k=H(be,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),m(k).forEach(o),be.forEach(o),fe.forEach(o),me.forEach(o),V=P(oe),I=x(oe,"LABEL",{for:!0,class:!0});var ke=m(I);B=L(ke,"alle ausw\xE4hlen"),ke.forEach(o),E=P(oe),D=x(oe,"BUTTON",{id:!0,type:!0,class:!0});var we=m(D);g=H(we,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var xe=m(g);M=H(xe,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),m(M).forEach(o),xe.forEach(o),we.forEach(o),oe.forEach(o),Y=P($),z=x($,"DIV",{class:!0});var Ee=m(z);S=x(Ee,"UL",{class:!0});var ye=m(S);for(let pe=0;pe<N.length;pe+=1)N[pe].l(ye);ye.forEach(o),Ee.forEach(o),this.h()},h(){l(t,"class","flex-grow border-t border-zinc-700 dark:border-zinc-400"),l(s,"class","flex-shrink mx-4 text-zinc-700 dark:text-zinc-400"),l(i,"class","flex-grow border-t border-zinc-700 dark:border-zinc-400"),l(e,"class","relative flex py-1 items-center"),l(b,"id","select-all"),l(b,"class","form-tick appearance-none bg-white dark:bg-zinc-800 h-6 w-6 border border-gray-300 dark:border-gray-400 rounded-md checked:bg-violet-500 dark:checked:bg-violet-600 focus:border-violet-500 dark:focus:border-violet-600 checked:border-transparent dark:checked:border-transparent focus:outline-none"),l(b,"name","selected"),l(b,"type","checkbox"),l(k,"fill-rule","evenodd"),l(k,"d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"),l(k,"clip-rule","evenodd"),l(d,"id","tick-all"),l(d,"xmlns","http://www.w3.org/2000/svg"),l(d,"class",y="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+(n[1]===!0?"":"hidden")),l(d,"viewBox","0 0 20 20"),l(d,"fill","currentColor"),l(_,"class","grid grid-cols-1"),l(v,"class","relative"),l(I,"for","select-all"),l(I,"class","w-full ml-5"),l(M,"fill-rule","evenodd"),l(M,"d","M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"),l(M,"clip-rule","evenodd"),l(g,"xmlns","http://www.w3.org/2000/svg"),l(g,"class","h-5 w-5"),l(g,"viewBox","0 0 20 20"),l(g,"fill","currentColor"),l(D,"id","delete-option-all"),l(D,"type","button"),l(D,"class","text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-1 mr-1"),l(p,"class","flex items-center shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)] appearance-none rounded w-full pb-2 px-3 border-b leading-tight bg-white dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1"),l(S,"class","w-full"),l(z,"class","overflow-auto")},m($,T){O($,e,T),h(e,t),h(e,r),h(e,s),h(s,a),h(e,c),h(e,i),O($,u,T),O($,p,T),h(p,v),h(v,_),h(_,b),b.checked=n[1],h(_,f),h(_,d),h(d,k),h(p,V),h(p,I),h(I,B),h(p,E),h(p,D),h(D,g),h(g,M),O($,Y,T),O($,z,T),h(z,S);for(let C=0;C<N.length;C+=1)N[C].m(S,null);W=!0,se||(ue=[X(b,"change",n[5]),X(b,"change",n[6]),X(D,"click",n[7])],se=!0)},p($,[T]){if(T&2&&(b.checked=$[1]),(!W||T&2&&y!==(y="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+($[1]===!0?"":"hidden")))&&l(d,"class",y),T&29){F=$[2],Te();for(let C=0;C<N.length;C+=1)N[C].r();N=Ue(N,T,de,1,$,F,ce,S,je,Me,null,De);for(let C=0;C<N.length;C+=1)N[C].a();Be()}},i($){if(!W){for(let T=0;T<F.length;T+=1)G(N[T]);W=!0}},o($){for(let T=0;T<N.length;T+=1)J(N[T]);W=!1},d($){$&&o(e),$&&o(u),$&&o(p),$&&o(Y),$&&o(z);for(let T=0;T<N.length;T+=1)N[T].d();se=!1,ie(ue)}}}function ut(n,e,t){let r;ge(n,q,d=>t(2,r=d));let s=null,a=!1;const c=(d,k)=>{d.dataTransfer.dropEffect="move";const y=parseInt(d.dataTransfer.getData("text/plain"));q.update(V=>(y<k?(V.splice(k+1,0,V[y]),V.splice(y,1)):(V.splice(k,0,V[y]),V.splice(y+1,1)),V)),t(0,s=null)},i=(d,k,y)=>{document.getElementById("edit-option-"+y).blur(),d.dataTransfer.effectAllowed="move",d.dataTransfer.dropEffect="move";const V=k;d.dataTransfer.setData("text/plain",V)};q.subscribe(d=>{for(let k=0;k<d.length;k++)if(!d[k].selected)return t(1,a=!1),d;return d.length>0?t(1,a=!0):t(1,a=!1),d});function u(){a=this.checked,t(1,a)}return[s,a,r,c,i,u,()=>{a?Ge():Je()},()=>{qe()},(d,k,y)=>i(y,d,k.id),(d,k)=>c(k,d),d=>t(0,s=d)]}class dt extends Q{constructor(e){super(),Z(this,e,ut,ct,K,{})}}class ft extends Q{constructor(e){super(),Z(this,e,null,null,K,{})}}const Se=Ne({text:"",selected:!1,id:0}),ht=()=>{let n=Le(q);n.length>0&&Se.update(()=>n[Math.floor(Math.random()*n.length)])};function pt(n){let e;return{c(){e=j("\xA0")},l(t){e=L(t,"\xA0")},m(t,r){O(t,e,r)},p:U,d(t){t&&o(e)}}}function vt(n){let e=n[0].text+"",t;return{c(){t=j(e)},l(r){t=L(r,e)},m(r,s){O(r,t,s)},p(r,s){s&1&&e!==(e=r[0].text+"")&&ae(t,e)},d(r){r&&o(t)}}}function _t(n){let e,t,r,s,a,c,i;function u(_,b){return _[0].text!==""?vt:pt}let p=u(n),v=p(n);return{c(){e=w("div"),t=w("div"),r=w("span"),s=j("Ergebnis der zuf\xE4lligen Auswahl:"),a=A(),c=w("div"),i=w("span"),v.c(),this.h()},l(_){e=x(_,"DIV",{class:!0});var b=m(e);t=x(b,"DIV",{class:!0});var f=m(t);r=x(f,"SPAN",{class:!0});var d=m(r);s=L(d,"Ergebnis der zuf\xE4lligen Auswahl:"),d.forEach(o),a=P(f),c=x(f,"DIV",{class:!0});var k=m(c);i=x(k,"SPAN",{class:!0});var y=m(i);v.l(y),y.forEach(o),k.forEach(o),f.forEach(o),b.forEach(o),this.h()},h(){l(r,"class","m-2"),l(i,"class","flex-1 text-center overflow-auto"),l(c,"class","flex mt-1 items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1"),l(t,"class","m-auto w-full"),l(e,"class","flex h-full")},m(_,b){O(_,e,b),h(e,t),h(t,r),h(r,s),h(t,a),h(t,c),h(c,i),v.m(i,null)},p(_,[b]){p===(p=u(_))&&v?v.p(_,b):(v.d(1),v=p(_),v&&(v.c(),v.m(i,null)))},i:U,o:U,d(_){_&&o(e),v.d()}}}function gt(n,e,t){let r;return ge(n,Se,s=>t(0,r=s)),[r]}class mt extends Q{constructor(e){super(),Z(this,e,gt,_t,K,{})}}function bt(n){let e,t;return{c(){e=w("span"),t=j("Einstellungen")},l(r){e=x(r,"SPAN",{});var s=m(e);t=L(s,"Einstellungen"),s.forEach(o)},m(r,s){O(r,e,s),h(e,t)},p:U,i:U,o:U,d(r){r&&o(e)}}}class kt extends Q{constructor(e){super(),Z(this,e,null,bt,K,{})}}function wt(n){let e,t;return{c(){e=w("span"),t=j("Error: specified content not found")},l(r){e=x(r,"SPAN",{});var s=m(e);t=L(s,"Error: specified content not found"),s.forEach(o)},m(r,s){O(r,e,s),h(e,t)},p:U,i:U,o:U,d(r){r&&o(e)}}}function xt(n){let e,t;return e=new ft({}),{c(){ee(e.$$.fragment)},l(r){te(e.$$.fragment,r)},m(r,s){re(e,r,s),t=!0},p:U,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){J(e.$$.fragment,r),t=!1},d(r){le(e,r)}}}function Et(n){let e,t;return e=new mt({}),{c(){ee(e.$$.fragment)},l(r){te(e.$$.fragment,r)},m(r,s){re(e,r,s),t=!0},p:U,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){J(e.$$.fragment,r),t=!1},d(r){le(e,r)}}}function yt(n){let e,t;return e=new kt({}),{c(){ee(e.$$.fragment)},l(r){te(e.$$.fragment,r)},m(r,s){re(e,r,s),t=!0},p:U,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){J(e.$$.fragment,r),t=!1},d(r){le(e,r)}}}function zt(n){let e,t,r=Math.abs(n[3]-n[2])+"",s,a,c,i,u,p=Math.abs(n[1]-n[0])+"",v,_,b,f,d,k,y,V,I,B,E=Math.atan((n[3]-n[2])/(n[1]-n[0]))/Math.PI*180+"",D;return{c(){e=w("span"),t=j("delta y: "),s=j(r),a=w("br"),c=A(),i=w("span"),u=j("delta x: "),v=j(p),_=w("br"),b=A(),f=w("span"),d=j("40% width: "),k=j(n[4]),y=w("br"),V=A(),I=w("span"),B=j("angle: "),D=j(E)},l(g){e=x(g,"SPAN",{});var M=m(e);t=L(M,"delta y: "),s=L(M,r),M.forEach(o),a=x(g,"BR",{}),c=P(g),i=x(g,"SPAN",{});var Y=m(i);u=L(Y,"delta x: "),v=L(Y,p),Y.forEach(o),_=x(g,"BR",{}),b=P(g),f=x(g,"SPAN",{});var z=m(f);d=L(z,"40% width: "),k=L(z,n[4]),z.forEach(o),y=x(g,"BR",{}),V=P(g),I=x(g,"SPAN",{});var S=m(I);B=L(S,"angle: "),D=L(S,E),S.forEach(o)},m(g,M){O(g,e,M),h(e,t),h(e,s),O(g,a,M),O(g,c,M),O(g,i,M),h(i,u),h(i,v),O(g,_,M),O(g,b,M),O(g,f,M),h(f,d),h(f,k),O(g,y,M),O(g,V,M),O(g,I,M),h(I,B),h(I,D)},p(g,M){M&12&&r!==(r=Math.abs(g[3]-g[2])+"")&&ae(s,r),M&3&&p!==(p=Math.abs(g[1]-g[0])+"")&&ae(v,p),M&16&&ae(k,g[4]),M&15&&E!==(E=Math.atan((g[3]-g[2])/(g[1]-g[0]))/Math.PI*180+"")&&ae(D,E)},i:U,o:U,d(g){g&&o(e),g&&o(a),g&&o(c),g&&o(i),g&&o(_),g&&o(b),g&&o(f),g&&o(y),g&&o(V),g&&o(I)}}}function It(n){let e,t,r,s,a,c,i,u,p,v,_,b,f,d,k,y;const V=[zt,yt,Et,xt,wt],I=[];function B(E,D){return E[5]===null?0:E[5]==="settings"?1:E[5]==="result-selection"?2:E[5]==="result-order"?3:4}return a=B(n),c=I[a]=V[a](n),{c(){e=w("div"),t=w("div"),r=w("div"),s=w("div"),c.c(),i=A(),u=w("button"),p=w("div"),v=R("svg"),_=R("path"),b=A(),f=w("div"),this.h()},l(E){e=x(E,"DIV",{id:!0,class:!0});var D=m(e);t=x(D,"DIV",{id:!0,class:!0});var g=m(t);r=x(g,"DIV",{class:!0});var M=m(r);s=x(M,"DIV",{class:!0});var Y=m(s);c.l(Y),Y.forEach(o),i=P(M),u=x(M,"BUTTON",{id:!0,type:!0,class:!0});var z=m(u);p=x(z,"DIV",{class:!0});var S=m(p);v=H(S,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var N=m(v);_=H(N,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),m(_).forEach(o),N.forEach(o),S.forEach(o),z.forEach(o),M.forEach(o),g.forEach(o),D.forEach(o),b=P(E),f=x(E,"DIV",{id:!0,class:!0}),m(f).forEach(o),this.h()},h(){l(s,"class","flex-grow h-full"),l(_,"stroke-linecap","round"),l(_,"stroke-linejoin","round"),l(_,"d","M11 19l-7-7 7-7m8 14l-7-7 7-7"),l(v,"xmlns","http://www.w3.org/2000/svg"),l(v,"class","h-6 w-6"),l(v,"fill","none"),l(v,"viewBox","0 0 24 24"),l(v,"stroke","currentColor"),l(v,"stroke-width","2"),l(p,"class","flex justify-center"),l(u,"id","close-overlay-btn"),l(u,"type","button"),l(u,"class","flex-grow-0 w-full h-16 justify-center text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-sm p-2.5"),l(r,"class","w-full h-full flex flex-col"),l(t,"id","overlay-container"),l(t,"class","w-full h-[calc(100%_-_4.5rem_-_theme('margin.2'))] container mx-auto max-w-xl mt-[4.5rem] mb-2 bg-white dark:bg-zinc-900 border rounded border-zinc-200 dark:border-zinc-700 p-2 pointer-events-auto"),l(e,"id","overlay"),l(e,"class","transition-all ease-in-out duration-[500ms] absolute h-full w-full z-20 top-0 -left-full pointer-events-none"),l(f,"id","overlay-bg"),l(f,"class","absolute top-0 left-0 h-full w-full z-10 transition-all ease-in-out duration-500 bg-black opacity-0 hidden")},m(E,D){O(E,e,D),h(e,t),h(t,r),h(r,s),I[a].m(s,null),h(r,i),h(r,u),h(u,p),h(p,v),h(v,_),O(E,b,D),O(E,f,D),d=!0,k||(y=[X(u,"click",n[6]),X(f,"click",n[7])],k=!0)},p(E,[D]){let g=a;a=B(E),a===g?I[a].p(E,D):(Te(),J(I[g],1,1,()=>{I[g]=null}),Be(),c=I[a],c?c.p(E,D):(c=I[a]=V[a](E),c.c()),G(c,1),c.m(s,null))},i(E){d||(G(c),d=!0)},o(E){J(c),d=!1},d(E){E&&o(e),I[a].d(),E&&o(b),E&&o(f),k=!1,ie(y)}}}function $t(n,e,t){let r;ge(n,He,_=>t(5,r=_));let s=0,a=0,c=0,i=0,u=null;return Re(()=>{const _=document.getElementById("main");function b(){let f=Math.atan((i-c)/(a-s))/Math.PI*180;Math.abs(f)<25&&(Math.abs(a-s)>window.screen.width*.4||Math.abs(a-s)>240)&&(a<s&&ve(),a>s&&_e())}_.addEventListener("touchstart",f=>{t(0,s=f.changedTouches[0].screenX),t(2,c=f.changedTouches[0].screenY)}),_.addEventListener("touchend",f=>{t(1,a=f.changedTouches[0].screenX),t(3,i=f.changedTouches[0].screenY),b()}),t(4,u=window.screen.width*.4)}),[s,a,c,i,u,r,()=>{ne(),ve()},()=>{ne(),ve()}]}class Vt extends Q{constructor(e){super(),Z(this,e,$t,It,K,{})}}function Dt(n){let e,t,r,s,a,c,i,u,p,v,_,b,f,d,k,y,V,I,B,E,D,g,M,Y;return e=new Vt({}),c=new Ke({}),p=new dt({}),{c(){ee(e.$$.fragment),t=A(),r=w("div"),s=w("div"),a=w("div"),ee(c.$$.fragment),i=A(),u=w("div"),ee(p.$$.fragment),v=A(),_=w("div"),b=w("div"),f=w("div"),d=w("button"),k=j("R@\u014A\xF0\xD8m"),y=A(),V=w("button"),I=w("div"),B=R("svg"),E=R("path"),D=R("path"),this.h()},l(z){te(e.$$.fragment,z),t=P(z),r=x(z,"DIV",{class:!0});var S=m(r);s=x(S,"DIV",{class:!0});var N=m(s);a=x(N,"DIV",{class:!0});var ce=m(a);te(c.$$.fragment,ce),ce.forEach(o),i=P(N),u=x(N,"DIV",{class:!0});var W=m(u);te(p.$$.fragment,W),W.forEach(o),N.forEach(o),S.forEach(o),v=P(z),_=x(z,"DIV",{class:!0});var se=m(_);b=x(se,"DIV",{class:!0});var ue=m(b);f=x(ue,"DIV",{class:!0});var F=m(f);d=x(F,"BUTTON",{type:!0,class:!0});var de=m(d);k=L(de,"R@\u014A\xF0\xD8m"),de.forEach(o),y=P(F),V=x(F,"BUTTON",{type:!0,class:!0});var $=m(V);I=x($,"DIV",{class:!0});var T=m(I);B=H(T,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var C=m(B);E=H(C,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),m(E).forEach(o),D=H(C,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),m(D).forEach(o),C.forEach(o),T.forEach(o),$.forEach(o),F.forEach(o),ue.forEach(o),se.forEach(o),this.h()},h(){l(a,"class","ml-2 mr-2 mb-1 h-11"),l(u,"class","flex flex-col h-[calc(100%_-_h-11_-_m-2_-_h-16)] sm-height:h-[calc(100%_-_theme('height.11'))] w-full items-stretch p-2"),l(s,"class","pt-5 m-2 h-full"),l(r,"class","container h-[calc(100%_-_h-14_-_m-2)] mx-auto max-w-xl mt-14"),l(d,"type","button"),l(d,"class","flex-grow-0 w-full h-16 bg-violet-600 dark:bg-violet-700 text-white dark:text-zinc-100 hover:bg-violet-600 dark:hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-3xl p-2.5"),l(E,"stroke-linecap","round"),l(E,"stroke-linejoin","round"),l(E,"d","M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"),l(D,"stroke-linecap","round"),l(D,"stroke-linejoin","round"),l(D,"d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"),l(B,"xmlns","http://www.w3.org/2000/svg"),l(B,"class","h-6 w-6"),l(B,"fill","none"),l(B,"viewBox","0 0 24 24"),l(B,"stroke","currentColor"),l(B,"stroke-width","2"),l(I,"class","grid grid-col-1"),l(V,"type","button"),l(V,"class","flex-none ml-2 w-16 h-16 text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-sm p-2.5 pl-5"),l(f,"class","flex flex-row"),l(b,"class","container mx-auto max-w-xl pl-2 pr-2"),l(_,"class","absolute bottom-0 sm-height:bottom-[-4.5rem] left-0 w-full h-16 mb-2")},m(z,S){re(e,z,S),O(z,t,S),O(z,r,S),h(r,s),h(s,a),re(c,a,null),h(s,i),h(s,u),re(p,u,null),O(z,v,S),O(z,_,S),h(_,b),h(b,f),h(f,d),h(d,k),h(f,y),h(f,V),h(V,I),h(I,B),h(B,E),h(B,D),g=!0,M||(Y=[X(d,"click",n[0]),X(V,"click",n[1])],M=!0)},p:U,i(z){g||(G(e.$$.fragment,z),G(c.$$.fragment,z),G(p.$$.fragment,z),g=!0)},o(z){J(e.$$.fragment,z),J(c.$$.fragment,z),J(p.$$.fragment,z),g=!1},d(z){le(e,z),z&&o(t),z&&o(r),le(c),le(p),z&&o(v),z&&o(_),M=!1,ie(Y)}}}const St=!0;let Mt="selection";function Ot(n){return[()=>{ht(),Ie("result-"+Mt),ne(),_e()},()=>{Ie("settings"),ne(),_e()}]}class At extends Q{constructor(e){super(),Z(this,e,Ot,Dt,K,{})}}export{At as default,St as prerender};
