function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("eWCmQ");const l=document.querySelector(".form"),i=document.querySelector('input[name="delay"]'),s=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');l.addEventListener("submit",(function(n,o){n.preventDefault();const t=i.value,r=s.value,l=a.value;console.log(`'inputDelay': ${t}, 'step': ${r}`);for(let n=0;n<l;n+=1){console.log(`'amount': ${l}, 'i': ${n}`);const o=t+n*r;new Promise(((t,r)=>{const l=Math.random()>.3;setTimeout((()=>{l?t(e(u).Notify.success(`✅ Fulfilled promise ${n+1} in ${o}ms`)):r(e(u).Notify.failure(`❌ Rejected promise ${n+1} in ${o}ms`))}),o)}))}}));
//# sourceMappingURL=03-promises.ec3784a1.js.map
