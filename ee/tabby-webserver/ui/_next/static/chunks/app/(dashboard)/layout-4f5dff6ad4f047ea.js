(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{34602:function(e,n,t){Promise.resolve().then(t.bind(t,52281)),Promise.resolve().then(t.bind(t,93079))},52281:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var s=t(57437),r=t(61396),l=t.n(r),a=t(24033),i=t(7404),c=t(88809),o=t(39311),d=t(84168);function u(){let e=(0,c.av)(),n=(0,c.QJ)();return e&&(0,s.jsx)("div",{className:"flex justify-center py-4 text-sm font-medium",children:(0,s.jsxs)("span",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{title:"Sign out",children:(0,s.jsx)(d.gt,{className:"cursor-pointer",onClick:n})}),e.email]})})}function h(e){let{children:n,className:t}=e,{data:r}=(0,c.kP)(),l=(null==r?void 0:r.isAdmin)||!1;return(0,s.jsxs)("div",{className:(0,o.cn)("grid overflow-hidden lg:grid-cols-[280px_1fr]",t),children:[(0,s.jsx)("div",{className:"hidden border-r lg:block",children:(0,s.jsxs)("div",{className:"flex h-full flex-col gap-2",children:[(0,s.jsx)("div",{className:"h-[12px]"}),(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsxs)("nav",{className:"grid items-start gap-2 px-4 text-sm font-medium",children:[(0,s.jsxs)(f,{href:"/",children:[(0,s.jsx)(d.A2,{})," Home"]}),l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f,{href:"/cluster",children:[(0,s.jsx)(d.im,{})," Cluster Information"]}),(0,s.jsxs)(f,{href:"/team",children:[(0,s.jsx)(d.Sr,{})," Team Management"]})]})]})}),(0,s.jsx)("div",{className:"mt-auto",children:(0,s.jsx)(u,{})})]})}),(0,s.jsx)("div",{className:"flex flex-1 flex-col overflow-auto",children:n})]})}t(2265);let x=(0,i.j)("flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent",{variants:{state:{selected:"bg-accent","not-selected":""}},defaultVariants:{state:"not-selected"}});function f(e){let{href:n,children:t}=e,r=(0,a.usePathname)();return(0,s.jsx)(l(),{className:x({state:r==n?"selected":"not-selected"}),href:n,children:t})}},93079:function(e,n,t){"use strict";t.r(n),t.d(n,{Header:function(){return b}});var s=t(57437),r=t(2265),l=t(61396),a=t.n(l),i=t(73737),c=t(91067),o=t(70349),d=t(13287),u=t(1589),h=t(8724),x=t(88809),f=t(39311),m=t(93023),j=t(84168),v=t(6435);function p(){let{setTheme:e,theme:n}=(0,v.F)(),[t,l]=r.useTransition();return(0,s.jsxs)(m.z,{variant:"ghost",size:"icon",onClick:()=>{l(()=>{e("light"===n?"dark":"light")})},children:["dark"===n?(0,s.jsx)(j.C9,{className:"transition-all"}):(0,s.jsx)(j.O3,{className:"transition-all"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function b(){var e;(0,x.av)();let{data:n}=(0,d.Q)(),t=(0,h.s)(),r=(0,c.Z)(t,o.xj.Chat),l=null==n?void 0:null===(e=n.version)||void 0===e?void 0:e.git_describe,{data:v}=(0,u.Z)("https://api.github.com/repos/TabbyML/tabby/releases/latest",e=>fetch(e).then(e=>e.json())),b=function(e,n){try{return e&&n&&(0,i.q)(n.name,e,">")}catch(e){return console.warn(e),!0}}(l,v);return(0,s.jsxs)("header",{className:"sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b px-4 backdrop-blur-xl",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(a(),{href:"/",children:(0,s.jsx)("span",{className:"hidden select-none px-2 font-logo font-semibold sm:inline-block",children:"Tabby"})}),(0,s.jsx)(g,{href:"/api",children:"API"}),r&&(0,s.jsx)(g,{href:"/playground",children:"Playground"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,s.jsx)(p,{}),b&&(0,s.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/latest",rel:"noopener noreferrer",className:(0,m.d)({variant:"ghost"}),children:[(0,s.jsx)(j.Qs,{className:"text-yellow-600 dark:text-yellow-400"}),(0,s.jsxs)("span",{className:"ml-2 hidden md:flex",children:["New version (",null==v?void 0:v.name,") available"]})]}),(0,s.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby",rel:"noopener noreferrer",className:(0,f.cn)((0,m.d)({variant:"outline"})),children:[(0,s.jsx)(j.Mr,{}),(0,s.jsx)("span",{className:"ml-2 hidden md:flex",children:"GitHub"})]})]})]})}let g=e=>{let{children:n,href:t}=e;return(0,s.jsx)(a(),{href:t,className:(0,f.cn)((0,m.d)({variant:"link"}),"text-foreground"),children:n})}},13287:function(e,n,t){"use strict";t.d(n,{Q:function(){return a}});var s=t(30713),r=t(1592),l=t(88809);function a(){return(0,s.ZP)((0,l.X0)("/v1/health"),r.Z)}},8724:function(e,n,t){"use strict";t.d(n,{s:function(){return f}});var s=t(2265),r=t(16630),l=t(91317),a=t(35512),i=t(58835),c=t(70349),o=t(7820),d=t(13287);let u={[c.xj.Chat]:"chat_model",[c.xj.Completion]:"model"};function h(e,n){var t;return{kind:n,device:e.device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:null!==(t=null==e?void 0:e[u[n]])&&void 0!==t?t:"",cpuCount:e.cpu_count,cudaDevices:e.cuda_devices}}let x=(0,i.BX)("\n  query GetWorkers {\n    workers {\n      kind\n      name\n      addr\n      device\n      arch\n      cpuInfo\n      cpuCount\n      cudaDevices\n    }\n  }\n");function f(){let{data:e}=(0,d.Q)(),{data:n}=(0,o.J9)(x),t=null==n?void 0:n.workers,i=s.useMemo(()=>{let n=(0,a.Z)(t),s=(0,r.Z)(n,{kind:c.xj.Completion})>-1,i=(0,r.Z)(n,{kind:c.xj.Chat})>-1;return!s&&(null==e?void 0:e.model)&&n.push(h(e,c.xj.Completion)),!i&&(null==e?void 0:e.chat_model)&&n.push(h(e,c.xj.Chat)),(0,l.Z)(n,"kind")},[e,t]);return i}},1592:function(e,n,t){"use strict";function s(e){let[n,t]=e,s=new Headers;return s.append("authorization","Bearer ".concat(t)),fetch(n,{headers:s}).then(e=>e.json())}t.d(n,{Z:function(){return s}})}},function(e){e.O(0,[936,948,505,787,894,971,864,744],function(){return e(e.s=34602)}),_N_E=e.O()}]);