(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2353],{56650:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nfts",function(){return e(27482)}])},82087:function(n,t,e){"use strict";var r,i,o=e(98788),c=e(70865),a=e(96670),s=e(26297),l=e(87394),d=e(92228),u=e(45680),p=e(52322),f=e(2784),h=e(32301),x=e(5406),v=e(64170),m=e(3411),Z=e(51147),g=e(73921),j=e(80703);function b(){var n=(0,d.Z)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"]);return b=function(){return n},n}function C(){var n=(0,d.Z)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return C=function(){return n},n}(r=i||(i={}))[r.NOT_VALID=0]="NOT_VALID",r[r.FOUND=1]="FOUND",r[r.NOT_FOUND=2]="NOT_FOUND";var w=m.ZP.div.withConfig({componentId:"sc-64ff24db-0"})(b(),function(n){return n.theme.colors.input},function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.radii.default},function(n){return n.theme.radii.default},function(n){return n.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "}),k=(0,m.ZP)(h.Z).withConfig({componentId:"sc-64ff24db-1"})(C()),P={isFetching:!1,resultFound:i.NOT_VALID,value:""},F=function(){return Promise.resolve(!0)};t.Z=function(n){var t=n.onValidAddress,e=void 0===t?F:t,r=n.onAddressClick,d=(0,s.Z)(n,["onValidAddress","onAddressClick"]),m=(0,l.Z)((0,f.useState)(P),2),b=m[0],C=m[1],N=(0,g.$G)().t,I=b.isFetching,y=b.resultFound,B=b.value;return(0,f.useEffect)(function(){var n,t=!1!==(0,Z.UJ)(B),r=(n=(0,o.Z)(function(){var n;return(0,u.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),C(function(n){return(0,a.Z)((0,c.Z)({},n),{isFetching:!0})}),[4,e(B)];case 1:return n=t.sent(),C(function(t){return(0,a.Z)((0,c.Z)({},t),{isFetching:!1,resultFound:n?i.FOUND:i.NOT_FOUND})}),[3,3];case 2:return t.sent(),C(function(n){return(0,a.Z)((0,c.Z)({},n),{isFetching:!1})}),[3,3];case 3:return[2]}})}),function(){return n.apply(this,arguments)});t?r():C(function(n){return(0,a.Z)((0,c.Z)({},n),{resultFound:i.NOT_VALID})})},[B,e,C]),(0,p.jsxs)(x.ZP,(0,a.Z)((0,c.Z)({position:"relative"},d),{children:[(0,p.jsx)(v.Z,{placeholder:N("Search %subject%",{subject:N("Address").toLowerCase()}),value:b.value,onChange:function(n){var t=n.target.value;C(function(n){return(0,a.Z)((0,c.Z)({},n),{value:t})})},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),I&&(0,p.jsx)(x.ZP,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:(0,p.jsx)(j.Z,{})}),(0,p.jsx)(w,{isOpen:y!==i.NOT_VALID,children:y===i.FOUND?(0,p.jsx)(k,{onClick:function(){C(P),r(b.value)},children:b.value}):(0,p.jsx)(h.Z,{px:"16px",fontWeight:"bold",children:N("No results found.")})})]}))}},43155:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(26297),c=e(87394),a=e(92228),s=e(52322),l=e(2784),d=e(3411),u=e(33080),p=e(32301),f=e(61328),h=e(73921);function x(){var n=(0,a.Z)(["\n  cursor: pointer;\n"]);return x=function(){return n},n}function v(){var n=(0,a.Z)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]);return v=function(){return n},n}function m(){var n=(0,a.Z)(["\n  overflow: hidden;\n  height: ",";\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n"]);return m=function(){return n},n}var Z=(0,d.ZP)(u.Z).withConfig({componentId:"sc-8285e73f-0"})(x()),g=(0,d.ZP)(u.Z).withConfig({componentId:"sc-8285e73f-1"})(v()),j=(0,d.ZP)(u.Z).withConfig({componentId:"sc-8285e73f-2"})(m(),function(n){return n.isExpanded?"100%":"0px"},function(n){return n.isExpanded?"16px":"0px"},function(n){return n.theme.colors.inputSecondary});t.Z=function(n){var t=n.title,e=n.children,a=(0,o.Z)(n,["title","children"]),d=(0,h.$G)().t,x=(0,c.Z)((0,l.useState)(!1),2),v=x[0],m=x[1];return(0,s.jsxs)(u.Z,(0,i.Z)((0,r.Z)({},a),{flexDirection:"column",children:[(0,s.jsxs)(Z,{justifyContent:"space-between",alignItems:"center",pb:"16px",onClick:function(){return m(function(n){return!n})},children:[(0,s.jsx)(p.Z,{fontWeight:"bold",children:t}),(0,s.jsx)(g,{children:(0,s.jsx)(f.L,{expanded:v,children:d(v?"Hide":"Details")})})]}),(0,s.jsx)(j,{isExpanded:v,flexDirection:"column",children:e})]}))}},80703:function(n,t,e){"use strict";e.d(t,{Z:function(){return f}});var r=e(70865),i=e(96670),o=e(26297),c=e(92228),a=e(52322),s=e(3411);function l(){var n=(0,c.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return l=function(){return n},n}function d(){var n=(0,c.Z)(["\n  animation: 2s "," linear infinite;\n  height: ",";\n  width: ",";\n  path {\n    stroke: ",";\n  }\n"]);return d=function(){return n},n}var u=(0,s.F4)(l()),p=s.ZP.svg.withConfig({componentId:"sc-fa227f0-0"})(d(),u,function(n){return n.size},function(n){return n.size},function(n){var t=n.stroke,e=n.theme;return null!=t?t:e.colors.primary});function f(n){var t=n.size,e=n.stroke,c=(0,o.Z)(n,["size","stroke"]);return(0,a.jsx)(p,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:void 0===t?"16px":t,stroke:e},c),{children:(0,a.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}},8280:function(n,t,e){"use strict";var r=e(92228),i=e(52322),o=e(3411),c=e(43435),a=e(42617);function s(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return s=function(){return n},n}var l=(0,o.ZP)(a.Z).withConfig({componentId:"sc-5ad34a86-0"})(s());t.Z=function(){return(0,i.jsx)(l,{children:(0,i.jsx)(c.Z,{})})}},27482:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return nn}});var r=e(52322),i=e(92228),o=e(3411),c=e(5406),a=e(36242),s=e(33080),l=e(87016),d=e(68303),u=e(97712),p=e(70239),f=e(78002),h=e(517),x=e(73921),v=e(70865),m=e(96670),Z=e(26297),g=e(80751),j=e(30834),b=e(40125),C=e(32301),w=e(43155),k=function(n){var t=n.header,e=n.config,i=(0,Z.Z)(n,["header","config"]);return(0,r.jsx)(c.ZP,(0,m.Z)((0,v.Z)({maxWidth:"888px"},i),{children:(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(j.Z,{children:(0,r.jsx)(l.Z,{scale:"lg",color:"secondary",children:t})}),(0,r.jsx)(b.Z,{children:e.map(function(n,t,e){var i=n.title,o=n.description,c=e.length;return(0,r.jsx)(w.Z,{id:i,mb:t+1===c?"":"24px",title:i,children:o.map(function(n,t){return(0,r.jsx)(C.Z,{color:"textSubtle",as:"p",children:n},t)})},i)})})]})}))},P=e(8266),F=e(57647),N=e(8280),I=e(84252),y=e(34498),B=e.n(y),A=e(80932),D=e(82743),L=e(74721),T=e(85361),_=e(64036),O=e(79153),S=function(n){var t=n.title,e=n.testId,i=n.collections,o=(0,x.$G)().t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[(0,r.jsx)(l.Z,{as:"h3",scale:"lg","data-test":e,children:t}),(0,r.jsx)(d.Z,{as:u.Z,to:"".concat(T.V,"/collections/"),variant:"secondary",minWidth:"132px",scale:"sm",endIcon:(0,r.jsx)(D.Z,{color:"primary",width:"24px"}),children:o("View All")})]}),(0,r.jsx)(L.Z,{gridGap:"16px",gridTemplateColumns:["1fr","1fr","repeat(2, 1fr)","repeat(3, 1fr)"],mb:"64px",children:i.slice(0,6).map(function(n){return(0,r.jsx)(_.zt,{bgSrc:n.banner.small,avatarSrc:n.avatar,collectionName:n.name,url:"".concat(T.V,"/collections/").concat(n.address),children:(0,r.jsxs)(s.Z,{alignItems:"center",children:[(0,r.jsx)(C.Z,{fontSize:"12px",color:"textSubtle",children:o("Volume")}),(0,r.jsx)(O.Kd,{amount:n.totalVolumeBNB?parseFloat(n.totalVolumeBNB):0})]})},n.address)})})]})},V=e(98788),z=e(87394),U=e(45680),E=e(2784),M=e(17139),W=e(51147),G=e(76546),H=function(){var n=(0,z.Z)((0,E.useState)(null),2),t=n[0],e=n[1];return(0,E.useEffect)(function(){var n;(n=(0,V.Z)(function(){var n,t;return(0,U.__generator)(this,function(r){switch(r.label){case 0:return[4,(0,M.dk)(16)];case 1:return n=r.sent(),[4,(0,M._C)(n.map(function(n){return{collectionAddress:n.collection.id,tokenId:n.tokenId}}))];case 2:return t=r.sent(),e(n.map(function(n){var e=t.find(function(t){return t.tokenId===n.tokenId});return e?(0,m.Z)((0,v.Z)({},e),{marketData:n}):null}).filter(Boolean)),[2]}})}),function(){return n.apply(this,arguments)})()},[]),t},$=function(){var n=(0,x.$G)().t,t=H();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{justifyContent:"space-between",alignItems:"center",mb:"26px",children:[(0,r.jsx)(l.Z,{"data-test":"nfts-newest",children:n("Newest Arrivals")}),(0,r.jsx)(d.Z,{as:u.Z,to:"".concat(T.V,"/activity/"),variant:"secondary",scale:"sm",endIcon:(0,r.jsx)(D.Z,{color:"primary"}),children:n("View All")})]}),t?(0,r.jsx)(L.Z,{gridRowGap:"24px",gridColumnGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"],children:t.map(function(n){var t,e,i=(0,W.UJ)(n.collectionAddress)!==T.J&&(null===(t=n.marketData)||void 0===t?void 0:t.isTradable)?parseFloat(null===(e=n.marketData)||void 0===e?void 0:e.currentAskPrice):void 0;return(0,r.jsx)(_.ts,{"data-test":"newest-nft-card",nft:n,currentAskPrice:i},n.collectionAddress+n.tokenId)})}):(0,r.jsx)(G.Z,{numItems:8})]})};function K(){var n=(0,i.Z)(["\n  background: ",";\n"]);return K=function(){return n},n}function Q(){var n=(0,i.Z)(["\n  margin-bottom: -40px;\n  padding-bottom: 40px;\n"]);return Q=function(){return n},n}function R(){var n=(0,i.Z)(["\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  & div:nth-child(1) {\n    order: 1;\n  }\n  & div:nth-child(2) {\n    order: 0;\n    margin-bottom: 32px;\n    align-self: end;\n  }\n  "," {\n    flex-direction: row;\n    & div:nth-child(1) {\n      order: 0;\n    }\n    & div:nth-child(2) {\n      order: 1;\n      margin-bottom: 0;\n      align-self: auto;\n    }\n  }\n"]);return R=function(){return n},n}var J=(0,o.ZP)(c.ZP).withConfig({componentId:"sc-7f85635-0"})(K(),function(n){return n.theme.colors.gradientCardHeader}),Y=(0,o.ZP)(a.Z).withConfig({componentId:"sc-7f85635-1"})(Q()),X=(0,o.ZP)(s.Z).withConfig({componentId:"sc-7f85635-2"})(R(),function(n){return n.theme.mediaQueries.sm}),q=function(){var n=(0,x.$G)().t,t=(0,h.mA)().address,e=(0,I.ZP)().theme,i=(0,P.t8)(),o=i.data,c=i.status,a=B()(o,function(n){return n.totalVolumeBNB?parseFloat(n.totalVolumeBNB):0},"desc"),s=B()(o,function(n){return n.createdAt?Date.parse(n.createdAt):0},"desc");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{children:(0,r.jsxs)(X,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"24px",children:n("NFT Marketplace")}),(0,r.jsx)(l.Z,{scale:"lg",color:"text",children:n("Buy and Sell NFTs on BNB Smart Chain")}),t&&(0,r.jsx)(d.Z,{as:u.Z,to:"/profile/".concat(t.toLowerCase()),mt:"32px",children:n("Manage/Sell")})]}),(0,r.jsx)(A.Z,{})]})}),c!==F.iF.Fetched?(0,r.jsx)(N.Z,{}):(0,r.jsxs)(p.Z,{innerProps:{style:{margin:"0",width:"100%"}},background:e.colors.background,index:1,concaveDivider:!0,dividerPosition:"top",children:[(0,r.jsx)(S,{title:n("Newest Collections"),testId:"nfts-newest-collections",collections:s},"newest-collections"),(0,r.jsx)(S,{title:n("Hot Collections"),testId:"nfts-hot-collections",collections:a},"hot-collections"),(0,r.jsx)($,{})]}),(0,r.jsxs)(J,{p:"64px 0",children:[(0,r.jsx)(k,{header:n("FAQs"),config:[{title:n("I sold an NFT, where’s my BNB?"),description:[n("Trades are settled in WBNB, which is a wrapped version of BNB used on BNB Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB."),n("You can instantly swap your WBNB for BNB with no trading fees on PancakeSwap.")]},{title:n("How can I list my NFT collection on the Market?"),description:[n("In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed."),n("We are now accepting applications from NFT collection owners seeking to list their collections."),(0,r.jsx)(f.Z,{href:"https://docs.pancakeswap.finance/contact-us/nft-market-applications",children:n("Please apply here")})]},{title:n("What are the fees?"),description:[n("100% of all platform fees taken by PancakeSwap from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns."),n("Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.")]}],m:"auto"}),(0,r.jsx)(f.Z,{href:"https://docs.pancakeswap.finance/contact-us/nft-market-applications",mx:"auto",mt:"16px",children:n("Apply to NFT Marketplace!")})]})]})},nn=function(){return(0,r.jsx)(q,{})}},76546:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(26297),c=e(52322),a=e(5406),s=e(11982),l=e(74721),d=e(61258),u=e.n(d),p=function(n){return(0,c.jsxs)(a.ZP,(0,i.Z)((0,r.Z)({},n),{children:[(0,c.jsx)(s.Z,{height:"258px",mb:"8px"}),(0,c.jsx)(s.Z,{width:"30%",mb:"4px"}),(0,c.jsx)(s.Z,{width:"45%",mb:"16px"}),(0,c.jsx)(s.Z,{})]}))};t.Z=function(n){var t=n.numItems,e=(0,o.Z)(n,["numItems"]);return(0,c.jsx)(l.Z,(0,i.Z)((0,r.Z)({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},e),{children:u()(void 0===t?12:t).map(function(n){return(0,c.jsx)(p,{},n)})}))}},80932:function(n,t,e){"use strict";var r=e(70865),i=e(52322),o=e(82087),c=e(5632);t.Z=function(n){var t=(0,c.useRouter)();return(0,i.jsx)(o.Z,(0,r.Z)({onAddressClick:function(n){t.push("/profile/".concat(n))}},n))}},61328:function(n,t,e){"use strict";e.d(t,{L:function(){return l},N:function(){return s}});var r=e(52322);e(2784);var i=e(52571),o=e(21585),c=e(68303),a=e(79221),s=function(n){var t=n.onClick,e=n.expanded,c=n.children;return(0,r.jsxs)(a.Z,{"aria-label":"Hide or show expandable content",onClick:t,children:[c,e?(0,r.jsx)(i.Z,{color:"invertedContrast"}):(0,r.jsx)(o.Z,{color:"invertedContrast"})]})};s.defaultProps={expanded:!1};var l=function(n){var t=n.onClick,e=n.expanded,a=n.children;return(0,r.jsx)(c.Z,{variant:"text","aria-label":"Hide or show expandable content",onClick:t,endIcon:e?(0,r.jsx)(i.Z,{color:"primary"}):(0,r.jsx)(o.Z,{color:"primary"}),children:a})};l.defaultProps={expanded:!1}},30834:function(n,t,e){"use strict";var r=e(92228),i=e(3411),o=e(78545);function c(){var n=(0,r.Z)(["\n  background: ",";\n  border-radius: ",";\n  ","\n"]);return c=function(){return n},n}var a=i.ZP.div.withConfig({componentId:"sc-e97edbbd-0"})(c(),function(n){var t=n.theme,e=n.variant;return t.card.cardHeaderBackground[void 0===e?"default":e]},function(n){var t=n.theme;return"".concat(t.radii.card," ").concat(t.radii.card," 0 0")},o.Dh);a.defaultProps={p:"24px"},t.Z=a},79704:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(26297),c=e(52322),a=e(5406);t.Z=function(n){var t=n.children,e=(0,o.Z)(n,["children"]);return(0,c.jsx)(a.ZP,(0,i.Z)((0,r.Z)({px:["16px","24px"],mx:"auto",maxWidth:"1200px"},e),{children:t}))}},36242:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(26297),c=e(92228),a=e(52322),s=e(3411),l=e(5406),d=e(79704);function u(){var n=(0,c.Z)(["\n  background: ",";\n"]);return u=function(){return n},n}function p(){var n=(0,c.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  position: relative;\n"]);return p=function(){return n},n}var f=(0,s.ZP)(l.ZP).withConfig({componentId:"sc-a56468b1-0"})(u(),function(n){var t=n.theme;return n.background||t.colors.gradientBubblegum}),h=(0,s.ZP)(d.Z).withConfig({componentId:"sc-a56468b1-1"})(p());t.Z=function(n){var t=n.background,e=n.children,c=(0,o.Z)(n,["background","children"]);return(0,a.jsx)(f,(0,i.Z)((0,r.Z)({background:t},c),{children:(0,a.jsx)(h,{children:e})}))}},70239:function(n,t,e){"use strict";e.d(t,{Z:function(){return D}});var r=e(70865),i=e(96670),o=e(26297),c=e(92228),a=e(52322),s=e(2784),l=e(3411),d=e(79704),u=e(33080),p=e(5406);function f(){var n=(0,c.Z)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"]);return f=function(){return n},n}function h(){var n=(0,c.Z)(["\n  ","\n  transform: ",";\n"]);return h=function(){return n},n}function x(){var n=(0,c.Z)(["\n  ","\n  transform: ",";\n"]);return x=function(){return n},n}var v=function(n,t,e){return(0,l.iv)(f(),t,function(){return n.isDark?(null==e?void 0:e.dark)||(null==e?void 0:e.light)||n.colors.background:(null==e?void 0:e.light)||n.colors.background})},m=(0,l.ZP)(p.ZP).withConfig({componentId:"sc-d3967ae-0"})(h(),function(n){return v(n.theme,n.clipPath,n.clipFill)},function(n){return"#bottomConcaveCurve"===n.clipPath?"translate(0, -13px)":"translate(0, 1px)"}),Z=(0,l.ZP)(p.ZP).withConfig({componentId:"sc-d3967ae-1"})(x(),function(n){return v(n.theme,n.clipPath,n.clipFill)},function(n){return"#bottomConvexCurve"===n.clipPath?"translate(0, -13px)":"translate(0, -1px)"}),g=function(n){var t=n.clipFill;return(0,a.jsx)(Z,{clipFill:t,clipPath:"#topConvexCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},j=function(n){var t=n.clipFill;return(0,a.jsx)(Z,{clipFill:t,clipPath:"#bottomConvexCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},b=function(n){var t=n.clipFill;return(0,a.jsx)(m,{clipFill:t,clipPath:"#topConcaveCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},C=function(n){var t=n.clipFill;return(0,a.jsx)(m,{clipFill:t,clipPath:"#bottomConcaveCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})};function w(){var n=(0,c.Z)(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);return w=function(){return n},n}function k(){var n=(0,c.Z)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return k=function(){return n},n}var P=l.ZP.div.withConfig({componentId:"sc-da6db049-0"})(w(),function(n){var t=n.theme,e=n.dividerFill;return t.isDark?(null==e?void 0:e.dark)||(null==e?void 0:e.light)||"none":(null==e?void 0:e.light)||(null==e?void 0:e.dark)||"none"},function(n){return n.index}),F=l.ZP.div.withConfig({componentId:"sc-da6db049-1"})(k(),function(n){return n.index+1}),N=function(n){var t=n.index,e=n.dividerPosition,r=n.dividerComponent,i=n.concave,o=n.clipFill,c=n.dividerFill;return(0,a.jsxs)(P,{index:t,dividerFill:c,children:[r&&(0,a.jsx)(F,{index:t,children:r}),(0,a.jsxs)(a.Fragment,{children:["top"===e&&i&&(0,a.jsx)(b,{clipFill:o}),"bottom"===e&&i&&(0,a.jsx)(C,{clipFill:o})]}),(0,a.jsxs)(a.Fragment,{children:["top"===e&&!i&&(0,a.jsx)(g,{clipFill:o}),"bottom"===e&&!i&&(0,a.jsx)(j,{clipFill:o})]})]})};function I(){var n=(0,c.Z)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  padding: ",";\n"]);return I=function(){return n},n}function y(){var n=(0,c.Z)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"]);return y=function(){return n},n}var B=(0,l.ZP)(u.Z).attrs({className:"page-bg"}).withConfig({componentId:"sc-7e37d43a-0"})(I(),function(n){return n.index-1},function(n){return n.padding}),A=(0,l.ZP)(d.Z).withConfig({componentId:"sc-7e37d43a-1"})(y(),function(n){return n.theme.mediaQueries.sm},function(n){return n.theme.mediaQueries.lg}),D=function(n){var t=n.children,e=n.svgFill,c=n.index,l=void 0===c?1:c,d=n.dividerComponent,u=n.dividerPosition,f=void 0===u?"bottom":u,h=n.hasCurvedDivider,x=void 0===h||h,v=n.concaveDivider,m=void 0!==v&&v,Z=n.clipFill,g=n.dividerFill,j=n.containerProps,b=n.innerProps,C=(0,o.Z)(n,["children","svgFill","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"]),w=(0,s.useMemo)(function(){return x?"bottom"===f?"48px 0 14px":"top"===f?"14px 0 48px":"48px 0":"48px 0"},[f,x]);return(0,a.jsxs)(p.ZP,(0,i.Z)((0,r.Z)({},j),{children:[x&&"top"===f&&(0,a.jsx)(N,{svgFill:e,index:l,concave:m,dividerPosition:f,dividerComponent:d,clipFill:Z,dividerFill:g}),(0,a.jsx)(B,(0,i.Z)((0,r.Z)({index:l,padding:w},C),{children:(0,a.jsx)(A,(0,i.Z)((0,r.Z)({},b),{children:t}))})),x&&"bottom"===f&&(0,a.jsx)(N,{svgFill:e,index:l,concave:m,dividerPosition:f,dividerComponent:d,clipFill:Z,dividerFill:g})]}))}},43435:function(n,t,e){"use strict";var r=e(52322);e(2784);var i=e(5406),o=e(19372);t.Z=function(n){var t=n.size,e=void 0===t?128:t;return(0,r.jsx)(i.ZP,{width:e,height:1.197*e,position:"relative",children:(0,r.jsx)(o.Z,{width:e,height:1.197*e,src:"https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif",alt:"pancake-3d-spinner"})})}},52571:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(52322);e(2784);var c=e(6816);t.Z=function(n){return(0,o.jsx)(c.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))}}},function(n){n.O(0,[6707,4184,8911,4036,9774,2888,179],function(){return n(n.s=56650)}),_N_E=n.O()}]);
//# sourceMappingURL=nfts-e86f1b69152a31df.js.map