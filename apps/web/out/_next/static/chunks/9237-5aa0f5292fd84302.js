(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9237],{63868:function(n,e,t){var r={"./":[1632],"./bsc":[6934,6934],"./bsc.ts":[6934,6934],"./bsc_testnet":[67825,7825],"./bsc_testnet.ts":[67825,7825],"./common":[14732,4732],"./common.ts":[14732,4732],"./ethereum":[46743,6743],"./ethereum.ts":[46743,6743],"./goerli":[54479,4479],"./goerli.ts":[54479,4479],"./index":[1632],"./index.ts":[1632],"./priceHelperLps/bsc":[54529],"./priceHelperLps/bsc.ts":[54529],"./priceHelperLps/bsc_testnet":[98516],"./priceHelperLps/bsc_testnet.ts":[98516],"./priceHelperLps/ethereum":[40159],"./priceHelperLps/ethereum.ts":[40159],"./priceHelperLps/getFarmsPriceHelperLpFiles":[15917],"./priceHelperLps/getFarmsPriceHelperLpFiles.ts":[15917],"./priceHelperLps/goerli":[21684],"./priceHelperLps/goerli.ts":[21684]};function o(n){if(!t.o(r,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[n],o=e[0];return Promise.all(e.slice(1).map(t.e)).then(function(){return t(o)})}o.keys=function(){return Object.keys(r)},o.id=63868,n.exports=o},1489:function(n,e,t){"use strict";t.d(e,{_:function(){return h},o:function(){return p}});var r=t(92228),o=t(52322),i=t(33080),c=t(5406),s=t(3411);function l(){var n=(0,r.Z)(["\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 24px 24px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n"]);return l=function(){return n},n}function a(){var n=(0,r.Z)(["\n  justify-content: space-between;\n  background-color: ",";\n  width: 100%;\n"]);return a=function(){return n},n}function d(){var n=(0,r.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  margin: 0;\n  border-radius: 24px 24px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ",";\n  background-color: ",";\n  box-shadow: none;\n"]);return d=function(){return n},n}var u=(0,s.ZP)(i.Z).withConfig({componentId:"sc-269a965c-0"})(l()),x=(0,s.ZP)(i.Z).withConfig({componentId:"sc-269a965c-1"})(a(),function(n){return n.theme.colors.input}),p=(0,s.ZP)(c.ZP).attrs({as:"button"}).withConfig({componentId:"sc-269a965c-2"})(d(),function(n){var e=n.theme;return n.isActive?e.colors.text:e.colors.textSubtle},function(n){var e=n.theme;return n.isActive?e.card.background:e.colors.input});p.defaultProps={p:"16px"};var h=function(n){var e=n.children;return(0,o.jsx)(u,{p:["0 4px","0 16px"],children:(0,o.jsx)(x,{children:e})})}},11822:function(n,e,t){"use strict";t.d(e,{P:function(){return l}});var r=t(70865),o=t(2303),i=t(84205),c=t(79074),s=(0,r.Z)({refreshInterval:15e3},{errorRetryCount:3,errorRetryInterval:3e3}),l=function(n){var e=(0,c.qg)(),t=(0,o.Z)(n&&["info/pool/stableAPR/".concat(n,"/"),e],function(){return(0,i.J)(n)},s).data;return null==t?void 0:t.toNumber()}},99237:function(n,e,t){"use strict";var r,o=t(98788),i=t(87394),c=t(92228),s=t(45680),l=t(52322),a=t(73921),d=t(33080),u=t(20870),x=t(94365),p=t(33193),h=t(97712),f=t(32301),m=t(78002),Z=t(68303),j=t(5406),v=t(80751),b=t(27925),g=t(2572),y=t(41970),k=t(87016),w=t(43435),D=t(72027),S=t(55351),P=t(18152),C=t(15112),I=t(42617),L=t(2784),U=t(64867),z=t(11822),H=t(79074),T=t(38497),E=t(3411),V=t(51147),F=t(85875),_=t(2869),M=t(55889),A=t(93665),O=t(25374),N=t(67934),R=t(2303),q=t(6391),Q=t.n(q);function $(){var n=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-gap: 1em;\n  margin-top: 16px;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n"]);return $=function(){return n},n}function B(){var n=(0,c.Z)(["\n  padding: 8px 0px;\n  margin-right: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return B=function(){return n},n}function Y(){var n=(0,c.Z)(["\n  border: 1px solid ",";\n  background-color: ",";\n  padding: 16px;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  border-radius: 16px;\n  max-width: 280px;\n"]);return Y=function(){return n},n}var X=E.ZP.div.withConfig({componentId:"sc-ef145c21-0"})($()),G=(0,E.ZP)(d.Z).withConfig({componentId:"sc-ef145c21-1"})(B()),W=(0,E.ZP)(d.Z).withConfig({componentId:"sc-ef145c21-2"})(Y(),function(n){return n.theme.colors.cardBorder},function(n){return n.theme.colors.background}),J=(r=(0,o.Z)(function(n){return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,t(63868)("./".concat(n))];case 1:return[2,e.sent()]}})}),function(n){return r.apply(this,arguments)});e.Z=function(n){var e=n.address,t=(0,u.Z)(),r=t.isXs,o=t.isSm,c=(0,a.$G)().t,s=(0,C.g)().chainId,E=(0,i.Z)((0,L.useState)(0),2),q=E[0],$=E[1],B=(0,x.Z)(c("Based on last 7 days' performance. Does not account for impermanent loss"),{}),Y=B.tooltip,K=B.tooltipVisible,nn=B.targetRef,ne=e.toLowerCase(),nt=(0,H.gw)((0,L.useMemo)(function(){return[ne]},[ne]))[0],nr=(0,H.zo)(ne),no=(0,H.A$)(ne),ni=(0,i.Z)((0,T.Hx)(),2),nc=ni[0],ns=ni[1],nl=(0,H.qg)(),na=(0,H.hb)(),nd=(0,H.U1)(),nu=(0,U.J5)(),nx=(0,z.P)(nu&&ne),np=(0,R.Z)(nu&&s&&"info/gerFarmConfig/".concat(s),function(){return J(s)}).data,nh=(0,L.useMemo)(function(){if(nu&&np){var n,e,t=null!==(e=null===(n=null==np?void 0:np.default.find(function(n){var e;return(null===(e=n.stableSwapAddress)||void 0===e?void 0:e.toLowerCase())===ne}))||void 0===n?void 0:n.stableLpFee)&&void 0!==e?e:0;return new(Q())(t).times(q?null==nt?void 0:nt.volumeOutUSDWeek:null==nt?void 0:nt.volumeOutUSD).toNumber()}return q?null==nt?void 0:nt.lpFees7d:null==nt?void 0:nt.lpFees24h},[nt,nu,np,q,ne]),nf=(0,L.useMemo)(function(){return nu?new(Q())(nh).times(2).toNumber():0},[nu,nh]);return(0,l.jsxs)(I.Z,{children:[(0,l.jsx)(S.PB,{title:nt?"".concat(null==nt?void 0:nt.token0.symbol," / ").concat(null==nt?void 0:nt.token1.symbol):null}),nt?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(d.Z,{justifyContent:"space-between",mb:"16px",flexDirection:["column","column","row"],children:[(0,l.jsxs)(p.Z,{mb:"32px",children:[(0,l.jsx)(h.Z,{to:"/info".concat(na).concat(nd),children:(0,l.jsx)(f.Z,{color:"primary",children:c("Info")})}),(0,l.jsx)(h.Z,{to:"/info".concat(na,"/pairs").concat(nd),children:(0,l.jsx)(f.Z,{color:"primary",children:c("Pairs")})}),(0,l.jsx)(d.Z,{children:(0,l.jsx)(f.Z,{mr:"8px",children:"".concat(nt.token0.symbol," / ").concat(nt.token1.symbol)})})]}),(0,l.jsxs)(d.Z,{justifyContent:[null,null,"flex-end"],mt:["8px","8px",0],children:[(0,l.jsx)(m.Z,{isBscScan:U.Pi[nl]===D.a_.BSC,mr:"8px",href:(0,V.C)(ne,"address",U.Pi[nl]),children:c("View on %site%",{site:U.nA[nl]})}),(0,l.jsx)(N.Z,{fill:nc.includes(ne),onClick:function(){return ns(ne)}})]})]}),(0,l.jsxs)(d.Z,{flexDirection:"column",children:[(0,l.jsxs)(d.Z,{alignItems:"center",mb:["8px",null],children:[(0,l.jsx)(_.g,{address0:nt.token0.address,address1:nt.token1.address,size:32,chainName:nl}),(0,l.jsx)(f.Z,{ml:"38px",bold:!0,fontSize:r||o?"24px":"40px",id:"info-pool-pair-title",children:"".concat(nt.token0.symbol," / ").concat(nt.token1.symbol)})]}),(0,l.jsxs)(d.Z,{justifyContent:"space-between",flexDirection:["column","column","column","row"],children:[(0,l.jsxs)(d.Z,{flexDirection:["column","column","row"],mb:["8px","8px",null],children:[(0,l.jsx)(h.Z,{to:"/info".concat(na,"/tokens/").concat(nt.token0.address).concat(nd),children:(0,l.jsxs)(G,{children:[(0,l.jsx)(_.X,{address:nt.token0.address,size:"24px",chainName:nl}),(0,l.jsx)(f.Z,{fontSize:"16px",ml:"4px",style:{whiteSpace:"nowrap"},width:"fit-content",children:"1 ".concat(nt.token0.symbol," =  ").concat((0,F.d)(nt.token1Price,{notation:"standard",displayThreshold:.001,tokenPrecision:!0})," ").concat(nt.token1.symbol)})]})}),(0,l.jsx)(h.Z,{to:"/info".concat(na,"/tokens/").concat(nt.token1.address).concat(nd),children:(0,l.jsxs)(G,{ml:[null,null,"10px"],children:[(0,l.jsx)(_.X,{address:nt.token1.address,size:"24px",chainName:nl}),(0,l.jsx)(f.Z,{fontSize:"16px",ml:"4px",style:{whiteSpace:"nowrap"},width:"fit-content",children:"1 ".concat(nt.token1.symbol," =  ").concat((0,F.d)(nt.token0Price,{notation:"standard",displayThreshold:.001,tokenPrecision:!0})," ").concat(nt.token0.symbol)})]})})]}),(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(h.Z,{to:"/add/".concat(nt.token0.address,"/").concat(nt.token1.address,"?chain=").concat(P.M[s]),children:(0,l.jsx)(Z.Z,{mr:"8px",variant:"secondary",children:c("Add Liquidity")})}),(0,l.jsx)(h.Z,{to:"/swap?inputCurrency=".concat(nt.token0.address,"&outputCurrency=").concat(nt.token1.address,"&chainId=").concat(U.Pi[nl]),children:(0,l.jsx)(Z.Z,{children:c("Trade")})})]})]})]}),(0,l.jsxs)(X,{children:[(0,l.jsxs)(j.ZP,{children:[(0,l.jsx)(v.Z,{children:(0,l.jsxs)(j.ZP,{p:"24px",children:[(0,l.jsxs)(d.Z,{justifyContent:"space-between",children:[(0,l.jsxs)(d.Z,{flex:"1",flexDirection:"column",children:[(0,l.jsx)(f.Z,{color:"secondary",bold:!0,fontSize:"12px",textTransform:"uppercase",children:c("Liquidity")}),(0,l.jsxs)(f.Z,{fontSize:"24px",bold:!0,children:["$",(0,F.d)(nt.liquidityUSD)]}),(0,l.jsx)(O.Z,{value:nt.liquidityUSDChange})]}),(0,l.jsxs)(d.Z,{flex:"1",flexDirection:"column",children:[(0,l.jsx)(f.Z,{color:"secondary",bold:!0,fontSize:"12px",textTransform:"uppercase",children:c("LP reward APR")}),(0,l.jsxs)(f.Z,{fontSize:"24px",bold:!0,children:[(0,F.d)(nu?nx:nt.lpApr7d),"%"]}),(0,l.jsxs)(d.Z,{alignItems:"center",children:[(0,l.jsx)("span",{ref:nn,children:(0,l.jsx)(b.Z,{color:"textSubtle"})}),(0,l.jsx)(f.Z,{ml:"4px",fontSize:"12px",color:"textSubtle",children:c("7D performance")}),K&&Y]})]})]}),(0,l.jsx)(f.Z,{color:"secondary",bold:!0,mt:"24px",fontSize:"12px",textTransform:"uppercase",children:c("Total Tokens Locked")}),(0,l.jsxs)(W,{children:[(0,l.jsxs)(d.Z,{justifyContent:"space-between",children:[(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(_.X,{address:nt.token0.address,size:"24px",chainName:nl}),(0,l.jsx)(f.Z,{small:!0,color:"textSubtle",ml:"8px",children:nt.token0.symbol})]}),(0,l.jsx)(f.Z,{small:!0,children:(0,F.d)(nt.liquidityToken0)})]}),(0,l.jsxs)(d.Z,{justifyContent:"space-between",children:[(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(_.X,{address:nt.token1.address,size:"24px",chainName:nl}),(0,l.jsx)(f.Z,{small:!0,color:"textSubtle",ml:"8px",children:nt.token1.symbol})]}),(0,l.jsx)(f.Z,{small:!0,children:(0,F.d)(nt.liquidityToken1)})]})]})]})}),(0,l.jsx)(v.Z,{mt:"16px",children:(0,l.jsxs)(d.Z,{flexDirection:"column",p:"24px",children:[(0,l.jsxs)(g.Z,{activeIndex:q,onItemClick:function(n){return $(n)},scale:"sm",variant:"subtle",children:[(0,l.jsx)(y.Z,{width:"100%",children:c("24H")}),(0,l.jsx)(y.Z,{width:"100%",children:c("7D")})]}),(0,l.jsxs)(d.Z,{mt:"24px",children:[(0,l.jsxs)(d.Z,{flex:"1",flexDirection:"column",children:[(0,l.jsx)(f.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:c(q?"Volume 7D":"Volume 24H")}),(0,l.jsxs)(f.Z,{fontSize:"24px",bold:!0,children:["$",q?(0,F.d)(nt.volumeUSDWeek):(0,F.d)(nt.volumeUSD)]}),(0,l.jsx)(O.Z,{value:q?nt.volumeUSDChangeWeek:nt.volumeUSDChange})]}),(0,l.jsxs)(d.Z,{flex:"1",flexDirection:"column",children:[(0,l.jsx)(f.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:c(q?"LP reward fees 7D":"LP reward fees 24H")}),(0,l.jsxs)(f.Z,{fontSize:"24px",bold:!0,children:["$",(0,F.d)(nh)]}),(0,l.jsx)(f.Z,{color:"textSubtle",fontSize:"12px",children:c("out of $%totalFees% total fees",{totalFees:nu?(0,F.d)(nf):q?(0,F.d)(nt.totalFees7d):(0,F.d)(nt.totalFees24h)})})]})]})]})})]}),(0,l.jsx)(M.Z,{variant:"pool",chartData:nr})]}),(0,l.jsx)(k.Z,{mb:"16px",mt:"40px",scale:"lg",children:c("Transactions")}),(0,l.jsx)(A.Z,{transactions:no})]}):(0,l.jsx)(d.Z,{mt:"80px",justifyContent:"center",children:(0,l.jsx)(w.Z,{})})]})}},55889:function(n,e,t){"use strict";var r,o,i=t(87394),c=t(52322),s=t(2784),l=t(32301),a=t(11982),d=t(80751),u=t(33080),x=t(5406),p=t(73120),h=t(58514),f=t(1489),m=t(73921),Z=t(85875),j=t(41410),v=t(25237),b=t.n(v)()(function(){return Promise.all([t.e(5754),t.e(5213),t.e(2402)]).then(t.bind(t,22402))},{loadableGenerated:{webpack:function(){return[22402]}},ssr:!1});(r=o||(o={}))[r.LIQUIDITY=0]="LIQUIDITY",r[r.VOLUME=1]="VOLUME",r[r.PRICE=2]="PRICE",e.Z=function(n){var e,t,r,v=n.variant,g=n.chartData,y=n.tokenData,k=n.tokenPriceData,w=(0,i.Z)((0,s.useState)(o.VOLUME),2),D=w[0],S=w[1],P=(0,i.Z)((0,s.useState)(),2),C=P[0],I=P[1],L=(0,i.Z)((0,s.useState)(),2),U=L[0],z=L[1],H=(0,m.$G)(),T=H.t,E=H.currentLanguage.locale,V=new Date().toLocaleString(E,{month:"short",year:"numeric",day:"numeric"}),F=(0,s.useMemo)(function(){return g?g.map(function(n){return{time:(0,j.Z)(n.date),value:n.liquidityUSD}}):[]},[g]),_=(0,s.useMemo)(function(){return g?g.map(function(n){return{time:(0,j.Z)(n.date),value:n.volumeUSD}}):[]},[g]);return(0,c.jsxs)(d.Z,{children:[(0,c.jsxs)(f._,{children:[(0,c.jsx)(f.o,{isActive:D===o.VOLUME,onClick:function(){return S(o.VOLUME)},children:(0,c.jsx)(l.Z,{children:T("Volume")})}),(0,c.jsx)(f.o,{isActive:D===o.LIQUIDITY,onClick:function(){return S(o.LIQUIDITY)},children:(0,c.jsx)(l.Z,{children:T("Liquidity")})}),"token"===v&&(0,c.jsx)(f.o,{isActive:D===o.PRICE,onClick:function(){return S(o.PRICE)},children:(0,c.jsx)(l.Z,{children:T("Price")})})]}),(0,c.jsxs)(u.Z,{flexDirection:"column",px:"24px",pt:"24px",children:[(r=null,C?r=(0,Z.d)(C):D===o.VOLUME&&_.length>0?r=(0,Z.d)(null===(e=_[_.length-1])||void 0===e?void 0:e.value):D===o.LIQUIDITY&&F.length>0?r=(0,Z.d)(null===(t=F[F.length-1])||void 0===t?void 0:t.value):(D===o.PRICE&&(null==y?void 0:y.priceUSD)||(null==y?void 0:y.priceUSD)===0)&&(r=(0,Z.d)(y.priceUSD,{notation:"standard"})),r?(0,c.jsxs)(l.Z,{fontSize:"24px",bold:!0,children:["$",r]}):(0,c.jsx)(a.Z,{height:"36px",width:"128px"})),(0,c.jsx)(l.Z,{small:!0,color:"secondary",children:U||V})]}),(0,c.jsx)(x.ZP,{px:"24px",height:"token"===v?"250px":"335px",children:D===o.LIQUIDITY?(0,c.jsx)(p.Z,{data:F,setHoverValue:I,setHoverDate:z}):D===o.VOLUME?(0,c.jsx)(h.Z,{data:_,setHoverValue:I,setHoverDate:z}):D===o.PRICE?(0,c.jsx)(b,{data:k,setValue:I,setLabel:z}):null})]})}},33193:function(n,e,t){"use strict";var r=t(92228),o=t(50930),i=t(52322),c=t(2784),s=t(3411),l=t(78545),a=t(82743);function d(){var n=(0,r.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  "," {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return d=function(){return n},n}function u(){var n=(0,r.Z)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var x=s.ZP.div.withConfig({componentId:"sc-b9c7047c-0"})(d(),function(n){return n.theme.colors.textDisabled},function(n){return n.theme.mediaQueries.sm},function(n){return n.theme.mediaQueries.md}),p=s.ZP.ul.withConfig({componentId:"sc-b9c7047c-1"})(u(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.primaryBright},l.Dh),h=(0,i.jsx)(a.Z,{color:"currentColor",width:"24px"});e.Z=function(n){var e,t,r=n.separator,s=n.children,l=(e=c.Children.toArray(s).filter(function(n){return(0,c.isValidElement)(n)}),t=void 0===r?h:r,e.reduce(function(n,e,r){return 0===r?(0,o.Z)(n).concat([e]):(0,o.Z)(n).concat([(0,i.jsx)(x,{"aria-hidden":!0,children:t},"separator-".concat(r)),e])},[]));return(0,i.jsx)(p,{children:l.map(function(n,e){return(0,i.jsx)("li",{children:n},"child-".concat(e))})})}},43435:function(n,e,t){"use strict";var r=t(52322);t(2784);var o=t(5406),i=t(19372);e.Z=function(n){var e=n.size,t=void 0===e?128:e;return(0,r.jsx)(o.ZP,{width:t,height:1.197*t,position:"relative",children:(0,r.jsx)(i.Z,{width:t,height:1.197*t,src:"https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif",alt:"pancake-3d-spinner"})})}}}]);
//# sourceMappingURL=9237-5aa0f5292fd84302.js.map