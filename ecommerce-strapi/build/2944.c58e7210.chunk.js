(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[2944],{92268:N=>{function w(p,s,j,f){for(var y=-1,D=p==null?0:p.length;++y<D;){var b=p[y];s(f,b,j(b),p)}return f}N.exports=w},20456:(N,w,p)=>{var s=p(80232);function j(f,y,D,b){return s(f,function(R,$,K){y(b,R,D(R),K)}),b}N.exports=j},4068:(N,w,p)=>{var s=p(92268),j=p(20456),f=p(24020),y=p(75516);function D(b,R){return function($,K){var le=y($)?s:j,ce=R?R():{};return le($,b,f(K,2),ce)}}N.exports=D},30680:(N,w,p)=>{var s=p(92188),j=p(4068),f=Object.prototype,y=f.hasOwnProperty,D=j(function(b,R,$){y.call(b,$)?b[$].push(R):s(b,$,[R])});N.exports=D},32944:(N,w,p)=>{"use strict";p.d(w,{P:()=>Rs});var s=p(19968),j=p(62552),f=p(48936),y=p(5e3),D=p(19576),b=p(63358),R=p(35676),$=p(11208),K=p(2931),le=p(25824),ce=p(3548),Ne=p(32912),Ve=p(42616),Ge=p(34404),we=p(12248),fe=p(32568),He=p(28724),Fe=p(70996),Xe=p(6496),xe=p(53804),z=p(80700),_e=p(79632),je=p(29088),de=p(96556),A=p(85676),ne=p(56781),Q=p(79804),V=p(35184),B=p(14632),H=p(94248),Ye=p(43164),Ze=p(36196),pe=p(30680),ye=p(21968),S=p(5596),Je=p(14520),ze=p(46596),Qe=p(64472),qe=p(79484),es=p(5848),ss=p(39820),ts=p(30840);const[ns,os]=(0,Ye.G)("PermissionsDataManager"),Z=()=>os("usePermissionsDataManager"),Oe=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Oe(o)):t.push(o),t),[]):[],X=e=>(0,H.F)(e)?Oe(Object.values(e).map(t=>(0,H.F)(t)?X(t):t)):[],Ee=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),is=e=>{const t=Me(e.plugins),o=Me(e.settings),n=be(e.collectionTypes),r=be(e.singleTypes);return[...t,...o,...n,...r]},Me=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const c=Object.entries(a).reduce((i,[l,{conditions:d,properties:{enabled:u}}])=>(u&&i.push({action:l,subject:null,conditions:ue(d),properties:{}}),i),[]);return[...r,...c]},[]);return[...t,...n]},[]),be=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,c=Object.entries(a).reduce((i,l)=>{const[d,u]=l;if(!X(u).some(m=>m))return i;if(!u?.properties?.enabled){const m=Object.entries(u.properties).reduce((x,_)=>{const[h,C]=_;return x.properties[h]=Ae(C),x},{action:d,subject:r,conditions:ue(u.conditions),properties:{}});return[...i,m]}return u.properties.enabled&&i.push({action:d,subject:r,properties:{},conditions:ue(u.conditions)}),i},[]);return[...o,...c]},[]),Ae=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,H.F)(a)?[...o,...Ae(a,`${t}${r}.`)]:(a&&!(0,H.F)(a)&&o.push(`${t}${r}`),o)},[]),ue=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Pe=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),ve=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const c=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((d,u)=>{const g=Ee(o,u.action,null);return d[u.action]={properties:{enabled:g!==void 0},conditions:Pe(t,g?.conditions??[])},d},{}),i),{});return n[r]=c,n},{}),rs=(e,t,o)=>{const n=({children:r=[]},a,c="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${c}${l.value}.`)};const d=a.indexOf(`${c}${l.value}`)!==-1;return i[l.value]=d,i},{});return e.reduce((r,a)=>{const c=t.properties.find(({value:i})=>i===a);if(c){const i=o?.properties[c.value]??[],l=n(c,i);r.properties[a]=l}return r},{properties:{}})},Te=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const c=a.subjects.reduce((l,d)=>{const u=e.find(({uid:g})=>g===d)||null;return u&&(l[d]=u),l},{});if(Q(c))return r;const i=Object.keys(c).reduce((l,d)=>{const{actionId:u,applyToProperties:g}=a,_=c[d].properties.map(({value:P})=>P).every(P=>(g||[]).indexOf(P)===-1),h=Ee(n,u,d),C=Pe(o,h?.conditions??[]);if(l[d]||(l[d]={}),Q(g)||_)return l[d][u]={properties:{enabled:h!==void 0},conditions:C},l;const O=rs(g,c[d],h);return l[d][u]={...O,conditions:C},l},{});return Ze(r,i)},{}),Se=(e,t)=>Object.entries(pe(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(pe(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),oe=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,H.F)(n)&&!ne(n,"conditions"))return{...t,[o]:oe(n)};if((0,H.F)(n)&&ne(n,"conditions")&&!X(ye(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((c,i)=>(c[i]=!1,c),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),q=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,H.F)(a)?{...n,[r]:q(a,t,r==="fields")}:(n[r]=t,n)},{}),G=`${120/16}rem`,he=`${200/16}rem`,ie=`${53/16}rem`,ge=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,Y=e=>{const t=ge(e),o=X(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},re=e=>e.charAt(0).toUpperCase()+e.slice(1),De=(0,S.cp)(f.C)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,me=S.cp.div`
  width: ${G};
`,$e=()=>(0,s.jsx)(y.k,{color:"danger700",paddingLeft:1,children:"*"}),Le=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:c,onClick:i,someChecked:l=!1,value:d})=>{const{formatMessage:u}=(0,B.c)();return(0,s.jsxs)(f.C,{alignItems:"center",paddingLeft:6,width:he,shrink:0,children:[(0,s.jsx)(y.k,{paddingRight:2,children:(0,s.jsx)(D.c,{name:e,"aria-label":u({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>c({target:{name:e,value:g}}),indeterminate:l,value:d})}),(0,s.jsxs)(De,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(b.O,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:re(a)}),t]})]})},as=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const c=(0,j.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(f.C,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(Cs,{label:n,headers:c}),(0,s.jsx)(y.k,{children:t.map(({children:i,label:l,value:d,required:u},g)=>(0,s.jsx)(ls,{childrenForm:i,label:l,isFormDisabled:o,name:d,required:u,propertyActions:c,pathToData:r,propertyName:a,isOdd:g%2===0},d))})]})},ls=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:c,propertyName:i,isOdd:l=!1})=>{const{formatMessage:d}=(0,B.c)(),[u,g]=j.useState(null),{modifiedData:m,onChangeCollectionTypeLeftActionRowCheckbox:x,onChangeParentCheckbox:_,onChangeSimpleCheckbox:h}=Z(),C=u===n,O=(0,j.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=O.length>0,L=j.useCallback(()=>{P&&g(v=>v===n?null:n)},[P,n]),E=({target:{value:v}})=>{x(a,i,n,v)},{hasAllActionsSelected:M,hasSomeActionsSelected:T}=(0,j.useMemo)(()=>cs(c,m,a,i,n),[c,m,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ds,{alignItems:"center",isCollapsable:P,isActive:C,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(f.C,{children:[(0,s.jsxs)(Le,{onChange:E,onClick:L,isCollapsable:P,isFormDisabled:o,label:t,someChecked:T,value:M,isActive:C,children:[r&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:C})]}),(0,s.jsx)(f.C,{children:c.map(({label:v,isActionRelatedToCurrentProperty:I,actionId:W})=>{if(!I)return(0,s.jsx)(me,{},v);const k=[...a.split(".."),W,"properties",i,n];if(!P){const U=A(m,k,!1);return(0,s.jsx)(f.C,{width:G,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.c,{disabled:o,name:k.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),onValueChange:Ks=>{h({target:{name:k.join(".."),value:Ks}})},value:U})},W)}const J=A(m,k,{}),{hasAllActionsSelected:F,hasSomeActionsSelected:te}=Y(J);return(0,s.jsx)(f.C,{width:G,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.c,{disabled:o,name:k.join(".."),onValueChange:U=>{_({target:{name:k.join(".."),value:U}})},"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),value:F,indeterminate:te})},v)})})]})}),C&&(0,s.jsx)(ke,{childrenForm:O,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:c,recursiveLevel:0})]})},cs=(e,t,o,n,r)=>{const c=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const d=A(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=d,i},{});return Y(c)},ds=(0,S.cp)(f.C)`
  height: ${ie};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,ee=(0,S.cp)(Je.c)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,ke=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:c})=>{const{formatMessage:i}=(0,B.c)(),{modifiedData:l,onChangeParentCheckbox:d,onChangeSimpleCheckbox:u}=Z(),[g,m]=j.useState(null),x=h=>{m(C=>C===h?null:h)},_=(0,j.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(y.k,{paddingLeft:"2rem",children:[(0,s.jsx)(hs,{}),e.map(({label:h,value:C,required:O,children:P},L)=>{const E=L+1<e.length,M=Array.isArray(P),T=g===C;return(0,s.jsxs)(ps,{isVisible:E,children:[(0,s.jsxs)(f.C,{height:ie,children:[(0,s.jsx)(gs,{children:(0,s.jsx)(ms,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(f.C,{style:{flex:1},children:[(0,s.jsx)(us,{level:o,isActive:T,isCollapsable:M,children:(0,s.jsxs)(De,{alignItems:"center",isCollapsable:M,...M&&{onClick:()=>x(C),"aria-expanded":T,onKeyDown:({key:v})=>(v==="Enter"||v===" ")&&x(C),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(b.O,{ellipsis:!0,children:re(h)}),O&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:T})]})}),(0,s.jsx)(f.C,{style:{flex:1},children:r.map(({actionId:v,label:I,isActionRelatedToCurrentProperty:W})=>{if(!W)return(0,s.jsx)(me,{},v);const k=[...n.split(".."),v,"properties",c,...a.split(".."),C],J=A(l,k,!1);if(!P)return(0,s.jsx)(f.C,{position:"relative",width:G,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.c,{disabled:t,name:k.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${I}`}),onValueChange:U=>{u({target:{name:k.join(".."),value:U}})},value:J})},I);const{hasAllActionsSelected:F,hasSomeActionsSelected:te}=Y(J);return(0,s.jsx)(f.C,{position:"relative",width:G,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.c,{disabled:t,name:k.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${I}`}),onValueChange:U=>{d({target:{name:k.join(".."),value:U}})},value:F,indeterminate:te},I)},I)})})]})]}),_&&T&&(0,s.jsx)(y.k,{paddingBottom:2,children:(0,s.jsx)(ke,{isFormDisabled:t,parentName:`${a}..${C}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:c,recursiveLevel:o+1,childrenForm:_.children})})]},C)})]})},ps=(0,S.cp)(y.k)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,us=(0,S.cp)(f.C)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,hs=S.cp.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,gs=(0,S.cp)(y.k)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,ms=S.cp.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,Cs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,B.c)();return(0,s.jsxs)(f.C,{children:[(0,s.jsx)(f.C,{width:he,height:ie,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(b.O,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(f.C,{width:G,shrink:0,justifyContent:"center",children:(0,s.jsx)(b.O,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(f.C,{width:G,shrink:0},n.label))]})},se=e=>(0,S.gV)`
  ${b.O} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ee} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,fs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,B.c)();return(0,s.jsx)(xs,{hasConditions:o,className:t,children:(0,s.jsx)(R.Z,{variant:n,startIcon:(0,s.jsx)(ze.c,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},xs=(0,S.cp)(y.k)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ae=(0,S.cp)(fs)``,Re=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,B.c)(),{availableConditions:c,modifiedData:i,onChangeConditions:l}=Z(),d=j.useMemo(()=>Object.entries(pe(c,"category")),[c]),u=e.filter(({isDisplayed:h,hasSomeActionsSelected:C,hasAllActionsSelected:O})=>h&&Boolean(C||O)),[g,m]=j.useState(_s(u,i,d)),x=(h,C)=>{m((0,je.cp)(O=>{O[h]||(O[h]={}),O[h].default||(O[h].default={}),O[h].default=C}))},_=()=>{const h=Object.entries(g).reduce((C,O)=>{const[P,L]=O,E=Object.values(L).reduce((M,T)=>({...M,...T}),{});return C[P]=E,C},{});l(h),r()};return(0,s.jsxs)($.E,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(K.k,{children:(0,s.jsx)(es.M,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,C,O)=>(0,s.jsx)(ss.i,{isCurrent:C===O.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(le.a,{children:[u.length===0&&(0,s.jsx)(b.O,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:u.map(({actionId:h,label:C,pathToConditionsObject:O},P)=>{const L=O.join("..");return(0,s.jsx)(js,{arrayOfOptionsGroupedByCategory:d,label:C,isFormDisabled:o,isGrey:P%2===0,name:L,onChange:x,value:A(g,L,{})},h)})})]}),(0,s.jsx)(ce._,{startActions:(0,s.jsx)(R.Z,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(R.Z,{onClick:_,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},_s=(e,t,o)=>e.reduce((n,r)=>{const a=A(t,[...r.pathToConditionsObject,"conditions"],{}),c=o.reduce((i,l)=>{const[d,u]=l,g=u.reduce((m,x)=>(m[x.id]=A(a,x.id,!1),m),{});return i[d]=g,i},{});return n[r.pathToConditionsObject.join("..")]=c,n},{}),js=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:c})=>{const{formatMessage:i}=(0,B.c)(),l=d=>{a&&a(r,Es(e,d))};return(0,s.jsxs)(f.C,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(f.C,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(b.O,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(b.O,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(b.O,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(y.k,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(Ne.U,{id:r,customizeContent:(d=[])=>`${d.length} currently selected`,onChange:l,value:ys(c),options:Os(e),disabled:t})})]})},ys=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Os=e=>e.reduce((t,[o,n])=>(t.push({label:re(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),Es=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),Ms=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=j.useState(null),c=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:d},u)=>{const g=r===i,m=e.map(x=>({...x,isDisplayed:Array.isArray(x.subjects)&&x.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(f.C,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(bs,{availableActions:m,isActive:g,isGrey:u%2===0,isFormDisabled:t,label:l,onClickToggle:c(i),pathToData:[o,i].join("..")}),g&&d.map(({label:x,value:_,children:h})=>(0,s.jsx)(as,{availableActions:m,childrenForm:h,isFormDisabled:t,label:x,pathToData:[o,i].join(".."),propertyName:_},_))]},i)})})},bs=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:c})=>{const[i,l]=j.useState(!1),{formatMessage:d}=(0,B.c)(),{modifiedData:u,onChangeParentCheckbox:g,onChangeSimpleCheckbox:m}=Z(),x=()=>{l(M=>!M)},_=()=>{l(!1)},h=A(u,c.split(".."),{}),C=j.useMemo(()=>Object.keys(h).reduce((M,T)=>(M[T]=ye(h[T],"conditions"),M),{}),[h]),{hasAllActionsSelected:O,hasSomeActionsSelected:P}=Y(C),L=j.useMemo(()=>As(e,u,c),[e,u,c]),E=L.some(M=>M.hasConditions);return(0,s.jsxs)(Ps,{isActive:t,children:[(0,s.jsxs)(Ie,{height:ie,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(Le,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:c,onChange:g,onClick:a,someChecked:P,value:O,isActive:t,children:(0,s.jsx)(We,{paddingLeft:2,children:t?(0,s.jsx)(Qe.c,{}):(0,s.jsx)(qe.c,{})})}),(0,s.jsx)(f.C,{style:{flex:1},children:L.map(({actionId:M,hasSomeActionsSelected:T,isDisplayed:v,...I})=>{if(!v)return(0,s.jsx)(me,{},M);const{hasConditions:W,hasAllActionsSelected:k,isParentCheckbox:J,checkboxName:F,label:te}=I;return J?(0,s.jsxs)(Be,{justifyContent:"center",alignItems:"center",children:[W&&(0,s.jsx)(y.k,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.c,{disabled:n,name:F,"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${te} ${r}`}),onValueChange:U=>{g({target:{name:F,value:U}})},indeterminate:T,value:k})]},M):(0,s.jsxs)(Be,{justifyContent:"center",alignItems:"center",children:[W&&(0,s.jsx)(y.k,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.c,{disabled:n,indeterminate:W,name:F,onValueChange:U=>{m({target:{name:F,value:U}})},value:k})]},M)})}),i&&(0,s.jsx)(Re,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:L,isFormDisabled:n,onClosed:_,onToggle:x})]}),(0,s.jsx)(y.k,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ae,{onClick:x,hasConditions:E})})]})},As=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:c})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=Q(a)?[...i,"properties","enabled"]:i,d=A(t,[...i,"conditions"],null),u={actionId:n,checkboxName:l.join(".."),hasConditions:X(d).some(_=>_),isDisplayed:r,label:c,pathToConditionsObject:i};if(Q(a)){const _=A(t,l,!1);return{...u,hasAllActionsSelected:_,hasSomeActionsSelected:_,isParentCheckbox:!1}}const g=A(t,l,null),{hasAllActionsSelected:m,hasSomeActionsSelected:x}=Y(g);return{...u,hasAllActionsSelected:m,hasSomeActionsSelected:x,isParentCheckbox:!0}}),Ce=(e,t)=>`
  ${Ie} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${We} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
    ${se(e)}
  }

  &:focus-within {
    ${()=>Ce(e,t)}
  }
`,Ie=(0,S.cp)(f.C)`
  border: 1px solid transparent;
`,Ps=S.cp.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&Ce(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>Ce(e,t)}
  }
`,Be=(0,S.cp)(f.C)`
  width: ${G};
  position: relative;
`,We=(0,S.cp)(y.k)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,vs=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,B.c)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=Z(),c=e.filter(({subjects:l})=>l&&l.length),i=j.useMemo(()=>{const l=c.map(({actionId:m})=>m),d=r[o],u=l.reduce((m,x)=>(Object.keys(d).forEach(_=>{const h=A(d,[_,x]),C={[_]:ge(h)};m[x]?m[x]={...m[x],...C}:m[x]=C}),m),{});return Object.keys(u).reduce((m,x)=>(m[x]=Y(u[x]),m),{})},[r,c,o]);return(0,s.jsx)(y.k,{paddingBottom:4,paddingTop:6,style:{paddingLeft:he},children:(0,s.jsx)(f.C,{gap:0,children:c.map(({label:l,actionId:d})=>(0,s.jsxs)(f.C,{shrink:0,width:G,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(b.O,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(D.c,{disabled:t,onValueChange:u=>{a(o,d,u)},name:d,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:A(i,[d,"hasAllActionsSelected"],!1),indeterminate:A(i,[d,"hasSomeActionsSelected"],!1)})]},d))})})},Ke=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,c)=>a.label.localeCompare(c.label));return(0,s.jsxs)(Ts,{background:"neutral0",children:[(0,s.jsx)(vs,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(Ms,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},Ts=(0,S.cp)(y.k)`
  overflow-x: auto;
`,Ue=({layout:e,...t})=>{const[o,n]=j.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(y.k,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:c,childrenForm:i},l)=>(0,s.jsx)(Ss,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,c],...t},a))})},Ss=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:c,pathToData:i})=>{const{formatMessage:l}=(0,B.c)(),d=()=>{c(o)},u=o.split("::").pop()??"";return(0,s.jsxs)(Ve.G,{expanded:n,onToggle:d,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(Ge.M,{title:re(u),description:`${l({id:"Settings.permissions.category",defaultMessage:u},{category:u})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(we.u,{children:(0,s.jsx)(y.k,{padding:6,children:e.map(({actions:g,subCategoryName:m,subCategoryId:x})=>(0,s.jsx)(Ds,{actions:g,categoryName:u,isFormDisabled:r,subCategoryName:m,pathToData:[...i,x]},m))})})]})},Ds=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,c]=j.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:d}=Z(),{formatMessage:u}=(0,B.c)(),g=A(i,r,{}),m=j.useMemo(()=>Object.keys(g).reduce((E,M)=>(E[M]=ge(g[M]),E),{}),[g]),{hasAllActionsSelected:x,hasSomeActionsSelected:_}=Y(m),h=()=>{c(E=>!E)},C=()=>{c(!1)},O=j.useMemo(()=>e.map(E=>{const M=[...r,E.action,"properties","enabled"],T=A(i,M,!1),v=A(i,[...r,E.action,"conditions"],{}),I=X(v).some(W=>W);return{...E,isDisplayed:T,checkboxName:M.join(".."),hasSomeActionsSelected:T,value:T,hasConditions:I,label:E.displayName,actionId:E.action,pathToConditionsObject:[...r,E.action]}}),[e,i,r]),P=A(i,[...r],{}),L=X(Object.entries(P).reduce((E,M)=>{const[T,{conditions:v}]=M;return E[T]=v,E},{})).some(E=>E);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.k,{children:[(0,s.jsxs)(f.C,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(y.k,{paddingRight:4,children:(0,s.jsx)(b.O,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(y.k,{paddingLeft:4,children:(0,s.jsx)(fe.y,{name:r.join(".."),disabled:o,onValueChange:E=>{l({target:{name:r.join(".."),value:E}})},indeterminate:_,value:x,children:u({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(f.C,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(He.y,{gap:2,style:{flex:1},children:O.map(({checkboxName:E,value:M,action:T,displayName:v,hasConditions:I})=>(0,s.jsx)(Fe.C,{col:3,children:(0,s.jsx)(Ls,{disabled:o,hasConditions:I,children:(0,s.jsx)(fe.y,{name:E,disabled:o,onValueChange:W=>{d({target:{name:E,value:W}})},value:M,children:v})})},T))}),(0,s.jsx)(ae,{hasConditions:L,onClick:h})]})]}),a&&(0,s.jsx)(Re,{headerBreadCrumbs:[t,n],actions:O,isFormDisabled:o,onClosed:C,onToggle:h})]})},$s=(0,S.cp)(y.k)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ls=S.cp.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ks=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Rs=j.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:c},i]=j.useReducer(Bs,Is,()=>Ws(e,o)),{formatMessage:l}=(0,B.c)();j.useImperativeHandle(n,()=>({getPermissions(){const _=(0,_e.o1)(r.collectionTypes,c.collectionTypes),h=(0,_e.o1)(r.singleTypes,c.singleTypes),C={..._,...h};let O;return Q(C)?O=!1:O=Object.values(C).some((P={})=>Object.values(P).some(L=>ne(L,"conditions"))),{permissionsToSend:is(c),didUpdateConditions:O}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const d=(_,h,C,O)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:_,propertyName:h,rowName:C,value:O})},u=(_,h,C)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:_,actionId:h,value:C})},g=_=>{i({type:"ON_CHANGE_CONDITIONS",conditions:_})},m=j.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:_,value:h})},[]),x=j.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:_,value:h})},[]);return(0,s.jsx)(ns,{availableConditions:e.conditions,modifiedData:c,onChangeConditions:g,onChangeSimpleCheckbox:m,onChangeParentCheckbox:x,onChangeCollectionTypeLeftActionRowCheckbox:d,onChangeCollectionTypeGlobalActionCheckbox:u,children:(0,s.jsxs)(Xe.M,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(xe.k,{children:ks.map(_=>(0,s.jsx)(xe.s,{children:l({id:_.labelId,defaultMessage:_.defaultMessage})},_.id))}),(0,s.jsxs)(z.o,{style:{position:"relative"},children:[(0,s.jsx)(z.G,{children:(0,s.jsx)(Ke,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(z.G,{children:(0,s.jsx)(Ke,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(z.G,{children:(0,s.jsx)(Ue,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(z.G,{children:(0,s.jsx)(Ue,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},Bs=(e,t)=>(0,je.cp)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,c=["modifiedData",n];Object.keys(A(e,c)).forEach(i=>{const l=A(e,[...c,i,r],void 0);if(l){let d=q(l,a);if(!a&&d.conditions){const u=q(d.conditions,!1);d={...d,conditions:u}}V(o,[...c,i,r],d)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:c}=t;let i=de(e.modifiedData);const l=n.split(".."),d=A(i,l,{});Object.keys(d).forEach(u=>{if(ne(d[u],`properties.${r}`)){const g=A(d,[u,"properties",r,a]),m=[...l,u,"properties",r,a];if(!(0,H.F)(g))V(i,m,c);else{const x=q(g,c);V(i,m,x)}}}),c||(i=oe(i)),V(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;V(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=de(e.modifiedData);V(n,[...t.keys.split("..")],t.value),t.value||(n=oe(n)),V(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let c=de(e.modifiedData);const i=A(c,a,{}),l=q(i,r);V(c,a,l),r||(c=oe(c)),V(o,["modifiedData"],c);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ws=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:c}}=e,i={collectionTypes:n,singleTypes:r,plugins:Se(a,"plugin"),settings:Se(c,"category")},l={collectionTypes:Te(n,o,t),singleTypes:Te(r,o,t),plugins:ve(i.plugins,o,t),settings:ve(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}}},32912:(N,w,p)=>{"use strict";p.d(w,{U:()=>y});var s=p(19968),j=p(5596),f=p(5928);const y=({options:b,...R})=>(0,s.jsx)(f.e,{...R,children:b.map($=>"children"in $?(0,s.jsx)(f.OK,{label:$.label,values:$.children.map(K=>K.value.toString()),children:$.children.map(K=>(0,s.jsx)(D,{value:K.value,children:K.label},K.value))},$.label):(0,s.jsx)(f.eI,{value:$.value,children:$.label},$.value))}),D=(0,j.cp)(f.eI)`
  padding-left: ${({theme:b})=>b.spaces[7]};
`}}]);
