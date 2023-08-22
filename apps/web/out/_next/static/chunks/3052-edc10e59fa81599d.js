"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3052],{17136:function(n,r,t){t.d(r,{Z:function(){return N}});var e=t(87394),i=t(52322),o=t(2784),u=t(33080),c=t(25385),s=t(43763),a=t(32301),d=t(68303),l=t(73921),f=t(45455),v=t.n(f),h=t(3440),m=t.n(h),x=t(46267),p=t(95625),Z=t(11930),g=t(64332),j=t(517),w=t(21175),b=t(92228),C=t(3411),y=t(78002),k=t(36429),I=t(87094),M=t(51147),P=t(80703);function B(){var n=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ",";\n"]);return B=function(){return n},n}function z(){var n=(0,b.Z)(["\n  color: ",";\n"]);return z=function(){return n},n}var L=C.ZP.div.withConfig({componentId:"sc-a1649361-0"})(B(),function(n){return n.theme.colors.primary}),S=C.ZP.div.withConfig({componentId:"sc-a1649361-1"})(z(),function(n){var r=n.pending,t=n.success,e=n.theme;return r?e.colors.primary:t?e.colors.success:e.colors.failure});function D(n){var r,t,e=n.tx,o=n.chainId,u=null==e?void 0:e.summary,c=!(null==e?void 0:e.receipt),s=!c&&e&&((null===(r=e.receipt)||void 0===r?void 0:r.status)===1||void 0===(null===(t=e.receipt)||void 0===t?void 0:t.status));return o?(0,i.jsxs)(L,{pending:c,success:s,children:[(0,i.jsx)(y.Z,{isBscScan:!0,href:(0,M.C)(e.hash,"transaction",o),children:null!=u?u:e.hash}),(0,i.jsx)(S,{pending:c,success:s,children:c?(0,i.jsx)(P.Z,{}):s?(0,i.jsx)(k.Z,{color:"success"}):(0,i.jsx)(I.Z,{color:"failure"})})]}):null}var T=t(95457);function A(n,r){return(0,i.jsx)(u.Z,{flexDirection:"column",children:n.map(function(n){return(0,i.jsx)(D,{tx:n,chainId:r},n.hash+n.addedTime)})})}var N=function(n){var r=n.onDismiss,t=(0,j.mA)().address,u=(0,p.TL)(),f=(0,x.Fn)(),h=(0,l.$G)().t,b=!v()(f),C=(0,o.useCallback)(function(){u((0,Z.fY)())},[u]);return(0,i.jsx)(c.ZP,{title:h("Recent Transactions"),headerBackground:"gradientCardHeader",onDismiss:r,children:t?(0,i.jsx)(s.fe,{children:b?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w.BA,{mb:"1rem",style:{justifyContent:"space-between"},children:[(0,i.jsx)(a.Z,{children:h("Recent Transactions")}),(0,i.jsx)(d.Z,{variant:"tertiary",scale:"xs",onClick:C,children:h("clear all")})]}),Object.entries(f).map(function(n){var r,t,o,u,c=(0,e.Z)(n,2),s=c[0],d=c[1],l=Number(s),f=m()(Object.values(d),function(n){return Boolean(n.receipt)}),v=null!==(t=f.true)&&void 0!==t?t:[],h=null!==(o=f.false)&&void 0!==o?o:[];return(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Z,{fontSize:"12px",color:"textSubtle",mb:"4px",children:null!==(u=null===(r=g.p5.find(function(n){return n.id===l}))||void 0===r?void 0:r.name)&&void 0!==u?u:"Unknown network"}),A(h,l),A(v,l)]},"transactions#".concat(l))})]}):(0,i.jsx)(a.Z,{children:h("No recent transactions")})}):(0,i.jsx)(T.Z,{})})}},46710:function(n,r,t){t.d(r,{j:function(){return B},t:function(){return k}});var e=t(87394),i=t(92228),o=t(52322),u=t(3411),c=t(33080),s=t(79221),a=t(78861),d=t(87016),l=t(18312),f=t(99293),v=t(32301),h=t(38497),m=t(54793),x=t(39097),p=t.n(x),Z=t(61736),g=t(16727),j=t(17136),w=function(){var n=(0,e.Z)((0,Z.Z)((0,o.jsx)(j.Z,{})),1)[0];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Z,{scale:"sm",variant:"text",onClick:n,children:(0,o.jsx)(g.Z,{color:"textSubtle",width:"24px"})})})},b=t(44239);function C(){var n=(0,i.Z)(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ",";\n"]);return C=function(){return n},n}var y=(0,u.ZP)(c.Z).withConfig({componentId:"sc-29d69fc6-0"})(C(),function(n){return n.theme.colors.cardBorder}),k=function(n){var r=n.title,t=n.subtitle,i=n.helper,u=n.backTo,x=n.noConfig,Z=(0,e.Z)((0,h.DG)(),1)[0];return(0,o.jsx)(y,{children:(0,o.jsxs)(c.Z,{alignItems:"center",width:"100%",style:{gap:"16px"},children:[u&&("string"==typeof u?(0,o.jsx)(p(),{passHref:!0,href:u,children:(0,o.jsx)(s.Z,{as:"a",scale:"sm",children:(0,o.jsx)(a.Z,{width:"32px"})})}):(0,o.jsx)(s.Z,{scale:"sm",variant:"text",onClick:u,children:(0,o.jsx)(a.Z,{width:"32px"})})),(0,o.jsxs)(c.Z,{flexDirection:"column",width:"100%",children:[(0,o.jsxs)(c.Z,{mb:"8px",alignItems:"center",justifyContent:"space-between",children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(d.Z,{as:"h2",children:r}),i&&(0,o.jsx)(l.s,{text:i,ml:"4px",placement:"top-start"})]}),!(void 0!==x&&x)&&(0,o.jsxs)(c.Z,{alignItems:"center",children:[(0,o.jsx)(f.Z,{show:Z,children:(0,o.jsx)(m.Z,{mode:b.a.SWAP_LIQUIDITY})}),(0,o.jsx)(w,{})]})]}),(0,o.jsx)(c.Z,{alignItems:"center",children:(0,o.jsx)(v.Z,{color:"textSubtle",fontSize:"14px",children:t})})]})]})})},I=t(80751);function M(){var n=(0,i.Z)(["\n  border-radius: 24px;\n  max-width: 436px;\n  width: 100%;\n  z-index: 1;\n"]);return M=function(){return n},n}var P=(0,u.ZP)(I.Z).withConfig({componentId:"sc-e8e91a75-0"})(M());function B(n){var r=n.children;return(0,o.jsx)(P,{children:r})}},21175:function(n,r,t){t.d(r,{BA:function(){return v},DA:function(){return h},m0:function(){return f}});var e=t(92228),i=t(3411),o=t(5406);function u(){var n=(0,e.Z)(["\n  width: ",";\n  display: flex;\n  align-items: ",";\n  justify-content: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n"]);return u=function(){return n},n}function c(){var n=(0,e.Z)(["\n  justify-content: space-between;\n"]);return c=function(){return n},n}function s(){var n=(0,e.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]);return s=function(){return n},n}function a(){var n=(0,e.Z)(["\n  flex-wrap: wrap;\n  margin: ",";\n  justify-content: ",";\n\n  & > * {\n    margin: "," !important;\n  }\n"]);return a=function(){return n},n}function d(){var n=(0,e.Z)(["\n  width: fit-content;\n  margin: ",";\n\n  & > * {\n    margin: "," !important;\n  }\n"]);return d=function(){return n},n}var l=(0,i.ZP)(o.ZP).withConfig({componentId:"sc-a99b64d2-0"})(u(),function(n){var r=n.width;return null!=r?r:"100%"},function(n){var r=n.align;return null!=r?r:"center"},function(n){var r=n.justify;return null!=r?r:"flex-start"},function(n){var r=n.padding;return null!=r?r:"0"},function(n){return n.border},function(n){return n.borderRadius}),f=(0,i.ZP)(l).withConfig({componentId:"sc-a99b64d2-1"})(c());i.ZP.div.withConfig({componentId:"sc-a99b64d2-2"})(s());var v=(0,i.ZP)(l).withConfig({componentId:"sc-a99b64d2-3"})(a(),function(n){var r=n.gap;return r&&"-".concat(r)},function(n){return n.justify},function(n){return n.gap}),h=(0,i.ZP)(l).withConfig({componentId:"sc-a99b64d2-4"})(d(),function(n){var r=n.gap;return r&&"-".concat(r)},function(n){return n.gap});r.ZP=l},80703:function(n,r,t){t.d(r,{Z:function(){return v}});var e=t(70865),i=t(96670),o=t(26297),u=t(92228),c=t(52322),s=t(3411);function a(){var n=(0,u.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return a=function(){return n},n}function d(){var n=(0,u.Z)(["\n  animation: 2s "," linear infinite;\n  height: ",";\n  width: ",";\n  path {\n    stroke: ",";\n  }\n"]);return d=function(){return n},n}var l=(0,s.F4)(a()),f=s.ZP.svg.withConfig({componentId:"sc-fa227f0-0"})(d(),l,function(n){return n.size},function(n){return n.size},function(n){var r=n.stroke,t=n.theme;return null!=r?r:t.colors.primary});function v(n){var r=n.size,t=n.stroke,u=(0,o.Z)(n,["size","stroke"]);return(0,c.jsx)(f,(0,i.Z)((0,e.Z)({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:void 0===r?"16px":r,stroke:t},u),{children:(0,c.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}},69722:function(n,r,t){t.d(r,{Z:function(){return p}});var e=t(92228),i=t(50930),o=t(52322),u=t(72027),c=t(99708),s=t(30670),a=t(2784),d=t(84483),l=t(3411),f=t(67262),v=t(5966),h=t(75583);function m(){var n=(0,e.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"]);return m=function(){return n},n}var x=(0,l.ZP)(c.Z).withConfig({componentId:"sc-b8d1b41-0"})(m(),function(n){return n.size},function(n){return n.size});function p(n){var r,t=n.currency,e=n.size,c=void 0===e?"24px":e,l=n.style,m=(0,f.ai)(t instanceof d.DT?t.logoURI:void 0),p=(0,a.useMemo)(function(){if(null==t?void 0:t.isNative)return[];if(null==t?void 0:t.isToken){var n=(0,h.Z)(t);return t instanceof d.DT?n?(0,i.Z)(m).concat([n]):(0,i.Z)(m):n?[n]:[]}return[]},[t,m]);return(null==t?void 0:t.isNative)?t.chainId===u.a_.BSC?(0,o.jsx)(s.Z,{width:c,style:l}):(0,o.jsx)(x,{badSrcs:v.X,size:c,srcs:["/images/chains/".concat(t.chainId,".png")],width:c,style:l}):(0,o.jsx)(x,{badSrcs:v.X,size:c,srcs:p,alt:"".concat(null!==(r=null==t?void 0:t.symbol)&&void 0!==r?r:"token"," logo"),style:l})}},5966:function(n,r,t){t.d(r,{X:function(){return e}});var e={}},34208:function(n,r,t){t.d(r,{X:function(){return e.Z},g:function(){return s}});var e=t(69722),i=t(92228),o=t(52322);function u(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: ",";\n"]);return u=function(){return n},n}var c=t(3411).ZP.div.withConfig({componentId:"sc-b339c6de-0"})(u(),function(n){return n.margin&&"4px"});function s(n){var r=n.currency0,t=n.currency1,i=n.size,u=void 0===i?20:i,s=n.margin;return(0,o.jsxs)(c,{margin:void 0!==s&&s,children:[r&&(0,o.jsx)(e.Z,{currency:r,size:"".concat(u.toString(),"px"),style:{marginRight:"4px"}}),t&&(0,o.jsx)(e.Z,{currency:t,size:"".concat(u.toString(),"px")})]})}},37346:function(n,r,t){t.d(r,{K5:function(){return p},Z:function(){return m},_h:function(){return Z},mM:function(){return x},uD:function(){return g},v2:function(){return h}});var e=t(72027),i=t(2784),o=t(517),u=t(48070),c=t(20173),s=t(56521),a=t(51147),d=t(34498),l=t.n(d),f=t(19358),v=t(92330);function h(n,r){var t,o=(0,i.useMemo)(function(){return null!==(t=null==r?void 0:r.filter(function(n){return!1!==(0,a.UJ)(null==n?void 0:n.address)}))&&void 0!==t?t:[]},[r]),c=(0,i.useMemo)(function(){return o.map(function(n){return n.address})},[o]),s=(0,v._Y)(c,u.ZP,"balanceOf",(0,i.useMemo)(function(){return[n]},[n])),d=(0,i.useMemo)(function(){return s.some(function(n){return n.loading})},[s]);return[(0,i.useMemo)(function(){return n&&o.length>0?o.reduce(function(n,r,t){var i,o,u=null==s?void 0:null===(i=s[t])||void 0===i?void 0:null===(o=i.result)||void 0===o?void 0:o[0],c=u?e.QA.BigInt(u.toString()):void 0;return c&&(n[r.address]=e.ih.fromRawAmount(r,c)),n},{}):{}},[n,o,s]),d]}function m(n,r){return h(n,r)[0]}function x(n,r){var t=m(n,(0,i.useMemo)(function(){return[r]},[r]));if(r)return t[r.address]}function p(n,r){var t,o,u,c,d,h,x,p,Z=m(n,(0,i.useMemo)(function(){return null!==(t=null==r?void 0:r.filter(function(n){return null==n?void 0:n.isToken}))&&void 0!==t?t:[]},[r])),g=(0,i.useMemo)(function(){return null!==(o=null==r?void 0:r.some(function(n){return null==n?void 0:n.isNative}))&&void 0!==o&&o},[r]),j=(c=(0,i.useMemo)(function(){return g?[n]:[]},[g,n]),d=(0,f.Z)(),h=(0,s.gq)(),x=(0,i.useMemo)(function(){return c?l()(c.map(a.UJ).filter(function(n){return!1!==n})):[]},[c]),p=(0,v.es)(h,"getEthBalance",(0,i.useMemo)(function(){return x.map(function(n){return[n]})},[x])),(0,i.useMemo)(function(){return x.reduce(function(n,r,t){var i,o,u=null==p?void 0:null===(i=p[t])||void 0===i?void 0:null===(o=i.result)||void 0===o?void 0:o[0];return u&&(n[r]=e.ih.fromRawAmount(d,e.QA.BigInt(u.toString()))),n},{})},[x,p,d]));return(0,i.useMemo)(function(){return null!==(u=null==r?void 0:r.map(function(r){if(n&&r){if(null==r?void 0:r.isToken)return Z[r.address];if(null==r?void 0:r.isNative)return j[n]}}))&&void 0!==u?u:[]},[n,r,j,Z])}function Z(n,r){return p(n,(0,i.useMemo)(function(){return[r]},[r]))[0]}function g(){var n=(0,o.mA)().address,r=(0,c.e_)(),t=m(null!=n?n:void 0,(0,i.useMemo)(function(){return Object.values(null!=r?r:{})},[r]));return null!=t?t:{}}},64184:function(n,r,t){function e(n){var r;if(null==n?void 0:n.isNative)return null===(r=n.symbol)||void 0===r?void 0:r.toUpperCase();if(null==n?void 0:n.isToken)return n.address;throw Error("invalid currency")}t.d(r,{H:function(){return e}}),r.Z=e},98159:function(n,r,t){var e=t(70865),i=t(96670),o=t(26297),u=t(52322),c=t(73921),s=t(54618),a=t(72027),d=t(15112),l=t(57535);r.Z=function(n){var r=n.children,t=n.removePadding,f=n.hideFooterOnDesktop,v=n.noMinHeight,h=n.helpUrl,m=void 0===h?l.B4:h,x=(0,o.Z)(n,["children","removePadding","hideFooterOnDesktop","noMinHeight","helpUrl"]),p=(0,c.$G)().t,Z=(0,d.g)().chainId===a.a_.BSC,g=Z?p("Bridge assets to BNB Chain"):"";return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s.H.Page,(0,i.Z)((0,e.Z)({removePadding:void 0!==t&&t,noMinHeight:void 0!==v&&v,hideFooterOnDesktop:void 0!==f&&f,helpUrl:m,externalText:g,externalLinkUrl:Z?"https://bridge.pancakeswap.finance/":""},x),{children:r}))})}},36429:function(n,r,t){var e=t(70865),i=t(96670),o=t(52322);t(2784);var u=t(6816);r.Z=function(n){return(0,o.jsx)(u.Z,(0,i.Z)((0,e.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z"})}))}},32404:function(n,r,t){var e=t(70865),i=t(96670),o=t(52322);t(2784);var u=t(6816);r.Z=function(n){return(0,o.jsx)(u.Z,(0,i.Z)((0,e.Z)({viewBox:"0 0 19 19"},n),{children:(0,o.jsx)("path",{d:"M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"})}))}}}]);
//# sourceMappingURL=3052-edc10e59fa81599d.js.map