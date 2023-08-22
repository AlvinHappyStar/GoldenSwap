"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1985],{1489:function(n,e,r){r.d(e,{_:function(){return h},o:function(){return p}});var t=r(92228),i=r(52322),o=r(33080),c=r(5406),s=r(3411);function l(){var n=(0,t.Z)(["\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 24px 24px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n"]);return l=function(){return n},n}function a(){var n=(0,t.Z)(["\n  justify-content: space-between;\n  background-color: ",";\n  width: 100%;\n"]);return a=function(){return n},n}function d(){var n=(0,t.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  margin: 0;\n  border-radius: 24px 24px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ",";\n  background-color: ",";\n  box-shadow: none;\n"]);return d=function(){return n},n}var u=(0,s.ZP)(o.Z).withConfig({componentId:"sc-269a965c-0"})(l()),x=(0,s.ZP)(o.Z).withConfig({componentId:"sc-269a965c-1"})(a(),function(n){return n.theme.colors.input}),p=(0,s.ZP)(c.ZP).attrs({as:"button"}).withConfig({componentId:"sc-269a965c-2"})(d(),function(n){var e=n.theme;return n.isActive?e.colors.text:e.colors.textSubtle},function(n){var e=n.theme;return n.isActive?e.card.background:e.colors.input});p.defaultProps={p:"16px"};var h=function(n){var e=n.children;return(0,i.jsx)(u,{p:["0 4px","0 16px"],children:(0,i.jsx)(x,{children:e})})}},11985:function(n,e,r){r.d(e,{Z:function(){return B}});var t=r(87394),i=r(92228),o=r(50930),c=r(52322),s=r(73921),l=r(91928),a=r(20870),d=r(80751),u=r(5406),x=r(32301),p=r(97712),h=r(33080),f=r(33193),m=r(78002),j=r(19372),Z=r(68303),g=r(87016),v=r(43435),b=r(72027),y=r(55351),S=r(15112),D=r(18152),k=r(71967),w=r(42617),C=r(26390),U=r(2784),I=r(64867),P=r(79074),L=r(38497),T=r(3411),z=r(51147),E=r(85875),V=r(2869),M=r(55889),A=r(36657),_=r(93665),q=r(25374),$=r(67934),F=r(98788),H=r(45680),Q=r(2303);function O(){var n=(0,i.Z)(["\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-gap: 1em;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n"]);return O=function(){return n},n}function R(){var n=(0,i.Z)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n\n  & :hover {\n    opacity: 0.8;\n  }\n"]);return R=function(){return n},n}var W=T.ZP.div.withConfig({componentId:"sc-bb13ffc7-0"})(O()),J=(0,T.ZP)(l.Z).withConfig({componentId:"sc-bb13ffc7-1"})(R()),Y={weeks:1},B=function(n){var e=n.routeAddress,r=(0,a.Z)(),i=r.isXs,l=r.isSm,T=(0,s.$G)().t,O=(0,S.g)().chainId,R=e.toLowerCase(),B=(0,Q.Z)(R?["cmcLink",R]:null,(0,F.Z)(function(){var n;return(0,H.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("".concat("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/contract?address=").concat(R))];case 1:if(!(n=e.sent()).ok)return[3,3];return[4,n.json()];case 2:return[2,e.sent().data.url];case 3:return[2,void 0]}})})).data,N=(0,P.b6)(R),G=(0,P.P6)(R),X=(0,P.gw)((0,U.useMemo)(function(){return null!=G?G:[]},[G])),K=(0,P.nT)(R),nn=(0,P.Jj)(R),ne=(0,P.QB)(R,C.Tb,Y),nr=(0,U.useMemo)(function(){if(ne&&N&&ne.length>0)return(0,o.Z)(ne).concat([{time:new Date().getTime()/1e3,open:ne[ne.length-1].close,close:null==N?void 0:N.priceUSD,high:null==N?void 0:N.priceUSD,low:ne[ne.length-1].close}])},[ne,N]),nt=(0,t.Z)((0,L.z6)(),2),ni=nt[0],no=nt[1],nc=(0,P.hb)(),ns=(0,P.qg)(),nl=(0,P.U1)();return(0,c.jsxs)(w.Z,{children:[(0,c.jsx)(y.PB,{title:null==N?void 0:N.symbol}),N?N.exists?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(h.Z,{justifyContent:"space-between",mb:"24px",flexDirection:["column","column","row"],children:[(0,c.jsxs)(f.Z,{mb:"32px",children:[(0,c.jsx)(p.Z,{to:"/info".concat(nc).concat(nl),children:(0,c.jsx)(x.Z,{color:"primary",children:T("Info")})}),(0,c.jsx)(p.Z,{to:"/info".concat(nc,"/tokens").concat(nl),children:(0,c.jsx)(x.Z,{color:"primary",children:T("Tokens")})}),(0,c.jsxs)(h.Z,{children:[(0,c.jsx)(x.Z,{mr:"8px",children:N.symbol}),(0,c.jsx)(x.Z,{children:"(".concat((0,k.Z)(R),")")})]})]}),(0,c.jsxs)(h.Z,{justifyContent:[null,null,"flex-end"],mt:["8px","8px",0],children:[(0,c.jsx)(m.Z,{isBscScan:I.Pi[ns]===b.a_.BSC,mr:"8px",color:"primary",href:(0,z.C)(R,"address",I.Pi[ns]),children:T("View on %site%",{site:I.nA[ns]})}),B&&(0,c.jsx)(J,{href:B,rel:"noopener noreferrer nofollow",target:"_blank",children:(0,c.jsx)(j.Z,{src:"/images/CMC-logo.svg",height:22,width:22,alt:T("View token on CoinMarketCap")})}),(0,c.jsx)($.Z,{fill:ni.includes(R),onClick:function(){return no(R)}})]})]}),(0,c.jsxs)(h.Z,{justifyContent:"space-between",flexDirection:["column","column","column","row"],children:[(0,c.jsxs)(h.Z,{flexDirection:"column",mb:["8px",null],children:[(0,c.jsxs)(h.Z,{alignItems:"center",children:[(0,c.jsx)(V.X,{size:"32px",address:R,chainName:ns}),(0,c.jsx)(x.Z,{ml:"12px",bold:!0,lineHeight:"0.7",fontSize:i||l?"24px":"40px",id:"info-token-name-title",children:N.name}),(0,c.jsxs)(x.Z,{ml:"12px",lineHeight:"1",color:"textSubtle",fontSize:i||l?"14px":"20px",children:["(",N.symbol,")"]})]}),(0,c.jsxs)(h.Z,{mt:"8px",ml:"46px",alignItems:"center",children:[(0,c.jsxs)(x.Z,{mr:"16px",bold:!0,fontSize:"24px",children:["$",(0,E.d)(N.priceUSD,{notation:"standard"})]}),(0,c.jsx)(q.Z,{value:N.priceUSDChange,fontWeight:600})]})]}),(0,c.jsxs)(h.Z,{children:[(0,c.jsx)(p.Z,{to:"/add/".concat(R,"?chain=").concat(D.M[O]),children:(0,c.jsx)(Z.Z,{mr:"8px",variant:"secondary",children:T("Add Liquidity")})}),(0,c.jsx)(p.Z,{to:"/swap?outputCurrency=".concat(R,"&chainId=").concat(I.Pi[ns]),children:(0,c.jsx)(Z.Z,{children:T("Trade")})})]})]}),(0,c.jsxs)(W,{children:[(0,c.jsx)(d.Z,{children:(0,c.jsxs)(u.ZP,{p:"24px",children:[(0,c.jsx)(x.Z,{bold:!0,small:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:T("Liquidity")}),(0,c.jsxs)(x.Z,{bold:!0,fontSize:"24px",children:["$",(0,E.d)(N.liquidityUSD)]}),(0,c.jsx)(q.Z,{value:N.liquidityUSDChange}),(0,c.jsx)(x.Z,{mt:"24px",bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:T("Volume 24H")}),(0,c.jsxs)(x.Z,{bold:!0,fontSize:"24px",textTransform:"uppercase",children:["$",(0,E.d)(N.volumeUSD)]}),(0,c.jsx)(q.Z,{value:N.volumeUSDChange}),(0,c.jsx)(x.Z,{mt:"24px",bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:T("Volume 7D")}),(0,c.jsxs)(x.Z,{bold:!0,fontSize:"24px",children:["$",(0,E.d)(N.volumeUSDWeek)]}),(0,c.jsx)(x.Z,{mt:"24px",bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:T("Transactions 24H")}),(0,c.jsx)(x.Z,{bold:!0,fontSize:"24px",children:(0,E.d)(N.txCount,{isInteger:!0})})]})}),(0,c.jsx)(M.Z,{variant:"token",chartData:nn,tokenData:N,tokenPriceData:nr})]}),(0,c.jsx)(g.Z,{scale:"lg",mb:"16px",mt:"40px",children:T("Pairs")}),(0,c.jsx)(A.Z,{poolDatas:X}),(0,c.jsx)(g.Z,{scale:"lg",mb:"16px",mt:"40px",children:T("Transactions")}),(0,c.jsx)(_.Z,{transactions:K})]}):(0,c.jsx)(d.Z,{children:(0,c.jsx)(u.ZP,{p:"16px",children:(0,c.jsxs)(x.Z,{children:[T("No pair has been created with this token yet. Create one"),(0,c.jsx)(p.Z,{style:{display:"inline",marginLeft:"6px"},to:"/add/".concat(R),children:T("here.")})]})})}):(0,c.jsx)(h.Z,{mt:"80px",justifyContent:"center",children:(0,c.jsx)(v.Z,{})})]})}},55889:function(n,e,r){var t,i,o=r(87394),c=r(52322),s=r(2784),l=r(32301),a=r(11982),d=r(80751),u=r(33080),x=r(5406),p=r(73120),h=r(58514),f=r(1489),m=r(73921),j=r(85875),Z=r(41410),g=r(25237),v=r.n(g)()(function(){return Promise.all([r.e(5754),r.e(5213),r.e(2402)]).then(r.bind(r,22402))},{loadableGenerated:{webpack:function(){return[22402]}},ssr:!1});(t=i||(i={}))[t.LIQUIDITY=0]="LIQUIDITY",t[t.VOLUME=1]="VOLUME",t[t.PRICE=2]="PRICE",e.Z=function(n){var e,r,t,g=n.variant,b=n.chartData,y=n.tokenData,S=n.tokenPriceData,D=(0,o.Z)((0,s.useState)(i.VOLUME),2),k=D[0],w=D[1],C=(0,o.Z)((0,s.useState)(),2),U=C[0],I=C[1],P=(0,o.Z)((0,s.useState)(),2),L=P[0],T=P[1],z=(0,m.$G)(),E=z.t,V=z.currentLanguage.locale,M=new Date().toLocaleString(V,{month:"short",year:"numeric",day:"numeric"}),A=(0,s.useMemo)(function(){return b?b.map(function(n){return{time:(0,Z.Z)(n.date),value:n.liquidityUSD}}):[]},[b]),_=(0,s.useMemo)(function(){return b?b.map(function(n){return{time:(0,Z.Z)(n.date),value:n.volumeUSD}}):[]},[b]);return(0,c.jsxs)(d.Z,{children:[(0,c.jsxs)(f._,{children:[(0,c.jsx)(f.o,{isActive:k===i.VOLUME,onClick:function(){return w(i.VOLUME)},children:(0,c.jsx)(l.Z,{children:E("Volume")})}),(0,c.jsx)(f.o,{isActive:k===i.LIQUIDITY,onClick:function(){return w(i.LIQUIDITY)},children:(0,c.jsx)(l.Z,{children:E("Liquidity")})}),"token"===g&&(0,c.jsx)(f.o,{isActive:k===i.PRICE,onClick:function(){return w(i.PRICE)},children:(0,c.jsx)(l.Z,{children:E("Price")})})]}),(0,c.jsxs)(u.Z,{flexDirection:"column",px:"24px",pt:"24px",children:[(t=null,U?t=(0,j.d)(U):k===i.VOLUME&&_.length>0?t=(0,j.d)(null===(e=_[_.length-1])||void 0===e?void 0:e.value):k===i.LIQUIDITY&&A.length>0?t=(0,j.d)(null===(r=A[A.length-1])||void 0===r?void 0:r.value):(k===i.PRICE&&(null==y?void 0:y.priceUSD)||(null==y?void 0:y.priceUSD)===0)&&(t=(0,j.d)(y.priceUSD,{notation:"standard"})),t?(0,c.jsxs)(l.Z,{fontSize:"24px",bold:!0,children:["$",t]}):(0,c.jsx)(a.Z,{height:"36px",width:"128px"})),(0,c.jsx)(l.Z,{small:!0,color:"secondary",children:L||M})]}),(0,c.jsx)(x.ZP,{px:"24px",height:"token"===g?"250px":"335px",children:k===i.LIQUIDITY?(0,c.jsx)(p.Z,{data:A,setHoverValue:I,setHoverDate:T}):k===i.VOLUME?(0,c.jsx)(h.Z,{data:_,setHoverValue:I,setHoverDate:T}):k===i.PRICE?(0,c.jsx)(v,{data:S,setValue:I,setLabel:T}):null})]})}},36657:function(n,e,r){var t=r(87394),i=r(92228),o=r(52322),c=r(73921),s=r(97712),l=r(11982),a=r(32301),d=r(33080),u=r(78861),x=r(59696),p=r(5406),h=r(26390),f=r(2784),m=r(79074),j=r(3411),Z=r(85875),g=r(2869),v=r(14279);function b(){var n=(0,i.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 20px 3.5fr repeat(5, 1fr);\n\n  padding: 0 24px;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 1.5fr repeat(3, 1fr);\n    & :nth-child(4),\n    & :nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 20px 1.5fr repeat(1, 1fr);\n    & :nth-child(4),\n    & :nth-child(5),\n    & :nth-child(6),\n    & :nth-child(7) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: 2.5fr repeat(1, 1fr);\n    > *:nth-child(1) {\n      display: none;\n    }\n  }\n"]);return b=function(){return n},n}function y(){var n=(0,i.Z)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);return y=function(){return n},n}var S=j.ZP.div.withConfig({componentId:"sc-4ae98e2a-0"})(b()),D=(0,j.ZP)(s.Z).withConfig({componentId:"sc-4ae98e2a-1"})(y()),k={volumeUSD:"volumeUSD",liquidityUSD:"liquidityUSD",volumeUSDWeek:"volumeUSDWeek",lpFees24h:"lpFees24h",lpApr7d:"lpApr7d"},w=function(){return(0,o.jsxs)(S,{children:[(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{})]})},C=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{}),(0,o.jsx)(w,{}),(0,o.jsx)(w,{})]})},U=function(n){var e=n.poolData,r=n.index,t=(0,m.qg)(),i=(0,m.hb)(),c=(0,m.U1)();return(0,o.jsx)(D,{to:"/info".concat(i,"/pairs/").concat(e.address).concat(c),children:(0,o.jsxs)(S,{children:[(0,o.jsx)(a.Z,{children:r+1}),(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(g.g,{address0:e.token0.address,address1:e.token1.address,chainName:t}),(0,o.jsxs)(a.Z,{ml:"8px",children:[e.token0.symbol,"/",e.token1.symbol]})]}),(0,o.jsxs)(a.Z,{children:["$",(0,Z.d)(e.volumeUSD)]}),(0,o.jsxs)(a.Z,{children:["$",(0,Z.d)(e.volumeUSDWeek)]}),(0,o.jsxs)(a.Z,{children:["$",(0,Z.d)(e.lpFees24h)]}),(0,o.jsxs)(a.Z,{children:[(0,Z.d)(e.lpApr7d),"%"]}),(0,o.jsxs)(a.Z,{children:["$",(0,Z.d)(e.liquidityUSD)]})]})})};e.Z=function(n){var e=n.poolDatas,r=n.loading,i=(0,t.Z)((0,f.useState)(k.volumeUSD),2),s=i[0],l=i[1],d=(0,t.Z)((0,f.useState)(!0),2),m=d[0],j=d[1],Z=(0,c.$G)().t,g=(0,t.Z)((0,f.useState)(1),2),b=g[0],y=g[1],D=(0,t.Z)((0,f.useState)(1),2),I=D[0],P=D[1];(0,f.useEffect)(function(){var n=1;e.length%h.si==0&&(n=0),P(Math.floor(e.length/h.si)+n)},[e]);var L=(0,f.useMemo)(function(){return e?e.sort(function(n,e){return n&&e?n[s]>e[s]?(m?-1:1)*1:-((m?-1:1)*1):-1}).slice(h.si*(b-1),b*h.si):[]},[b,e,m,s]),T=(0,f.useCallback)(function(n){l(n),j(s!==n||!m)},[m,s]),z=(0,f.useCallback)(function(n){return s===n?m?"↓":"↑":""},[m,s]);return(0,o.jsxs)(v.y6,{children:[(0,o.jsxs)(S,{children:[(0,o.jsx)(a.Z,{color:"secondary",fontSize:"12px",bold:!0,children:"#"}),(0,o.jsx)(a.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:Z("Pair")}),(0,o.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return T(k.volumeUSD)},textTransform:"uppercase",children:[Z("Volume 24H")," ",z(k.volumeUSD)]}),(0,o.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return T(k.volumeUSDWeek)},textTransform:"uppercase",children:[Z("Volume 7D")," ",z(k.volumeUSDWeek)]}),(0,o.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return T(k.lpFees24h)},textTransform:"uppercase",children:[Z("LP reward fees 24H")," ",z(k.lpFees24h)]}),(0,o.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return T(k.lpApr7d)},textTransform:"uppercase",children:[Z("LP reward APR")," ",z(k.lpApr7d)]}),(0,o.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return T(k.liquidityUSD)},textTransform:"uppercase",children:[Z("Liquidity")," ",z(k.liquidityUSD)]})]}),(0,o.jsx)(v.SS,{}),L.length>0?(0,o.jsxs)(o.Fragment,{children:[L.map(function(n,e){return n?(0,o.jsxs)(f.Fragment,{children:[(0,o.jsx)(U,{index:(b-1)*h.si+e,poolData:n}),(0,o.jsx)(v.SS,{})]},n.address):null}),r&&(0,o.jsx)(w,{}),(0,o.jsxs)(v.Ob,{children:[(0,o.jsx)(v.Eh,{onClick:function(){y(1===b?b:b-1)},children:(0,o.jsx)(u.Z,{color:1===b?"textDisabled":"primary"})}),(0,o.jsx)(a.Z,{children:Z("Page %page% of %maxPage%",{page:b,maxPage:I})}),(0,o.jsx)(v.Eh,{onClick:function(){y(b===I?b:b+1)},children:(0,o.jsx)(x.Z,{color:b===I?"textDisabled":"primary"})})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(p.ZP,{})]})]})}},33193:function(n,e,r){var t=r(92228),i=r(50930),o=r(52322),c=r(2784),s=r(3411),l=r(78545),a=r(82743);function d(){var n=(0,t.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  "," {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return d=function(){return n},n}function u(){var n=(0,t.Z)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var x=s.ZP.div.withConfig({componentId:"sc-b9c7047c-0"})(d(),function(n){return n.theme.colors.textDisabled},function(n){return n.theme.mediaQueries.sm},function(n){return n.theme.mediaQueries.md}),p=s.ZP.ul.withConfig({componentId:"sc-b9c7047c-1"})(u(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.primaryBright},l.Dh),h=(0,o.jsx)(a.Z,{color:"currentColor",width:"24px"});e.Z=function(n){var e,r,t=n.separator,s=n.children,l=(e=c.Children.toArray(s).filter(function(n){return(0,c.isValidElement)(n)}),r=void 0===t?h:t,e.reduce(function(n,e,t){return 0===t?(0,i.Z)(n).concat([e]):(0,i.Z)(n).concat([(0,o.jsx)(x,{"aria-hidden":!0,children:r},"separator-".concat(t)),e])},[]));return(0,o.jsx)(p,{children:l.map(function(n,e){return(0,o.jsx)("li",{children:n},"child-".concat(e))})})}},43435:function(n,e,r){var t=r(52322);r(2784);var i=r(5406),o=r(19372);e.Z=function(n){var e=n.size,r=void 0===e?128:e;return(0,t.jsx)(i.ZP,{width:r,height:1.197*r,position:"relative",children:(0,t.jsx)(o.Z,{width:r,height:1.197*r,src:"https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif",alt:"pancake-3d-spinner"})})}}}]);
//# sourceMappingURL=1985-9f6b5293bcd131d9.js.map