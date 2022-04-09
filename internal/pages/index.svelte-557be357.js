import{S as Y,i as Z,s as K,e as k,k as A,F as U,c as w,a as v,m as M,G as j,d as a,b as l,g as O,H as p,N as fe,O as L,P as Oe,E as P,Q as ae,t as X,h as q,j as Te,R as Me,w as ee,x as te,T as ye,y as re,U as Ce,V as Ue,q as J,o as Q,B as le,n as Be,W as je,p as Ne,X as ge,Y as Le,Z as Pe,v as Re}from"../chunks/index-a8ef7c51.js";import{w as Se}from"../chunks/index-73fd5bd0.js";import{r as ne,c as pe,s as ve,o as He,a as ze}from"../chunks/ui-utils-2d85d91e.js";const H=Se([]);H.update(s=>{let e=localStorage.getItem("options");return e!==null&&e!=="null"?(console.log("recovered entries from localStorage"),JSON.parse(e)):s}),H.subscribe(s=>localStorage.setItem("options",JSON.stringify(s)));const Xe=s=>{H.update(e=>[...e,{text:s,selected:!1,id:Date.now()}])},qe=s=>{H.update(e=>e.filter(t=>t.id!==s))},Fe=()=>{H.update(s=>s.filter(e=>!e.selected))},Ge=s=>{H.update(e=>{for(let t=0;t<e.length;t++)if(e[t].id===s){e[t].selected=!e[t].selected;break}return e})},Je=()=>{H.update(s=>{for(let e=0;e<s.length;e++)s[e].selected=!0;return s})},Qe=()=>{H.update(s=>{for(let e=0;e<s.length;e++)s[e].selected=!1;return s})},We=(s,e)=>{H.update(t=>{for(let r=0;r<t.length;r++)if(t[r].id===s){t[r].text=e;break}return t})};function Ye(s){let e,t,r,n,o,c,i,u,h,f,_,m,g,d;return{c(){e=k("form"),t=k("div"),r=k("input"),n=A(),o=k("div"),c=k("button"),i=U("svg"),u=U("path"),h=A(),f=k("button"),_=U("svg"),m=U("path"),this.h()},l(b){e=w(b,"FORM",{class:!0});var $=v(e);t=w($,"DIV",{class:!0});var I=v(t);r=w(I,"INPUT",{class:!0,name:!0,id:!0,type:!0,placeholder:!0}),n=M(I),o=w(I,"DIV",{class:!0});var V=v(o);c=w(V,"BUTTON",{id:!0,type:!0,class:!0});var N=v(c);i=j(N,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var E=v(i);u=j(E,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(u).forEach(a),E.forEach(a),N.forEach(a),h=M(V),f=w(V,"BUTTON",{id:!0,type:!0,class:!0});var D=v(f);_=j(D,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var B=v(_);m=j(B,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(m).forEach(a),B.forEach(a),D.forEach(a),V.forEach(a),I.forEach(a),$.forEach(a),this.h()},h(){l(r,"class","shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-900 dark:border-zinc-400 focus:dark:bg-zinc-800 focus:border-violet-500 dark:focus:border-violet-600"),l(r,"name","option_entry"),l(r,"id","option_entry"),l(r,"type","text"),l(r,"placeholder","Trage hier deine Optionen ein..."),l(u,"fill-rule","evenodd"),l(u,"d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"),l(u,"clip-rule","evenodd"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class","h-5 w-5"),l(i,"viewBox","0 0 20 20"),l(i,"fill","currentColor"),l(c,"id","add-option-toggle"),l(c,"type","submit"),l(c,"class","mr-1 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-200 dark:focus:ring-green-700 rounded-lg text-sm p-2.5"),l(m,"stroke-linecap","round"),l(m,"stroke-linejoin","round"),l(m,"d","M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"),l(_,"xmlns","http://www.w3.org/2000/svg"),l(_,"class","h-6 w-6"),l(_,"fill","none"),l(_,"viewBox","0 0 24 24"),l(_,"stroke","currentColor"),l(_,"stroke-width","2"),l(f,"id","delete-entry-content-toggle"),l(f,"type","button"),l(f,"class","text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-2.5"),l(o,"class","relative flex items-center justify-between mx-1"),l(t,"class","w-full max-w-2xl flex"),l(e,"class","grid place-items-center")},m(b,$){O(b,e,$),p(e,t),p(t,r),fe(r,s[0]),p(t,n),p(t,o),p(o,c),p(c,i),p(i,u),p(o,h),p(o,f),p(f,_),p(_,m),g||(d=[L(r,"input",s[2]),L(f,"click",s[3]),L(e,"submit",Oe(s[1]))],g=!0)},p(b,[$]){$&1&&r.value!==b[0]&&fe(r,b[0])},i:P,o:P,d(b){b&&a(e),g=!1,ae(d)}}}function Ze(s,e,t){let r="";const n=()=>{r!==""&&(Xe(r),console.log("stored option:",r),t(0,r="")),setTimeout(ne)};function o(){r=this.value,t(0,r)}return[r,n,o,()=>{t(0,r=""),setTimeout(ne)}]}class Ke extends Y{constructor(e){super(),Z(this,e,Ze,Ye,K,{})}}function $e(s){let e,t,r,n,o,c,i,u,h,f,_,m;return{c(){e=k("div"),t=k("div"),r=k("input"),c=A(),i=U("svg"),u=U("path"),this.h()},l(g){e=w(g,"DIV",{class:!0});var d=v(e);t=w(d,"DIV",{class:!0});var b=v(t);r=w(b,"INPUT",{id:!0,class:!0,name:!0,type:!0}),c=M(b),i=j(b,"svg",{id:!0,xmlns:!0,class:!0,viewBox:!0,fill:!0});var $=v(i);u=j($,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(u).forEach(a),$.forEach(a),b.forEach(a),d.forEach(a),this.h()},h(){l(r,"id",n="select-"+s[0].id),l(r,"class","form-tick appearance-none bg-white dark:bg-zinc-800 h-6 w-6 border border-gray-300 dark:border-gray-400 rounded-md checked:bg-violet-500 dark:checked:bg-violet-600 focus:border-violet-500 dark:focus:border-violet-600 checked:border-transparent dark:checked:border-transparent focus:outline-none"),l(r,"name","selected"),l(r,"type","checkbox"),r.checked=o=s[0].selected,l(u,"fill-rule","evenodd"),l(u,"d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"),l(u,"clip-rule","evenodd"),l(i,"id",h="tick-"+s[0].id),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class",f="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+(s[0].selected===!0?"":"hidden")),l(i,"viewBox","0 0 20 20"),l(i,"fill","currentColor"),l(t,"class","grid grid-cols-1"),l(e,"class","relative")},m(g,d){O(g,e,d),p(e,t),p(t,r),p(t,c),p(t,i),p(i,u),_||(m=L(r,"change",s[5]),_=!0)},p(g,d){d&1&&n!==(n="select-"+g[0].id)&&l(r,"id",n),d&1&&o!==(o=g[0].selected)&&(r.checked=o),d&1&&h!==(h="tick-"+g[0].id)&&l(i,"id",h),d&1&&f!==(f="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+(g[0].selected===!0?"":"hidden"))&&l(i,"class",f)},d(g){g&&a(e),_=!1,m()}}}function et(s){let e,t;function r(c,i){return c[0].text!==""?lt:rt}let n=r(s),o=n(s);return{c(){e=k("span"),o.c(),this.h()},l(c){e=w(c,"SPAN",{class:!0});var i=v(e);o.l(i),i.forEach(a),this.h()},h(){l(e,"class",t="flex-1 "+(s[1]?"ml-3":"")+" "+(s[3]?"text-center":"")+" overflow-auto")},m(c,i){O(c,e,i),o.m(e,null)},p(c,i){n===(n=r(c))&&o?o.p(c,i):(o.d(1),o=n(c),o&&(o.c(),o.m(e,null))),i&10&&t!==(t="flex-1 "+(c[1]?"ml-3":"")+" "+(c[3]?"text-center":"")+" overflow-auto")&&l(e,"class",t)},d(c){c&&a(e),o.d()}}}function tt(s){let e,t,r,n;return{c(){e=k("input"),this.h()},l(o){e=w(o,"INPUT",{class:!0,name:!0,id:!0,type:!0}),this.h()},h(){l(e,"class","focus:shadow ml-3 appearance-none focus:border focus:rounded w-full py-2 pl-2 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-900 dark:border-zinc-400 focus:dark:bg-zinc-800 focus:border-violet-500 dark:focus:border-violet-600"),l(e,"name","option_entry"),l(e,"id",t="edit-option-"+s[0].id),l(e,"type","text")},m(o,c){O(o,e,c),fe(e,s[0].text),r||(n=[L(e,"input",s[6]),L(e,"change",s[7])],r=!0)},p(o,c){c&1&&t!==(t="edit-option-"+o[0].id)&&l(e,"id",t),c&1&&e.value!==o[0].text&&fe(e,o[0].text)},d(o){o&&a(e),r=!1,ae(n)}}}function rt(s){let e;return{c(){e=X("\xA0")},l(t){e=q(t,"\xA0")},m(t,r){O(t,e,r)},p:P,d(t){t&&a(e)}}}function lt(s){let e=s[0].text+"",t;return{c(){t=X(e)},l(r){t=q(r,e)},m(r,n){O(r,t,n)},p(r,n){n&1&&e!==(e=r[0].text+"")&&Te(t,e)},d(r){r&&a(t)}}}function Ie(s){let e,t,r,n,o,c;return{c(){e=k("button"),t=U("svg"),r=U("path"),this.h()},l(i){e=w(i,"BUTTON",{id:!0,type:!0,class:!0});var u=v(e);t=j(u,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var h=v(t);r=j(h,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(r).forEach(a),h.forEach(a),u.forEach(a),this.h()},h(){l(r,"fill-rule","evenodd"),l(r,"d","M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"),l(r,"clip-rule","evenodd"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"class","h-5 w-5"),l(t,"viewBox","0 0 20 20"),l(t,"fill","currentColor"),l(e,"id",n="delete-option-"+s[0].id),l(e,"type","button"),l(e,"class","text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-2")},m(i,u){O(i,e,u),p(e,t),p(t,r),o||(c=L(e,"click",s[8]),o=!0)},p(i,u){u&1&&n!==(n="delete-option-"+i[0].id)&&l(e,"id",n)},d(i){i&&a(e),o=!1,c()}}}function nt(s){let e,t,r,n=s[1]&&$e(s);function o(h,f){return h[2]?tt:et}let c=o(s),i=c(s),u=s[1]&&Ie(s);return{c(){e=k("li"),n&&n.c(),t=A(),i.c(),r=A(),u&&u.c(),this.h()},l(h){e=w(h,"LI",{class:!0});var f=v(e);n&&n.l(f),t=M(f),i.l(f),r=M(f),u&&u.l(f),f.forEach(a),this.h()},h(){l(e,"class","flex items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight bg-white dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1")},m(h,f){O(h,e,f),n&&n.m(e,null),p(e,t),i.m(e,null),p(e,r),u&&u.m(e,null)},p(h,[f]){h[1]?n?n.p(h,f):(n=$e(h),n.c(),n.m(e,t)):n&&(n.d(1),n=null),c===(c=o(h))&&i?i.p(h,f):(i.d(1),i=c(h),i&&(i.c(),i.m(e,r))),h[1]?u?u.p(h,f):(u=Ie(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:P,o:P,d(h){h&&a(e),n&&n.d(),i.d(),u&&u.d()}}}function st(s,e,t){let{option:r}=e;const n=null;let{showActions:o=!0}=e,{editEnabled:c=!0}=e,{center:i=!1}=e;const u=()=>Ge(r.id);function h(){r.text=this.value,t(0,r)}const f=()=>{We(r.identity,r.text)},_=()=>{qe(r.id),setTimeout(ne)};return s.$$set=m=>{"option"in m&&t(0,r=m.option),"showActions"in m&&t(1,o=m.showActions),"editEnabled"in m&&t(2,c=m.editEnabled),"center"in m&&t(3,i=m.center)},[r,o,c,i,n,u,h,f,_]}class ot extends Y{constructor(e){super(),Z(this,e,st,nt,K,{option:0,optionIndex:4,showActions:1,editEnabled:2,center:3})}get optionIndex(){return this.$$.ctx[4]}}function at(s){const e=s-1;return e*e*e+1}function it(s,{from:e,to:t},r={}){const n=getComputedStyle(s),o=n.transform==="none"?"":n.transform,[c,i]=n.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*c/t.width-(t.left+c),h=e.top+e.height*i/t.height-(t.top+i),{delay:f=0,duration:_=g=>Math.sqrt(g)*120,easing:m=at}=r;return{delay:f,duration:Me(_)?_(Math.sqrt(u*u+h*h)):_,easing:m,css:(g,d)=>{const b=d*u,$=d*h,I=g+d*e.width/t.width,V=g+d*e.height/t.height;return`transform: ${o} translate(${b}px, ${$}px) scale(${I}, ${V});`}}}function Ve(s,e,t){const r=s.slice();return r[11]=e[t],r[13]=t,r}function De(s,e){let t,r,n,o,c=P,i,u,h;r=new ot({props:{option:e[11],optionIndex:e[13]}});function f(...g){return e[8](e[13],...g)}function _(...g){return e[9](e[13],...g)}function m(){return e[10](e[13])}return{key:s,first:null,c(){t=k("div"),ee(r.$$.fragment),n=A(),this.h()},l(g){t=w(g,"DIV",{draggable:!0,ondragover:!0});var d=v(t);te(r.$$.fragment,d),n=M(d),d.forEach(a),this.h()},h(){l(t,"draggable",!0),l(t,"ondragover",ut),ye(t,"is-hovering",e[0]===e[13]),this.first=t},m(g,d){O(g,t,d),re(r,t,null),p(t,n),i=!0,u||(h=[L(t,"dragstart",f),L(t,"drop",Oe(_)),L(t,"dragenter",m)],u=!0)},p(g,d){e=g;const b={};d&4&&(b.option=e[11]),d&4&&(b.optionIndex=e[13]),r.$set(b),d&5&&ye(t,"is-hovering",e[0]===e[13])},r(){o=t.getBoundingClientRect()},f(){Ce(t),c()},a(){c(),c=Ue(t,o,it,{duration:300})},i(g){i||(J(r.$$.fragment,g),i=!0)},o(g){Q(r.$$.fragment,g),i=!1},d(g){g&&a(t),le(r),u=!1,ae(h)}}}function ct(s){let e,t,r,n,o,c,i,u,h,f,_,m,g,d,b,$,I,V,N,E,D,B,R,F,y,C,T=[],ie=new Map,W,se,ce,G=s[2];const ue=x=>x[11].id;for(let x=0;x<G.length;x+=1){let z=Ve(s,G,x),S=ue(z);ie.set(S,T[x]=De(S,z))}return{c(){e=k("div"),t=k("div"),r=A(),n=k("span"),o=X("Optionenliste"),c=A(),i=k("div"),u=A(),h=k("div"),f=k("div"),_=k("div"),m=k("input"),g=A(),d=U("svg"),b=U("path"),I=A(),V=k("label"),N=X("alle ausw\xE4hlen"),E=A(),D=k("button"),B=U("svg"),R=U("path"),F=A(),y=k("div"),C=k("ul");for(let x=0;x<T.length;x+=1)T[x].c();this.h()},l(x){e=w(x,"DIV",{class:!0});var z=v(e);t=w(z,"DIV",{class:!0}),v(t).forEach(a),r=M(z),n=w(z,"SPAN",{class:!0});var S=v(n);o=q(S,"Optionenliste"),S.forEach(a),c=M(z),i=w(z,"DIV",{class:!0}),v(i).forEach(a),z.forEach(a),u=M(x),h=w(x,"DIV",{class:!0});var oe=v(h);f=w(oe,"DIV",{class:!0});var _e=v(f);_=w(_e,"DIV",{class:!0});var de=v(_);m=w(de,"INPUT",{id:!0,class:!0,name:!0,type:!0}),g=M(de),d=j(de,"svg",{id:!0,xmlns:!0,class:!0,viewBox:!0,fill:!0});var me=v(d);b=j(me,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(b).forEach(a),me.forEach(a),de.forEach(a),_e.forEach(a),I=M(oe),V=w(oe,"LABEL",{for:!0,class:!0});var be=v(V);N=q(be,"alle ausw\xE4hlen"),be.forEach(a),E=M(oe),D=w(oe,"BUTTON",{id:!0,type:!0,class:!0});var ke=v(D);B=j(ke,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var we=v(B);R=j(we,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(R).forEach(a),we.forEach(a),ke.forEach(a),oe.forEach(a),F=M(x),y=w(x,"DIV",{class:!0});var xe=v(y);C=w(xe,"UL",{class:!0});var Ee=v(C);for(let he=0;he<T.length;he+=1)T[he].l(Ee);Ee.forEach(a),xe.forEach(a),this.h()},h(){l(t,"class","flex-grow border-t border-zinc-700 dark:border-zinc-400"),l(n,"class","flex-shrink mx-4 text-zinc-700 dark:text-zinc-400"),l(i,"class","flex-grow border-t border-zinc-700 dark:border-zinc-400"),l(e,"class","relative flex py-1 items-center"),l(m,"id","select-all"),l(m,"class","form-tick appearance-none bg-white dark:bg-zinc-800 h-6 w-6 border border-gray-300 dark:border-gray-400 rounded-md checked:bg-violet-500 dark:checked:bg-violet-600 focus:border-violet-500 dark:focus:border-violet-600 checked:border-transparent dark:checked:border-transparent focus:outline-none"),l(m,"name","selected"),l(m,"type","checkbox"),l(b,"fill-rule","evenodd"),l(b,"d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"),l(b,"clip-rule","evenodd"),l(d,"id","tick-all"),l(d,"xmlns","http://www.w3.org/2000/svg"),l(d,"class",$="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+(s[1]===!0?"":"hidden")),l(d,"viewBox","0 0 20 20"),l(d,"fill","currentColor"),l(_,"class","grid grid-cols-1"),l(f,"class","relative"),l(V,"for","select-all"),l(V,"class","w-full ml-5"),l(R,"fill-rule","evenodd"),l(R,"d","M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"),l(R,"clip-rule","evenodd"),l(B,"xmlns","http://www.w3.org/2000/svg"),l(B,"class","h-5 w-5"),l(B,"viewBox","0 0 20 20"),l(B,"fill","currentColor"),l(D,"id","delete-option-all"),l(D,"type","button"),l(D,"class","text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-1 mr-1"),l(h,"class","flex items-center shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)] appearance-none rounded w-full pb-2 px-3 border-b leading-tight bg-white dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1"),l(C,"class","w-full"),l(y,"class","overflow-auto")},m(x,z){O(x,e,z),p(e,t),p(e,r),p(e,n),p(n,o),p(e,c),p(e,i),O(x,u,z),O(x,h,z),p(h,f),p(f,_),p(_,m),m.checked=s[1],p(_,g),p(_,d),p(d,b),p(h,I),p(h,V),p(V,N),p(h,E),p(h,D),p(D,B),p(B,R),O(x,F,z),O(x,y,z),p(y,C);for(let S=0;S<T.length;S+=1)T[S].m(C,null);W=!0,se||(ce=[L(m,"change",s[5]),L(m,"change",s[6]),L(D,"click",s[7])],se=!0)},p(x,[z]){if(z&2&&(m.checked=x[1]),(!W||z&2&&$!==($="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none "+(x[1]===!0?"":"hidden")))&&l(d,"class",$),z&29){G=x[2],Be();for(let S=0;S<T.length;S+=1)T[S].r();T=je(T,z,ue,1,x,G,ie,C,Le,De,null,Ve);for(let S=0;S<T.length;S+=1)T[S].a();Ne()}},i(x){if(!W){for(let z=0;z<G.length;z+=1)J(T[z]);W=!0}},o(x){for(let z=0;z<T.length;z+=1)Q(T[z]);W=!1},d(x){x&&a(e),x&&a(u),x&&a(h),x&&a(F),x&&a(y);for(let z=0;z<T.length;z+=1)T[z].d();se=!1,ae(ce)}}}const ut=()=>!1;function dt(s,e,t){let r;ge(s,H,d=>t(2,r=d));let n=null,o=!1;const c=(d,b)=>{d.dataTransfer.dropEffect="move";const $=parseInt(d.dataTransfer.getData("text/plain"));H.update(I=>($<b?(I.splice(b+1,0,I[$]),I.splice($,1)):(I.splice(b,0,I[$]),I.splice($+1,1)),I)),t(0,n=null)},i=(d,b)=>{d.dataTransfer.effectAllowed="move",d.dataTransfer.dropEffect="move";const $=b;d.dataTransfer.setData("text/plain",$)};H.subscribe(d=>{for(let b=0;b<d.length;b++)if(!d[b].selected)return t(1,o=!1),d;return d.length>0?t(1,o=!0):t(1,o=!1),d});function u(){o=this.checked,t(1,o)}return[n,o,r,c,i,u,()=>{o?Je():Qe()},()=>{Fe()},(d,b)=>i(b,d),(d,b)=>c(b,d),d=>t(0,n=d)]}class ft extends Y{constructor(e){super(),Z(this,e,dt,ct,K,{})}}class ht extends Y{constructor(e){super(),Z(this,e,null,null,K,{})}}const Ae=Se({text:"",selected:!1,id:0}),pt=()=>{let s=Pe(H);s.length>0&&Ae.update(()=>s[Math.floor(Math.random()*s.length)])};function vt(s){let e;return{c(){e=X("\xA0")},l(t){e=q(t,"\xA0")},m(t,r){O(t,e,r)},p:P,d(t){t&&a(e)}}}function gt(s){let e=s[0].text+"",t;return{c(){t=X(e)},l(r){t=q(r,e)},m(r,n){O(r,t,n)},p(r,n){n&1&&e!==(e=r[0].text+"")&&Te(t,e)},d(r){r&&a(t)}}}function _t(s){let e,t,r,n,o,c,i;function u(_,m){return _[0].text!==""?gt:vt}let h=u(s),f=h(s);return{c(){e=k("div"),t=k("div"),r=k("span"),n=X("Ergebnis der zuf\xE4lligen Auswahl:"),o=A(),c=k("div"),i=k("span"),f.c(),this.h()},l(_){e=w(_,"DIV",{class:!0});var m=v(e);t=w(m,"DIV",{class:!0});var g=v(t);r=w(g,"SPAN",{class:!0});var d=v(r);n=q(d,"Ergebnis der zuf\xE4lligen Auswahl:"),d.forEach(a),o=M(g),c=w(g,"DIV",{class:!0});var b=v(c);i=w(b,"SPAN",{class:!0});var $=v(i);f.l($),$.forEach(a),b.forEach(a),g.forEach(a),m.forEach(a),this.h()},h(){l(r,"class","m-2"),l(i,"class","flex-1 text-center overflow-auto"),l(c,"class","flex mt-1 items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1"),l(t,"class","m-auto w-full"),l(e,"class","flex h-full")},m(_,m){O(_,e,m),p(e,t),p(t,r),p(r,n),p(t,o),p(t,c),p(c,i),f.m(i,null)},p(_,[m]){h===(h=u(_))&&f?f.p(_,m):(f.d(1),f=h(_),f&&(f.c(),f.m(i,null)))},i:P,o:P,d(_){_&&a(e),f.d()}}}function mt(s,e,t){let r;return ge(s,Ae,n=>t(0,r=n)),[r]}class bt extends Y{constructor(e){super(),Z(this,e,mt,_t,K,{})}}function kt(s){let e,t;return{c(){e=k("span"),t=X("Einstellungen")},l(r){e=w(r,"SPAN",{});var n=v(e);t=q(n,"Einstellungen"),n.forEach(a)},m(r,n){O(r,e,n),p(e,t)},p:P,i:P,o:P,d(r){r&&a(e)}}}class wt extends Y{constructor(e){super(),Z(this,e,null,kt,K,{})}}function xt(s){let e,t;return{c(){e=k("span"),t=X("Error: specified content not found")},l(r){e=w(r,"SPAN",{});var n=v(e);t=q(n,"Error: specified content not found"),n.forEach(a)},m(r,n){O(r,e,n),p(e,t)},i:P,o:P,d(r){r&&a(e)}}}function Et(s){let e,t;return e=new ht({}),{c(){ee(e.$$.fragment)},l(r){te(e.$$.fragment,r)},m(r,n){re(e,r,n),t=!0},i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){Q(e.$$.fragment,r),t=!1},d(r){le(e,r)}}}function yt(s){let e,t;return e=new bt({}),{c(){ee(e.$$.fragment)},l(r){te(e.$$.fragment,r)},m(r,n){re(e,r,n),t=!0},i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){Q(e.$$.fragment,r),t=!1},d(r){le(e,r)}}}function zt(s){let e,t;return e=new wt({}),{c(){ee(e.$$.fragment)},l(r){te(e.$$.fragment,r)},m(r,n){re(e,r,n),t=!0},i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){Q(e.$$.fragment,r),t=!1},d(r){le(e,r)}}}function $t(s){let e,t;return{c(){e=k("span"),t=X("Error: No content specified")},l(r){e=w(r,"SPAN",{});var n=v(e);t=q(n,"Error: No content specified"),n.forEach(a)},m(r,n){O(r,e,n),p(e,t)},i:P,o:P,d(r){r&&a(e)}}}function It(s){let e,t,r,n,o,c,i,u,h,f,_,m,g,d,b,$;const I=[$t,zt,yt,Et,xt],V=[];function N(E,D){return E[0]===null?0:E[0]==="settings"?1:E[0]==="result-selection"?2:E[0]==="result-order"?3:4}return o=N(s),c=V[o]=I[o](s),{c(){e=k("div"),t=k("div"),r=k("div"),n=k("div"),c.c(),i=A(),u=k("button"),h=k("div"),f=U("svg"),_=U("path"),m=A(),g=k("div"),this.h()},l(E){e=w(E,"DIV",{id:!0,class:!0});var D=v(e);t=w(D,"DIV",{id:!0,class:!0});var B=v(t);r=w(B,"DIV",{class:!0});var R=v(r);n=w(R,"DIV",{class:!0});var F=v(n);c.l(F),F.forEach(a),i=M(R),u=w(R,"BUTTON",{type:!0,class:!0});var y=v(u);h=w(y,"DIV",{class:!0});var C=v(h);f=j(C,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var T=v(f);_=j(T,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(_).forEach(a),T.forEach(a),C.forEach(a),y.forEach(a),R.forEach(a),B.forEach(a),D.forEach(a),m=M(E),g=w(E,"DIV",{id:!0,class:!0}),v(g).forEach(a),this.h()},h(){l(n,"class","flex-grow h-full"),l(_,"stroke-linecap","round"),l(_,"stroke-linejoin","round"),l(_,"d","M11 19l-7-7 7-7m8 14l-7-7 7-7"),l(f,"xmlns","http://www.w3.org/2000/svg"),l(f,"class","h-6 w-6"),l(f,"fill","none"),l(f,"viewBox","0 0 24 24"),l(f,"stroke","currentColor"),l(f,"stroke-width","2"),l(h,"class","flex justify-center"),l(u,"type","button"),l(u,"class","flex-grow-0 w-full h-16 justify-center text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-sm p-2.5"),l(r,"class","w-full h-full flex flex-col"),l(t,"id","overlay-container"),l(t,"class","w-full h-[calc(100%_-_4.5rem_-_theme('margin.2'))] container mx-auto max-w-xl mt-[4.5rem] mb-2 bg-white dark:bg-zinc-900 border rounded border-zinc-200 dark:border-zinc-700 p-2 pointer-events-auto"),l(e,"id","overlay"),l(e,"class","transition-all ease-in-out duration-[500ms] absolute h-full w-full z-20 top-0 -left-full pointer-events-none"),l(g,"id","overlay-bg"),l(g,"class","absolute top-0 left-0 h-full w-full z-10 transition-all ease-in-out duration-500 bg-black opacity-0 hidden")},m(E,D){O(E,e,D),p(e,t),p(t,r),p(r,n),V[o].m(n,null),p(r,i),p(r,u),p(u,h),p(h,f),p(f,_),O(E,m,D),O(E,g,D),d=!0,b||($=[L(u,"click",s[1]),L(g,"click",s[2])],b=!0)},p(E,[D]){let B=o;o=N(E),o!==B&&(Be(),Q(V[B],1,1,()=>{V[B]=null}),Ne(),c=V[o],c||(c=V[o]=I[o](E),c.c()),J(c,1),c.m(n,null))},i(E){d||(J(c),d=!0)},o(E){Q(c),d=!1},d(E){E&&a(e),V[o].d(),E&&a(m),E&&a(g),b=!1,ae($)}}}function Vt(s,e,t){let r;ge(s,He,u=>t(0,r=u));let n=0,o=0;return Re(()=>{const u=document.getElementById("main");function h(){o<n&&pe(),o>n&&ve()}u.addEventListener("touchstart",f=>{n=f.changedTouches[0].screenX}),u.addEventListener("touchend",f=>{o=f.changedTouches[0].screenX,h()})}),[r,()=>{ne(),pe()},()=>{ne(),pe()}]}class Dt extends Y{constructor(e){super(),Z(this,e,Vt,It,K,{})}}function Ot(s){let e,t,r,n,o,c,i,u,h,f,_,m,g,d,b,$,I,V,N,E,D,B,R,F;return e=new Dt({}),c=new Ke({}),h=new ft({}),{c(){ee(e.$$.fragment),t=A(),r=k("div"),n=k("div"),o=k("div"),ee(c.$$.fragment),i=A(),u=k("div"),ee(h.$$.fragment),f=A(),_=k("div"),m=k("div"),g=k("div"),d=k("button"),b=X("R@\u014A\xF0\xD8m"),$=A(),I=k("button"),V=k("div"),N=U("svg"),E=U("path"),D=U("path"),this.h()},l(y){te(e.$$.fragment,y),t=M(y),r=w(y,"DIV",{class:!0});var C=v(r);n=w(C,"DIV",{class:!0});var T=v(n);o=w(T,"DIV",{class:!0});var ie=v(o);te(c.$$.fragment,ie),ie.forEach(a),i=M(T),u=w(T,"DIV",{class:!0});var W=v(u);te(h.$$.fragment,W),W.forEach(a),T.forEach(a),C.forEach(a),f=M(y),_=w(y,"DIV",{class:!0});var se=v(_);m=w(se,"DIV",{class:!0});var ce=v(m);g=w(ce,"DIV",{class:!0});var G=v(g);d=w(G,"BUTTON",{type:!0,class:!0});var ue=v(d);b=q(ue,"R@\u014A\xF0\xD8m"),ue.forEach(a),$=M(G),I=w(G,"BUTTON",{type:!0,class:!0});var x=v(I);V=w(x,"DIV",{class:!0});var z=v(V);N=j(z,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var S=v(N);E=j(S,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(E).forEach(a),D=j(S,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(D).forEach(a),S.forEach(a),z.forEach(a),x.forEach(a),G.forEach(a),ce.forEach(a),se.forEach(a),this.h()},h(){l(o,"class","ml-2 mr-2 mb-1 h-11"),l(u,"class","flex flex-col h-[calc(100%_-_h-11_-_m-2_-_h-16)] sm-height:h-[calc(100%_-_theme('height.11'))] w-full items-stretch p-2"),l(n,"class","pt-5 m-2 h-full"),l(r,"class","container h-[calc(100%_-_h-14_-_m-2)] mx-auto max-w-xl mt-14"),l(d,"type","button"),l(d,"class","flex-grow-0 w-full h-16 bg-violet-600 dark:bg-violet-700 text-white dark:text-zinc-100 hover:bg-violet-600 dark:hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-3xl p-2.5"),l(E,"stroke-linecap","round"),l(E,"stroke-linejoin","round"),l(E,"d","M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"),l(D,"stroke-linecap","round"),l(D,"stroke-linejoin","round"),l(D,"d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"),l(N,"xmlns","http://www.w3.org/2000/svg"),l(N,"class","h-6 w-6"),l(N,"fill","none"),l(N,"viewBox","0 0 24 24"),l(N,"stroke","currentColor"),l(N,"stroke-width","2"),l(V,"class","grid grid-col-1"),l(I,"type","button"),l(I,"class","flex-none ml-2 w-16 h-16 text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-sm p-2.5 pl-5"),l(g,"class","flex flex-row"),l(m,"class","container mx-auto max-w-xl pl-2 pr-2"),l(_,"class","absolute bottom-0 sm-height:bottom-[-4.5rem] left-0 w-full h-16 mb-2")},m(y,C){re(e,y,C),O(y,t,C),O(y,r,C),p(r,n),p(n,o),re(c,o,null),p(n,i),p(n,u),re(h,u,null),O(y,f,C),O(y,_,C),p(_,m),p(m,g),p(g,d),p(d,b),p(g,$),p(g,I),p(I,V),p(V,N),p(N,E),p(N,D),B=!0,R||(F=[L(d,"click",s[0]),L(I,"click",s[1])],R=!0)},p:P,i(y){B||(J(e.$$.fragment,y),J(c.$$.fragment,y),J(h.$$.fragment,y),B=!0)},o(y){Q(e.$$.fragment,y),Q(c.$$.fragment,y),Q(h.$$.fragment,y),B=!1},d(y){le(e,y),y&&a(t),y&&a(r),le(c),le(h),y&&a(f),y&&a(_),R=!1,ae(F)}}}const Mt=!0;let Tt="selection";function Bt(s){return[()=>{pt(),ze("result-"+Tt),ne(),ve()},()=>{ze("settings"),ne(),ve()}]}class Ct extends Y{constructor(e){super(),Z(this,e,Bt,Ot,K,{})}}export{Ct as default,Mt as prerender};
