function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var r=u("eWCmQ");refs={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),inputButton:document.querySelector('button[type="submit"]')},refs.form.addEventListener("submit",(function(t,n){t.preventDefault();const o=Number(refs.inputDelay.value),u=Number(refs.inputStep.value),i=refs.inputAmount.value;console.log(`'inputDelay': ${o}, 'step': ${u}`);for(let t=0;t<i;t+=1){console.log(`'amount': ${i}, 'i': ${t}`);const n=o+t*u;new Promise(((o,u)=>{const i=Math.random()>.3;setTimeout((()=>{i?o(e(r).Notify.success(`✅ Fulfilled promise ${t+1} in ${n}ms`)):u(e(r).Notify.failure(`❌ Rejected promise ${t+1} in ${n}ms`))}),n)}))}}));
//# sourceMappingURL=03-promises.4f5bde72.js.map