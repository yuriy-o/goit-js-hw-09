function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function u({position:o,delay:n}){e(i).Notify.success(`✅ Fulfilled promise ${o+1} in ${n}ms`),console.log(`✅ Fulfilled promise ${o+1} in ${n}ms`)}function s({position:o,delay:n}){e(i).Notify.failure(`❌ Rejected promise ${o+1} in ${n}ms`),console.log(`❌ Rejected promise ${o+1} in ${n}ms`)}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(e.currentTarget.delay.value);const n=Number(e.currentTarget.step.value),t=Number(e.currentTarget.amount.value);for(let e=0;e<t;e+=1)l(e,o).then(u).catch(s),o+=n}));
//# sourceMappingURL=03-promises_v2.4273e7aa.js.map
