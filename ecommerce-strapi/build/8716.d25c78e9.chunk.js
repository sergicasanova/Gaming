"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[8716],{38716:(B,O,_)=>{_.r(O),_.d(O,{AdminSeatInfoEE:()=>m});var s=_(19968),o=_(70996),E=_(63358),D=_(48936),t=_(70544),P=_(55716),d=_(5540),a=_(79632),i=_(30048),n=_(73648),l=_(14632),U=_(70516),R=_(33627),T=_(56456),y=_(62552),N=_(38768),F=_(79904),G=_(94248),H=_(54320),Y=_(5240),Z=_(91892),J=_(36196),z=_(20880),V=_(21424),Q=_(31812),X=_(18424),$=_(52540),u=_(21968),p=_(12132),k=_(48632),w=_(85676),b=_(35184),q=_(99568),__=_(96556),s_=_(13192),E_=_(30840),t_=_(77784),a_=_(79371),n_=_(67888),O_=_(52600),D_=_(95752),M_=_(37388),o_=_(61840),P_=_(49108),d_=_(44632),i_=_(50840),l_=_(20252),L_=_(86432),C_=_(22612),v_=_(24808),A_=_(24024),I_=_(40960),B_=_(33656),U_=_(43280),R_=_(79804),T_=_(19632),W_=_(29576),K_=_(61152),m_=_(9589),r_=_(45488),h_=_(75516);const W="https://cloud.strapi.io/profile/billing",K="https://strapi.io/billing/request-seats",m=()=>{const{formatMessage:M}=(0,l.c)(),{settings:r}=(0,U.w1)(R.s),{isLoading:C,allowedActions:{canRead:h,canCreate:g,canUpdate:f,canDelete:c}}=(0,a.aU)(r?.users??{}),{license:v,isError:e,isLoading:x}=(0,T.u)({enabled:!C&&h&&g&&f&&c});if(e||(C||x)||!v)return null;const{licenseLimitStatus:j,enforcementUserCount:A,permittedSeats:L,isHostedOnStrapiCloud:I}=v;return L?(0,s.jsxs)(o.C,{col:6,s:12,children:[(0,s.jsx)(E.O,{variant:"sigma",textColor:"neutral600",children:M({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,s.jsxs)(D.C,{gap:2,children:[(0,s.jsx)(D.C,{children:(0,s.jsx)(E.O,{as:"p",children:M({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:L,enforcementUserCount:A,text:S=>(0,s.jsx)(E.O,{fontWeight:"semiBold",textColor:A>L?"danger500":void 0,children:S})})})}),j==="OVER_LIMIT"&&(0,s.jsx)(t.o,{description:M({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,s.jsx)(P.G,{width:(0,a.W8)(14),height:(0,a.W8)(14),color:"danger500",as:i.c})})]}),(0,s.jsx)(d.c,{href:I?W:K,isExternal:!0,endIcon:(0,s.jsx)(n.c,{}),children:M({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:I})})]}):null}},56456:(B,O,_)=>{_.d(O,{u:()=>E});var s=_(62552),o=_(94248);function E({enabled:D}={enabled:!0}){const{data:t,isError:P,isLoading:d}=(0,o.n)(void 0,{skip:!D}),a=s.useCallback(i=>{const n=t?.data?.features.find(l=>l.name===i);return n&&"options"in n?n.options:{}},[t]);return{license:t?.data,getFeature:a,isError:P,isLoading:d}}}}]);
