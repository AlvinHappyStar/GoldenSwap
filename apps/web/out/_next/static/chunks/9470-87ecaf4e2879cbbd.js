"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9470],{58514:function(n,e,t){var o=t(52322),r=t(61660),i=t(80739),a=t(25556),c=t(3131),s=t(47857),l=t(95446),u=t(84252),d=t(85875),h=t(758),f=t(73921),x=function(n){var e=n.x,t=n.y,r=n.width,i=n.height,a=n.fill;return(0,o.jsx)("g",{children:(0,o.jsx)("rect",{x:e,y:t,fill:a,width:r,height:i,rx:"2"})})};e.Z=function(n){var e=n.data,t=n.setHoverValue,m=n.setHoverDate,p=(0,f.$G)().currentLanguage.locale,k=(0,u.ZP)().theme;return e&&0!==e.length?(0,o.jsx)(r.h,{width:"100%",height:"100%",children:(0,o.jsxs)(i.v,{data:e,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:function(){m(void 0),t(void 0)},children:[(0,o.jsx)(a.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:function(n){return n.toLocaleDateString(void 0,{month:"2-digit"})},minTickGap:30}),(0,o.jsx)(c.B,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,color:k.colors.textSubtle,fontSize:"12px",tickFormatter:function(n){return"$".concat((0,d.d)(n))},orientation:"right",tick:{dx:10,fill:k.colors.textSubtle}}),(0,o.jsx)(s.u,{cursor:{fill:k.colors.backgroundDisabled},contentStyle:{display:"none"},formatter:function(n,e,o){return t(o.payload.value),m(o.payload.time.toLocaleString(p,{year:"numeric",day:"numeric",month:"short"})),null}}),(0,o.jsx)(l.$,{dataKey:"value",fill:k.colors.primary,shape:function(n){return(0,o.jsx)(x,{height:n.height,width:n.width,x:n.x,y:n.y,fill:k.colors.primary})}})]})}):(0,o.jsx)(h.M4,{})}},73120:function(n,e,t){var o=t(52322),r=t(61660),i=t(50603),a=t(25556),c=t(3131),s=t(47857),l=t(81073),u=t(84252),d=t(85875),h=t(758),f=t(73921);e.Z=function(n){var e=n.data,t=n.setHoverValue,x=n.setHoverDate,m=(0,f.$G)().currentLanguage.locale,p=(0,u.ZP)().theme;return e&&0!==e.length?(0,o.jsx)(r.h,{children:(0,o.jsxs)(i.T,{data:e,width:300,height:308,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:function(){x&&x(void 0),t&&t(void 0)},children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"5%",stopColor:p.colors.inputSecondary,stopOpacity:.5}),(0,o.jsx)("stop",{offset:"100%",stopColor:p.colors.secondary,stopOpacity:0})]})}),(0,o.jsx)(a.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:function(n){return n.toLocaleDateString(void 0,{month:"2-digit"})},minTickGap:30}),(0,o.jsx)(c.B,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,fontSize:"12px",tickFormatter:function(n){return"$".concat((0,d.d)(n))},orientation:"right",tick:{dx:10,fill:p.colors.textSubtle}}),(0,o.jsx)(s.u,{cursor:{stroke:p.colors.secondary},contentStyle:{display:"none"},formatter:function(n,e,o){return t(o.payload.value),x(o.payload.time.toLocaleString(m,{year:"numeric",day:"numeric",month:"short"})),null}}),(0,o.jsx)(l.u,{dataKey:"value",type:"monotone",stroke:p.colors.secondary,fill:"url(#gradient)",strokeWidth:2})]})}):(0,o.jsx)(h.fn,{})}},93665:function(n,e,t){var o=t(87394),r=t(92228),i=t(52322),a=t(73921),c=t(72027),s=t(71967),l=t(33080),u=t(11982),d=t(78002),h=t(32301),f=t(71859),x=t(78861),m=t(59696),p=t(5406),k=t(26390),j=t(98541),g=t(2784),y=t(79074),Z=t(43386),v=t(3411),b=t(51147),S=t(85875),T=t(14279);function w(){var n=(0,r.Z)(["\n  width: 100%;\n"]);return w=function(){return n},n}function C(){var n=(0,r.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);\n  padding: 0 24px;\n  @media screen and (max-width: 940px) {\n    grid-template-columns: 2fr repeat(4, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2fr 1fr;\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n    & > *:nth-child(2) {\n      display: none;\n    }\n  }\n"]);return C=function(){return n},n}function M(){var n=(0,r.Z)(["\n  align-items: center;\n  margin-right: 16px;\n  margin-top: 8px;\n  cursor: pointer;\n"]);return M=function(){return n},n}var D=v.ZP.div.withConfig({componentId:"sc-f40f3804-0"})(w()),L=v.ZP.div.withConfig({componentId:"sc-f40f3804-1"})(C()),P=(0,v.ZP)(l.Z).withConfig({componentId:"sc-f40f3804-2"})(M()),E={amountUSD:"amountUSD",timestamp:"timestamp",sender:"sender",amountToken0:"amountToken0",amountToken1:"amountToken1"},N=function(){var n=(0,i.jsxs)(L,{children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)(u.Z,{}),(0,i.jsx)(u.Z,{}),(0,i.jsx)(u.Z,{}),(0,i.jsx)(u.Z,{}),(0,i.jsx)(u.Z,{})]});return(0,i.jsxs)(i.Fragment,{children:[n,n,n]})},_=function(n){var e=n.transaction,t=(0,a.$G)().t,o=Math.abs(e.amountToken0),r=Math.abs(e.amountToken1),l=e.amountToken0<0?e.token0Symbol:e.token1Symbol,u=e.amountToken1<0?e.token0Symbol:e.token1Symbol,f=(0,y.qg)();return(0,i.jsxs)(L,{children:[(0,i.jsx)(d.Z,{isBscScan:!0,href:(0,b.C)(e.hash,"transaction","ETH"===f&&c.a_.ETHEREUM),children:(0,i.jsx)(h.Z,{children:e.type===Z.i.MINT?t("Add %token0% and %token1%",{token0:e.token0Symbol,token1:e.token1Symbol}):e.type===Z.i.SWAP?t("Swap %token0% for %token1%",{token0:u,token1:l}):t("Remove %token0% and %token1%",{token0:e.token0Symbol,token1:e.token1Symbol})})}),(0,i.jsxs)(h.Z,{children:["$",(0,S.d)(e.amountUSD)]}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(h.Z,{children:"".concat((0,S.d)(o)," ").concat(e.token0Symbol)})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(h.Z,{children:"".concat((0,S.d)(r)," ").concat(e.token1Symbol)})}),(0,i.jsx)(d.Z,{isBscScan:!0,href:(0,b.C)(e.sender,"address","ETH"===f&&c.a_.ETHEREUM),children:(0,s.Z)(e.sender)}),(0,i.jsx)(h.Z,{children:(0,j.Z)(1e3*parseInt(e.timestamp,10))})]})};e.Z=function(n){var e=n.transactions,t=(0,o.Z)((0,g.useState)(E.timestamp),2),r=t[0],c=t[1],s=(0,o.Z)((0,g.useState)(!0),2),u=s[0],d=s[1],j=(0,a.$G)().t,y=(0,o.Z)((0,g.useState)(1),2),v=y[0],b=y[1],S=(0,o.Z)((0,g.useState)(1),2),w=S[0],C=S[1],M=(0,o.Z)((0,g.useState)(void 0),2),A=M[0],F=M[1],U=(0,g.useMemo)(function(){var n=[E.amountToken0,E.amountToken1];return e?e.slice().sort(function(e,t){if(e&&t){var i=e[r],a=t[r],c=(0,o.Z)(n.includes(r)?[Math.abs(i),Math.abs(a)]:[i,a],2);return c[0]>c[1]?(u?-1:1)*1:-((u?-1:1)*1)}return -1}).filter(function(n){return void 0===A||n.type===A}).slice(k.si*(v-1),v*k.si):[]},[e,v,r,u,A]);(0,g.useEffect)(function(){if(e){var n=e.filter(function(n){return void 0===A||n.type===A});n.length%k.si==0?C(Math.floor(n.length/k.si)):C(Math.floor(n.length/k.si)+1)}},[e,A]);var z=(0,g.useCallback)(function(n){n!==A&&(F(n),b(1))},[A]),H=(0,g.useCallback)(function(n){c(n),d(r!==n||!u)},[u,r]),I=(0,g.useCallback)(function(n){return r===n?u?"↓":"↑":""},[u,r]);return(0,i.jsxs)(D,{children:[(0,i.jsxs)(l.Z,{mb:"16px",children:[(0,i.jsxs)(l.Z,{flexDirection:["column","row"],children:[(0,i.jsxs)(P,{onClick:function(){return z(void 0)},children:[(0,i.jsx)(f.Z,{onChange:function(){return null},scale:"sm",checked:void 0===A}),(0,i.jsx)(h.Z,{ml:"8px",children:j("All")})]}),(0,i.jsxs)(P,{onClick:function(){return z(Z.i.SWAP)},children:[(0,i.jsx)(f.Z,{onChange:function(){return null},scale:"sm",checked:A===Z.i.SWAP}),(0,i.jsx)(h.Z,{ml:"8px",children:j("Swaps")})]})]}),(0,i.jsxs)(l.Z,{flexDirection:["column","row"],children:[(0,i.jsxs)(P,{onClick:function(){return z(Z.i.MINT)},children:[(0,i.jsx)(f.Z,{onChange:function(){return null},scale:"sm",checked:A===Z.i.MINT}),(0,i.jsx)(h.Z,{ml:"8px",children:j("Adds")})]}),(0,i.jsxs)(P,{onClick:function(){return z(Z.i.BURN)},children:[(0,i.jsx)(f.Z,{onChange:function(){return null},scale:"sm",checked:A===Z.i.BURN}),(0,i.jsx)(h.Z,{ml:"8px",children:j("Removes")})]})]})]}),(0,i.jsxs)(T.y6,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(h.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:j("Action")}),(0,i.jsxs)(T._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return H(E.amountUSD)},textTransform:"uppercase",children:[j("Total Value")," ",I(E.amountUSD)]}),(0,i.jsxs)(T._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return H(E.amountToken0)},textTransform:"uppercase",children:[j("Token Amount")," ",I(E.amountToken0)]}),(0,i.jsxs)(T._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return H(E.amountToken1)},textTransform:"uppercase",children:[j("Token Amount")," ",I(E.amountToken1)]}),(0,i.jsxs)(T._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return H(E.sender)},textTransform:"uppercase",children:[j("Account")," ",I(E.sender)]}),(0,i.jsxs)(T._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return H(E.timestamp)},textTransform:"uppercase",children:[j("Time")," ",I(E.timestamp)]})]}),(0,i.jsx)(T.SS,{}),e?(0,i.jsxs)(i.Fragment,{children:[U.map(function(n,e){return n?(0,i.jsxs)(g.Fragment,{children:[(0,i.jsx)(_,{transaction:n}),(0,i.jsx)(T.SS,{})]},e):null}),0===U.length?(0,i.jsx)(l.Z,{justifyContent:"center",children:(0,i.jsx)(h.Z,{children:j("No Transactions")})}):void 0,(0,i.jsxs)(T.Ob,{children:[(0,i.jsx)(T.Eh,{onClick:function(){b(1===v?v:v-1)},children:(0,i.jsx)(x.Z,{color:1===v?"textDisabled":"primary"})}),(0,i.jsx)(h.Z,{children:j("Page %page% of %maxPage%",{page:v,maxPage:w})}),(0,i.jsx)(T.Eh,{onClick:function(){b(v===w?v:v+1)},children:(0,i.jsx)(m.Z,{color:v===w?"textDisabled":"primary"})})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{}),(0,i.jsx)(p.ZP,{})]})]})]})}},25374:function(n,e,t){var o=t(70865),r=t(96670),i=t(26297),a=t(52322),c=t(32301);e.Z=function(n){var e=n.value,t=(0,i.Z)(n,["value"]);if(!e||Number.isNaN(e))return(0,a.jsx)(c.Z,(0,r.Z)((0,o.Z)({},t),{children:"-"}));var s=e<0;return(0,a.jsxs)(c.Z,(0,r.Z)((0,o.Z)({},t),{color:s?"failure":"success",children:[s?"↓":"↑",Math.abs(e).toFixed(2),"%"]}))}},71859:function(n,e,t){t.d(e,{Z:function(){return d}});var o=t(92228),r=t(3411),i=t(78545),a={SM:"sm",MD:"md"};function c(){var n=(0,o.Z)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"]);return c=function(){return n},n}var s=function(n){switch(n.scale){case a.SM:return"24px";case a.MD:default:return"32px"}},l=function(n){switch(n.scale){case a.SM:return"12px";case a.MD:default:return"20px"}},u=r.ZP.input.attrs({type:"radio"}).withConfig({componentId:"sc-407ed64c-0"})(c(),s,s,function(n){return n.theme.colors.input},function(n){return n.theme.shadows.inset},l,l,function(n){return n.theme.shadows.focus},function(n){return n.theme.shadows.focus},function(n){return n.theme.colors.success},function(n){return n.theme.radio.handleBackground},i.Dh);u.defaultProps={scale:a.MD,m:0};var d=u}}]);
//# sourceMappingURL=9470-87ecaf4e2879cbbd.js.map