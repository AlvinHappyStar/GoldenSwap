"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3205],{92453:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(92330),o=n(56521);function a(){var t,e,n=(0,o.gq)();return null===(t=(0,r.Wk)(n,"getCurrentBlockTimestamp"))||void 0===t?void 0:null===(e=t.result)||void 0===e?void 0:e[0]}},86891:function(t,e,n){n.d(e,{R:function(){return l}});var r=n(72027),o=n(90327),a=n(2784),u=n(63445),i=n(57535),c=n(19022),s=n(95867);function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.gv,n=arguments.length>2?arguments[2]:void 0,l=(0,o.Z)(),p=l.account,d=l.chainId,m=null===n?p:n,f=(0,s.Z)(),h=(0,c.Ti)();return(0,a.useMemo)(function(){if(!t||!m||!p||!d||!f||!h)return[];var n=[];return n.push(r.F0.swapCallParameters(t,{feeOnTransfer:!1,allowedSlippage:new r.gG(r.QA.BigInt(e),u.PM),recipient:m,deadline:f.toNumber()})),t.tradeType===r.YL.EXACT_INPUT&&n.push(r.F0.swapCallParameters(t,{feeOnTransfer:!0,allowedSlippage:new r.gG(r.QA.BigInt(e),u.PM),recipient:m,deadline:f.toNumber()})),n.map(function(t){return{parameters:t,contract:h}})},[p,e,d,h,f,m,t])}},76631:function(t,e,n){n.d(e,{o:function(){return b}});var r,o,a=n(98788),u=n(70865),i=n(50930),c=n(45680),s=n(73921),l=n(72027),p=n(72982),d=n(71967),m=n(57647),f=n(90327),h=n(2784),A=n(38497),g=n(67831),y=n(57535),T=n(46267),v=n(51147),I=n(19022),w=n(76837);function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.gv,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,b=(0,f.Z)(),S=b.account,E=b.chainId,N=(0,A.Fh)(),k=(0,s.$G)().t,P=(0,T.h7)(),_=null===n?S:n;return(0,h.useMemo)(function(){var s;return t&&S&&E?_?{state:o.VALID,callback:(s=(0,a.Z)(function(){var o,a,s,f,h,A,y,T,b,U;return(0,c.__generator)(this,function(c){switch(c.label){case 0:return[4,Promise.all(r.map(function(t){var e,n=t.parameters,r=n.methodName,o=n.args,a=n.value,u=t.contract,c=!a||(0,p.Z)(a)?{}:{value:a};return(e=u.estimateGas)[r].apply(e,(0,i.Z)(o).concat([c])).then(function(e){return{call:t,gasEstimate:e}}).catch(function(e){var n;return console.error("Gas estimate failed, trying eth_call to extract error",t),(n=u.callStatic)[r].apply(n,(0,i.Z)(o).concat([c])).then(function(n){return console.error("Unexpected successful call after failed estimate gas",t,e,n),{call:t,error:k("Unexpected issue with estimating the gas. Please try again.")}}).catch(function(e){return console.error("Call threw error",t,e),{call:t,error:(0,w.e)(e,k)}})})}))];case 1:if(!(a=(o=c.sent()).find(function(t,e,n){return"gasEstimate"in t&&(e===n.length-1||"gasEstimate"in n[e+1])}))){if((s=o.filter(function(t){return"error"in t})).length>0)throw Error(s[s.length-1].error);throw Error(k("Unexpected error. Could not estimate gas for the swap."))}return h=(f=a.call).contract,y=(A=f.parameters).methodName,T=A.args,b=A.value,U=a.gasEstimate,[2,h[y].apply(h,(0,i.Z)(T).concat([(0,u.Z)({gasLimit:(0,v.yC)(U),gasPrice:N},b&&!(0,p.Z)(b)?{value:b,from:S}:{from:S})])).then(function(r){var o=t.inputAmount.currency.symbol,a=t.outputAmount.currency.symbol,i=(0,I.P4)(e),c=t.tradeType===l.YL.EXACT_INPUT?t.inputAmount.toSignificant(3):t.maximumAmountIn(i).toSignificant(3),s=t.tradeType===l.YL.EXACT_OUTPUT?t.outputAmount.toSignificant(3):t.minimumAmountOut(i).toSignificant(3),p="Swap ".concat(t.tradeType===l.YL.EXACT_OUTPUT?"max.":""," ").concat(c," ").concat(o," for ").concat(t.tradeType===l.YL.EXACT_INPUT?"min.":""," ").concat(s," ").concat(a),f=n&&(0,v.UJ)(n)?(0,d.Z)(n):n;return P(r,{summary:_===S?p:"".concat(p," to ").concat(f),translatableSummary:{text:t.tradeType===l.YL.EXACT_OUTPUT?_===S?"Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%":"Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%":_===S?"Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%":"Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%",data:(0,u.Z)({inputAmount:c,inputSymbol:o,outputAmount:s,outputSymbol:a},_!==S&&{recipientAddress:f})},type:"swap"}),(0,g.M)({chainId:E,inputAmount:c,outputAmount:s,input:t.inputAmount.currency,output:t.outputAmount.currency,type:(0,m.hL)(t)?"StableSwap":"V2Swap"}),(0,g.u)({account:S,chainId:E,hash:r.hash}),r.hash}).catch(function(t){if((null==t?void 0:t.code)===4001)throw Error("Transaction rejected.");throw console.error("Swap failed",t,y,T,b),Error(k("Swap failed: %message%",{message:(0,w.e)(t,k)}))})]}})}),function(){return s.apply(this,arguments)}),error:null}:null!==n?{state:o.INVALID,callback:null,error:"Invalid recipient"}:{state:o.LOADING,callback:null,error:null}:{state:o.INVALID,callback:null,error:"Missing dependencies"}},[t,S,E,_,n,r,N,k,P,e])}(r=o||(o={}))[r.INVALID=0]="INVALID",r[r.LOADING=1]="LOADING",r[r.VALID=2]="VALID"},95867:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(2784),o=n(43997),a=n(92453);function u(){var t=(0,o.v9)(function(t){return t.user.userDeadline}),e=(0,a.Z)();return(0,r.useMemo)(function(){if(e&&t)return e.add(t)},[e,t])}},67831:function(t,e,n){n.d(e,{M:function(){return a},u:function(){return o}});var r=n(42029),o=function(t){var e=t.account,n=t.hash,r=t.chainId;fetch("/api/_log/".concat(e,"/").concat(r,"/").concat(n))},a=function(t){var e=t.input,n=t.output,o=t.inputAmount,a=t.outputAmount,u=t.chainId,i=t.type;try{r.cM.info(i,{inputAddress:e.isToken?e.address.toLowerCase():e.symbol,outputAddress:n.isToken?n.address.toLowerCase():n.symbol,inputAmount:o,outputAmount:a,chainId:u})}catch(c){}}},76837:function(t,e,n){n.d(e,{e:function(){return r}});function r(t,e){for(;t;)n=null!==(i=null!==(u=null!==(a=t.reason)&&void 0!==a?a:null===(r=t.data)||void 0===r?void 0:r.message)&&void 0!==u?u:t.message)&&void 0!==i?i:n,t=null!==(c=t.error)&&void 0!==c?c:null===(o=t.data)||void 0===o?void 0:o.originalError;(null==n?void 0:n.indexOf("execution reverted: "))===0&&(n=n.substring(20));var n,r,o,a,u,i,c,s=function(t){return[t,"(".concat(n,")")].join(" ")};switch(n){case"PancakeRouter: EXPIRED":return s(e("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low."));case"PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":case"PancakeRouter: EXCESSIVE_INPUT_AMOUNT":case"PancakeRouter: INSUFFICIENT_A_AMOUNT":case"PancakeRouter: INSUFFICIENT_B_AMOUNT":case"swapMulti: incorrect user balance":case"Pancake: K":return s(e("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."));case"TransferHelper: TRANSFER_FROM_FAILED":return s(e("The input token cannot be transferred. There may be an issue with the input token."));case"Pancake: TRANSFER_FAILED":return s(e("The output token cannot be transferred. There may be an issue with the output token."));default:if((null==n?void 0:n.indexOf("undefined is not an object"))!==-1)return console.error(t,n),e("An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.");return e("Unknown error%reason%. Try increasing your slippage tolerance.",{reason:n?': "'.concat(n,'"'):""})}}},72982:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return/^0x0*$/.test(t)}}}]);
//# sourceMappingURL=3205-429942d02463e3dd.js.map