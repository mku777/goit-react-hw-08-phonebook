"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{8375:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(7689),r=t(5048),i=t(8650),c=(t(2791),t(1087)),o=t(3329),l=function(){return(0,o.jsx)("div",{style:{marginLeft:"250px",fontSize:"23px"},children:(0,o.jsx)("nav",{children:(0,o.jsx)(c.OL,{to:"contacts",children:"Contacts"})})})},s=t(9439),u=t(6306),d=t(4190),m=t(5777),f=function(){var e=(0,r.v9)(i.vW),n=(0,u.Zn)(),t=(0,s.Z)(n,1)[0];return(0,o.jsx)(d.xu,{children:(0,o.jsxs)(d.kC,{h:16,alignItems:"center",marginRight:"250px",children:[(0,o.jsxs)(d.xv,{fontSize:"23px",color:"#80b438",mr:50,children:["hi! ",e]}),(0,o.jsx)(m.zx,{type:"button",bg:"burlywood",width:"100px",borderRadius:"3px",padding:"23px",color:"white",_hover:{bg:"#ff2400"},onClick:function(){t()},children:"Log Out"})]})})},p=function(){return(0,o.jsx)(d.xu,{children:(0,o.jsxs)(d.kC,{alignItems:"center",justifyContent:"space-between",children:[(0,o.jsx)(l,{}),(0,o.jsx)(f,{})]})})},h=function(){var e=(0,r.v9)(i.Vp);return(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)(p,{}),(0,o.jsx)(a.j3,{})]})}},5777:function(e,n,t){t.d(n,{zx:function(){return j}});var a=t(4942),r=t(1413),i=t(4925),c=t(9439),o=t(2791),l=t(1507),s=t(251),u=t(2965),d=t(2680),m=t(9194),f=["children","className"],p=["label","placement","spacing","children","className","__css"],h=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],v=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],g=["icon","children","isRound","aria-label"],b=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},x=function(e){return e?"":void 0},y=(0,d.k)({strict:!1,name:"ButtonGroupContext"}),Z=(0,c.Z)(y,2),_=Z[0],E=Z[1];function N(e){var n=e.children,t=e.className,a=(0,i.Z)(e,f),c=(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,l=b("chakra-button__icon",t);return o.createElement(s.m$.span,(0,r.Z)((0,r.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:l}),c)}function S(e){var n=e.label,t=e.placement,c=e.spacing,l=void 0===c?"0.5rem":c,u=e.children,d=void 0===u?o.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):u,f=e.className,h=e.__css,v=(0,i.Z)(e,p),g=b("chakra-button__spinner",f),x="start"===t?"marginEnd":"marginStart",y=(0,o.useMemo)((function(){var e;return(0,r.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,a.Z)(e,x,n?l:0),(0,a.Z)(e,"fontSize","1em"),(0,a.Z)(e,"lineHeight","normal"),e),h)}),[h,n,x,l]);return o.createElement(s.m$.div,(0,r.Z)((0,r.Z)({className:g},v),{},{__css:y}),d)}N.displayName="ButtonIcon",S.displayName="ButtonSpinner";var j=(0,s.Gp)((function(e,n){var t=E(),a=(0,s.mq)("Button",(0,r.Z)((0,r.Z)({},t),e)),d=(0,u.Lr)(e),m=d.isDisabled,f=void 0===m?null==t?void 0:t.isDisabled:m,p=d.isLoading,v=d.isActive,g=d.children,y=d.leftIcon,Z=d.rightIcon,_=d.loadingText,N=d.iconSpacing,j=void 0===N?"0.5rem":N,w=d.type,I=d.spinner,C=d.spinnerPlacement,z=void 0===C?"start":C,B=d.className,A=d.as,R=(0,i.Z)(d,h),q=(0,o.useMemo)((function(){var e=(0,r.Z)((0,r.Z)({},null==a?void 0:a._focus),{},{zIndex:1});return(0,r.Z)((0,r.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},a),!!t&&{_focus:e})}),[a,t]),D=function(e){var n=(0,o.useState)(!e),t=(0,c.Z)(n,2),a=t[0],r=t[1];return{ref:(0,o.useCallback)((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:a?"button":void 0}}(A),L=D.ref,$=D.type,G={rightIcon:Z,leftIcon:y,iconSpacing:j,children:g};return o.createElement(s.m$.button,(0,r.Z)({disabled:f||p,ref:(0,l.qq)(n,L),as:A,type:null!==w&&void 0!==w?w:$,"data-active":x(v),"data-loading":x(p),__css:q,className:b("chakra-button",B)},R),p&&"start"===z&&o.createElement(S,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:j},I),p?_||o.createElement(s.m$.span,{opacity:0},o.createElement(k,(0,r.Z)({},G))):o.createElement(k,(0,r.Z)({},G)),p&&"end"===z&&o.createElement(S,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:j},I))}));function k(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return o.createElement(o.Fragment,null,n&&o.createElement(N,{marginEnd:r},n),a,t&&o.createElement(N,{marginStart:r},t))}j.displayName="Button",(0,s.Gp)((function(e,n){var t=e.size,a=e.colorScheme,c=e.variant,l=e.className,u=e.spacing,d=void 0===u?"0.5rem":u,m=e.isAttached,f=e.isDisabled,p=(0,i.Z)(e,v),h=b("chakra-button__group",l),g=(0,o.useMemo)((function(){return{size:t,colorScheme:a,variant:c,isDisabled:f}}),[t,a,c,f]),x={display:"inline-flex"};return x=m?(0,r.Z)((0,r.Z)({},x),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,r.Z)((0,r.Z)({},x),{},{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),o.createElement(_,{value:g},o.createElement(s.m$.div,(0,r.Z)({ref:n,role:"group",__css:x,className:h,"data-attached":m?"":void 0},p)))})).displayName="ButtonGroup",(0,s.Gp)((function(e,n){var t=e.icon,a=e.children,c=e.isRound,l=e["aria-label"],s=(0,i.Z)(e,g),u=t||a,d=(0,o.isValidElement)(u)?(0,o.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(j,(0,r.Z)({padding:"0",borderRadius:c?"full":void 0,ref:n,"aria-label":l},s),d)})).displayName="IconButton"},1507:function(e,n,t){t.d(n,{lq:function(){return i},qq:function(){return c}});var a=t(2791);function r(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){r(n,e)}))}}function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.useMemo)((function(){return i.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=375.b06a2303.chunk.js.map