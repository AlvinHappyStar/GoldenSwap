(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7324],{74930:function(n,i,t){var e=t(66188),r=0;n.exports=function(n){var i=++r;return e(n)+i}},80751:function(n,i,t){"use strict";t.d(i,{Z:function(){return v}});var e=t(70865),r=t(96670),l=t(26297),o=t(52322);t(2784);var C=t(92228),d=t(3411),c=t(78545),s=t(26074),a=t(5406);function u(){var n=(0,C.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return u=function(){return n},n}function f(){var n=(0,C.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return f=function(){return n},n}function x(){var n=(0,C.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return x=function(){return n},n}var p=d.ZP.div.withConfig({componentId:"sc-69ac18f9-0"})(f(),function(n){var i=n.isActive,t=n.isSuccess,e=n.isWarning,r=n.borderBackground,l=n.theme;return r||(e?l.colors.warning:t?l.colors.success:i?"linear-gradient(180deg, ".concat(l.colors.primaryBright,", ").concat(l.colors.secondary,")"):l.colors.cardBorder)},function(n){return n.theme.radii.card},function(n){var i=n.theme,t=n.isDisabled;return i.colors[t?"textDisabled":"text"]},function(n){return n.isActive&&(0,d.iv)(u(),s.DS)},c.Dh),h=(0,d.ZP)(a.ZP).withConfig({componentId:"sc-69ac18f9-1"})(x(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var i=n.theme,t=n.background;return null!=t?t:i.card.background},function(n){return n.theme.radii.card});p.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var v=function(n){var i=n.ribbon,t=n.children,C=n.background,d=(0,l.Z)(n,["ribbon","children","background"]);return(0,o.jsx)(p,(0,r.Z)((0,e.Z)({},d),{children:(0,o.jsxs)(h,{background:C,hasCustomBorder:!!d.borderBackground,children:[i,t]})}))}},40125:function(n,i,t){"use strict";var e=t(92228),r=t(3411),l=t(78545);function o(){var n=(0,e.Z)(["\n  ","\n"]);return o=function(){return n},n}var C=r.ZP.div.withConfig({componentId:"sc-df4f0a61-0"})(o(),l.Dh);C.defaultProps={p:"24px"},i.Z=C},28506:function(n,i,t){"use strict";var e=t(92228),r=t(3411),l=t(78545);function o(){var n=(0,e.Z)(["\n  border-top: 1px solid ",";\n  ","\n"]);return o=function(){return n},n}var C=r.ZP.div.withConfig({componentId:"sc-5ed8a823-0"})(o(),function(n){return n.theme.colors.cardBorder},l.Dh);C.defaultProps={p:"24px"},i.Z=C},79704:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(26297),o=t(52322),C=t(5406);i.Z=function(n){var i=n.children,t=(0,l.Z)(n,["children"]);return(0,o.jsx)(C.ZP,(0,r.Z)((0,e.Z)({px:["16px","24px"],mx:"auto",maxWidth:"1200px"},t),{children:i}))}},70239:function(n,i,t){"use strict";t.d(i,{Z:function(){return y}});var e=t(70865),r=t(96670),l=t(26297),o=t(92228),C=t(52322),d=t(2784),c=t(3411),s=t(79704),a=t(33080),u=t(5406);function f(){var n=(0,o.Z)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"]);return f=function(){return n},n}function x(){var n=(0,o.Z)(["\n  ","\n  transform: ",";\n"]);return x=function(){return n},n}function p(){var n=(0,o.Z)(["\n  ","\n  transform: ",";\n"]);return p=function(){return n},n}var h=function(n,i,t){return(0,c.iv)(f(),i,function(){return n.isDark?(null==t?void 0:t.dark)||(null==t?void 0:t.light)||n.colors.background:(null==t?void 0:t.light)||n.colors.background})},v=(0,c.ZP)(u.ZP).withConfig({componentId:"sc-d3967ae-0"})(x(),function(n){return h(n.theme,n.clipPath,n.clipFill)},function(n){return"#bottomConcaveCurve"===n.clipPath?"translate(0, -13px)":"translate(0, 1px)"}),L=(0,c.ZP)(u.ZP).withConfig({componentId:"sc-d3967ae-1"})(p(),function(n){return h(n.theme,n.clipPath,n.clipFill)},function(n){return"#bottomConvexCurve"===n.clipPath?"translate(0, -13px)":"translate(0, -1px)"}),Z=function(n){var i=n.clipFill;return(0,C.jsx)(L,{clipFill:i,clipPath:"#topConvexCurve",children:(0,C.jsx)("svg",{width:"0",height:"0",children:(0,C.jsx)("defs",{children:(0,C.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,C.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},j=function(n){var i=n.clipFill;return(0,C.jsx)(L,{clipFill:i,clipPath:"#bottomConvexCurve",children:(0,C.jsx)("svg",{width:"0",height:"0",children:(0,C.jsx)("defs",{children:(0,C.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,C.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},m=function(n){var i=n.clipFill;return(0,C.jsx)(v,{clipFill:i,clipPath:"#topConcaveCurve",children:(0,C.jsx)("svg",{width:"0",height:"0",children:(0,C.jsx)("defs",{children:(0,C.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,C.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},F=function(n){var i=n.clipFill;return(0,C.jsx)(v,{clipFill:i,clipPath:"#bottomConcaveCurve",children:(0,C.jsx)("svg",{width:"0",height:"0",children:(0,C.jsx)("defs",{children:(0,C.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,C.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})};function g(){var n=(0,o.Z)(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);return g=function(){return n},n}function M(){var n=(0,o.Z)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return M=function(){return n},n}var b=c.ZP.div.withConfig({componentId:"sc-da6db049-0"})(g(),function(n){var i=n.theme,t=n.dividerFill;return i.isDark?(null==t?void 0:t.dark)||(null==t?void 0:t.light)||"none":(null==t?void 0:t.light)||(null==t?void 0:t.dark)||"none"},function(n){return n.index}),w=c.ZP.div.withConfig({componentId:"sc-da6db049-1"})(M(),function(n){return n.index+1}),D=function(n){var i=n.index,t=n.dividerPosition,e=n.dividerComponent,r=n.concave,l=n.clipFill,o=n.dividerFill;return(0,C.jsxs)(b,{index:i,dividerFill:o,children:[e&&(0,C.jsx)(w,{index:i,children:e}),(0,C.jsxs)(C.Fragment,{children:["top"===t&&r&&(0,C.jsx)(m,{clipFill:l}),"bottom"===t&&r&&(0,C.jsx)(F,{clipFill:l})]}),(0,C.jsxs)(C.Fragment,{children:["top"===t&&!r&&(0,C.jsx)(Z,{clipFill:l}),"bottom"===t&&!r&&(0,C.jsx)(j,{clipFill:l})]})]})};function P(){var n=(0,o.Z)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  padding: ",";\n"]);return P=function(){return n},n}function A(){var n=(0,o.Z)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"]);return A=function(){return n},n}var B=(0,c.ZP)(a.Z).attrs({className:"page-bg"}).withConfig({componentId:"sc-7e37d43a-0"})(P(),function(n){return n.index-1},function(n){return n.padding}),k=(0,c.ZP)(s.Z).withConfig({componentId:"sc-7e37d43a-1"})(A(),function(n){return n.theme.mediaQueries.sm},function(n){return n.theme.mediaQueries.lg}),y=function(n){var i=n.children,t=n.svgFill,o=n.index,c=void 0===o?1:o,s=n.dividerComponent,a=n.dividerPosition,f=void 0===a?"bottom":a,x=n.hasCurvedDivider,p=void 0===x||x,h=n.concaveDivider,v=void 0!==h&&h,L=n.clipFill,Z=n.dividerFill,j=n.containerProps,m=n.innerProps,F=(0,l.Z)(n,["children","svgFill","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"]),g=(0,d.useMemo)(function(){return p?"bottom"===f?"48px 0 14px":"top"===f?"14px 0 48px":"48px 0":"48px 0"},[f,p]);return(0,C.jsxs)(u.ZP,(0,r.Z)((0,e.Z)({},j),{children:[p&&"top"===f&&(0,C.jsx)(D,{svgFill:t,index:c,concave:v,dividerPosition:f,dividerComponent:s,clipFill:L,dividerFill:Z}),(0,C.jsx)(B,(0,r.Z)((0,e.Z)({index:c,padding:g},F),{children:(0,C.jsx)(k,(0,r.Z)((0,e.Z)({},m),{children:i}))})),p&&"bottom"===f&&(0,C.jsx)(D,{svgFill:t,index:c,concave:v,dividerPosition:f,dividerComponent:s,clipFill:L,dividerFill:Z})]}))}},4945:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsxs)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 24 24"},n),{children:[(0,l.jsx)("path",{d:"M5.98327 15.2932C7.57238 14.6803 9.69993 14.3224 12 14.3224C14.3001 14.3224 16.4276 14.6803 18.0167 15.2932C18.808 15.5984 19.5168 15.9864 20.0451 16.4682C20.5739 16.9503 21 17.6045 21 18.4081C21 20.1597 19.6652 21.6227 17.921 21.7829L17.7834 21.7955C13.9359 22.1489 10.0641 22.1489 6.21662 21.7955L6.07901 21.7829C4.33478 21.6227 3 20.1597 3 18.4081C3 17.6045 3.42611 16.9503 3.95486 16.4682C4.48317 15.9864 5.19201 15.5984 5.98327 15.2932Z"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.7256 1C8.72367 1 7.96795 1.90072 8.15187 2.87568L8.58709 5.18266C7.11275 5.82653 6 6.93833 6 8.33333V9.18182C6 10.3351 6.77077 11.3007 7.84829 11.9526C8.93423 12.6095 10.4033 13 12 13C13.5967 13 15.0658 12.6095 16.1517 11.9526C17.2292 11.3007 18 10.3351 18 9.18182V8.33333C18 6.9309 16.8757 5.81482 15.3888 5.17222L15.8221 2.87568C16.006 1.90072 15.2503 1 14.2483 1C13.3642 1 12.6474 1.70952 12.6474 2.58476V4.53674C12.4347 4.52247 12.2187 4.51515 12 4.51515C11.7724 4.51515 11.5477 4.52308 11.3265 4.53853V2.58476C11.3265 1.70952 10.6098 1 9.7256 1Z"})]}))}},15804:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsx)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 24 24"},n),{children:(0,l.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"})}))}},33475:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsx)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 20 20"},n),{children:(0,l.jsx)("path",{d:"M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z"})}))}},76946:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsx)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 20 20"},n),{children:(0,l.jsx)("path",{d:"M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z"})}))}},66882:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsxs)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 25 25"},n),{children:[(0,l.jsx)("path",{d:"M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z",fill:"#F6AF5B"}),(0,l.jsx)("path",{d:"M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z",fill:"#F6AF5B"}),(0,l.jsx)("path",{d:"M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z",fill:"#AE5714"}),(0,l.jsx)("path",{d:"M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z",fill:"#AE5714"}),(0,l.jsx)("ellipse",{cx:"12.5259",cy:"14.0971",rx:"8.89606",ry:"8.22211",fill:"#E17A2F"}),(0,l.jsx)("ellipse",{rx:"8.69974",ry:"8.36325",transform:"matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)",fill:"#F6AF5B"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z",fill:"#F7D29B"}),(0,l.jsx)("ellipse",{rx:"6.64749",ry:"6.39038",transform:"matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)",fill:"#E7974D"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z",fill:"#E17A2F"}),(0,l.jsx)("path",{d:"M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z",fill:"#AE5714"}),(0,l.jsx)("path",{d:"M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z",fill:"#AE5714"})]}))}},60540:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsxs)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 25 25"},n),{children:[(0,l.jsx)("path",{d:"M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z",fill:"#FFD800"}),(0,l.jsx)("path",{d:"M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z",fill:"#FFD800"}),(0,l.jsx)("path",{d:"M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z",fill:"#FFAF00"}),(0,l.jsx)("path",{d:"M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z",fill:"#FFAF00"}),(0,l.jsx)("ellipse",{cx:"12.5259",cy:"14.0971",rx:"8.89606",ry:"8.22211",fill:"#EB8C00"}),(0,l.jsx)("ellipse",{rx:"8.69974",ry:"8.36325",transform:"matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)",fill:"#FFD800"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z",fill:"#FEED8D"}),(0,l.jsx)("ellipse",{rx:"6.64749",ry:"6.39038",transform:"matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)",fill:"#FFC700"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z",fill:"#FFAF00"}),(0,l.jsx)("path",{d:"M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z",fill:"#EB8C00"}),(0,l.jsx)("path",{d:"M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z",fill:"#EB8C00"})]}))}},52591:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsxs)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 25 25"},n),{children:[(0,l.jsx)("path",{d:"M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z",fill:"#9A6AFF"}),(0,l.jsx)("path",{d:"M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z",fill:"#9A6AFF"}),(0,l.jsx)("path",{d:"M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z",fill:"#A880FD"}),(0,l.jsx)("path",{d:"M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z",fill:"#A880FD"}),(0,l.jsx)("ellipse",{cx:"12.5259",cy:"14.0971",rx:"8.89606",ry:"8.22211",fill:"#7645D9"}),(0,l.jsx)("ellipse",{rx:"8.69974",ry:"8.36325",transform:"matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)",fill:"#9A6AFF"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z",fill:"#CAB3F8"}),(0,l.jsx)("ellipse",{rx:"6.64749",ry:"6.39038",transform:"matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)",fill:"#8F5BFD"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z",fill:"#7645D9"}),(0,l.jsx)("path",{d:"M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z",fill:"#452A7A"}),(0,l.jsx)("path",{d:"M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z",fill:"#452A7A"})]}))}},77376:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsxs)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 25 25"},n),{children:[(0,l.jsx)("path",{d:"M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z",fill:"#C0C4C6"}),(0,l.jsx)("path",{d:"M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z",fill:"#C0C4C6"}),(0,l.jsx)("path",{d:"M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z",fill:"#7D7D7D"}),(0,l.jsx)("path",{d:"M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z",fill:"#7D7D7D"}),(0,l.jsx)("ellipse",{cx:"12.5259",cy:"14.0971",rx:"8.89606",ry:"8.22211",fill:"#969696"}),(0,l.jsx)("ellipse",{rx:"8.69974",ry:"8.36325",transform:"matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)",fill:"#C0C4C6"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z",fill:"#D8D8D8"}),(0,l.jsx)("ellipse",{rx:"6.64749",ry:"6.39038",transform:"matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)",fill:"#B2B2B2"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z",fill:"#969696"}),(0,l.jsx)("path",{d:"M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z",fill:"#7D7D7D"}),(0,l.jsx)("path",{d:"M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z",fill:"#7D7D7D"})]}))}},69507:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(6816);i.Z=function(n){return(0,l.jsxs)(o.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 25 25"},n),{children:[(0,l.jsx)("path",{d:"M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z",fill:"#53DEE9"}),(0,l.jsx)("path",{d:"M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z",fill:"#53DEE9"}),(0,l.jsx)("path",{d:"M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z",fill:"#1FC7D4"}),(0,l.jsx)("path",{d:"M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z",fill:"#1FC7D4"}),(0,l.jsx)("ellipse",{cx:"12.5259",cy:"14.0971",rx:"8.89606",ry:"8.22211",fill:"#0098A1"}),(0,l.jsx)("ellipse",{rx:"8.69974",ry:"8.36325",transform:"matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)",fill:"#53DEE9"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z",fill:"#84F0F9"}),(0,l.jsx)("ellipse",{rx:"6.64749",ry:"6.39038",transform:"matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)",fill:"#1FC7D4"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z",fill:"#0098A1"}),(0,l.jsx)("path",{d:"M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z",fill:"#017178"}),(0,l.jsx)("path",{d:"M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z",fill:"#017178"})]}))}},16775:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(3411),C=t(6816);i.Z=function(n){var i=(0,o.Fg)(),t=i.isDark?"#3C3742":"#e9eaeb",d=i.isDark?"#666171":"#bdc2c4";return(0,l.jsxs)(C.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 32 32"},n),{children:[(0,l.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:t}),(0,l.jsx)("mask",{id:"A","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"32",height:"32",children:(0,l.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:"#c4c4c4"})}),(0,l.jsxs)("g",{mask:"url(#A)",children:[(0,l.jsx)("path",{d:"M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z",fill:d}),(0,l.jsx)("path",{fillRule:"evenodd",d:"M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z",fill:d}),(0,l.jsx)("ellipse",{cx:"12.308",cy:"14.846",rx:"1.026",ry:"1.538",fill:t}),(0,l.jsx)("ellipse",{cx:"19.385",cy:"14.846",rx:"1.026",ry:"1.538",fill:t})]})]}))}},67196:function(n,i,t){"use strict";var e=t(70865),r=t(96670),l=t(52322);t(2784);var o=t(74930),C=t.n(o),d=t(6816);i.Z=function(n){var i=C()("svg");return(0,l.jsxs)(d.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 48 48"},n),{children:[(0,l.jsxs)("g",{clipPath:"url(#".concat(i,")"),children:[(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z",fill:"#FFAF00"}),(0,l.jsx)("path",{d:"M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z",fill:"#EB8C00"}),(0,l.jsx)("path",{d:"M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z",fill:"#FFAF00"}),(0,l.jsx)("path",{d:"M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z",fill:"#FFD800"}),(0,l.jsx)("path",{d:"M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z",fill:"#FFE971"}),(0,l.jsx)("path",{d:"M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z",fill:"#EB8C00"}),(0,l.jsx)("path",{d:"M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z",fill:"#FFD800"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z",fill:"#FFE971"}),(0,l.jsx)("path",{d:"M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z",fill:"#FFC700"}),(0,l.jsx)("path",{d:"M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z",fill:"white"}),(0,l.jsx)("path",{d:"M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z",fill:"#E7E8E8"}),(0,l.jsx)("path",{d:"M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z",fill:"#E7E8E8"}),(0,l.jsx)("path",{d:"M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z",fill:"#452A7A"}),(0,l.jsx)("path",{d:"M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z",fill:"#452A7A"}),(0,l.jsx)("path",{d:"M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z",fill:"#452A7A"}),(0,l.jsx)("path",{d:"M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z",fill:"#EB8C00"}),(0,l.jsx)("path",{d:"M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z",fill:"#FFC700"}),(0,l.jsx)("path",{d:"M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z",fill:"#FFD800"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z",fill:"#FFE971"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:i,children:(0,l.jsx)("rect",{width:"48",height:"48",fill:"white",transform:"matrix(-1 0 0 1 48 0)"})})})]}))}},42083:function(n,i,t){"use strict";var e=t(92228),r=t(3411),l=t(78545);function o(){var n=(0,e.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ",";\n  border-radius: ",";\n  font-size: 16px;\n  font-weight: 600;\n\n  "," {\n    flex-grow: 0;\n  }\n\n  ","\n"]);return o=function(){return n},n}var C=r.ZP.button.withConfig({componentId:"sc-e10c0dd0-0"})(o(),function(n){return"md"===n.scale?"8px":"16px"},function(n){return"md"===n.scale?"16px 16px 0 0":"24px 24px 0 0"},function(n){return n.theme.mediaQueries.md},l.$_);C.defaultProps={scale:"md"},i.Z=C},57684:function(n,i,t){"use strict";var e=t(92228),r=t(52322),l=t(2784),o=t(3411),C=t(33080);function d(){var n=(0,e.Z)(["\n  border-bottom: 2px solid ",";\n  overflow-x: scroll;\n  padding: ",";\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"]);return d=function(){return n},n}function c(){var n=(0,e.Z)(["\n  justify-content: space-between;\n\n  & > button + button {\n    margin-left: ",";\n  }\n\n  & > button {\n    flex-grow: ",";\n  }\n\n  "," {\n    flex-grow: ",";\n  }\n\n  flex-grow: ",";\n"]);return c=function(){return n},n}var s=(0,o.ZP)(C.Z).withConfig({componentId:"sc-29f426a-0"})(d(),function(n){return n.theme.colors.input},function(n){return n.fullWidth?0:"16px"}),a=(0,o.ZP)(C.Z).withConfig({componentId:"sc-29f426a-1"})(c(),function(n){return n.gap||"4px"},function(n){return n.fullWidth?1:0},function(n){return n.theme.mediaQueries.md},function(n){return n.fullWidth?1:0},function(n){return n.fullWidth?1:0});i.Z=function(n){var i=n.activeIndex,t=void 0===i?0:i,e=n.onItemClick,o=n.children,C=n.fullWidth,d=n.gap,c=n.isColorInverse,u=void 0!==c&&c;return(0,r.jsx)(s,{p:["0 4px","0 16px"],fullWidth:C,children:(0,r.jsx)(a,{fullWidth:C,gap:d,children:l.Children.map(o,function(n,i){var r=t===i;return(0,l.cloneElement)(n,{isActive:r,onClick:e?function(){return e(i)}:void 0,color:u?r?"textSubtle":"backgroundAlt":r?"backgroundAlt":"textSubtle",backgroundColor:u?r?"input":"textSubtle":r?"textSubtle":"input"})})})})}}}]);
//# sourceMappingURL=7324-c7d00469ab563fc8.js.map