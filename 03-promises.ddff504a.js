!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("h6c0i");const i={form:document.querySelector("form.form"),delay:document.querySelector("input[name='delay']"),step:document.querySelector("input[name='step']"),amount:document.querySelector("input[name='amount']")},{form:u,delay:l,step:a,amount:d}=i;function s(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(e){e.preventDefault();let t=Number(l.value);for(let e=1;e<=Number(d.value);e++)s(e,t).then((({position:e,delay:t})=>{r.Notify.success(`Fullfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),t+=Number(a.value)}))}();
//# sourceMappingURL=03-promises.ddff504a.js.map
