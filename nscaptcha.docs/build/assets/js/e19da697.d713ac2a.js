"use strict";(self.webpackChunknscaptcha_docs=self.webpackChunknscaptcha_docs||[]).push([[1511],{9405:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"captcha-cookie-options","title":"CaptchaCookieOptions","description":"This document provides a detailed explanation of the CaptchaCookieOptions class. It is intended for developers who are using this class to configure the cookie settings specifically for captcha functionality within their applications.","source":"@site/docs/captcha-cookie-options.md","sourceDirName":".","slug":"/captcha-cookie-options","permalink":"/docs/captcha-cookie-options","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"CaptchaCookieOptions"},"sidebar":"tutorialSidebar","previous":{"title":"CaptchaOptions","permalink":"/docs/captcha-options"},"next":{"title":"ICaptchaTokenCache","permalink":"/docs/i-captcha-token-cache"}}');var s=o(4848),n=o(8453);const c={sidebar_position:5,title:"CaptchaCookieOptions"},r="Understanding the CaptchaCookieOptions Class",a={},d=[{value:"<code>CaptchaCookieOptions</code> Class Overview",id:"captchacookieoptions-class-overview",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>Name</code> (string)",id:"name-string",level:3},{value:"Inheritance from <code>CookieOptions</code>",id:"inheritance-from-cookieoptions",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Key Considerations",id:"key-considerations",level:2}];function h(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsxs)(i.h1,{id:"understanding-the-captchacookieoptions-class",children:["Understanding the ",(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," Class"]})}),"\n",(0,s.jsxs)(i.p,{children:["This document provides a detailed explanation of the ",(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," class. It is intended for developers who are using this class to configure the cookie settings specifically for captcha functionality within their applications."]}),"\n",(0,s.jsxs)(i.h2,{id:"captchacookieoptions-class-overview",children:[(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," Class Overview"]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," class inherits from the standard ASP.NET Core ",(0,s.jsx)(i.code,{children:"CookieOptions"})," class. It allows you to customize the cookie that stores the captcha challenge data.  It adds one specific property on top of the base ",(0,s.jsx)(i.code,{children:"CookieOptions"}),":"]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," class contains the following properties:"]}),"\n",(0,s.jsxs)(i.h3,{id:"name-string",children:[(0,s.jsx)(i.code,{children:"Name"})," (string)"]}),"\n",(0,s.jsx)(i.p,{children:'This property gets or sets the name of the captcha cookie.  The default value is "CK".  You can change this to a different name if needed.'}),"\n",(0,s.jsxs)(i.h2,{id:"inheritance-from-cookieoptions",children:["Inheritance from ",(0,s.jsx)(i.code,{children:"CookieOptions"})]}),"\n",(0,s.jsxs)(i.p,{children:["Because ",(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," inherits from ",(0,s.jsx)(i.code,{children:"CookieOptions"}),", you have access to all the standard cookie configuration options provided by the base class.  This includes, but is not limited to:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"Domain"})}),":  The domain for the cookie."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"Expires"})}),": The expiration date and time for the cookie."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"HttpOnly"})}),":  Whether the cookie is only accessible via HTTP (recommended for security)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"MaxAge"})}),": The maximum age of the cookie."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"Path"})}),": The path for the cookie."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"SameSite"})}),": The SameSite attribute of the cookie (important for security)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"Secure"})}),": Whether the cookie requires a secure connection (HTTPS)."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["For a complete list of properties and their descriptions, please refer to the official ASP.NET Core documentation for the ",(0,s.jsx)(i.code,{children:"CookieOptions"})," class."]}),"\n",(0,s.jsx)(i.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csharp",children:'builder.Services.AddCaptcha((options, cookieOptions) =>\r\n{\r\n    // ... captcha options ...\r\n\r\n    cookieOptions.Name = "my-custom-captcha-cookie"; // Set a custom name\r\n    cookieOptions.HttpOnly = true;               // Essential for security\r\n    cookieOptions.SameSite = SameSiteMode.Lax;    // Adjust as needed\r\n    // ... other cookie options ...\r\n});\n'})}),"\n",(0,s.jsxs)(i.p,{children:["In this example, we're configuring the captcha cookie within the ",(0,s.jsx)(i.code,{children:"AddCaptcha"})," service registration.  We're setting the ",(0,s.jsx)(i.code,{children:"Name"}),' to "my-custom-captcha-cookie", setting ',(0,s.jsx)(i.code,{children:"HttpOnly"})," to ",(0,s.jsx)(i.code,{children:"true"})," (a security best practice), and setting the ",(0,s.jsx)(i.code,{children:"SameSite"})," attribute. You can set other ",(0,s.jsx)(i.code,{children:"CookieOptions"})," properties as needed."]}),"\n",(0,s.jsx)(i.h2,{id:"key-considerations",children:"Key Considerations"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Security"}),": Setting ",(0,s.jsx)(i.code,{children:"cookieOptions.HttpOnly = true"})," is highly recommended. This prevents client-side JavaScript from accessing the cookie, reducing the risk of XSS attacks. The ",(0,s.jsx)(i.code,{children:"SameSite"})," attribute is also crucial for preventing CSRF attacks. Choose the appropriate value (",(0,s.jsx)(i.code,{children:"SameSiteMode.Lax"}),", ",(0,s.jsx)(i.code,{children:"SameSiteMode.Strict"}),", or ",(0,s.jsx)(i.code,{children:"SameSiteMode.None"}),") based on your application's requirements. If you use ",(0,s.jsx)(i.code,{children:"SameSiteMode.None"}),", you must also set ",(0,s.jsx)(i.code,{children:"cookieOptions.Secure = true"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Cookie Name"}),': While the default cookie name ("CK") might be sufficient, consider using a more descriptive name for clarity and maintainability.']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Other Cookie Options"}),": Explore the other properties available in the ",(0,s.jsx)(i.code,{children:"CookieOptions"})," class to fine-tune the cookie's behavior, such as its expiration, domain, and path."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Placement"}),": Ensure you configure the ",(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," within the ",(0,s.jsx)(i.code,{children:"AddCaptcha"})," method (or wherever you're registering the captcha service) and pass it to the ",(0,s.jsx)(i.code,{children:"cookieOptions"})," parameter."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["By understanding the ",(0,s.jsx)(i.code,{children:"CaptchaCookieOptions"})," class and its relationship to the standard ",(0,s.jsx)(i.code,{children:"CookieOptions"}),", you can effectively control the behavior and security of the cookie used for your captcha implementation.  Always prioritize security best practices when configuring cookies."]})]})}function l(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,i,o)=>{o.d(i,{R:()=>c,x:()=>r});var t=o(6540);const s={},n=t.createContext(s);function c(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);