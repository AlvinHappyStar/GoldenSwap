"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7665],{33132:function(n,e,r){r.d(e,{N:function(){return i}});var t,i,o=r(92228),c=r(52322),a=r(3411),s=r(68303),u=r(82743),d=r(21585),l=r(40330),f=r(5406),p=r(33080),h=r(73921);function v(){var n=(0,o.Z)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"]);return v=function(){return n},n}function m(){var n=(0,o.Z)(["\n  width: 100%;\n\n  "," {\n    ","\n  }\n"]);return m=function(){return n},n}function g(){var n=(0,o.Z)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return g=function(){return n},n}function Z(){var n=(0,o.Z)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"]);return Z=function(){return n},n}(t=i||(i={})).ROW="row",t.SEQUENTIAL="sequential";var b=a.ZP.div.withConfig({componentId:"sc-fc3c7c2-0"})(v(),function(n){return n.theme.mediaQueries.md}),x=(0,a.ZP)(s.Z).withConfig({componentId:"sc-fc3c7c2-1"})(m(),function(n){return n.theme.mediaQueries.md},function(n){return n.useMinWidth&&"  \n    min-width: 160px;\n  "}),C={width:"24px",color:"textDisabled"},w=(0,a.ZP)(u.Z).attrs(C).withConfig({componentId:"sc-fc3c7c2-2"})(g(),function(n){return n.theme.mediaQueries.md}),k=(0,a.ZP)(d.Z).attrs(C).withConfig({componentId:"sc-fc3c7c2-3"})(Z(),function(n){return n.theme.mediaQueries.md}),y=(0,c.jsx)(l.Z,{spin:!0,color:"currentColor"});e.Z=function(n){var e=n.isApproveDisabled,r=n.isApproving,t=n.isConfirming,o=n.isConfirmDisabled,a=n.onApprove,s=n.onConfirm,u=n.buttonArrangement,d=void 0===u?i.ROW:u,l=n.confirmLabel,v=n.confirmId,m=n.useMinWidth,g=void 0===m||m,Z=(0,h.$G)().t,C=null!=l?l:Z("Confirm");return d===i.ROW?(0,c.jsxs)(b,{children:[(0,c.jsx)(f.ZP,{children:(0,c.jsx)(x,{disabled:e,onClick:a,endIcon:r?y:void 0,isLoading:r,useMinWidth:g,children:Z(r?"Enabling":"Enable")})}),(0,c.jsxs)(p.Z,{justifyContent:"center",children:[(0,c.jsx)(w,{}),(0,c.jsx)(k,{})]}),(0,c.jsx)(f.ZP,{children:(0,c.jsx)(x,{id:v,onClick:s,disabled:o,isLoading:t,endIcon:t?y:void 0,useMinWidth:g,children:t?Z("Confirming"):C})})]}):(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)(f.ZP,{children:(0,c.jsx)(x,{id:v,onClick:s,disabled:o,isLoading:t,endIcon:t?y:void 0,children:t?Z("Confirming"):C})}):(0,c.jsx)(f.ZP,{children:(0,c.jsx)(x,{onClick:a,endIcon:r?y:void 0,isLoading:r,children:Z(r?"Enabling":"Enable")})})})}},42351:function(n,e,r){var t=r(98788),i=r(70865),o=r(96670),c=r(87394),a=r(45680),s=r(2784),u=r(34291),d=r.n(u),l=r(517),f=r(90395),p={approvalState:"idle",confirmState:"idle"},h=function(n,e){switch(e.type){case"approve_sending":return(0,o.Z)((0,i.Z)({},n),{approvalState:"loading"});case"approve_receipt":return(0,o.Z)((0,i.Z)({},n),{approvalState:"success"});case"approve_error":return(0,o.Z)((0,i.Z)({},n),{approvalState:"fail"});case"confirm_sending":return(0,o.Z)((0,i.Z)({},n),{confirmState:"loading"});case"confirm_receipt":return(0,o.Z)((0,i.Z)({},n),{confirmState:"success"});case"confirm_error":return(0,o.Z)((0,i.Z)({},n),{confirmState:"fail"});default:return n}};e.Z=function(n){var e=n.onApprove,r=n.onConfirm,i=n.onRequiresApproval,o=n.onSuccess,u=void 0===o?d():o,v=n.onApproveSuccess,m=void 0===v?d():v,g=(0,l.mA)().address,Z=(0,c.Z)((0,s.useReducer)(h,p),2),b=Z[0],x=Z[1],C=(0,s.useRef)(i),w=(0,f.Z)().fetchWithCatchTxError,k=(0,s.useCallback)((0,t.Z)(function(){var n;return(0,a.__generator)(this,function(r){switch(r.label){case 0:return[4,w(function(){return x({type:"approve_sending"}),e()})];case 1:return(null==(n=r.sent())?void 0:n.status)?(x({type:"approve_receipt"}),m({state:b,receipt:n})):x({type:"approve_error"}),[2]}})}),[e,m,b,w]),y=(0,s.useCallback)((0,t.Z)(function(){var n,e,t=arguments;return(0,a.__generator)(this,function(i){switch(i.label){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{},[4,w(function(){return x({type:"confirm_sending"}),r(n)})];case 1:return(null==(e=i.sent())?void 0:e.status)?(x({type:"confirm_receipt"}),u({state:b,receipt:e})):x({type:"confirm_error"}),[2]}})}),[r,x,u,b,w]);return(0,s.useEffect)(function(){g&&C.current&&C.current().then(function(n){n||x({type:"approve_receipt"})})},[g,C,x]),{isApproving:"loading"===b.approvalState,isApproved:"success"===b.approvalState,isConfirming:"loading"===b.confirmState,isConfirmed:"success"===b.confirmState,hasApproveFailed:"fail"===b.approvalState,hasConfirmFailed:"fail"===b.confirmState,handleApprove:k,handleConfirm:y}}},25571:function(n,e,r){r.d(e,{d:function(){return v}});var t=r(98788),i=r(70865),o=r(96670),c=r(50930),a=r(45680),s=r(43997),u=r(2784),d=r(38497),l=r(72579),f=r.n(l),p=r(12483),h=r(50071);function v(){var n,e=(0,d.Fh)(),r=(0,s.v9)(function(n){return n.user.gasPrice});return{callWithGasPrice:(0,u.useCallback)((n=(0,t.Z)(function(n,t){var s,u,d,l,v,m,g=arguments;return(0,a.__generator)(this,function(a){switch(a.label){case 0:return s=g.length>2&&void 0!==g[2]?g[2]:[],u=g.length>3&&void 0!==g[3]?g[3]:null,(0,p.n_)({type:"Transaction",message:r===h.j4.rpcDefault?"Call with market gas price":"Call with gas price: ".concat(e),data:{contractAddress:n.address,methodName:t,methodArgs:s,overrides:u}}),d=f()(n,t),l=null==u?void 0:u.gasPrice,[4,d.apply(void 0,(0,c.Z)(s).concat([l?(0,i.Z)({},u):(0,o.Z)((0,i.Z)({},u),{gasPrice:e})]))];case 1:return(v=a.sent())&&(0,p.n_)({type:"Transaction",message:"Transaction sent: ".concat(v.hash),data:{hash:v.hash,from:v.from,gasLimit:null===(m=v.gasLimit)||void 0===m?void 0:m.toString(),nonce:v.nonce}}),[2,v]}})}),function(e,r){return n.apply(this,arguments)}),[e,r])}}},35136:function(n,e,r){r.d(e,{S:function(){return a}});var t,i=r(98788),o=r(45680),c=r(10528),a=(t=(0,i.Z)(function(n,e,r){var t,i,a=arguments;return(0,o.__generator)(this,function(o){switch(o.label){case 0:t=a.length>3&&void 0!==a[3]?a[3]:0,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,n.allowance(e,r)];case 2:if(i=o.sent(),"number"==typeof t&&t>0||c.O$.isBigNumber(t)&&t.gt(0))return[2,i.lt(t)];return[2,i.lte(0)];case 3:return o.sent(),[2,!0];case 4:return[2]}})}),function(n,e,r){return t.apply(this,arguments)})},40015:function(n,e,r){r.d(e,{L:function(){return v},n:function(){return m}});var t=r(98788),i=r(45680),o=r(2784),c=r(45455),a=r.n(c),s=r(8266),u=r(36813),d=r(17139),l=r(3255),f=r(57647),p=r(67262),h=r(51147),v=function(n,e,r){var t=m(n,e,r,(0,s.t8)().data);return{nfts:t.nfts,isLoading:t.isLoading,refresh:t.refresh}},m=function(n,e,r,c){var s,v=(0,o.useRef)(null),m=(0,p.zP)(n);v.current&&m!==n&&v.current();var g=null==e?void 0:e.tokenId,Z=null==e?void 0:null===(s=e.tokenId)||void 0===s?void 0:s.toString(),b=null==e?void 0:e.collectionAddress,x=(0,o.useMemo)(function(){return g?{tokenId:Z,collectionAddress:b,nftLocation:u.Fb.PROFILE}:null},[Z,b,g]),C=(0,l.ZP)(!r&&!a()(c)&&(0,h.UJ)(n)?[n,"userNfts"]:null,(0,t.Z)(function(){return(0,i.__generator)(this,function(e){return[2,(0,d.A8)(n,c,x)]})}),{keepPreviousData:!0}),w=C.status,k=C.data,y=C.mutate,_=C.resetLaggy;return v.current=_,{nfts:null!=k?k:[],isLoading:w!==f.iF.Fetched,refresh:y}}},45077:function(n,e,r){var t=r(70865),i=r(96670),o=r(26297),c=r(92228),a=r(52322),s=r(3411),u=r(80751),d=r(71859);function l(){var n=(0,c.Z)(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"]);return l=function(){return n},n}function f(){var n=(0,c.Z)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]);return f=function(){return n},n}function p(){var n=(0,c.Z)(["\n  margin-left: 16px;\n"]);return p=function(){return n},n}function h(){var n=(0,c.Z)(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"]);return h=function(){return n},n}var v=s.ZP.label.withConfig({componentId:"sc-f89ddf15-0"})(l(),function(n){return n.isDisabled?"not-allowed":"pointer"},function(n){return n.isDisabled?"0.6":"1"}),m=s.ZP.div.withConfig({componentId:"sc-f89ddf15-1"})(f()),g=s.ZP.div.withConfig({componentId:"sc-f89ddf15-2"})(p()),Z=s.ZP.div.withConfig({componentId:"sc-f89ddf15-3"})(h(),function(n){return n.src});e.Z=function(n){var e=n.name,r=n.value,c=n.isChecked,s=void 0!==c&&c,l=n.image,f=n.onChange,p=n.disabled,h=n.children,b=(0,o.Z)(n,["name","value","isChecked","image","onChange","disabled","children"]);return(0,a.jsx)(u.Z,(0,i.Z)((0,t.Z)({isSuccess:s,isDisabled:p,mb:"16px"},b),{children:(0,a.jsxs)(v,{isDisabled:p,children:[(0,a.jsxs)(m,{children:[(0,a.jsx)(d.Z,{name:e,checked:s,value:r,onChange:function(n){return f(n.target.value)},disabled:p,style:{flex:"none"}}),(0,a.jsx)(g,{children:h})]}),(0,a.jsx)(Z,{src:l})]})}))}},71859:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(92228),i=r(3411),o=r(78545),c={SM:"sm",MD:"md"};function a(){var n=(0,t.Z)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"]);return a=function(){return n},n}var s=function(n){switch(n.scale){case c.SM:return"24px";case c.MD:default:return"32px"}},u=function(n){switch(n.scale){case c.SM:return"12px";case c.MD:default:return"20px"}},d=i.ZP.input.attrs({type:"radio"}).withConfig({componentId:"sc-407ed64c-0"})(a(),s,s,function(n){return n.theme.colors.input},function(n){return n.theme.shadows.inset},u,u,function(n){return n.theme.shadows.focus},function(n){return n.theme.shadows.focus},function(n){return n.theme.colors.success},function(n){return n.theme.radio.handleBackground},o.Dh);d.defaultProps={scale:c.MD,m:0};var l=d}}]);
//# sourceMappingURL=7665-123196f35bad1317.js.map