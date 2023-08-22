"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{63705:function(n,e,t){t.d(e,{x:function(){return l},y:function(){return d}});var r=t(70865),o=t(96670),a=t(50154),i=t(4996),u=t(83505),c=(0,o.Z)((0,r.Z)({},(0,i.FL)(function(){return sessionStorage})),{delayInit:!0}),l=(0,u.ZP)("feature-farm-api","pkg",c);function d(n){return(0,a.Dv)(n)}l.onMount=function(n){"farmApi"===new URL(window.location.href).searchParams.get("use")&&n("api")}},11885:function(n,e,t){t.d(e,{X:function(){return d},a:function(){return l}});var r=t(50930),o=t(57535),a=t(2784),i=t(3255),u=t(15112),c=[];function l(n,e){var t=(0,u.g)().chainId,l=(0,i.ZP)(t&&[o.sR,"blockNumber",t]).data,d=void 0===l?0:l;(0,a.useEffect)(n.bind(null,d),[d].concat((0,r.Z)(e||c)))}function d(n,e){var t=(0,u.g)().chainId,l=(0,i.ZP)(t&&[o.KI,"blockNumber",t]).data,d=void 0===l?0:l;(0,a.useEffect)(n.bind(null,d),[d].concat((0,r.Z)(e||c)))}},67845:function(n,e,t){t.d(e,{f6:function(){return H},Dx:function(){return S},E2:function(){return B},w5:function(){return I},Cs:function(){return W},Iu:function(){return L}});var r=t(98788),o=t(45680),a=t(6391),i=t.n(a),u=t(90327),c=t(57535),l=t(14024),d=t(2784),s=t(43997),f=t(95625),p=t(2303),v=t(39241),k=t(70688);t(36561),t(11885);var m=t(63705),h=t(1632),g=t(15112),x=t(71033),w=t(32288),Z=t(5994),b=t(30927),T=t(84483),D=t(67868),P=function(n){var e,t,r,o,a,u,c,l;return{allowance:n.userData?new(i())(n.userData.allowance):v.HW,tokenBalance:n.userData?new(i())(n.userData.tokenBalance):v.HW,stakedBalance:n.userData?new(i())(n.userData.stakedBalance):v.HW,earnings:n.userData?new(i())(n.userData.earnings):v.HW,proxy:{allowance:(null==n?void 0:null===(e=n.userData)||void 0===e?void 0:e.proxy)?new(i())(null==n?void 0:null===(t=n.userData)||void 0===t?void 0:t.proxy.allowance):v.HW,tokenBalance:(null==n?void 0:null===(r=n.userData)||void 0===r?void 0:r.proxy)?new(i())(null==n?void 0:null===(o=n.userData)||void 0===o?void 0:o.proxy.tokenBalance):v.HW,stakedBalance:(null==n?void 0:null===(a=n.userData)||void 0===a?void 0:a.proxy)?new(i())(null==n?void 0:null===(u=n.userData)||void 0===u?void 0:u.proxy.stakedBalance):v.HW,earnings:(null==n?void 0:null===(c=n.userData)||void 0===c?void 0:c.proxy)?new(i())(null==n?void 0:null===(l=n.userData)||void 0===l?void 0:l.proxy.earnings):v.HW}}},y=t(71057),C=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.ki,t=n.lpAddress,r=n.lpSymbol,o=n.pid,a=n.vaultPid,u=n.dual,c=n.multiplier,l=n.isCommunity,d=n.auctionHostingStartSeconds,s=n.quoteTokenPriceBusd,f=n.tokenPriceBusd,p=n.boosted,k=n.infoStableSwapAddress,m=n.stableSwapAddress,h=n.stableLpFee,g=n.stableLpFeeRateOfTotalFee,x=(0,D.Z)(d)?null:new Date(1e3*d),w=x?(0,b.Z)(x,e):null,Z=Date.now();return{lpAddress:t,lpSymbol:r,pid:o,vaultPid:a,dual:u,multiplier:c,isCommunity:l||!!(x&&w&&x.getTime()<Z&&w.getTime()>Z),auctionHostingEndDate:null==w?void 0:w.toJSON(),quoteTokenPriceBusd:s,tokenPriceBusd:f,token:(0,T.iG)(n.token),quoteToken:(0,T.iG)(n.quoteToken),userData:P(n),tokenAmountTotal:n.tokenAmountTotal?new(i())(n.tokenAmountTotal):v.HW,quoteTokenAmountTotal:n.quoteTokenAmountTotal?new(i())(n.quoteTokenAmountTotal):v.HW,lpTotalInQuoteToken:n.lpTotalInQuoteToken?new(i())(n.lpTotalInQuoteToken):v.HW,lpTotalSupply:n.lpTotalSupply?new(i())(n.lpTotalSupply):v.HW,lpTokenPrice:n.lpTokenPrice?new(i())(n.lpTokenPrice):v.HW,tokenPriceVsQuote:n.tokenPriceVsQuote?new(i())(n.tokenPriceVsQuote):v.HW,poolWeight:n.poolWeight?new(i())(n.poolWeight):v.HW,boosted:p,isStable:Boolean(k),stableSwapAddress:m,stableLpFee:h,stableLpFeeRateOfTotalFee:g,lpTokenStakedAmount:n.lpTokenStakedAmount?new(i())(n.lpTokenStakedAmount):v.HW}},A=function(n,e){return function(t){return t.farms.data.find(function(t){return t[n]===e})}};(0,Z.P1)([function(n){return n.farms.data.find(function(n){return 2===n.pid})}],function(n){var e=null==n?void 0:n.tokenPriceBusd;return new(i())(e)});var W=function(){var n=(0,f.TL)(),e=(0,u.Z)(),t=e.account,a=e.chainId,i=(0,k.A)(t,a),l=i.proxyAddress,d=i.proxyCreated,s=i.isLoading,v=(0,m.y)(m.x);(0,p.Z)(a?["publicFarmData",a]:null,(0,r.Z)(function(){var e;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return[4,(0,h.getFarmConfig)(a)];case 1:return e=t.sent().map(function(n){return n.pid}),n((0,x.eG)({pids:e,chainId:a,flag:v})),[2]}})}),{refreshInterval:"api"===v?5e4:c.KI}),(0,p.Z)(t&&a&&!s?d?["farmsWithUserData",t,l,a]:["farmsWithUserData",t,a]:null,(0,r.Z)(function(){var e,r;return(0,o.__generator)(this,function(o){switch(o.label){case 0:return[4,(0,h.getFarmConfig)(a)];case 1:return e=o.sent().map(function(n){return n.pid}),r=d?{account:t,pids:e,proxyAddress:l,chainId:a}:{account:t,pids:e,chainId:a},n((0,x.IV)(r)),[2]}})}),{refreshInterval:c.KI})},B=function(){var n=(0,g.g)().chainId;return(0,s.v9)((0,d.useMemo)(function(){return(0,Z.P1)(function(n){return n.farms},function(e){var t=e.data.map(C).filter(function(e){return e.token.chainId===n});return{loadArchivedFarmsData:e.loadArchivedFarmsData,userDataLoaded:e.userDataLoaded,data:t,poolLength:e.poolLength,regularCakePerBlock:e.regularCakePerBlock}})},[n]))},H=function(n){var e=(0,d.useMemo)(function(){return(0,Z.P1)([A("pid",n)],function(n){return C(n)})},[n]);return(0,s.v9)(e)},S=function(n){var e=(0,d.useMemo)(function(){return(0,Z.P1)([A("pid",n)],function(n){var e=P(n);return{allowance:e.allowance,tokenBalance:e.tokenBalance,stakedBalance:e.stakedBalance,earnings:e.earnings,proxy:e.proxy}})},[n]);return(0,s.v9)(e)},I=function(n){var e=(0,d.useMemo)(function(){return(0,Z.P1)([A("lpSymbol",n)],function(n){var e=v.HW;if(n){var t=n.lpTotalInQuoteToken?new(i())(n.lpTotalInQuoteToken):v.HW,r=n.lpTotalSupply?new(i())(n.lpTotalSupply):v.HW;if(r.gt(0)&&t.gt(0)){var o=new(i())(n.tokenPriceBusd),a=n.tokenAmountTotal?new(i())(n.tokenAmountTotal):v.HW,u=o.times(a).times(2),c=(0,w.U4)(r);e=u.div(c)}}return e})},[n]);return(0,s.v9)(e)},L=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceMainnet:!1}).forceMainnet,e=(0,l.S9)({forceMainnet:n});return(0,d.useMemo)(function(){return e?new(i())(e.toSignificant(6)):v.HW},[e])}},70688:function(n,e,t){t.d(e,{A:function(){return d}});var r=t(98788),o=t(45680),a=t(2303),i=t(57535),u=t(56521),c=t(57647),l=t(11374),d=function(n,e){var t=(0,u.gh)(),d=l.P4.includes(e),s=(0,a.Z)(n&&d&&["bProxyAddress",n,e],(0,r.Z)(function(){return(0,o.__generator)(this,function(e){return[2,t.proxyContract(n)]})})),f=s.data,p=s.status,v=s.mutate;return{proxyAddress:f,isLoading:!!d&&p!==c.iF.Fetched,proxyCreated:f&&f!==i.h5,refreshProxyAddress:v}}},92169:function(n,e,t){var r=t(70865),o=t(96670),a=t(26297),i=t(52322),u=t(32301),c=t(2784),l=t(76597);e.Z=function(n){var e=n.value,t=n.color,d=void 0===t?"text":t,s=n.decimals,f=n.isDisabled,p=void 0!==f&&f,v=n.unit,k=n.prefix,m=n.onClick,h=(0,a.Z)(n,["value","color","decimals","isDisabled","unit","prefix","onClick"]),g=(0,c.useMemo)(function(){return k?{prefix:k}:{}},[k]),x=(0,c.useMemo)(function(){return v?{suffix:v}:{}},[v]);return(0,i.jsx)(l.ZP,(0,o.Z)((0,r.Z)({start:0,preserveValue:!0,delay:0,end:e},g,x),{decimals:void 0===s?3:s,duration:1,separator:",",children:function(n){var e=n.countUpRef;return(0,i.jsx)(u.Z,(0,o.Z)((0,r.Z)({color:p?"textDisabled":d,onClick:m},h),{children:(0,i.jsx)("span",{ref:e})}))}}))}},80751:function(n,e,t){t.d(e,{Z:function(){return h}});var r=t(70865),o=t(96670),a=t(26297),i=t(52322);t(2784);var u=t(92228),c=t(3411),l=t(78545),d=t(26074),s=t(5406);function f(){var n=(0,u.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return f=function(){return n},n}function p(){var n=(0,u.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return p=function(){return n},n}function v(){var n=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return v=function(){return n},n}var k=c.ZP.div.withConfig({componentId:"sc-69ac18f9-0"})(p(),function(n){var e=n.isActive,t=n.isSuccess,r=n.isWarning,o=n.borderBackground,a=n.theme;return o||(r?a.colors.warning:t?a.colors.success:e?"linear-gradient(180deg, ".concat(a.colors.primaryBright,", ").concat(a.colors.secondary,")"):a.colors.cardBorder)},function(n){return n.theme.radii.card},function(n){var e=n.theme,t=n.isDisabled;return e.colors[t?"textDisabled":"text"]},function(n){return n.isActive&&(0,c.iv)(f(),d.DS)},l.Dh),m=(0,c.ZP)(s.ZP).withConfig({componentId:"sc-69ac18f9-1"})(v(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var e=n.theme,t=n.background;return null!=t?t:e.card.background},function(n){return n.theme.radii.card});k.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var h=function(n){var e=n.ribbon,t=n.children,u=n.background,c=(0,a.Z)(n,["ribbon","children","background"]);return(0,i.jsx)(k,(0,o.Z)((0,r.Z)({},c),{children:(0,i.jsxs)(m,{background:u,hasCustomBorder:!!c.borderBackground,children:[e,t]})}))}},40125:function(n,e,t){var r=t(92228),o=t(3411),a=t(78545);function i(){var n=(0,r.Z)(["\n  ","\n"]);return i=function(){return n},n}var u=o.ZP.div.withConfig({componentId:"sc-df4f0a61-0"})(i(),a.Dh);u.defaultProps={p:"24px"},e.Z=u},79704:function(n,e,t){var r=t(70865),o=t(96670),a=t(26297),i=t(52322),u=t(5406);e.Z=function(n){var e=n.children,t=(0,a.Z)(n,["children"]);return(0,i.jsx)(u.ZP,(0,o.Z)((0,r.Z)({px:["16px","24px"],mx:"auto",maxWidth:"1200px"},t),{children:e}))}},23407:function(n,e,t){var r=t(70865),o=t(96670),a=t(52322);t(2784);var i=t(6816);e.Z=function(n){return(0,a.jsx)(i.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 25"},n),{children:(0,a.jsx)("path",{d:"M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"})}))}}}]);
//# sourceMappingURL=497-30616471c0f91092.js.map