const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminPanel-CqbSolks.js","assets/vendor-motion-BaX5tlEL.js","assets/vendor-router-9caMggfF.js","assets/vendor-icons-7x2Cqj4b.js"])))=>i.map(i=>d[i]);
import{j as l,m as ys}from"./vendor-motion-BaX5tlEL.js";import{a as tc,r as ie,u as bo,R as A,L as O,N as nc,b as xo,c as Eo,d as J,e as sc,B as ic}from"./vendor-router-9caMggfF.js";import{X as Io,M as rc,I as oc,F as ac,a as lc,P as cc,b as hc,C as Co,c as To,A as Zn,d as qt,S as So,e as No}from"./vendor-icons-7x2Cqj4b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Ds={},Zi=tc;Ds.createRoot=Zi.createRoot,Ds.hydrateRoot=Zi.hydrateRoot;const uc="modulepreload",dc=function(n){return"/"+n},er={},fc=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=dc(c),c in er)return;er[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":uc,h||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),h)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},pc="/".replace(/\/+$/,"");function _(n){if(!n||n.startsWith("http"))return n;const e=n.startsWith("/")?n:`/${n}`;return`${pc}${e}`}const mc=[{slug:"Dinali-engagement",title:"Dinali & Dinusha",subtitle:"Engagement Shoot",category:"Engagement",coverImage:_("/images/portfolio/Dinali/WDM03661.webp"),quote:"A beautiful wedding story captured with emotion and elegance.",images:[_("/images/portfolio/Dinali/WDM04487.webp"),_("/images/portfolio/Dinali/WDM04491.webp")]},{slug:"Viraji-wedding",title:"Viraji & Gimhana",subtitle:"Wedding Shoot",category:"Wedding",coverImage:_("/images/portfolio/viraji/WDM02340.webp"),quote:"A day filled with love and beautiful moments.",images:[_("/images/portfolio/viraji/1.webp")]},{slug:"Sanduni-Engagement",title:"Sanduni & Harindu",subtitle:"Engagement Shoot",category:"Engagement",coverImage:_("/images/portfolio/saduni/WDM04134.webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/sadunni/WDC03332.webp"),_("/images/portfolio/saduni/WDC03336.webp")]},{slug:"Abdullh-wedding",title:"Haniya & Abdullha",subtitle:"Wedding Shoot",category:"Wedding",coverImage:_("/images/portfolio/Abd/WDM04786.webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]},{slug:"Mishen-wedding",title:"Haniya & Mishen",subtitle:"Wedding Shoot",category:"Wedding",coverImage:_("/images/portfolio/mi/WDM09671.webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]},{slug:"Isuri-wedding",title:"Isuri & Pramod",subtitle:"Wedding Shoot",category:"Wedding",coverImage:_("/images/portfolio/iw/WDM08539.webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]},{slug:"Eranga-wedding",title:"Pavani & Eranga",subtitle:"Wedding Shoot",category:"Wedding",coverImage:_("/images/portfolio/er/DSC05227 (2).webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]},{slug:"Pujitha-preshoot",title:"Ashini & Pujitha",subtitle:"Pre Shoot",category:"Pre Wedding",coverImage:_("/images/portfolio/Ppre/WDM02522.webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]},{slug:"Supun-homecoming",title:"Thenuri & Supun",subtitle:"Homecoming Shoot",category:"Homecoming",coverImage:_("/images/portfolio/sw/WDM03722.webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]},{slug:"prabha-wedding",title:"Piyumi & Prabha",subtitle:"Wedding Shoot",category:"Wedding",coverImage:_("/images/portfolio/prw/UPS00410.webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]},{slug:"pujitgha-wedding",title:"Ashini & Pujitha",subtitle:"Wedding Shoot",category:"Wedding",coverImage:_("/images/portfolio/pwed/DSC03324- WD (1859).webp"),quote:"Two hearts, one beautiful celebration.",images:[_("/images/portfolio/Abd/WDC03332.webp"),_("/images/portfolio/Abd/WDC03336.webp")]}],gc=[{slug:"how-to-find-the-best-wedding-hair-makeup-artist",title:"How to Find the Best Wedding Hair & Makeup Artist",date:"March 01, 2026",image:_("/images/blog/PSI01784.webp"),excerpt:"Your wedding day is one of the most special moments of your life, and you deserve to look and feel stunning. The right hair and makeup artist can make all the difference, helping you bring your dream look to life and giving you the confidence to shine.",content:`Your wedding day is one of the most special moments of your life, and you deserve to look and feel stunning. The right hair and makeup artist can make all the difference, helping you bring your dream look to life and giving you the confidence to shine. But with so many options out there, finding the perfect artist can feel overwhelming.

Here are some tips to help you find the best wedding hair and makeup artist:

1. Start Early – The best artists get booked months in advance. Begin your search at least 6-8 months before your wedding day.

2. Do Your Research – Look at portfolios, read reviews, and ask for recommendations from friends, family, or your wedding planner.

3. Schedule Trials – Always do a trial run before committing. This allows you to see the artist's work firsthand and make adjustments.

4. Consider Your Style – Find an artist whose portfolio matches the style you're going for, whether it's natural, glamorous, or somewhere in between.

5. Budget Wisely – Quality comes at a price. Allocate a reasonable budget for hair and makeup, and remember that this is an investment in how you'll look and feel on your big day.

6. Communication is Key – Be clear about your expectations and share reference photos. A good artist will listen and collaborate with you.

Remember, the right hair and makeup artist will not only make you look beautiful but will also help you feel calm and confident as you walk down the aisle.`},{slug:"planning-your-couple-shoot-in-colombo",title:"Planning Your Couple Shoot in Colombo? From Low Budget to High Budget Locations.",date:"March 01, 2026",image:_("/images/blog/WDM06361.webp"),excerpt:"Your couple shoot is more than just taking photos. It's about celebrating your love and capturing your unique bond. Colombo with its mix of beautiful spots and stunning views, is a great place for this special moment.",content:`Your couple shoot is more than just taking photos. It's about celebrating your love and capturing your unique bond. Colombo, with its mix of beautiful spots and stunning views, is a great place for this special moment. Whether you prefer a quiet park or a fancy hotel, there's something here to suit every couple and every budget.

Low Budget Locations:

- Viharamahadevi Park – Lush greenery and beautiful old trees make this a perfect natural backdrop.
- Galle Face Green – The ocean breeze and sunset views create romantic golden hour shots.
- Independence Square – Colonial architecture with open spaces for elegant photos.

Mid Budget Locations:

- Beira Lake – Scenic waterfront views with the city skyline in the background.
- Mount Lavinia Beach – A classic choice with beautiful sandy shores and dramatic rock formations.
- Pettah Streets – For couples who love an urban, vibrant vibe.

High Budget Locations:

- Shangri-La Hotel Colombo – Luxurious interiors and manicured gardens.
- Cinnamon Grand – Elegant ballrooms and beautiful outdoor spaces.
- Geoffrey Bawa's Number 11 – Iconic architectural masterpiece with a tropical modernist aesthetic.

Tips for Your Couple Shoot:

1. Choose the golden hour (early morning or late afternoon) for the best natural lighting.
2. Coordinate your outfits but don't match too literally.
3. Be yourselves – the best photos capture genuine emotions.
4. Trust your photographer – they know the best angles and spots.`},{slug:"future-bride-2026-must-read-before-planning-your-wedding",title:"Future Bride 2026 – This is for You! Must Read Before Planning Your Wedding.",date:"March 01, 2026",image:_("/images/blog/DSC05309 (2).webp"),excerpt:"Congratulations! If you're reading this, you're likely getting ready for one of the most exciting times of your life planning your dream wedding in 2026.",content:`Congratulations! If you're reading this, you're likely getting ready for one of the most exciting times of your life – planning your dream wedding in 2026. Weddings keep changing with new trends every year, and 2026 is set to bring fresh ideas to make your big day truly special. But let's be honest, planning a wedding can be both exciting and overwhelming.

Here's your essential guide to planning your 2026 wedding:

Wedding Trends for 2026:

- Sustainable Weddings – Eco-friendly decorations, locally sourced flowers, and zero-waste catering are becoming the norm.
- Intimate Ceremonies – Smaller guest lists with more meaningful experiences for each attendee.
- Bold Color Palettes – Moving beyond traditional pastels to rich jewel tones and unexpected color combinations.
- Technology Integration – Digital invitations, live streaming for distant guests, and drone photography.

Planning Timeline:

- 12 months before: Book your venue, photographer, and caterer.
- 9 months before: Choose your wedding party, start dress shopping.
- 6 months before: Send save-the-dates, book entertainment, plan honeymoon.
- 3 months before: Final dress fittings, send invitations, confirm all vendors.
- 1 month before: Final walk-through, confirm guest count, prepare timeline.

Budget Tips:

1. Set a realistic budget early and stick to it.
2. Prioritize what matters most to you as a couple.
3. Don't forget hidden costs like tips, taxes, and alterations.
4. Consider a weekday or off-season wedding for better rates.

Remember, your wedding should be a reflection of your unique love story. Don't get caught up in trends – focus on what makes you and your partner happy!`}],_c=[{image:"images/Review/1 copy.png",name:"Thathsara Chamodi"},{image:"images/Review/2 copy.png",name:"Waruni Edirimanna"},{image:"images/Review/3 copy.png",name:"Madushani Meegoda"},{image:"images/Review/4 copy.png",name:"Review 4"},{image:"images/Review/5 copy.png",name:"Review 5"},{image:"images/Review/6 copy.png",name:"Review 6"},{image:"images/Review/7 copy.png",name:"Review 7"},{image:"images/Review/8 copy.png",name:"Review 8"},{image:"images/Review/9 copy.png",name:"Review 9"}],yc=[{number:"01",title:"WEDDINGS",description:"Every love story is different and deserves to be told in its unique way. We look forward to making your special day a unique one.",icon:"glass",image:_("/images/service/WDC02899.webp")},{number:"02",title:"ENGAGEMENTS",description:"Your engagement is a wonderful time in both of your lives, and a photo shoot is a great way to commemorate that.",icon:"rings",image:_("/images/service/WDC06750.webp")},{number:"03",title:"CASUAL SHOOTS",description:"Casual shoots are a great way to remove that doubt and fear of being in front of a camera on your wedding day.",icon:"flower",image:_("/images/service/WDM02715.webp")}],vc={brand:"WEDDING DIARY",tagline:"Fine art photography for timeless memories",heroQuote:"Through light and emotion, we turn moments into timeless stories.",email:"info.wdiary@gmail.com",phone:"+94 77 655 5586",address:"399/B, Waththawa, Mathugama, Srilanka.",socials:{instagram:"https://www.instagram.com/w_diarylk/?hl=en",facebook:"https://web.facebook.com/weddingdiarysl/?_rdc=1&_rdr#",whatsapp:"https://wa.me/94776555586"},formspreeEndpoint:"https://formspree.io/f/mgonpveb",logos:{light:_("/logo.png"),dark:_("/logob.png")},pageHeroes:{about:_("/images/pak/44.webp"),contact:_("/images/pak/WDC09210.webp"),packages:_("/images/pak/WDC02930.webp"),portfolio:_("/images/pak/DSC05262 (3).webp")},aboutImages:{image1:_("/images/about/55.jpg"),image2:_("/images/about/4545.jpg"),image3:_("/images/about/555.jpg")},mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15855.691464900581!2d80.134532!3d6.531426000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d70219d3214b%3A0xf83fe654ec62209!2sWedding%20Diary%20Photography!5e0!3m2!1sen!2sus!4v1773714030733!5m2!1sen!2sus"},wc=()=>{};var tr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw It(e)},It=function(n){return new Error("Firebase Database ("+ko.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},bc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|h>>6,p=h&63;c||(p=64,o||(f=64)),s.push(t[u],t[d],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ro(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||h==null||d==null)throw new xc;const f=r<<2|a>>4;if(s.push(f),h!==64){const p=a<<4&240|h>>2;if(s.push(p),d!==64){const g=h<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ao=function(n){const e=Ro(n);return ni.encodeByteArray(e,!0)},Nn=function(n){return Ao(n).replace(/\./g,"")},kn=function(n){try{return ni.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){return Po(void 0,n)}function Po(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ic(t)||(n[t]=Po(n[t],e[t]));return n}function Ic(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=()=>Cc().__FIREBASE_DEFAULTS__,Sc=()=>{if(typeof process=="undefined"||typeof tr=="undefined")return;const n=tr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nc=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&kn(n[1]);return e&&JSON.parse(e)},si=()=>{try{return wc()||Tc()||Sc()||Nc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oo=n=>{var e,t;return(t=(e=si())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Do=n=>{const e=Oo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Lo=()=>{var n;return(n=si())==null?void 0:n.config},jo=n=>{var e;return(e=si())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Nn(JSON.stringify(t)),Nn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ii(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function kc(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Rc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ac(){const n=z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pc(){return ko.NODE_ADMIN===!0}function Oc(){try{return typeof indexedDB=="object"}catch(n){return!1}}function Dc(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="FirebaseError";class Ee extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Lc,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?jc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ee(i,a,s)}}function jc(n,e){return n.replace(Mc,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Mc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){return JSON.parse(n)}function D(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Kt(kn(r[0])||""),t=Kt(kn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch(r){}return{header:e,claims:t,data:s,signature:i}},Fc=function(n){const e=Uo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Uc=function(n){const e=Uo(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function pt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ls(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ke(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(nr(r)&&nr(o)){if(!Ke(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function nr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ut(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Wt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],h,u;for(let d=0;d<80;d++){d<40?d<20?(h=a^r&(o^a),u=1518500249):(h=r^o^a,u=1859775393):d<60?(h=r&o|a&(r|o),u=2400959708):(h=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+h+c+u+s[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Bc(n,e){const t=new Vc(n,e);return t.subscribe.bind(t)}class Vc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hc(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=vs),i.error===void 0&&(i.error=vs),i.complete===void 0&&(i.complete=vs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function vs(){}function ri(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ts=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}async function oi(n){return(await fetch(n,{credentials:"include"})).ok}class Ue{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new es;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var i;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qc(e))try{this.getOrInitializeService({instanceIdentifier:$e})}catch(t){}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch(r){}}}}clearInstance(e=$e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$e){return this.instances.has(e)}getOptions(e=$e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var o;const s=this.normalizeInstanceIdentifier(t),i=(o=this.onInitCallbacks.get(s))!=null?o:new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch(i){}return s||null}normalizeInstanceIdentifier(e=$e){return this.component?this.component.multipleInstances?e:$e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gc(n){return n===$e?void 0:n}function qc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(T||(T={}));const Yc={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},Jc=T.INFO,Qc={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},Xc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Qc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ai{constructor(e){this.name=e,this._logLevel=Jc,this._logHandler=Xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const Zc=(n,e)=>e.some(t=>n instanceof t);let sr,ir;function eh(){return sr||(sr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function th(){return ir||(ir=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wo=new WeakMap,js=new WeakMap,Bo=new WeakMap,ws=new WeakMap,li=new WeakMap;function nh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(De(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wo.set(t,n)}).catch(()=>{}),li.set(e,n),e}function sh(n){if(js.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});js.set(n,e)}let Ms={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return js.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return De(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ih(n){Ms=n(Ms)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(bs(this),e,...t);return Bo.set(s,e.sort?e.sort():[e]),De(s)}:th().includes(n)?function(...e){return n.apply(bs(this),e),De(Wo.get(this))}:function(...e){return De(n.apply(bs(this),e))}}function oh(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&sh(n),Zc(n,eh())?new Proxy(n,Ms):n)}function De(n){if(n instanceof IDBRequest)return nh(n);if(ws.has(n))return ws.get(n);const e=oh(n);return e!==n&&(ws.set(n,e),li.set(e,n)),e}const bs=n=>li.get(n);function ah(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=De(o);return s&&o.addEventListener("upgradeneeded",c=>{s(De(o.result),c.oldVersion,c.newVersion,De(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const lh=["get","getKey","getAll","getAllKeys","count"],ch=["put","add","delete","clear"],xs=new Map;function rr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xs.get(e))return xs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ch.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||lh.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),i&&c.done]))[0]};return xs.set(e,r),r}ih(n=>({...n,get:(e,t,s)=>rr(e,t)||n.get(e,t,s),has:(e,t)=>!!rr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fs="@firebase/app",or="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new ai("@firebase/app"),dh="@firebase/app-compat",fh="@firebase/analytics-compat",ph="@firebase/analytics",mh="@firebase/app-check-compat",gh="@firebase/app-check",_h="@firebase/auth",yh="@firebase/auth-compat",vh="@firebase/database",wh="@firebase/data-connect",bh="@firebase/database-compat",xh="@firebase/functions",Eh="@firebase/functions-compat",Ih="@firebase/installations",Ch="@firebase/installations-compat",Th="@firebase/messaging",Sh="@firebase/messaging-compat",Nh="@firebase/performance",kh="@firebase/performance-compat",Rh="@firebase/remote-config",Ah="@firebase/remote-config-compat",Ph="@firebase/storage",Oh="@firebase/storage-compat",Dh="@firebase/firestore",Lh="@firebase/ai",jh="@firebase/firestore-compat",Mh="firebase",Fh="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]",Uh={[Fs]:"fire-core",[dh]:"fire-core-compat",[ph]:"fire-analytics",[fh]:"fire-analytics-compat",[gh]:"fire-app-check",[mh]:"fire-app-check-compat",[_h]:"fire-auth",[yh]:"fire-auth-compat",[vh]:"fire-rtdb",[wh]:"fire-data-connect",[bh]:"fire-rtdb-compat",[xh]:"fire-fn",[Eh]:"fire-fn-compat",[Ih]:"fire-iid",[Ch]:"fire-iid-compat",[Th]:"fire-fcm",[Sh]:"fire-fcm-compat",[Nh]:"fire-perf",[kh]:"fire-perf-compat",[Rh]:"fire-rc",[Ah]:"fire-rc-compat",[Ph]:"fire-gcs",[Oh]:"fire-gcs-compat",[Dh]:"fire-fst",[jh]:"fire-fst-compat",[Lh]:"fire-vertex","fire-js":"fire-js",[Mh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,Wh=new Map,Ws=new Map;function ar(n,e){try{n.container.addComponent(e)}catch(t){ve.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ye(n){const e=n.name;if(Ws.has(e))return ve.debug(`There were multiple attempts to register component ${e}.`),!1;Ws.set(e,n);for(const t of An.values())ar(t,n);for(const t of Wh.values())ar(t,n);return!0}function ns(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Q(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new on("app","Firebase",Bh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=Fh;function Vo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Us,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Le.create("bad-app-name",{appName:String(i)});if(t||(t=Lo()),!t)throw Le.create("no-options");const r=An.get(i);if(r){if(Ke(t,r.options)&&Ke(s,r.config))return r;throw Le.create("duplicate-app",{appName:i})}const o=new Kc(i);for(const c of Ws.values())o.addComponent(c);const a=new Vh(t,s,o);return An.set(i,a),a}function ci(n=Us){const e=An.get(n);if(!e&&n===Us&&Lo())return Vo();if(!e)throw Le.create("no-app",{appName:n});return e}function le(n,e,t){var o;let s=(o=Uh[n])!=null?o:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ve.warn(a.join(" "));return}Ye(new Ue(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="firebase-heartbeat-database",$h=1,Yt="firebase-heartbeat-store";let Es=null;function Ho(){return Es||(Es=ah(Hh,$h,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Le.create("idb-open",{originalErrorMessage:n.message})})),Es}async function zh(n){try{const t=(await Ho()).transaction(Yt),s=await t.objectStore(Yt).get($o(n));return await t.done,s}catch(e){if(e instanceof Ee)ve.warn(e.message);else{const t=Le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ve.warn(t.message)}}}async function lr(n,e){try{const s=(await Ho()).transaction(Yt,"readwrite");await s.objectStore(Yt).put(e,$o(n)),await s.done}catch(t){if(t instanceof Ee)ve.warn(t.message);else{const s=Le.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ve.warn(s.message)}}}function $o(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=1024,qh=30;class Kh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>qh){const o=Qh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ve.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cr(),{heartbeatsToSend:s,unsentEntries:i}=Yh(this._heartbeatsCache.heartbeats),r=Nn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ve.warn(t),""}}}function cr(){return new Date().toISOString().substring(0,10)}function Yh(n,e=Gh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),hr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),hr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oc()?Dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const i=await this.read();return lr(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const i=await this.read();return lr(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hr(n){return Nn(JSON.stringify({version:2,heartbeats:n})).length}function Qh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){Ye(new Ue("platform-logger",e=>new hh(e),"PRIVATE")),Ye(new Ue("heartbeat",e=>new Kh(e),"PRIVATE")),le(Fs,or,n),le(Fs,or,"esm2020"),le("fire-js","")}Xh("");var Zh="firebase",eu="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le(Zh,eu,"app");var ur={};const dr="@firebase/database",fr="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="";function tu(n){zo=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),D(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Kt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nu(e)}}catch(e){}return new su},Ge=Go("localStorage"),iu=Go("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new ai("@firebase/database"),ru=function(){let n=1;return function(){return n++}}(),qo=function(n){const e=$c(n),t=new Wc;t.update(e);const s=t.digest();return ni.encodeByteArray(s)},an=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=an.apply(null,s):typeof s=="object"?e+=D(s):e+=s,e+=" "}return e};let Bt=null,pr=!0;const ou=function(n,e){m(!0,"Can't turn on custom loggers persistently."),ct.logLevel=T.VERBOSE,Bt=ct.log.bind(ct)},B=function(...n){if(pr===!0&&(pr=!1,Bt===null&&iu.get("logging_enabled")===!0&&ou()),Bt){const e=an.apply(null,n);Bt(e)}},ln=function(n){return function(...e){B(n,...e)}},Bs=function(...n){const e="FIREBASE INTERNAL ERROR: "+an(...n);ct.error(e)},we=function(...n){const e=`FIREBASE FATAL ERROR: ${an(...n)}`;throw ct.error(e),new Error(e)},q=function(...n){const e="FIREBASE WARNING: "+an(...n);ct.warn(e)},au=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ko=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},lu=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},mt="[MIN_NAME]",Je="[MAX_NAME]",St=function(n,e){if(n===e)return 0;if(n===mt||e===Je)return-1;if(e===mt||n===Je)return 1;{const t=mr(n),s=mr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},cu=function(n,e){return n===e?0:n<e?-1:1},Lt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+D(e))},hi=function(n){if(typeof n!="object"||n===null)return D(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=D(e[s]),t+=":",t+=hi(n[e[s]]);return t+="}",t},Yo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function K(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Jo=function(n){m(!Ko(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const u=h.join("");let d="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},hu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function du(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const fu=new RegExp("^-?(0*)\\d{1,10}$"),pu=-2147483648,mu=2147483647,mr=function(n){if(fu.test(n)){const e=Number(n);if(e>=pu&&e<=mu)return e}return null},Nt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw q("Exception was thrown by user callback.",t),e},Math.floor(0))}},gu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Q(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(B("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',q(e)}}class En{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}En.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="5",Qo="v",Xo="s",Zo="r",ea="f",ta=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,na="ls",sa="p",Vs="ac",ia="websocket",ra="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,h=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ge.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ge.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function aa(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===ia)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ra)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vu(n)&&(t.ns=n.namespace);const i=[];return K(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.counters_={}}incrementCounter(e,t=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ec(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={},Cs={};function di(n){const e=n.toString();return Is[e]||(Is[e]=new wu),Is[e]}function bu(n,e){const t=n.toString();return Cs[t]||(Cs[t]=e()),Cs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Nt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="start",Eu="close",Iu="pLPCommand",Cu="pRTLPCB",la="id",ca="pw",ha="ser",Tu="cb",Su="seg",Nu="ts",ku="d",Ru="dframe",ua=1870,da=30,Au=ua-da,Pu=25e3,Ou=3e4;class at{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ln(e),this.stats_=di(t),this.urlFn=c=>(this.appCheckToken&&(c[Vs]=this.appCheckToken),aa(t,ra,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ou)),lu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fi((...r)=>{const[o,a,c,h,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gr)this.id=a,this.password=c;else if(o===Eu)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[gr]="t",s[ha]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Tu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qo]=ui,this.transportSessionId&&(s[Xo]=this.transportSessionId),this.lastSessionId&&(s[na]=this.lastSessionId),this.applicationId&&(s[sa]=this.applicationId),this.appCheckToken&&(s[Vs]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&ta.test(location.hostname)&&(s[Zo]=ea);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){at.forceAllow_=!0}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){return at.forceAllow_?!0:!at.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!hu()&&!uu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ao(t),i=Yo(s,Au);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ru]="t",s[la]=e,s[ca]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=D(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ru(),window[Iu+this.uniqueCallbackIdentifier]=e,window[Cu+this.uniqueCallbackIdentifier]=t,this.myIFrame=fi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){B("frame writing exception"),a.stack&&B(a.stack),B(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||B("No IE domain setting required")}catch(t){const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[la]=this.myID,e[ca]=this.myPW,e[ha]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+da+s.length<=ua;){const o=this.pendingSegs.shift();s=s+"&"+Su+i+"="+o.seg+"&"+Nu+i+"="+o.ts+"&"+ku+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Pu)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{B("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch(s){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=16384,Lu=45e3;let Pn=null;typeof MozWebSocket!="undefined"?Pn=MozWebSocket:typeof WebSocket!="undefined"&&(Pn=WebSocket);class Z{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ln(this.connId),this.stats_=di(t),this.connURL=Z.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Qo]=ui,typeof location!="undefined"&&location.hostname&&ta.test(location.hostname)&&(o[Zo]=ea),t&&(o[Xo]=t),s&&(o[na]=s),i&&(o[Vs]=i),r&&(o[sa]=r),aa(e,ia,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ge.set("previous_websocket_failure",!0);try{let s;Pc(),this.mySock=new Pn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Z.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pn!==null&&!Z.forceDisallow_}static previouslyFailed(){return Ge.isInMemoryStorage||Ge.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ge.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Kt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Yo(t,Du);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Z.responsesRequiredToBeHealthy=2;Z.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{static get ALL_TRANSPORTS(){return[at,Z]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Z&&Z.isAvailable();let s=t&&!Z.previouslyFailed();if(e.webSocketOnly&&(t||q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Z];else{const i=this.transports_=[];for(const r of Jt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=6e4,Mu=5e3,Fu=10*1024,Uu=100*1024,Ts="t",_r="d",Wu="s",yr="r",Bu="e",vr="o",wr="a",br="n",xr="p",Vu="h";class Hu{constructor(e,t,s,i,r,o,a,c,h,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ln("c:"+this.id+":"),this.transportManager_=new Jt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ts in e){const t=e[Ts];t===wr?this.upgradeIfSecondaryHealthy_():t===yr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===vr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Lt("t",e),s=Lt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:br,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Lt("t",e),s=Lt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Lt(Ts,e);if(_r in e){const s=e[_r];if(t===Vu){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===br){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Wu?this.onConnectionShutdown_(s):t===yr?this.onReset_(s):t===Bu?Bs("Server Error: "+s):t===vr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ui!==s&&q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Vt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ju))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ge.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends pa{static getInstance(){return new On}constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ii()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=32,Ir=768;class S{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function I(){return new S("")}function w(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function We(n){return n.pieces_.length-n.pieceNum_}function N(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new S(n.pieces_,e)}function ma(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function $u(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ga(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function _a(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new S(e,0)}function L(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof S)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new S(t,0)}function E(n){return n.pieceNum_>=n.pieces_.length}function $(n,e){const t=w(n),s=w(e);if(t===null)return e;if(t===s)return $(N(n),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function pi(n,e){if(We(n)!==We(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ee(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(We(n)>We(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class zu{constructor(e,t){this.errorPrefix_=t,this.parts_=ga(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ts(this.parts_[s]);ya(this)}}function Gu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ts(e),ya(n)}function qu(n){const e=n.parts_.pop();n.byteLength_-=ts(e),n.parts_.length>0&&(n.byteLength_-=1)}function ya(n){if(n.byteLength_>Ir)throw new Error(n.errorPrefix_+"has a key path longer than "+Ir+" bytes ("+n.byteLength_+").");if(n.parts_.length>Er)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Er+") or object contains a cycle "+ze(n))}function ze(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends pa{static getInstance(){return new mi}constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=1e3,Ku=60*5*1e3,Cr=30*1e3,Yu=1.3,Ju=3e4,Qu="server_kill",Tr=3;class ye extends fa{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ye.nextPersistentConnectionId_++,this.log_=ln("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jt,this.maxReconnectDelay_=Ku,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&On.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(D(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new es,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,h=a.s;ye.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ie(e,"w")){const s=pt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Uc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Fc(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+D(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Bs("Unrecognized action received from server: "+D(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ju&&(this.reconnectDelay_=jt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ye.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},h=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:h};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?B("getToken() completed but was canceled"):(B("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Hu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{q(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qu)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&q(d),c())}}}interrupt(e){B("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){B("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ls(this.interruptReasons_)&&(this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>hi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new S(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){B("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tr&&(this.reconnectDelay_=Cr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){B("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+zo.replace(/\./g,"-")]=1,ii()?e["framework.cordova"]=1:Fo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=On.getInstance().currentlyOnline();return Ls(this.interruptReasons_)&&e}}ye.nextPersistentConnectionId_=0;ye.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new b(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new b(mt,e),i=new b(mt,t);return this.compare(s,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;class va extends ss{static get __EMPTY_NODE(){return yn}static set __EMPTY_NODE(e){yn=e}compare(e,t){return St(e.name,t.name)}isDefinedOn(e){throw It("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return b.MIN}maxPost(){return new b(Je,yn)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,yn)}toString(){return".key"}}const ht=new va;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class M{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:M.RED,this.left=i!=null?i:G.EMPTY_NODE,this.right=r!=null?r:G.EMPTY_NODE}copy(e,t,s,i,r){return new M(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return G.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return G.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,M.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,M.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}M.RED=!0;M.BLACK=!1;class Xu{copy(e,t,s,i,r){return this}insert(e,t,s){return new M(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class G{constructor(e,t=G.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new G(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,M.BLACK,null,null))}remove(e){return new G(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,M.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new vn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new vn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new vn(this.root_,null,this.comparator_,!0,e)}}G.EMPTY_NODE=new Xu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e){return St(n.name,e.name)}function gi(n,e){return St(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs;function ed(n){Hs=n}const wa=function(n){return typeof n=="number"?"number:"+Jo(n):"string:"+n},ba=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else m(n===Hs||n.isEmpty(),"priority of unexpected type.");m(n===Hs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr;class j{static set __childrenNodeConstructor(e){Sr=e}static get __childrenNodeConstructor(){return Sr}constructor(e,t=j.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ba(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new j(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return E(e)?this:w(e)===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:j.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=w(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||We(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,j.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Jo(this.value_):e+=this.value_,this.lazyHash_=qo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===j.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof j.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=j.VALUE_TYPE_ORDER.indexOf(t),r=j.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}j.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa,Ea;function td(n){xa=n}function nd(n){Ea=n}class sd extends ss{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?St(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Je,new j("[PRIORITY-POST]",Ea))}makePost(e,t){const s=xa(e);return new b(t,new j("[PRIORITY-POST]",s))}toString(){return".priority"}}const P=new sd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=Math.log(2);class rd{constructor(e){const t=r=>parseInt(Math.log(r)/id,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Dn=function(n,e,t,s){n.sort(e);const i=function(c,h){const u=h-c;let d,f;if(u===0)return null;if(u===1)return d=n[c],f=t?t(d):d,new M(f,d.node,M.BLACK,null,null);{const p=parseInt(u/2,10)+c,g=i(c,p),x=i(p+1,h);return d=n[p],f=t?t(d):d,new M(f,d.node,M.BLACK,g,x)}},r=function(c){let h=null,u=null,d=n.length;const f=function(g,x){const C=d-g,H=d;d-=g;const pe=i(C+1,H),Y=n[C],W=t?t(Y):Y;p(new M(W,Y.node,x,null,pe))},p=function(g){h?(h.left=g,h=g):(u=g,h=g)};for(let g=0;g<c.count;++g){const x=c.nextBitIsOne(),C=Math.pow(2,c.count-(g+1));x?f(C,M.BLACK):(f(C,M.BLACK),f(C,M.RED))}return u},o=new rd(n.length),a=r(o);return new G(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;const rt={};class me{static get Default(){return m(rt&&P,"ChildrenNode.ts has not been loaded"),Ss=Ss||new me({".priority":rt},{".priority":P}),Ss}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=pt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof G?t:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,t){m(e!==ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(b.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Dn(s,e.getCompare()):a=rt;const c=e.toString(),h={...this.indexSet_};h[c]=e;const u={...this.indexes_};return u[c]=a,new me(u,h)}addToIndexes(e,t){const s=Rn(this.indexes_,(i,r)=>{const o=pt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===rt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(b.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&a.push(h),h=c.getNext();return a.push(e),Dn(a,o.getCompare())}else return rt;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new b(e.name,a))),c.insert(e,e.node)}});return new me(s,this.indexSet_)}removeFromIndexes(e,t){const s=Rn(this.indexes_,i=>{if(i===rt)return i;{const r=t.get(e.name);return r?i.remove(new b(e.name,r)):i}});return new me(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt;class v{static get EMPTY_NODE(){return Mt||(Mt=new v(new G(gi),null,me.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ba(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Mt:t}}getChild(e){const t=w(e);return t===null?this:this.getImmediateChild(t).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new b(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Mt:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=w(e);if(s===null)return t;{m(w(e)!==".priority"||We(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(N(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(P,(o,a)=>{t[o]=a.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wa(this.getPriority().val())+":"),this.forEachChild(P,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":qo(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new b(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new b(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new b(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cn?-1:0}withIndex(e){if(e===ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(P),i=t.getIterator(P);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ht?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class od extends v{constructor(){super(new G(gi),v.EMPTY_NODE,me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const cn=new od;Object.defineProperties(b,{MIN:{value:new b(mt,v.EMPTY_NODE)},MAX:{value:new b(Je,cn)}});va.__EMPTY_NODE=v.EMPTY_NODE;j.__childrenNodeConstructor=v;ed(cn);nd(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=!0;function F(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new j(t,F(e))}if(!(n instanceof Array)&&ad){const t=[];let s=!1;if(K(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=F(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new b(o,c)))}}),t.length===0)return v.EMPTY_NODE;const r=Dn(t,Zu,o=>o.name,gi);if(s){const o=Dn(t,P.getCompare());return new v(r,F(e),new me({".priority":o},{".priority":P}))}else return new v(r,F(e),me.Default)}else{let t=v.EMPTY_NODE;return K(n,(s,i)=>{if(Ie(n,s)&&s.substring(0,1)!=="."){const r=F(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(F(e))}}td(F);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends ss{constructor(e){super(),this.indexPath_=e,m(!E(e)&&w(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?St(e.name,t.name):r}makePost(e,t){const s=F(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new b(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,cn);return new b(Je,e)}toString(){return ga(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends ss{compare(e,t){const s=e.node.compareTo(t.node);return s===0?St(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,t){const s=F(e);return new b(t,s)}toString(){return".value"}}const hd=new cd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){return{type:"value",snapshotNode:n}}function gt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Qt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Xt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function ud(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Qt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gt(t,s)):o.trackChildChange(Xt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(P,(i,r)=>{t.hasChild(i)||s.trackChildChange(Qt(i,r))}),t.isLeafNode()||t.forEachChild(P,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Xt(i,r,o))}else s.trackChildChange(gt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.indexedFilter_=new _i(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zt.getStartPost_(e),this.endPost_=Zt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new b(t,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=v.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(P,(o,a)=>{r.matches(new b(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Zt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new b(t,s))||(s=v.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new b(t,s),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const d=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,h,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,c);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Xt(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Qt(t,d));const x=a.updateImmediateChild(t,v.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(gt(f.name,f.node)),x.updateImmediateChild(f.name,f.node)):x}}else return s.isEmpty()?e:u&&o(h,c)>=0?(r!=null&&(r.trackChildChange(Qt(h.name,h.node)),r.trackChildChange(gt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(h.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===P}copy(){const e=new yi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fd(n){return n.loadsAllData()?new _i(n.getIndex()):n.hasLimit()?new dd(n):new Zt(n)}function Nr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===P?t="$priority":n.index_===hd?t="$value":n.index_===ht?t="$key":(m(n.index_ instanceof ld,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=D(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=D(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+D(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=D(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+D(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function kr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==P&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends fa{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ln("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ln.getListenId_(e,s),a={};this.listens_[o]=a;const c=Nr(e._queryParams);this.restRequest_(r+".json",c,(h,u)=>{let d=u;if(h===404&&(d=null,h=null),h===null&&this.onDataUpdate_(r,d,!1,s),pt(this.listens_,o)===a){let f;h?h===401?f="permission_denied":f="rest_error:"+h:f="ok",i(f,null)}})}unlisten(e,t){const s=Ln.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Nr(e._queryParams),s=e._path.toString(),i=new es;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ct(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Kt(a.responseText)}catch(h){q("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&q("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return{value:null,children:new Map}}function Ca(n,e,t){if(E(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=w(e);n.children.has(s)||n.children.set(s,jn());const i=n.children.get(s);e=N(e),Ca(i,e,t)}}function $s(n,e,t){n.value!==null?t(e,n.value):md(n,(s,i)=>{const r=new S(e.toString()+"/"+s);$s(i,r,t)})}function md(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&K(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=10*1e3,_d=30*1e3,yd=5*60*1e3;class vd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gd(e);const s=Rr+(_d-Rr)*Math.random();Vt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;K(e,(i,r)=>{r>0&&Ie(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Vt(this.reportStats_.bind(this),Math.floor(Math.random()*2*yd))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(te||(te={}));function Ta(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=te.ACK_USER_WRITE,this.source=Ta()}operationForChild(e){if(E(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new S(e));return new Mn(I(),t,this.revert)}}else return m(w(this.path)===e,"operationForChild called for unrelated child."),new Mn(N(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.source=e,this.path=t,this.type=te.LISTEN_COMPLETE}operationForChild(e){return E(this.path)?new en(this.source,I()):new en(this.source,N(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=te.OVERWRITE}operationForChild(e){return E(this.path)?new Qe(this.source,I(),this.snap.getImmediateChild(e)):new Qe(this.source,N(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=te.MERGE}operationForChild(e){if(E(this.path)){const t=this.children.subtree(new S(e));return t.isEmpty()?null:t.value?new Qe(this.source,I(),t.value):new tn(this.source,I(),t)}else return m(w(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tn(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(E(e))return this.isFullyInitialized()&&!this.filtered_;const t=w(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ud(o.childName,o.snapshotNode))}),Ft(n,i,"child_removed",e,s,t),Ft(n,i,"child_added",e,s,t),Ft(n,i,"child_moved",r,s,t),Ft(n,i,"child_changed",e,s,t),Ft(n,i,"value",e,s,t),i}function Ft(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Ed(n,a,c)),o.forEach(a=>{const c=xd(n,a,r);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(c,n.query_))})})}function xd(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ed(n,e,t){if(e.childName==null||t.childName==null)throw It("Should only compare child_ events.");const s=new b(e.childName,e.snapshotNode),i=new b(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n,e){return{eventCache:n,serverCache:e}}function Ht(n,e,t,s){return is(new Be(e,t,s),n.serverCache)}function Sa(n,e,t,s){return is(n.eventCache,new Be(e,t,s))}function Fn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Xe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;const Id=()=>(Ns||(Ns=new G(cu)),Ns);class k{static fromObject(e){let t=new k(null);return K(e,(s,i)=>{t=t.set(new S(s),i)}),t}constructor(e,t=Id()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:I(),value:this.value};if(E(e))return null;{const s=w(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(N(e),t);return r!=null?{path:L(new S(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(E(e))return this;{const t=w(e),s=this.children.get(t);return s!==null?s.subtree(N(e)):new k(null)}}set(e,t){if(E(e))return new k(t,this.children);{const s=w(e),r=(this.children.get(s)||new k(null)).set(N(e),t),o=this.children.insert(s,r);return new k(this.value,o)}}remove(e){if(E(e))return this.children.isEmpty()?new k(null):new k(null,this.children);{const t=w(e),s=this.children.get(t);if(s){const i=s.remove(N(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new k(null):new k(this.value,r)}else return this}}get(e){if(E(e))return this.value;{const t=w(e),s=this.children.get(t);return s?s.get(N(e)):null}}setTree(e,t){if(E(e))return t;{const s=w(e),r=(this.children.get(s)||new k(null)).setTree(N(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new k(this.value,o)}}fold(e){return this.fold_(I(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(L(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,I(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(E(e))return null;{const r=w(e),o=this.children.get(r);return o?o.findOnPath_(N(e),L(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,I(),t)}foreachOnPath_(e,t,s){if(E(e))return this;{this.value&&s(t,this.value);const i=w(e),r=this.children.get(i);return r?r.foreachOnPath_(N(e),L(t,i),s):new k(null)}}foreach(e){this.foreach_(I(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(L(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.writeTree_=e}static empty(){return new re(new k(null))}}function $t(n,e,t){if(E(e))return new re(new k(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$(i,e);return r=r.updateChild(o,t),new re(n.writeTree_.set(i,r))}else{const i=new k(t),r=n.writeTree_.setTree(e,i);return new re(r)}}}function Ar(n,e,t){let s=n;return K(t,(i,r)=>{s=$t(s,L(e,i),r)}),s}function Pr(n,e){if(E(e))return re.empty();{const t=n.writeTree_.setTree(e,new k(null));return new re(t)}}function zs(n,e){return tt(n,e)!=null}function tt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild($(t.path,e)):null}function Or(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(P,(s,i)=>{e.push(new b(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new b(s,i.value))}),e}function je(n,e){if(E(e))return n;{const t=tt(n,e);return t!=null?new re(new k(t)):new re(n.writeTree_.subtree(e))}}function Gs(n){return n.writeTree_.isEmpty()}function _t(n,e){return Na(I(),n.writeTree_,e)}function Na(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Na(L(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(L(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e){return Pa(e,n)}function Cd(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=$t(n.visibleWrites,e,t)),n.lastWriteId=s}function Td(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Sd(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Nd(a,s.path)?i=!1:ee(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return kd(n),!0;if(s.snap)n.visibleWrites=Pr(n.visibleWrites,s.path);else{const a=s.children;K(a,c=>{n.visibleWrites=Pr(n.visibleWrites,L(s.path,c))})}return!0}else return!1}function Nd(n,e){if(n.snap)return ee(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ee(L(n.path,t),e))return!0;return!1}function kd(n){n.visibleWrites=ka(n.allWrites,Rd,I()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Rd(n){return n.visible}function ka(n,e,t){let s=re.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ee(t,o)?(a=$(t,o),s=$t(s,a,r.snap)):ee(o,t)&&(a=$(o,t),s=$t(s,I(),r.snap.getChild(a)));else if(r.children){if(ee(t,o))a=$(t,o),s=Ar(s,a,r.children);else if(ee(o,t))if(a=$(o,t),E(a))s=Ar(s,I(),r.children);else{const c=pt(r.children,w(a));if(c){const h=c.getChild(N(a));s=$t(s,I(),h)}}}else throw It("WriteRecord should have .snap or .children")}}return s}function Ra(n,e,t,s,i){if(!s&&!i){const r=tt(n.visibleWrites,e);if(r!=null)return r;{const o=je(n.visibleWrites,e);if(Gs(o))return t;if(t==null&&!zs(o,I()))return null;{const a=t||v.EMPTY_NODE;return _t(o,a)}}}else{const r=je(n.visibleWrites,e);if(!i&&Gs(r))return t;if(!i&&t==null&&!zs(r,I()))return null;{const o=function(h){return(h.visible||i)&&(!s||!~s.indexOf(h.writeId))&&(ee(h.path,e)||ee(e,h.path))},a=ka(n.allWrites,o,e),c=t||v.EMPTY_NODE;return _t(a,c)}}}function Ad(n,e,t){let s=v.EMPTY_NODE;const i=tt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(P,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=je(n.visibleWrites,e);return t.forEachChild(P,(o,a)=>{const c=_t(je(r,new S(o)),a);s=s.updateImmediateChild(o,c)}),Or(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=je(n.visibleWrites,e);return Or(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Pd(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,t);if(zs(n.visibleWrites,r))return null;{const o=je(n.visibleWrites,r);return Gs(o)?i.getChild(t):_t(o,i.getChild(t))}}function Od(n,e,t,s){const i=L(e,t),r=tt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=je(n.visibleWrites,i);return _t(o,s.getNode().getImmediateChild(t))}else return null}function Dd(n,e){return tt(n.visibleWrites,e)}function Ld(n,e,t,s,i,r,o){let a;const c=je(n.visibleWrites,e),h=tt(c,I());if(h!=null)a=h;else if(t!=null)a=_t(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function jd(){return{visibleWrites:re.empty(),allWrites:[],lastWriteId:-1}}function Un(n,e,t,s){return Ra(n.writeTree,n.treePath,e,t,s)}function bi(n,e){return Ad(n.writeTree,n.treePath,e)}function Dr(n,e,t,s){return Pd(n.writeTree,n.treePath,e,t,s)}function Wn(n,e){return Dd(n.writeTree,L(n.treePath,e))}function Md(n,e,t,s,i,r){return Ld(n.writeTree,n.treePath,e,t,s,i,r)}function xi(n,e,t){return Od(n.writeTree,n.treePath,e,t)}function Aa(n,e){return Pa(L(n.treePath,e),n.writeTree)}function Pa(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Xt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Qt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,gt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xt(s,e.snapshotNode,i.oldSnap));else throw It("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Oa=new Ud;class Ei{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Be(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xe(this.viewCache_),r=Md(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n){return{filter:n}}function Bd(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Vd(n,e,t,s,i){const r=new Fd;let o,a;if(t.type===te.OVERWRITE){const h=t;h.source.fromUser?o=qs(n,e,h.path,h.snap,s,i,r):(m(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!E(h.path),o=Bn(n,e,h.path,h.snap,s,i,a,r))}else if(t.type===te.MERGE){const h=t;h.source.fromUser?o=$d(n,e,h.path,h.children,s,i,r):(m(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Ks(n,e,h.path,h.children,s,i,a,r))}else if(t.type===te.ACK_USER_WRITE){const h=t;h.revert?o=qd(n,e,h.path,s,i,r):o=zd(n,e,h.path,h.affectedTree,s,i,r)}else if(t.type===te.LISTEN_COMPLETE)o=Gd(n,e,t.path,s,r);else throw It("Unknown operation type: "+t.type);const c=r.getChanges();return Hd(e,o,c),{viewCache:o,changes:c}}function Hd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Fn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ia(Fn(e)))}}function Da(n,e,t,s,i,r){const o=e.eventCache;if(Wn(s,t)!=null)return e;{let a,c;if(E(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Xe(e),u=h instanceof v?h:v.EMPTY_NODE,d=bi(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const h=Un(s,Xe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=w(t);if(h===".priority"){m(We(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=Dr(s,t,u,c);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=N(t);let d;if(o.isCompleteForChild(h)){c=e.serverCache.getNode();const f=Dr(s,t,o.getNode(),c);f!=null?d=o.getNode().getImmediateChild(h).updateChild(u,f):d=o.getNode().getImmediateChild(h)}else d=xi(s,h,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),h,d,u,i,r):a=o.getNode()}}return Ht(e,a,o.isFullyInitialized()||E(t),n.filter.filtersNodes())}}function Bn(n,e,t,s,i,r,o,a){const c=e.serverCache;let h;const u=o?n.filter:n.filter.getIndexedFilter();if(E(t))h=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);h=u.updateFullNode(c.getNode(),p,null)}else{const p=w(t);if(!c.isCompleteForPath(t)&&We(t)>1)return e;const g=N(t),C=c.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?h=u.updatePriority(c.getNode(),C):h=u.updateChild(c.getNode(),p,C,g,Oa,null)}const d=Sa(e,h,c.isFullyInitialized()||E(t),u.filtersNodes()),f=new Ei(i,d,r);return Da(n,d,t,i,f,a)}function qs(n,e,t,s,i,r,o){const a=e.eventCache;let c,h;const u=new Ei(i,e,r);if(E(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ht(e,h,!0,n.filter.filtersNodes());else{const d=w(t);if(d===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),c=Ht(e,h,a.isFullyInitialized(),a.isFiltered());else{const f=N(t),p=a.getNode().getImmediateChild(d);let g;if(E(f))g=s;else{const x=u.getCompleteChild(d);x!=null?ma(f)===".priority"&&x.getChild(_a(f)).isEmpty()?g=x:g=x.updateChild(f,s):g=v.EMPTY_NODE}if(p.equals(g))c=e;else{const x=n.filter.updateChild(a.getNode(),d,g,f,u,o);c=Ht(e,x,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Lr(n,e){return n.eventCache.isCompleteForChild(e)}function $d(n,e,t,s,i,r,o){let a=e;return s.foreach((c,h)=>{const u=L(t,c);Lr(e,w(u))&&(a=qs(n,a,u,h,i,r,o))}),s.foreach((c,h)=>{const u=L(t,c);Lr(e,w(u))||(a=qs(n,a,u,h,i,r,o))}),a}function jr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ks(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;E(t)?h=s:h=new k(null).setTree(t,s);const u=e.serverCache.getNode();return h.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=jr(n,p,f);c=Bn(n,c,new S(d),g,i,r,o,a)}}),h.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),x=jr(n,g,f);c=Bn(n,c,new S(d),x,i,r,o,a)}}),c}function zd(n,e,t,s,i,r,o){if(Wn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(E(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Bn(n,e,t,c.getNode().getChild(t),i,r,a,o);if(E(t)){let h=new k(null);return c.getNode().forEachChild(ht,(u,d)=>{h=h.set(new S(u),d)}),Ks(n,e,t,h,i,r,a,o)}else return e}else{let h=new k(null);return s.foreach((u,d)=>{const f=L(t,u);c.isCompleteForPath(f)&&(h=h.set(u,c.getNode().getChild(f)))}),Ks(n,e,t,h,i,r,a,o)}}function Gd(n,e,t,s,i){const r=e.serverCache,o=Sa(e,r.getNode(),r.isFullyInitialized()||E(t),r.isFiltered());return Da(n,o,t,s,Oa,i)}function qd(n,e,t,s,i,r){let o;if(Wn(s,t)!=null)return e;{const a=new Ei(s,e,i),c=e.eventCache.getNode();let h;if(E(t)||w(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Un(s,Xe(e));else{const d=e.serverCache.getNode();m(d instanceof v,"serverChildren would be complete if leaf node"),u=bi(s,d)}u=u,h=n.filter.updateFullNode(c,u,r)}else{const u=w(t);let d=xi(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?h=n.filter.updateChild(c,u,d,N(t),a,r):e.eventCache.getNode().hasChild(u)?h=n.filter.updateChild(c,u,v.EMPTY_NODE,N(t),a,r):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Un(s,Xe(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Wn(s,I())!=null,Ht(e,h,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new _i(s.getIndex()),r=fd(s);this.processor_=Wd(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),h=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new Be(c,o.isFullyInitialized(),i.filtersNodes()),d=new Be(h,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=is(d,u),this.eventGenerator_=new wd(this.query_)}get query(){return this.query_}}function Yd(n){return n.viewCache_.serverCache.getNode()}function Jd(n){return Fn(n.viewCache_)}function Qd(n,e){const t=Xe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!E(e)&&!t.getImmediateChild(w(e)).isEmpty())?t.getChild(e):null}function Mr(n){return n.eventRegistrations_.length===0}function Xd(n,e){n.eventRegistrations_.push(e)}function Fr(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ur(n,e,t,s){e.type===te.MERGE&&e.source.queryId!==null&&(m(Xe(n.viewCache_),"We should always have a full cache before handling merges"),m(Fn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Vd(n.processor_,i,e,t,s);return Bd(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,La(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Zd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(P,(r,o)=>{s.push(gt(r,o))}),t.isFullyInitialized()&&s.push(Ia(t.getNode())),La(n,s,t.getNode(),e)}function La(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return bd(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class ja{constructor(){this.views=new Map}}function ef(n){m(!Vn,"__referenceConstructor has already been defined"),Vn=n}function tf(){return m(Vn,"Reference.ts has not been loaded"),Vn}function nf(n){return n.views.size===0}function Ii(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Ur(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ur(o,e,t,s));return r}}function Ma(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Un(t,i?s:null),c=!1;a?c=!0:s instanceof v?(a=bi(t,s),c=!1):(a=v.EMPTY_NODE,c=!1);const h=is(new Be(a,c,!1),new Be(s,i,!1));return new Kd(e,h)}return o}function sf(n,e,t,s,i,r){const o=Ma(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Xd(o,t),Zd(o,t)}function rf(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ve(n);if(i==="default")for(const[c,h]of n.views.entries())o=o.concat(Fr(h,t,s)),Mr(h)&&(n.views.delete(c),h.query._queryParams.loadsAllData()||r.push(h.query));else{const c=n.views.get(i);c&&(o=o.concat(Fr(c,t,s)),Mr(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Ve(n)&&r.push(new(tf())(e._repo,e._path)),{removed:r,events:o}}function Fa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Me(n,e){let t=null;for(const s of n.views.values())t=t||Qd(s,e);return t}function Ua(n,e){if(e._queryParams.loadsAllData())return os(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Wa(n,e){return Ua(n,e)!=null}function Ve(n){return os(n)!=null}function os(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;function of(n){m(!Hn,"__referenceConstructor has already been defined"),Hn=n}function af(){return m(Hn,"Reference.ts has not been loaded"),Hn}let lf=1;class Wr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new k(null),this.pendingWriteTree_=jd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ba(n,e,t,s,i){return Cd(n.pendingWriteTree_,e,t,s,i),i?un(n,new Qe(Ta(),e,t)):[]}function qe(n,e,t=!1){const s=Td(n.pendingWriteTree_,e);if(Sd(n.pendingWriteTree_,e)){let r=new k(null);return s.snap!=null?r=r.set(I(),!0):K(s.children,o=>{r=r.set(new S(o),!0)}),un(n,new Mn(s.path,r,t))}else return[]}function hn(n,e,t){return un(n,new Qe(vi(),e,t))}function cf(n,e,t){const s=k.fromObject(t);return un(n,new tn(vi(),e,s))}function hf(n,e){return un(n,new en(vi(),e))}function uf(n,e,t){const s=Ti(n,t);if(s){const i=Si(s),r=i.path,o=i.queryId,a=$(r,e),c=new en(wi(o),a);return Ni(n,r,c)}else return[]}function $n(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Wa(o,e))){const c=rf(o,e,t,s);nf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=c.removed;if(a=c.events,!i){const u=h.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(f,p)=>Ve(p));if(u&&!d){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=pf(f);for(let g=0;g<p.length;++g){const x=p[g],C=x.query,H=za(n,x);n.listenProvider_.startListening(zt(C),nn(n,C),H.hashFn,H.onComplete)}}}!d&&h.length>0&&!s&&(u?n.listenProvider_.stopListening(zt(e),null):h.forEach(f=>{const p=n.queryToTagMap.get(as(f));n.listenProvider_.stopListening(zt(f),p)}))}mf(n,h)}return a}function Va(n,e,t,s){const i=Ti(n,s);if(i!=null){const r=Si(i),o=r.path,a=r.queryId,c=$(o,e),h=new Qe(wi(a),c,t);return Ni(n,o,h)}else return[]}function df(n,e,t,s){const i=Ti(n,s);if(i){const r=Si(i),o=r.path,a=r.queryId,c=$(o,e),h=k.fromObject(t),u=new tn(wi(a),c,h);return Ni(n,o,u)}else return[]}function Ys(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=$(f,i);r=r||Me(p,g),o=o||Ve(p)});let a=n.syncPointTree_.get(i);a?(o=o||Ve(a),r=r||Me(a,I())):(a=new ja,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const x=Me(g,I());x&&(r=r.updateImmediateChild(p,x))}));const h=Wa(a,e);if(!h&&!e._queryParams.loadsAllData()){const f=as(e);m(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=gf();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=rs(n.pendingWriteTree_,i);let d=sf(a,e,t,u,r,c);if(!h&&!o&&!s){const f=Ua(a,e);d=d.concat(_f(n,e,f))}return d}function Ci(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=$(o,e),h=Me(a,c);if(h)return h});return Ra(i,e,r,t,!0)}function ff(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(h,u)=>{const d=$(h,t);s=s||Me(u,d)});let i=n.syncPointTree_.get(t);i?s=s||Me(i,I()):(i=new ja,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Be(s,!0,!1):null,a=rs(n.pendingWriteTree_,e._path),c=Ma(i,e,a,r?o.getNode():v.EMPTY_NODE,r);return Jd(c)}function un(n,e){return Ha(e,n.syncPointTree_,null,rs(n.pendingWriteTree_,I()))}function Ha(n,e,t,s){if(E(n.path))return $a(n,e,t,s);{const i=e.get(I());t==null&&i!=null&&(t=Me(i,I()));let r=[];const o=w(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const h=t?t.getImmediateChild(o):null,u=Aa(s,o);r=r.concat(Ha(a,c,h,u))}return i&&(r=r.concat(Ii(i,n,s,t))),r}}function $a(n,e,t,s){const i=e.get(I());t==null&&i!=null&&(t=Me(i,I()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,h=Aa(s,o),u=n.operationForChild(o);u&&(r=r.concat($a(u,a,c,h)))}),i&&(r=r.concat(Ii(i,n,s,t))),r}function za(n,e){const t=e.query,s=nn(n,t);return{hashFn:()=>(Yd(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?uf(n,t._path,s):hf(n,t._path);{const r=du(i,t);return $n(n,t,null,r)}}}}function nn(n,e){const t=as(e);return n.queryToTagMap.get(t)}function as(n){return n._path.toString()+"$"+n._queryIdentifier}function Ti(n,e){return n.tagToQueryMap.get(e)}function Si(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new S(n.substr(0,e))}}function Ni(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=rs(n.pendingWriteTree_,e);return Ii(s,t,i,null)}function pf(n){return n.fold((e,t,s)=>{if(t&&Ve(t))return[os(t)];{let i=[];return t&&(i=Fa(t)),K(s,(r,o)=>{i=i.concat(o)}),i}})}function zt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(af())(n._repo,n._path):n}function mf(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=as(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function gf(){return lf++}function _f(n,e,t){const s=e._path,i=nn(n,e),r=za(n,t),o=n.listenProvider_.startListening(zt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Ve(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((h,u,d)=>{if(!E(h)&&u&&Ve(u))return[os(u).query];{let f=[];return u&&(f=f.concat(Fa(u).map(p=>p.query))),K(d,(p,g)=>{f=f.concat(g)}),f}});for(let h=0;h<c.length;++h){const u=c[h];n.listenProvider_.stopListening(zt(u),nn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ki(t)}node(){return this.node_}}class Ri{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=L(this.path_,e);return new Ri(this.syncTree_,t)}node(){return Ci(this.syncTree_,this.path_)}}const yf=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Br=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return vf(n[".sv"],e,t);if(typeof n[".sv"]=="object")return wf(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},vf=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},wf=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bf=function(n,e,t,s){return Ai(e,new Ri(t,n),s)},Ga=function(n,e,t){return Ai(n,new ki(e),t)};function Ai(n,e,t){const s=n.getPriority().val(),i=Br(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Br(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new j(a,F(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new j(i))),o.forEachChild(P,(a,c)=>{const h=Ai(c,e.getImmediateChild(a),t);h!==c&&(r=r.updateImmediateChild(a,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Oi(n,e){let t=e instanceof S?e:new S(e),s=n,i=w(t);for(;i!==null;){const r=pt(s.node.children,i)||{children:{},childCount:0};s=new Pi(i,s,r),t=N(t),i=w(t)}return s}function kt(n){return n.node.value}function qa(n,e){n.node.value=e,Js(n)}function Ka(n){return n.node.childCount>0}function xf(n){return kt(n)===void 0&&!Ka(n)}function ls(n,e){K(n.node.children,(t,s)=>{e(new Pi(t,n,s))})}function Ya(n,e,t,s){t&&e(n),ls(n,i=>{Ya(i,e,!0)})}function Ef(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function dn(n){return new S(n.parent===null?n.name:dn(n.parent)+"/"+n.name)}function Js(n){n.parent!==null&&If(n.parent,n.name,n)}function If(n,e,t){const s=xf(t),i=Ie(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Js(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Js(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=/[\[\].#$\/\u0000-\u001F\u007F]/,Tf=/[\[\].#$\u0000-\u001F\u007F]/,ks=10*1024*1024,Ja=function(n){return typeof n=="string"&&n.length!==0&&!Cf.test(n)},Qa=function(n){return typeof n=="string"&&n.length!==0&&!Tf.test(n)},Sf=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qa(n)},Nf=function(n,e,t,s){Di(ri(n,"value"),e,t)},Di=function(n,e,t){const s=t instanceof S?new zu(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ze(s));if(typeof e=="function")throw new Error(n+"contains a function "+ze(s)+" with contents = "+e.toString());if(Ko(e))throw new Error(n+"contains "+e.toString()+" "+ze(s));if(typeof e=="string"&&e.length>ks/3&&ts(e)>ks)throw new Error(n+"contains a string greater than "+ks+" utf8 bytes "+ze(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(K(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ja(o)))throw new Error(n+" contains an invalid key ("+o+") "+ze(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gu(s,o),Di(n,a,s),qu(s)}),i&&r)throw new Error(n+' contains ".value" child '+ze(s)+" in addition to actual children.")}},Xa=function(n,e,t,s){if(!Qa(t))throw new Error(ri(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kf=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xa(n,e,t)},Rf=function(n,e){if(w(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Af=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ja(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Sf(t))throw new Error(ri(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Li(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!pi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Za(n,e,t){Li(n,t),el(n,s=>pi(s,e))}function ue(n,e,t){Li(n,t),el(n,s=>ee(s,e)||ee(e,s))}function el(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Of(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Of(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Bt&&B("event: "+t.toString()),Nt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="repo_interrupt",Lf=25;class jf{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pf,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jn(),this.transactionQueueTree_=new Pi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Mf(n,e,t){if(n.stats_=di(n.repoInfo_),n.forceRestClient_||gu())n.server_=new Ln(n.repoInfo_,(s,i,r,o)=>{Vr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Hr(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{D(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ye(n.repoInfo_,e,(s,i,r,o)=>{Vr(n,s,i,r,o)},s=>{Hr(n,s)},s=>{Uf(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=bu(n.repoInfo_,()=>new vd(n.stats_,n.server_)),n.infoData_=new pd,n.infoSyncTree_=new Wr({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=hn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mi(n,"connected",!1),n.serverSyncTree_=new Wr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const h=o(a,c);ue(n.eventQueue_,s._path,h)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ff(n){const t=n.infoData_.getNode(new S(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ji(n){return yf({timestamp:Ff(n)})}function Vr(n,e,t,s,i){n.dataUpdateCount++;const r=new S(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Rn(t,h=>F(h));o=df(n.serverSyncTree_,r,c,i)}else{const c=F(t);o=Va(n.serverSyncTree_,r,c,i)}else if(s){const c=Rn(t,h=>F(h));o=cf(n.serverSyncTree_,r,c)}else{const c=F(t);o=hn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=hs(n,r)),ue(n.eventQueue_,a,o)}function Hr(n,e){Mi(n,"connected",e),e===!1&&Vf(n)}function Uf(n,e){K(e,(t,s)=>{Mi(n,t,s)})}function Mi(n,e,t){const s=new S("/.info/"+e),i=F(t);n.infoData_.updateSnapshot(s,i);const r=hn(n.infoSyncTree_,s,i);ue(n.eventQueue_,s,r)}function tl(n){return n.nextWriteId_++}function Wf(n,e,t){const s=ff(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=F(i).withIndex(e._queryParams.getIndex());Ys(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=hn(n.serverSyncTree_,e._path,r);else{const a=nn(n.serverSyncTree_,e);o=Va(n.serverSyncTree_,e._path,r,a)}return ue(n.eventQueue_,e._path,o),$n(n.serverSyncTree_,e,t,null,!0),r},i=>(cs(n,"get for query "+D(e)+" failed: "+i),Promise.reject(new Error(i))))}function Bf(n,e,t,s,i){cs(n,"set",{path:e.toString(),value:t,priority:s});const r=ji(n),o=F(t,s),a=Ci(n.serverSyncTree_,e),c=Ga(o,a,r),h=tl(n),u=Ba(n.serverSyncTree_,e,c,h,!0);Li(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||q("set at "+e+" failed: "+f);const x=qe(n.serverSyncTree_,h,!g);ue(n.eventQueue_,e,x),zf(n,i,f,p)});const d=ol(n,e);hs(n,d),ue(n.eventQueue_,d,[])}function Vf(n){cs(n,"onDisconnectEvents");const e=ji(n),t=jn();$s(n.onDisconnect_,I(),(i,r)=>{const o=bf(i,r,n.serverSyncTree_,e);Ca(t,i,o)});let s=[];$s(t,I(),(i,r)=>{s=s.concat(hn(n.serverSyncTree_,i,r));const o=ol(n,i);hs(n,o)}),n.onDisconnect_=jn(),ue(n.eventQueue_,I(),s)}function Hf(n,e,t){let s;w(e._path)===".info"?s=Ys(n.infoSyncTree_,e,t):s=Ys(n.serverSyncTree_,e,t),Za(n.eventQueue_,e._path,s)}function $r(n,e,t){let s;w(e._path)===".info"?s=$n(n.infoSyncTree_,e,t):s=$n(n.serverSyncTree_,e,t),Za(n.eventQueue_,e._path,s)}function $f(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Df)}function cs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),B(t,...e)}function zf(n,e,t,s){e&&Nt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function nl(n,e,t){return Ci(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Fi(n,e=n.transactionQueueTree_){if(e||us(n,e),kt(e)){const t=il(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Gf(n,dn(e),t)}else Ka(e)&&ls(e,t=>{Fi(n,t)})}function Gf(n,e,t){const s=t.map(h=>h.currentWriteId),i=nl(n,e,s);let r=i;const o=i.hash();for(let h=0;h<t.length;h++){const u=t[h];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=$(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,h=>{cs(n,"transaction put response",{path:c.toString(),status:h});let u=[];if(h==="ok"){const d=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(qe(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&d.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();us(n,Oi(n.transactionQueueTree_,e)),Fi(n,n.transactionQueueTree_),ue(n.eventQueue_,e,u);for(let f=0;f<d.length;f++)Nt(d[f])}else{if(h==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{q("transaction at "+c.toString()+" failed: "+h);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=h}hs(n,e)}},o)}function hs(n,e){const t=sl(n,e),s=dn(t),i=il(n,t);return qf(n,i,s),s}function qf(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],h=$(t,c.path);let u=!1,d;if(m(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Lf)u=!0,d="maxretry",i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0));else{const f=nl(n,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Di("transaction failed: Data returned ",p,c.path);let g=F(p);typeof p=="object"&&p!=null&&Ie(p,".priority")||(g=g.updatePriority(f.getPriority()));const C=c.currentWriteId,H=ji(n),pe=Ga(g,f,H);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=pe,c.currentWriteId=tl(n),o.splice(o.indexOf(C),1),i=i.concat(Ba(n.serverSyncTree_,c.path,pe,c.currentWriteId,c.applyLocally)),i=i.concat(qe(n.serverSyncTree_,C,!0))}else u=!0,d="nodata",i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0))}ue(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}us(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Nt(s[a]);Fi(n,n.transactionQueueTree_)}function sl(n,e){let t,s=n.transactionQueueTree_;for(t=w(e);t!==null&&kt(s)===void 0;)s=Oi(s,t),e=N(e),t=w(e);return s}function il(n,e){const t=[];return rl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function rl(n,e,t){const s=kt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ls(e,i=>{rl(n,i,t)})}function us(n,e){const t=kt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,qa(e,t.length>0?t:void 0)}ls(e,s=>{us(n,s)})}function ol(n,e){const t=dn(sl(n,e)),s=Oi(n.transactionQueueTree_,e);return Ef(s,i=>{Rs(n,i)}),Rs(n,s),Ya(s,i=>{Rs(n,i)}),t}function Rs(n,e){const t=kt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(qe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qa(e,void 0):t.length=r+1,ue(n.eventQueue_,dn(e),i);for(let o=0;o<s.length;o++)Nt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(r){}e+="/"+i}return e}function Yf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):q(`Invalid query segment '${t}' in query '${n}'`)}return e}const zr=function(n,e){const t=Jf(n),s=t.namespace;t.domain==="firebase.com"&&we(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&we("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||au();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new oa(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new S(t.pathString)}},Jf=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(a=n.substring(0,h-1),n=n.substring(h+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(i=Kf(n.substring(u,d)));const f=Yf(n.substring(Math.min(n.length,d)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const p=e.slice(0,h);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+D(this.snapshot.exportVal())}}class Xf{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return E(this._path)?null:ma(this._path)}get ref(){return new Ce(this._repo,this._path)}get _queryIdentifier(){const e=kr(this._queryParams),t=hi(e);return t==="{}"?"default":t}get _queryObject(){return kr(this._queryParams)}isEqual(e){if(e=U(e),!(e instanceof Ui))return!1;const t=this._repo===e._repo,s=pi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$u(this._path)}}class Ce extends Ui{constructor(e,t){super(e,t,new yi,!1)}get parent(){const e=_a(this._path);return e===null?null:new Ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class sn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new S(e),s=Qs(this.ref,e);return new sn(this._node.getChild(t),s,P)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new sn(i,Qs(this.ref,s),P)))}hasChild(e){const t=new S(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wi(n,e){return n=U(n),n._checkNotDeleted("ref"),e!==void 0?Qs(n._root,e):n._root}function Qs(n,e){return n=U(n),w(n._path)===null?kf("child","path",e):Xa("child","path",e),new Ce(n._repo,L(n._path,e))}function Zf(n,e){n=U(n),Rf("set",n._path),Nf("set",e,n._path);const t=new es;return Bf(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ep(n){n=U(n);const e=new al(()=>{}),t=new ds(e);return Wf(n._repo,n,t).then(s=>new sn(s,new Ce(n._repo,n._path),n._queryParams.getIndex()))}class ds{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Qf("value",this,new sn(e.snapshotNode,new Ce(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Xf(this,e,t):null}matches(e){return e instanceof ds?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tp(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,h=(u,d)=>{$r(n._repo,n,a),c(u,d)};h.userCallback=t.userCallback,h.context=t.context,t=h}const o=new al(t,r||void 0),a=new ds(o);return Hf(n._repo,n,a),()=>$r(n._repo,n,a)}function np(n,e,t,s){return tp(n,"value",e,t,s)}ef(Ce);of(Ce);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="FIREBASE_DATABASE_EMULATOR_HOST",Xs={};let ip=!1;function rp(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Tt(r);n.repoInfo_=new oa(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function op(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||we("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),B("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=zr(r,i),a=o.repoInfo,c;typeof process!="undefined"&&ur&&(c=ur[sp]),c?(r=`http://${c}?ns=${a.namespace}`,o=zr(r,i),a=o.repoInfo):o.repoInfo.secure;const h=new yu(n.name,n.options,e);Af("Invalid Firebase Database URL",o),E(o.path)||we("Database URL must point to the root of a Firebase Database (not including a child path).");const u=lp(a,n,h,new _u(n,t));return new cp(u,n)}function ap(n,e){const t=Xs[e];(!t||t[n.key]!==n)&&we(`Database ${e}(${n.repoInfo_}) has already been deleted.`),$f(n),delete t[n.key]}function lp(n,e,t,s){let i=Xs[e.name];i||(i={},Xs[e.name]=i);let r=i[n.toURLString()];return r&&we("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jf(n,ip,t,s),i[n.toURLString()]=r,r}class cp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Mf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ce(this._repo,I())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ap(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&we("Cannot call "+e+" on a deleted database.")}}function hp(n=ci(),e){const t=ns(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Do("database");s&&up(t,...s)}return t}function up(n,e,t,s={}){n=U(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Ke(s,r.repoInfo_.emulatorOptions))return;we("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&we('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new En(En.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Mo(s.mockUserToken,n.app.options.projectId);o=new En(a)}Tt(e)&&oi(e),rp(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n){tu(et),Ye(new Ue("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return op(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),le(dr,fr,n),le(dr,fr,"esm2020")}ye.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ye.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};dp();function ll(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fp=ll,cl=new on("auth","Firebase",ll());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new ai("@firebase/auth");function pp(n,...e){zn.logLevel<=T.WARN&&zn.warn(`Auth (${et}): ${n}`,...e)}function In(n,...e){zn.logLevel<=T.ERROR&&zn.error(`Auth (${et}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n,...e){throw Bi(n,...e)}function ce(n,...e){return Bi(n,...e)}function hl(n,e,t){const s={...fp(),[e]:t};return new on("auth","Firebase",s).create(e,{appName:n.name})}function Fe(n){return hl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bi(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return cl.create(n,...e)}function y(n,e,...t){if(!n)throw Bi(e,...t)}function ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw In(e),new Error(e)}function be(n,e){n||ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function mp(){return Gr()==="http:"||Gr()==="https:"}function Gr(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mp()||Rc()||"connection"in navigator)?navigator.onLine:!0}function _p(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.shortDelay=e,this.longDelay=t,be(t>e,"Short delay should be less than long delay!"),this.isMobile=ii()||Fo()}get(){return gp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n,e){be(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wp=new fn(3e4,6e4);function nt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Te(n,e,t,s,i={}){return dl(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ct({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...r};return kc()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Tt(n.emulatorConfig.host)&&(h.credentials="include"),ul.fetch()(await fl(n,n.config.apiHost,t,a),h)})}async function dl(n,e,t){n._canInitEmulator=!1;const s={...yp,...e};try{const i=new xp(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw wn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw wn(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw hl(n,u,h);oe(n,u)}}catch(i){if(i instanceof Ee)throw i;oe(n,"network-request-failed",{message:String(i)})}}async function fs(n,e,t,s,i={}){const r=await Te(n,e,t,s,i);return"mfaPendingCredential"in r&&oe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function fl(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?Vi(n.config,i):`${n.config.apiScheme}://${i}`;return vp.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function bp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ce(this.auth,"network-request-failed")),wp.get())})}}function wn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ce(n,e,s);return i.customData._tokenResponse=t,i}function qr(n){return n!==void 0&&n.enterprise!==void 0}class Ep{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ip(n,e){return Te(n,"GET","/v2/recaptchaConfig",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,e){return Te(n,"POST","/v1/accounts:delete",e)}async function Gn(n,e){return Te(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function Tp(n,e=!1){const t=U(n),s=await t.getIdToken(e),i=Hi(s);y(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Gt(As(i.auth_time)),issuedAtTime:Gt(As(i.iat)),expirationTime:Gt(As(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function As(n){return Number(n)*1e3}function Hi(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return In("JWT malformed, contained fewer than 3 sections"),null;try{const i=kn(t);return i?JSON.parse(i):(In("Failed to decode base64 JWT payload"),null)}catch(i){return In("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kr(n){const e=Hi(n);return y(e,"internal-error"),y(typeof e.exp!="undefined","internal-error"),y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ee&&Sp(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Sp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gt(this.lastLoginAt),this.creationTime=Gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(n){var d;const e=n.auth,t=await n.getIdToken(),s=await yt(n,Gn(e,{idToken:t}));y(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(d=i.providerUserInfo)!=null&&d.length?pl(i.providerUserInfo):[],o=Rp(n.providerData,r),a=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ei(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function kp(n){const e=U(n);await qn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rp(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function pl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(n,e){const t=await dl(n,{},async()=>{const s=Ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await fl(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&Tt(n.emulatorConfig.host)&&(c.credentials="include"),ul.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pp(n,e){return Te(n,"POST","/v2/accounts:revokeToken",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken!="undefined","internal-error"),y(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Kr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){y(e.length!==0,"internal-error");const t=Kr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ap(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new ut;return s&&(y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n,e){y(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class ne{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Np(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ei(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yt(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tp(this,e)}reload(){return kp(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await qn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(Fe(this.auth));const e=await this.getIdToken();return await yt(this,Cp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var pe,Y,W,He,st,_n,it,Xi;const s=(pe=t.displayName)!=null?pe:void 0,i=(Y=t.email)!=null?Y:void 0,r=(W=t.phoneNumber)!=null?W:void 0,o=(He=t.photoURL)!=null?He:void 0,a=(st=t.tenantId)!=null?st:void 0,c=(_n=t._redirectEventId)!=null?_n:void 0,h=(it=t.createdAt)!=null?it:void 0,u=(Xi=t.lastLoginAt)!=null?Xi:void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:g,stsTokenManager:x}=t;y(d&&x,e,"internal-error");const C=ut.fromJSON(this.name,x);y(typeof d=="string",e,"internal-error"),Ne(s,e.name),Ne(i,e.name),y(typeof f=="boolean",e,"internal-error"),y(typeof p=="boolean",e,"internal-error"),Ne(r,e.name),Ne(o,e.name),Ne(a,e.name),Ne(c,e.name),Ne(h,e.name),Ne(u,e.name);const H=new ne({uid:d,auth:e,email:i,emailVerified:f,displayName:s,isAnonymous:p,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:C,createdAt:h,lastLoginAt:u});return g&&Array.isArray(g)&&(H.providerData=g.map(ec=>({...ec}))),c&&(H._redirectEventId=c),H}static async _fromIdTokenResponse(e,t,s=!1){const i=new ut;i.updateFromServerResponse(t);const r=new ne({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await qn(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];y(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?pl(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ut;a.updateFromIdToken(s);const c=new ne({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ei(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Map;function _e(n){be(n instanceof Function,"Expected a class definition");let e=Yr.get(n);return e?(be(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ml.type="NONE";const Jr=ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n,e,t){return`firebase:${n}:${e}:${t}`}class dt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Cn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Cn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gn(this.auth,{idToken:e}).catch(()=>{});return t?ne._fromGetAccountInfoResponse(this.auth,t,e):null}return ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new dt(_e(Jr),e,s);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=i[0]||_e(Jr);const o=Cn(s,e.config.apiKey,e.name);let a=null;for(const h of t)try{const u=await h._get(o);if(u){let d;if(typeof u=="string"){const f=await Gn(e,{idToken:u}).catch(()=>{});if(!f)break;d=await ne._fromGetAccountInfoResponse(e,f,u)}else d=ne._fromJSON(e,u);h!==r&&(a=d),r=h;break}}catch(u){}const c=i.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new dt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(o)}catch(u){}})),new dt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bl(e))return"Blackberry";if(xl(e))return"Webos";if(_l(e))return"Safari";if((e.includes("chrome/")||yl(e))&&!e.includes("edge/"))return"Chrome";if(wl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gl(n=z()){return/firefox\//i.test(n)}function _l(n=z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yl(n=z()){return/crios\//i.test(n)}function vl(n=z()){return/iemobile/i.test(n)}function wl(n=z()){return/android/i.test(n)}function bl(n=z()){return/blackberry/i.test(n)}function xl(n=z()){return/webos/i.test(n)}function $i(n=z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Op(n=z()){var e;return $i(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Dp(){return Ac()&&document.documentMode===10}function El(n=z()){return $i(n)||wl(n)||xl(n)||bl(n)||/windows phone/i.test(n)||vl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n,e=[]){let t;switch(n){case"Browser":t=Qr(z());break;case"Worker":t=`${Qr(z())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${et}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(n,e={}){return Te(n,"GET","/v2/passwordPolicy",nt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=6;class Fp{constructor(e){var s,i,r,o;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(s=t.minPasswordLength)!=null?s:Mp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))!=null?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var s,i,r,o,a,c;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(s=t.meetsMinPasswordLength)!=null?s:!0),t.isValid&&(t.isValid=(i=t.meetsMaxPasswordLength)!=null?i:!0),t.isValid&&(t.isValid=(r=t.containsLowercaseLetter)!=null?r:!0),t.isValid&&(t.isValid=(o=t.containsUppercaseLetter)!=null?o:!0),t.isValid&&(t.isValid=(a=t.containsNumericCharacter)!=null?a:!0),t.isValid&&(t.isValid=(c=t.containsNonAlphanumericCharacter)!=null?c:!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xr(this),this.idTokenSubscription=new Xr(this),this.beforeStateQueue=new Lp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_e(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gn(this,{idToken:e}),s=await ne._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Q(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(s){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_p()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(Fe(this));const t=e?U(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(Fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(Fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jp(this),t=new Fp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new on("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Pp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_e(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[_e(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(s=(t=this.currentUser)==null?void 0:t.uid)!=null?s:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Il(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rt(n){return U(n)}class Xr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bc(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wp(n){ps=n}function Cl(n){return ps.loadJS(n)}function Bp(){return ps.recaptchaEnterpriseScript}function Vp(){return ps.gapiScript}function Hp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $p{constructor(){this.enterprise=new zp}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zp{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Gp="recaptcha-enterprise",Tl="NO_RECAPTCHA";class qp{constructor(e){this.type=Gp,this.auth=Rt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ip(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ep(c);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,o(h.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;qr(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(h=>{o(h)}).catch(()=>{o(Tl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $p().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&qr(window.grecaptcha))i(a,r,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Bp();c.length!==0&&(c+=a),Cl(c).then(()=>{i(a,r,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function Zr(n,e,t,s=!1,i=!1){const r=new qp(n);let o;if(i)o=Tl;else try{o=await r.verify(t)}catch(c){o=await r.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eo(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zr(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zr(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n,e){const t=ns(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Ke(r,e!=null?e:{}))return i;oe(i,"already-initialized")}return t.initialize({options:e})}function Yp(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(_e);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Jp(n,e,t){const s=Rt(n);y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Sl(e),{host:o,port:a}=Qp(e),c=a===null?"":`:${a}`,h={url:`${r}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){y(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),y(Ke(h,s.config.emulator)&&Ke(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Tt(o)?oi(`${r}//${o}${c}`):Xp()}function Sl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qp(n){const e=Sl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:to(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:to(o)}}}function to(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Xp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,t){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}async function Zp(n,e){return Te(n,"POST","/v1/accounts:update",e)}async function em(n,e){return Te(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(n,e){return fs(n,"POST","/v1/accounts:signInWithPassword",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(n,e){return fs(n,"POST","/v1/accounts:signInWithEmailLink",nt(n,e))}async function sm(n,e){return fs(n,"POST","/v1/accounts:signInWithEmailLink",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends zi{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new rn(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new rn(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eo(e,t,"signInWithPassword",tm);case"emailLink":return nm(e,{email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eo(e,s,"signUpPassword",em);case"emailLink":return sm(e,{idToken:t,email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(n,e){return fs(n,"POST","/v1/accounts:signInWithIdp",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="http://localhost";class Ze extends zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Ze(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ft(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:im,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ct(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function om(n){const e=Ut(Wt(n)).link,t=e?Ut(Wt(e)).deep_link_id:null,s=Ut(Wt(n)).deep_link_id;return(s?Ut(Wt(s)).link:null)||s||t||e||n}class Gi{constructor(e){var o,a,c,h,u,d;const t=Ut(Wt(e)),s=(o=t.apiKey)!=null?o:null,i=(a=t.oobCode)!=null?a:null,r=rm((c=t.mode)!=null?c:null);y(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=(h=t.continueUrl)!=null?h:null,this.languageCode=(u=t.lang)!=null?u:null,this.tenantId=(d=t.tenantId)!=null?d:null}static parseLink(e){const t=om(e);try{return new Gi(t)}catch(s){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.providerId=At.PROVIDER_ID}static credential(e,t){return rn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Gi.parseLink(t);return y(s,"argument-error"),rn._fromEmailAndCode(e,s.code,s.tenantId)}}At.PROVIDER_ID="password";At.EMAIL_PASSWORD_SIGN_IN_METHOD="password";At.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends pn{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch(t){return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ae.credential(t,s)}catch(i){return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends pn{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch(t){return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends pn{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Oe.credential(t,s)}catch(i){return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await ne._fromIdTokenResponse(e,s,i),o=no(s);return new vt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=no(s);return new vt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function no(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ee{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Kn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!=null?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Kn(e,t,s,i)}}function kl(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Kn._fromErrorAndOperation(n,r,e,s):r})}async function am(n,e,t=!1){const s=await yt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vt._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(n,e,t=!1){const{auth:s}=n;if(Q(s.app))return Promise.reject(Fe(s));const i="reauthenticate";try{const r=await yt(n,kl(s,i,e,n),t);y(r.idToken,s,"internal-error");const o=Hi(r.idToken);y(o,s,"internal-error");const{sub:a}=o;return y(n.uid===a,s,"user-mismatch"),vt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&oe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(n,e,t=!1){if(Q(n.app))return Promise.reject(Fe(n));const s="signIn",i=await kl(n,s,e),r=await vt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function cm(n,e){return Rl(Rt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(n){const e=Rt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function G_(n,e,t){return Q(n.app)?Promise.reject(Fe(n)):cm(U(n),At.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hm(n),s})}function q_(n,e){return um(U(n),null,e)}async function um(n,e,t){const{auth:s}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(r.password=t);const o=await yt(n,Zp(s,r));await n._updateTokensIfNecessary(o,!0)}function dm(n,e,t,s){return U(n).onIdTokenChanged(e,t,s)}function fm(n,e,t){return U(n).beforeAuthStateChanged(e,t)}function K_(n,e,t,s){return U(n).onAuthStateChanged(e,t,s)}function Y_(n){return U(n).signOut()}const Yn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yn,"1"),this.storage.removeItem(Yn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=1e3,mm=10;class Pl extends Al{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=El(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Dp()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mm):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pl.type="LOCAL";const gm=Pl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Al{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ol.type="SESSION";const Dl=Ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ms(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async h=>h(t.origin,r)),c=await _m(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const h=qi("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===h)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function vm(n){he().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return typeof he().WorkerGlobalScope!="undefined"&&typeof he().importScripts=="function"}async function wm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(n){return null}}function bm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function xm(){return Ll()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="firebaseLocalStorageDb",Em=1,Jn="firebaseLocalStorage",Ml="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gs(n,e){return n.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function Im(){const n=indexedDB.deleteDatabase(jl);return new mn(n).toPromise()}function ti(){const n=indexedDB.open(jl,Em);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Jn,{keyPath:Ml})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Jn)?e(s):(s.close(),await Im(),e(await ti()))})})}async function so(n,e,t){const s=gs(n,!0).put({[Ml]:e,value:t});return new mn(s).toPromise()}async function Cm(n,e){const t=gs(n,!1).get(e),s=await new mn(t).toPromise();return s===void 0?null:s.value}function io(n,e){const t=gs(n,!0).delete(e);return new mn(t).toPromise()}const Tm=800,Sm=3;class Fl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ti(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Sm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(xm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await wm(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await so(e,Yn,"1"),await io(e,Yn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>so(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Cm(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>io(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=gs(i,!1).getAll();return new mn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fl.type="LOCAL";const Nm=Fl;new fn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n,e){return e?_e(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rm(n){return Rl(n.auth,new Ki(n),n.bypassAuthState)}function Am(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),lm(t,new Ki(n),n.bypassAuthState)}async function Pm(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),am(t,new Ki(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rm;case"linkViaPopup":case"linkViaRedirect":return Pm;case"reauthViaPopup":case"reauthViaRedirect":return Am;default:oe(this.auth,"internal-error")}}resolve(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new fn(2e3,1e4);class lt extends Ul{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){be(this.filter.length===1,"Popup operations only handle one event");const e=qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Om.get())};e()}}lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="pendingRedirect",Tn=new Map;class Lm extends Ul{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Tn.get(this.auth._key());if(!e){try{const s=await jm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Tn.set(this.auth._key(),e)}return this.bypassAuthState||Tn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jm(n,e){const t=Um(e),s=Fm(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Mm(n,e){Tn.set(n._key(),e)}function Fm(n){return _e(n._redirectPersistence)}function Um(n){return Cn(Dm,n.config.apiKey,n.name)}async function Wm(n,e,t=!1){if(Q(n.app))return Promise.reject(Fe(n));const s=Rt(n),i=km(s,e),o=await new Lm(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=10*60*1e3;class Vm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Wl(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(ce(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ro(e))}saveEventToCache(e){this.cachedEventUids.add(ro(e)),this.lastProcessedEventTime=Date.now()}}function ro(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(n,e={}){return Te(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gm=/^https?/;async function qm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $m(n);for(const t of e)try{if(Km(t))return}catch(s){}oe(n,"unauthorized-domain")}function Km(n){const e=Zs(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Gm.test(t))return!1;if(zm.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new fn(3e4,6e4);function oo(){const n=he().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jm(n){return new Promise((e,t)=>{var i,r,o;function s(){oo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oo(),t(ce(n,"network-request-failed"))},timeout:Ym.get()})}if((r=(i=he().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=he().gapi)!=null&&o.load)s();else{const a=Hp("iframefcb");return he()[a]=()=>{gapi.load?s():t(ce(n,"network-request-failed"))},Cl(`${Vp()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Sn=null,e})}let Sn=null;function Qm(n){return Sn=Sn||Jm(n),Sn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new fn(5e3,15e3),Zm="__/auth/iframe",eg="emulator/auth/iframe",tg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ng=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sg(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vi(e,eg):`https://${n.config.authDomain}/${Zm}`,s={apiKey:e.apiKey,appName:n.name,v:et},i=ng.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Ct(s).slice(1)}`}async function ig(n){const e=await Qm(n),t=he().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:sg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tg,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ce(n,"network-request-failed"),a=he().setTimeout(()=>{r(o)},Xm.get());function c(){he().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},og=500,ag=600,lg="_blank",cg="http://localhost";class ao{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function hg(n,e,t,s=og,i=ag){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...rg,width:s.toString(),height:i.toString(),top:r,left:o},h=z().toLowerCase();t&&(a=yl(h)?lg:t),gl(h)&&(e=e||cg,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(Op(h)&&a!=="_self")return ug(e||"",a),new ao(null);const d=window.open(e||"",a,u);y(d,n,"popup-blocked");try{d.focus()}catch(f){}return new ao(d)}function ug(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="__/auth/handler",fg="emulator/auth/handler",pg=encodeURIComponent("fac");async function lo(n,e,t,s,i,r){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:et,eventId:i};if(e instanceof Nl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ls(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof pn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),h=c?`#${pg}=${encodeURIComponent(c)}`:"";return`${mg(n)}?${Ct(a).slice(1)}${h}`}function mg({config:n}){return n.emulator?Vi(n,fg):`https://${n.authDomain}/${dg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="webStorageSupport";class gg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dl,this._completeRedirectFn=Wm,this._overrideRedirectResult=Mm}async _openPopup(e,t,s,i){var o;be((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await lo(e,t,s,Zs(),i);return hg(e,r,qi())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await lo(e,t,s,Zs(),i);return vm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(be(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ig(e),s=new Vm(e);return t.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ps,{type:Ps},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Ps];r!==void 0&&t(!!r),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return El()||_l()||$i()}}const _g=gg;var co="@firebase/auth",ho="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wg(n){Ye(new Ue("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Il(n)},h=new Up(s,i,r,c);return Yp(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ye(new Ue("auth-internal",e=>{const t=Rt(e.getProvider("auth").getImmediate());return(s=>new yg(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),le(co,ho,vg(n)),le(co,ho,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=5*60,xg=jo("authIdTokenMaxAge")||bg;let uo=null;const Eg=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>xg)return;const i=t==null?void 0:t.token;uo!==i&&(uo=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ig(n=ci()){const e=ns(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Kp(n,{popupRedirectResolver:_g,persistence:[Nm,gm,Dl]}),s=jo("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Eg(r.toString());fm(t,o,()=>o(t.currentUser)),dm(t,a=>o(a))}}const i=Oo("auth");return i&&Jp(t,`http://${i}`),t}function Cg(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}Wp({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=ce("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Cg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wg("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="firebasestorage.googleapis.com",Tg="storageBucket",Sg=2*60*1e3,Ng=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Ee{constructor(e,t,s=0){super(Os(e),`Firebase Storage: ${t} (${Os(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Os(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function Os(n){return"storage/"+n}function kg(){const n="An unknown error occurred, please check the error payload for server response.";return new fe(de.UNKNOWN,n)}function Rg(){return new fe(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ag(){return new fe(de.CANCELED,"User canceled the upload/download.")}function Pg(n){return new fe(de.INVALID_URL,"Invalid URL '"+n+"'.")}function Og(n){return new fe(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function fo(n){return new fe(de.INVALID_ARGUMENT,n)}function Vl(){return new fe(de.APP_DELETED,"The Firebase app was deleted.")}function Dg(n){return new fe(de.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=se.makeFromUrl(e,t)}catch(i){return new se(e,"")}if(s.path==="")return s;throw Og(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function h(W){W.path_=decodeURIComponent(W.path)}const u="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},x=t===Bl?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",H=new RegExp(`^https?://${x}/${i}/${C}`,"i"),Y=[{regex:a,indices:c,postModify:r},{regex:p,indices:g,postModify:h},{regex:H,indices:{bucket:1,path:2},postModify:h}];for(let W=0;W<Y.length;W++){const He=Y[W],st=He.regex.exec(e);if(st){const _n=st[He.indices.bucket];let it=st[He.indices.path];it||(it=""),s=new se(_n,it),He.postModify(s);break}}if(s==null)throw Pg(e);return s}}class Lg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let h=!1;function u(...C){h||(h=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,n(p,c())},C)}function f(){r&&clearTimeout(r)}function p(C,...H){if(h){f();return}if(C){f(),u.call(null,C,...H);return}if(c()||o){f(),u.call(null,C,...H);return}s<64&&(s*=2);let Y;a===1?(a=2,Y=0):Y=(s+Math.random())*1e3,d(Y)}let g=!1;function x(C){g||(g=!0,f(),!h&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,x(!0)},t),x}function Mg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){return n!==void 0}function po(n,e,t,s){if(s<e)throw fo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw fo(`Invalid value for '${n}'. Expected ${t} or less.`)}function Ug(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var Qn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Qn||(Qn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,t,s,i,r,o,a,c,h,u,d,f=!0,p=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.isUsingEmulator=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,x)=>{this.resolve_=g,this.reject_=x,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new bn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Qn.NO_ERROR,c=r.getStatus();if(!a||Wg(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Qn.ABORT;s(!1,new bn(!1,null,u));return}const h=this.successCodes_.indexOf(c)!==-1;s(!0,new bn(h,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Fg(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=kg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Vl():Ag();o(c)}else{const c=Rg();o(c)}};this.canceled_?t(!1,new bn(!1,null,!0)):this.backoffId_=jg(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Mg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bn{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Vg(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Hg(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function $g(n,e){e&&(n["X-Firebase-GMPID"]=e)}function zg(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Gg(n,e,t,s,i,r,o=!0,a=!1){const c=Ug(n.urlParams),h=n.url+c,u=Object.assign({},n.headers);return $g(u,e),Vg(u,t),Hg(u,r),zg(u,s),new Bg(h,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Kg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this._service=e,t instanceof se?this._location=t:this._location=se.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xn(e,t)}get root(){const e=new se(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kg(this._location.path)}get storage(){return this._service}get parent(){const e=qg(this._location.path);if(e===null)return null;const t=new se(this._location.bucket,e);return new Xn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Dg(e)}}function mo(n,e){const t=e==null?void 0:e[Tg];return t==null?null:se.makeFromBucketSpec(t,n)}function Yg(n,e,t,s={}){n.host=`${e}:${t}`;const i=Tt(e);i&&oi(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Mo(r,n.app.options.projectId))}class Jg{constructor(e,t,s,i,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=Bl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sg,this._maxUploadRetryTime=Ng,this._requests=new Set,i!=null?this._bucket=se.makeFromBucketSpec(i,this._host):this._bucket=mo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=se.makeFromBucketSpec(this._url,e):this._bucket=mo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){po("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){po("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xn(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new Lg(Vl());{const o=Gg(e,this._appId,s,i,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const go="@firebase/storage",_o="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="storage";function Qg(n=ci(),e){n=U(n);const s=ns(n,Hl).getImmediate({identifier:e}),i=Do("storage");return i&&Xg(s,...i),s}function Xg(n,e,t,s={}){Yg(n,e,t,s)}function Zg(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Jg(t,s,i,e,et)}function e_(){Ye(new Ue(Hl,Zg,"PUBLIC").setMultipleInstances(!0)),le(go,_o,""),le(go,_o,"esm2020")}e_();const ot={apiKey:"AIzaSyCnP-0yeYSKkOXBT4zSumhI2U-PfeQT7Pk",authDomain:"wedding-diary-web.firebaseapp.com",databaseURL:"https://wedding-diary-web-default-rtdb.asia-southeast1.firebasedatabase.app/",projectId:"wedding-diary-web",storageBucket:"wedding-diary-web.firebasestorage.app",messagingSenderId:"872690104602",appId:"1:872690104602:web:de83150ee9765fc29754a3",measurementId:"G-MMMT4Y7S6P"};function Pt(){return!!(ot.apiKey&&ot.apiKey!=="YOUR_API_KEY"&&ot.projectId&&ot.projectId!=="YOUR_PROJECT_ID"&&ot.databaseURL)}let xn=null,$l=null,zl=null,t_=null;if(Pt())try{xn=Vo(ot),$l=hp(xn),zl=Ig(xn),t_=Qg(xn)}catch(n){console.warn("Firebase initialization failed:",n.message)}else console.warn("Firebase is not configured. The app will use local/default data only. To connect Firebase, add valid credentials to your .env file.");const wt=$l,J_=zl;async function n_(n){if(!wt)return null;try{const e=await ep(Wi(wt,n));return e.exists()?e.val():null}catch(e){return console.warn(`Firebase read failed for "${n}":`,e),null}}async function _s(n,e){if(!wt)throw new Error("Firebase is not configured");try{return await Zf(Wi(wt,n),e),!0}catch(t){throw console.error(`Firebase write failed for "${n}":`,t),t}}function s_(n,e){if(!wt)return()=>{};const t=Wi(wt,n);return np(t,i=>{e(i.exists()?i.val():null)},i=>{console.warn(`Firebase subscription error for "${n}":`,i)})}function i_(n){return typeof n!="string"?n:n.replace(/<[^>]*>/g,"").replace(/on\w+\s*=\s*["'][^"']*["']/gi,"").replace(/javascript\s*:/gi,"").trim()}function R(n,e=5e3){if(typeof n!="string")return n;let t=i_(n);return e>0&&t.length>e&&(t=t.slice(0,e)),t}function Yi(n){if(typeof n!="string")return"";const e=n.trim().toLowerCase();return/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(e),e}function Gl(n){return typeof n!="string"?"":n.replace(/[^0-9+\-\s()]/g,"").trim().slice(0,30)}function ae(n){if(typeof n!="string")return"";const e=n.trim();return/^\s*(javascript|data|vbscript)\s*:/i.test(e)?"":e&&!e.startsWith("/")&&!e.startsWith("http://")&&!e.startsWith("https://")&&!e.startsWith("mailto:")&&!e.startsWith("tel:")&&!e.startsWith("data:image/")&&e.includes(".")&&!e.includes(" ")?"https://"+e:e}function Ji(n){return typeof n!="string"?"":n.toLowerCase().trim().replace(/[^a-z0-9\-]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"").slice(0,200)}function bt(n,e={}){if(!n||typeof n!="object")return n;const t={};for(const[s,i]of Object.entries(n)){const r=e[s]||{};if(typeof i=="string")switch(r.type){case"email":t[s]=Yi(i);break;case"phone":t[s]=Gl(i);break;case"url":t[s]=ae(i);break;case"slug":t[s]=Ji(i);break;case"html":t[s]=R(i,r.maxLength||5e4);break;default:t[s]=R(i,r.maxLength||5e3)}else Array.isArray(i)?t[s]=i.map(o=>typeof o=="string"?R(o):o&&typeof o=="object"?bt(o,e):o):i&&typeof i=="object"?t[s]=bt(i,e):t[s]=i}return t}function r_(n){return bt(n,{name:{maxLength:200},email:{type:"email"},message:{maxLength:1e4}})}function o_(n){return bt(n,{groomName:{maxLength:200},brideName:{maxLength:200},email:{type:"email"},phone:{type:"phone"},plannedDate:{maxLength:50},location:{maxLength:500},shootType:{maxLength:100},functionTime:{maxLength:100},referral:{maxLength:200},message:{maxLength:1e4}})}function Q_(n){return!n||typeof n!="object"?n:{...n,slug:Ji(n.slug||""),title:R(n.title||"",300),subtitle:R(n.subtitle||"",300),category:R(n.category||"",100),quote:R(n.quote||"",2e3),coverImage:ae(n.coverImage||""),images:Array.isArray(n.images)?n.images.map(e=>typeof e=="string"?ae(e):e):[]}}function X_(n){return!n||typeof n!="object"?n:{...n,slug:Ji(n.slug||""),title:R(n.title||"",500),date:R(n.date||"",100),image:ae(n.image||""),excerpt:R(n.excerpt||"",2e3),content:R(n.content||"",1e5)}}function Z_(n){return!n||typeof n!="object"?n:{...n,name:R(n.name||"",200),text:R(n.text||"",5e3)}}function ey(n){return!n||typeof n!="object"?n:{...n,number:R(n.number||"",10),title:R(n.title||"",200),description:R(n.description||"",5e3),icon:R(n.icon||"",50),image:ae(n.image||"")}}function ty(n){return!n||typeof n!="object"?n:{...n,brand:R(n.brand||"",200),tagline:R(n.tagline||"",500),heroQuote:R(n.heroQuote||"",1e3),email:Yi(n.email||""),phone:Gl(n.phone||""),address:R(n.address||"",500),formspreeEndpoint:ae(n.formspreeEndpoint||""),socials:n.socials?{instagram:ae(n.socials.instagram||""),facebook:ae(n.socials.facebook||""),whatsapp:ae(n.socials.whatsapp||"")}:{}}}function a_(n){const e=ae(n);return e&&!e.startsWith("https://")?"":e}function ny(n){return Yi(n)}const gn="wd_",xt="content",l_=["/images/home/WDM02710.webp","/images/home/WDM04908.webp","/images/home/_RO_3416.webp"],X={portfolio:mc,heroSlides:l_,blogs:gc,testimonials:_c,services:yc,site:vc};function ql(n,e){if(!n||typeof n!="object"||Array.isArray(n)||!e||typeof e!="object"||Array.isArray(e))return e;const t={...n};for(const s of Object.keys(e))e[s]&&typeof e[s]=="object"&&!Array.isArray(e[s])&&n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])?t[s]=ql(n[s],e[s]):t[s]=e[s];return t}function Kl(n){try{const e=localStorage.getItem(gn+n);if(e)return JSON.parse(e)}catch(e){console.warn(`Failed to read cache for "${n}":`,e)}return null}function Yl(n,e){try{localStorage.setItem(gn+n,JSON.stringify(e))}catch(t){console.warn(`Failed to write cache for "${n}":`,t)}}function Qi(n){var t;const e=Kl(n);return e!==null?e:(t=X[n])!=null?t:null}async function c_(n,e){const t=bt(e);return Pt()&&await _s(`${xt}/${n}`,t),Yl(n,t),!0}function h_(n,e){return Pt()?s_(`${xt}/${n}`,t=>{var s;if(t!==null){const i=ql(X[n],t);Yl(n,i),e(i)}else e((s=X[n])!=null?s:null)}):(e(Qi(n)),()=>{})}async function sy(){if(Pt())for(const n of Object.keys(X))await n_(`${xt}/${n}`)===null&&(await _s(`${xt}/${n}`,X[n]),console.log(`Seeded default data for "${n}"`))}function iy(n){return Kl(n)!==null}async function ry(n){localStorage.removeItem(gn+n),Pt()&&await _s(`${xt}/${n}`,X[n])}async function oy(){Object.keys(X).forEach(n=>{localStorage.removeItem(gn+n)}),Pt()&&await _s(xt,X)}function u_(){const n={};return Object.keys(X).forEach(e=>{n[e]=Qi(e)}),n}async function ay(n){let e=0;for(const t of Object.keys(X))n[t]!==void 0&&(await c_(t,n[t]),e++);return e}function ly(){const n=u_(),e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=`wedding-diary-content-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(t)}function cy(){let n=0;return Object.keys(X).forEach(e=>{const t=localStorage.getItem(gn+e);t&&(n+=t.length*2)}),n}function hy(n){return n<1024?n+" B":n<1024*1024?(n/1024).toFixed(1)+" KB":(n/(1024*1024)).toFixed(2)+" MB"}const uy=Object.keys(X);function V(n){const[e,t]=ie.useState(()=>Qi(n)),[s,i]=ie.useState(!0);return ie.useEffect(()=>(i(!0),h_(n,o=>{t(o),i(!1)})),[n]),{data:e,loading:s}}const yo=[{to:"/",label:"Home"},{to:"/about",label:"About Us"},{to:"/portfolio",label:"Portfolio"},{to:"/packages",label:"Packages"},{to:"/contact",label:"Contact Us"}];function d_({light:n,logos:e}){const t=(e==null?void 0:e.light)||_("/logo.png"),s=(e==null?void 0:e.dark)||_("/logob.png");return l.jsx("img",{src:n?t:s,alt:"Logo",className:"h-10 w-auto object-contain transition-all duration-300"})}function vo({to:n,label:e,onClick:t,light:s}){return l.jsx(nc,{to:n,onClick:t,className:({isActive:i})=>["text-sm uppercase tracking-[0.26em] transition",s?i?"text-white underline underline-offset-8 decoration-white/80":"text-white/80 hover:text-white":i?"text-ink underline underline-offset-8 decoration-gold/80":"text-ink/80 hover:text-ink"].join(" "),children:e})}function f_(){const n=bo(),e=n.pathname==="/",[t,s]=A.useState(!1),[i,r]=A.useState(!1),{data:o}=V("site");A.useEffect(()=>{function c(){r(window.scrollY>24)}return c(),window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),A.useEffect(()=>{s(!1)},[n.pathname]);const a=e&&!i&&!t;return l.jsxs("header",{className:["fixed inset-x-0 top-0 z-50 transition-all duration-300",a?"bg-transparent":"border-b border-black/10 bg-sand/70 backdrop-blur"].join(" "),children:[l.jsxs("div",{className:"mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12",children:[l.jsx(O,{to:"/",className:"shrink-0","aria-label":"Go to homepage",children:l.jsx(d_,{light:a,logos:o==null?void 0:o.logos})}),l.jsx("nav",{className:"hidden items-center gap-8 lg:flex xl:gap-10",children:yo.map(c=>l.jsx(vo,{...c,light:a},c.to))}),l.jsx("div",{className:"lg:hidden",children:l.jsx("button",{className:["inline-flex h-11 w-11 items-center justify-center rounded-full border transition",a?"border-white/25 text-white hover:bg-white/10":"border-black/10 text-ink hover:bg-black/5"].join(" "),onClick:()=>s(c=>!c),"aria-label":t?"Close menu":"Open menu","aria-expanded":t,children:t?l.jsx(Io,{size:18}):l.jsx(rc,{size:18})})})]}),t&&l.jsx("div",{className:"border-t border-black/10 bg-sand lg:hidden",children:l.jsx("div",{className:"container-page flex flex-col gap-4 py-5",children:yo.map(c=>l.jsx(vo,{...c,onClick:()=>s(!1),light:!1},c.to))})})]})}function p_({size:n=24,className:e="",...t}){return l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...t,children:[l.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"}),l.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"})]})}function m_(){const{data:n}=V("site");return l.jsx("footer",{className:"border-t border-black/10 bg-parchment",children:l.jsxs("div",{className:"container-page py-14",children:[l.jsxs("div",{className:"grid gap-10 sm:grid-cols-2 lg:grid-cols-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-xl",children:"About"}),l.jsx("p",{className:"mt-3 text-sm text-ink/80 leading-relaxed",children:"“Capturing love in its purest form, we turn fleeting moments into timeless memories. With an artistic eye and heartfelt storytelling, every frame reflects your unique journey together.”"}),l.jsxs("div",{className:"mt-5 flex items-center gap-3",children:[l.jsx("a",{className:"btn btn-outline px-3 py-2",href:n.socials.instagram,target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:l.jsx(oc,{size:16})}),l.jsx("a",{className:"btn btn-outline px-3 py-2",href:n.socials.facebook,target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:l.jsx(ac,{size:16})}),l.jsx("a",{className:"btn btn-outline px-3 py-2",href:n.socials.whatsapp,target:"_blank",rel:"noreferrer","aria-label":"WhatsApp",children:l.jsx(p_,{size:16})})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-xl",children:"Info"}),l.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-ink/80",children:[l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(lc,{size:16,className:"mt-0.5"}),l.jsx("span",{children:n.address})]}),l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(cc,{size:16,className:"mt-0.5"}),l.jsx("a",{className:"hover:underline",href:`tel:${n.phone.replace(/\s/g,"")}`,children:n.phone})]}),l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(hc,{size:16,className:"mt-0.5"}),l.jsx("a",{className:"hover:underline",href:`mailto:${n.email}`,children:n.email})]})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-xl",children:"Portfolio"}),l.jsxs("ul",{className:"mt-3 space-y-2 text-sm",children:[l.jsx("li",{children:l.jsx(O,{className:"text-ink/80 hover:text-ink hover:underline",to:"/portfolio",children:"Our Works"})}),l.jsx("li",{children:l.jsx(O,{className:"text-ink/80 hover:text-ink hover:underline",to:"/packages",children:"Packages"})})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-xl",children:"Write Us"}),l.jsx("p",{className:"mt-3 text-sm text-ink/80 leading-relaxed",children:"Tell us your date, location, and what you’re planning — we’ll get back to you with availability and next steps."}),l.jsx(O,{to:"/contact",className:"mt-4 inline-flex btn btn-primary",children:"Contact Us"})]})]}),l.jsxs("div",{className:"mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-ink/60",children:[l.jsxs("span",{children:["© ",new Date().getFullYear()," ",n.brand,". All rights reserved."]}),l.jsx("span",{})]})]})})}function g_({items:n}){const[e,t]=A.useState(0),[s,i]=A.useState(!1),[r,o]=A.useState(!1),a=A.useRef(null),c=(n==null?void 0:n.length)||0;A.useEffect(()=>{if(!(!c||r))return a.current=setInterval(()=>{h(f=>(f+1)%c)},1e4),()=>clearInterval(a.current)},[c,r]);function h(f){s||(i(!0),t(p=>typeof f=="function"?f(p):f),setTimeout(()=>i(!1),800))}function u(){h(f=>(f-1+c)%c)}function d(){h(f=>(f+1)%c)}return c?l.jsxs("div",{className:"relative",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[l.jsxs("div",{className:"relative mx-auto max-w-[960px] overflow-hidden",children:[l.jsx("div",{className:"relative aspect-[16/9] w-full sm:aspect-[1.85/1]",children:n.map((f,p)=>l.jsx("div",{className:"absolute inset-0 transition-all duration-[800ms] ease-in-out",style:{opacity:p===e?1:0,transform:p===e?"scale(1)":"scale(1.03)",pointerEvents:p===e?"auto":"none"},children:l.jsx("img",{src:_(f.image),alt:f.name||`Customer review ${p+1}`,loading:p===0?"eager":"lazy",className:"h-full w-full object-cover",draggable:!1})},p))}),l.jsx("button",{type:"button",onClick:u,"aria-label":"Previous review",className:"absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#7296a2] shadow-md backdrop-blur-sm transition hover:bg-white hover:scale-110 sm:left-4 sm:h-12 sm:w-12",children:l.jsx(Co,{size:22,strokeWidth:2})}),l.jsx("button",{type:"button",onClick:d,"aria-label":"Next review",className:"absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#7296a2] shadow-md backdrop-blur-sm transition hover:bg-white hover:scale-110 sm:right-4 sm:h-12 sm:w-12",children:l.jsx(To,{size:22,strokeWidth:2})})]}),l.jsx("div",{className:"mt-8 flex items-center justify-center gap-2.5",children:n.map((f,p)=>l.jsx("button",{type:"button",onClick:()=>h(p),"aria-label":`Go to review ${p+1}`,className:["h-2.5 rounded-full transition-all duration-500",p===e?"w-10 bg-[#7296a2]":"w-2.5 bg-[#7296a2]/25 hover:bg-[#7296a2]/50"].join(" ")},p))}),l.jsx("div",{className:"mt-4 text-center",children:l.jsxs("span",{className:"font-serif text-sm tracking-[0.2em] text-[#7296a2]/60",children:[String(e+1).padStart(2,"0")," / ",String(c).padStart(2,"0")]})})]}):null}function xe({threshold:n=.15,rootMargin:e="0px 0px -60px 0px",triggerOnce:t=!0}={}){const s=ie.useRef(null),[i,r]=ie.useState(!1);return ie.useEffect(()=>{const o=s.current;if(!o)return;const a=new IntersectionObserver(([c])=>{c.isIntersecting?(r(!0),t&&a.unobserve(o)):t||r(!1)},{threshold:n,rootMargin:e});return a.observe(o),()=>a.disconnect()},[n,e,t]),{ref:s,isVisible:i}}function Se(n,e=!1){ie.useEffect(()=>{const t="Wedding Diary";return document.title=e?n:n?`${n} | ${t}`:t,()=>{document.title=t}},[n,e])}function __({icon:n}){return n==="glass"?l.jsx("svg",{width:"42",height:"42",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsxs("g",{stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M18 8L14 28"}),l.jsx("path",{d:"M26 8L22 28"}),l.jsx("ellipse",{cx:"18",cy:"28",rx:"6",ry:"2.5"}),l.jsx("line",{x1:"18",y1:"30.5",x2:"18",y2:"44"}),l.jsx("line",{x1:"12",y1:"44",x2:"24",y2:"44"}),l.jsx("path",{d:"M38 8L42 28"}),l.jsx("path",{d:"M46 8L50 28"}),l.jsx("ellipse",{cx:"44",cy:"28",rx:"6",ry:"2.5"}),l.jsx("line",{x1:"44",y1:"30.5",x2:"44",y2:"44"}),l.jsx("line",{x1:"38",y1:"44",x2:"50",y2:"44"}),l.jsx("circle",{cx:"31",cy:"6",r:"1",fill:"white"}),l.jsx("circle",{cx:"28",cy:"12",r:"0.8",fill:"white"}),l.jsx("circle",{cx:"35",cy:"10",r:"0.8",fill:"white"}),l.jsx("circle",{cx:"31",cy:"16",r:"1.2",fill:"white"}),l.jsx("line",{x1:"31",y1:"2",x2:"31",y2:"4"}),l.jsx("line",{x1:"29",y1:"3",x2:"33",y2:"3"})]})}):n==="rings"?l.jsx("svg",{width:"42",height:"42",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsxs("g",{stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M32 20 C32 20 28 12 24 12 C20 12 18 15 18 18 C18 22 32 30 32 30 C32 30 46 22 46 18 C46 15 44 12 40 12 C36 12 32 20 32 20Z",fill:"none"}),l.jsx("ellipse",{cx:"24",cy:"42",rx:"11",ry:"11"}),l.jsx("ellipse",{cx:"40",cy:"42",rx:"11",ry:"11"}),l.jsx("path",{d:"M24 35 L26 33 L24 31 L22 33 Z",fill:"white"})]})}):l.jsx("svg",{width:"42",height:"42",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsxs("g",{stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"32",cy:"20",r:"4",fill:"white",fillOpacity:"0.3"}),l.jsx("ellipse",{cx:"32",cy:"13",rx:"3",ry:"4"}),l.jsx("ellipse",{cx:"32",cy:"27",rx:"3",ry:"4"}),l.jsx("ellipse",{cx:"25",cy:"17",rx:"3",ry:"4",transform:"rotate(-45 25 17)"}),l.jsx("ellipse",{cx:"39",cy:"17",rx:"3",ry:"4",transform:"rotate(45 39 17)"}),l.jsx("ellipse",{cx:"25",cy:"23",rx:"3",ry:"4",transform:"rotate(45 25 23)"}),l.jsx("ellipse",{cx:"39",cy:"23",rx:"3",ry:"4",transform:"rotate(-45 39 23)"}),l.jsx("line",{x1:"32",y1:"28",x2:"32",y2:"52"}),l.jsx("path",{d:"M32 36 C28 32 22 34 22 34 C22 34 26 38 32 36Z",fill:"white",fillOpacity:"0.25"}),l.jsx("path",{d:"M32 42 C36 38 42 40 42 40 C42 40 38 44 32 42Z",fill:"white",fillOpacity:"0.25"})]})})}function y_({services:n}){const{ref:e,isVisible:t}=xe({threshold:.1}),s=t?"is-visible":"";return l.jsx("section",{ref:e,className:"bg-[#f7f7f5] py-16 sm:py-20",children:l.jsxs("div",{className:"mx-auto max-w-[1100px] px-6",children:[l.jsxs("div",{className:`mx-auto max-w-3xl text-center scroll-animate ${s}`,children:[l.jsx("h2",{className:"font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]",children:"OUR SERVICES"}),l.jsx("p",{className:"mt-5 text-[15px] leading-7 text-[#6f7680]",children:"With 10 years of experience capturing celebrations worldwide, we are here to make your special day unforgettable through timeless photos and videos."})]}),l.jsx("div",{className:"mt-14 grid gap-10 sm:gap-12 md:grid-cols-3",children:n.map((i,r)=>l.jsxs("div",{className:`text-center scroll-animate scroll-animate-delay-${r+1} ${s}`,children:[l.jsx("div",{className:`mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#7296a2] scroll-icon scroll-animate-delay-${r+1} ${s}`,children:l.jsx(__,{icon:i.icon})}),l.jsx("h3",{className:"mt-6 font-serif text-lg tracking-[0.12em] text-[#7296a2] sm:text-xl",children:i.title}),l.jsx("p",{className:"mx-auto mt-4 max-w-[280px] text-[14px] leading-6 text-[#6f7680]",children:i.description})]},i.title))}),l.jsx("div",{className:`mt-14 text-center scroll-animate scroll-animate-delay-3 ${s}`,children:l.jsx("a",{href:"/contact",className:"text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition hover:opacity-70",children:"Know More"})})]})})}function v_({items:n}){const{ref:e,isVisible:t}=xe({threshold:.08}),s=t?"is-visible":"";return l.jsx("section",{ref:e,className:"bg-white py-16 sm:py-20",children:l.jsxs("div",{className:"mx-auto max-w-[1100px] px-6",children:[l.jsxs("div",{className:`mx-auto max-w-3xl text-center scroll-animate ${s}`,children:[l.jsx("h2",{className:"font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]",children:"FEATURED ALBUMS"}),l.jsx("p",{className:"mt-5 text-[15px] leading-7 text-[#6f7680]",children:"Throughout the years we have had the opportunity to photograph many wonderful couples."})]}),l.jsx("div",{className:"mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5",children:n.slice(0,4).map((i,r)=>l.jsxs(O,{to:`/portfolio/${i.slug}`,className:`group relative block h-[220px] overflow-hidden sm:h-[320px] md:h-[360px] scroll-animate scroll-animate-delay-${Math.min(r+1,3)} ${s}`,children:[l.jsx("img",{src:i.coverImage||i.cover,alt:i.title,loading:"lazy",className:"h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-500 group-hover:from-black/70"}),l.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-5 text-white transition duration-500 group-hover:translate-y-[-4px]",children:[l.jsx("h3",{className:"font-serif text-[17px] tracking-[0.06em] sm:text-[19px]",children:i.title}),l.jsx("p",{className:"mt-1 text-[11px] uppercase tracking-[0.18em] text-white/85",children:i.subtitle||i.category})]})]},i.slug+r))})]})})}function w_({posts:n}){const{ref:e,isVisible:t}=xe({threshold:.08}),s=t?"is-visible":"";return l.jsx("section",{ref:e,className:"bg-[#1a1a1a] py-16 sm:py-20",children:l.jsxs("div",{className:"mx-auto max-w-[1100px] px-6",children:[l.jsxs("div",{className:`mx-auto max-w-3xl text-center scroll-animate ${s}`,children:[l.jsx("h2",{className:"font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]",children:"LATEST BLOG & ARTICLES"}),l.jsx("p",{className:"mt-5 text-[15px] leading-7 text-white/55",children:"Check out our latest blogs and articles. Get the scoop on new tips, stories, and more. There's always something fun and interesting waiting for you!"})]}),l.jsx("div",{className:"mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",children:n.slice(0,3).map((i,r)=>l.jsxs(O,{to:`/blog/${i.slug}`,className:`group block scroll-animate scroll-animate-delay-${Math.min(r+1,3)} ${s}`,children:[l.jsxs("div",{className:"relative overflow-hidden aspect-[4/3]",children:[l.jsx("img",{src:i.image,alt:i.title,loading:"lazy",className:"h-full w-full object-cover transition duration-[800ms] ease-out group-hover:scale-110"}),l.jsx("div",{className:"absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20"})]}),l.jsxs("div",{className:"mt-4",children:[l.jsx("span",{className:"text-[12px] tracking-[0.1em] text-[#7296a2]",children:i.date}),l.jsx("h3",{className:"mt-2 font-serif text-lg leading-snug text-white transition duration-300 group-hover:text-[#7296a2] sm:text-xl",children:i.title}),l.jsx("p",{className:"mt-2 text-[13px] leading-relaxed text-white/50 line-clamp-3",children:i.excerpt})]})]},i.slug))}),l.jsx("div",{className:`mt-12 text-center scroll-animate scroll-animate-delay-3 ${s}`,children:l.jsxs(O,{to:"/blog",className:"inline-flex items-center gap-2 border border-white/20 px-8 py-3.5 text-[12px] uppercase tracking-[0.25em] text-white/80 transition hover:bg-white hover:text-black",children:["View All Articles ",l.jsx(Zn,{size:14})]})})]})})}function b_({testimonials:n}){const{ref:e,isVisible:t}=xe({threshold:.1}),s=t?"is-visible":"";return l.jsx("section",{ref:e,className:"bg-[#f7f7f5] py-16 sm:py-24",children:l.jsxs("div",{className:"mx-auto max-w-[1100px] px-6",children:[l.jsxs("div",{className:`mx-auto max-w-3xl text-center scroll-animate ${s}`,children:[l.jsx("h2",{className:"font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]",children:"DISCOVER WHAT OTHERS HAVE EXPERIENCED"}),l.jsxs("p",{className:"mt-5 text-[15px] leading-7 text-[#6f7680]",children:["You deserve the absolute best.",l.jsx("br",{}),"That's why we want to make sure we are the right choice for you."]})]}),l.jsx("div",{className:`mt-14 scroll-animate scroll-animate-delay-1 ${s}`,children:l.jsx(g_,{items:n})})]})})}function x_(){var d,f;Se("Wedding Diary | Fine Art Wedding Photography",!0);const{data:n}=V("site"),{data:e}=V("services"),{data:t}=V("portfolio"),{data:s}=V("testimonials"),{data:i}=V("blogs"),{data:r}=V("heroSlides"),o=t.slice(0,6),[a,c]=A.useState(0),[h,u]=A.useState(0);return A.useEffect(()=>{const p=window.setInterval(()=>{c(g=>(g+1)%r.length)},4500);return()=>window.clearInterval(p)},[]),l.jsxs("div",{children:[l.jsxs("section",{className:"relative min-h-screen overflow-hidden bg-black text-white",children:[r.map((p,g)=>l.jsx("img",{src:_(p),alt:`Wedding hero background ${g+1}`,loading:g===0?"eager":"lazy",fetchPriority:g===0?"high":"auto",className:["absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out",a===g?"opacity-100":"opacity-0"].join(" ")},p)),l.jsx("div",{className:"absolute inset-0 bg-black/45"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55"}),l.jsxs("div",{className:"pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4 text-white/70",children:[l.jsx("span",{className:"text-sm tracking-[0.3em]",children:String(a+1).padStart(2,"0")}),l.jsx("span",{className:"h-24 w-px bg-white/30"}),l.jsx("span",{className:"text-sm tracking-[0.3em]",children:String(r.length).padStart(2,"0")})]}),l.jsx("div",{className:"relative flex min-h-screen items-center justify-center px-6 text-center",children:l.jsxs("div",{className:"max-w-6xl pt-24 sm:pt-28",children:[l.jsx("p",{className:"text-[11px] uppercase tracking-[0.45em] text-white/75 sm:text-xs",children:n.tagline}),l.jsx("h1",{className:"mt-6 font-serif text-6xl leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-[9rem]",children:"MADE WITH LOVE"}),l.jsx("p",{className:"mx-auto mt-5 max-w-2xl text-lg italic text-white/80 sm:text-2xl",children:"Crafted with passion, from the heart."}),l.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-4",children:[l.jsx(O,{to:"/portfolio",className:"inline-flex min-w-[210px] items-center justify-center border border-white/40 px-8 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-black",children:"Read More"}),l.jsxs(O,{to:"/contact",className:"inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:text-white",children:["Write Us ",l.jsx(Zn,{size:16})]})]}),l.jsx("div",{className:"mt-10 flex items-center justify-center gap-3",children:r.map((p,g)=>l.jsx("button",{type:"button",onClick:()=>c(g),"aria-label":`Go to slide ${g+1}`,className:["h-2.5 rounded-full transition-all duration-300",a===g?"w-12 bg-white":"w-2.5 bg-white/45 hover:bg-white/75"].join(" ")},g))})]})})]}),l.jsx(y_,{services:e}),l.jsxs("div",{className:"mt-10 grid min-h-[500px] overflow-hidden lg:min-h-[720px] lg:grid-cols-[320px_minmax(0,1fr)]",children:[l.jsxs("div",{className:"relative min-h-[300px] order-first lg:order-last sm:min-h-[400px] lg:min-h-[520px]",children:[l.jsx("img",{src:_((d=e[h])==null?void 0:d.image),alt:(f=e[h])==null?void 0:f.title,loading:"lazy",className:"h-full w-full object-cover object-right transition-opacity duration-500"}),l.jsx("div",{className:"absolute inset-0 bg-black/10"})]}),l.jsx("div",{className:"flex items-center bg-transparent px-6 py-8 lg:py-10 lg:px-10 order-last lg:order-first",children:l.jsx("div",{className:"w-full flex gap-6 overflow-x-auto pb-2 lg:pb-0 lg:flex-col lg:gap-0 lg:space-y-8",children:e.map((p,g)=>l.jsxs("button",{type:"button",onClick:()=>u(g),onMouseEnter:()=>u(g),onFocus:()=>u(g),className:"block text-left shrink-0 lg:shrink",children:[l.jsx("div",{className:"text-[11px] tracking-[0.35em] text-black/40 sm:text-[12px]",children:p.number}),l.jsx("div",{className:`mt-1.5 font-serif text-2xl tracking-[0.12em] transition sm:text-3xl lg:text-4xl lg:tracking-[0.18em] lg:mt-2 ${h===g?"text-black":"text-black/40"}`,children:p.title}),l.jsx("div",{className:`mt-2 h-px w-32 transition sm:w-44 lg:w-52 lg:mt-3 ${h===g?"bg-black/60":"bg-transparent"}`})]},p.title))})})]}),l.jsx(v_,{items:o}),l.jsx(w_,{posts:i}),l.jsx(b_,{testimonials:s})]})}function E_(){var i,r,o,a;Se("About Us");const{data:n}=V("site"),e=ie.useRef(null),[t,s]=ie.useState(!1);return ie.useEffect(()=>{const c=new IntersectionObserver(([h])=>{h.isIntersecting&&s(!0)},{threshold:.2});return e.current&&c.observe(e.current),()=>c.disconnect()},[]),l.jsxs(l.Fragment,{children:[l.jsxs("section",{className:"relative h-[100vh] min-h-[420px] w-full overflow-hidden",children:[l.jsx("img",{src:(i=n.pageHeroes)==null?void 0:i.about,alt:"About Us",className:"absolute inset-0 h-full w-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-black/30"}),l.jsx("div",{className:"relative z-10 flex h-full items-center justify-center",children:l.jsx("h1",{className:"text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up",children:"About Us"})})]}),l.jsx("section",{ref:e,className:"bg-[#f7f6f4] py-20 md:py-28",children:l.jsx("div",{className:`mx-auto w-full max-w-6xl px-6 lg:px-10 transition-all duration-1000 ease-out ${t?"translate-y-0 opacity-100":"translate-y-16 opacity-0"}`,children:l.jsxs("div",{className:"grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]",children:[l.jsxs("div",{className:"relative mx-auto h-[420px] w-full max-w-[540px] animate-fade-up-soft sm:h-[520px] lg:h-[620px]",children:[l.jsx("div",{className:"group absolute left-0 top-0 z-20 w-[62%] overflow-hidden bg-white p-2 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.14)] sm:p-3",children:l.jsx("img",{src:(r=n.aboutImages)==null?void 0:r.image1,alt:"Couple seated together",loading:"lazy",className:"h-[160px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[230px]"})}),l.jsx("div",{className:"group absolute left-[44%] top-[120px] z-30 w-[44%] overflow-hidden bg-white p-2 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.14)] sm:top-[170px] sm:p-3",children:l.jsx("img",{src:(o=n.aboutImages)==null?void 0:o.image2,alt:"Wedding portrait",loading:"lazy",className:"h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[280px]"})}),l.jsx("div",{className:"group absolute left-[6%] top-[260px] z-10 w-[42%] overflow-hidden bg-white p-2 shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.14)] sm:top-[355px] sm:p-3",children:l.jsx("img",{src:(a=n.aboutImages)==null?void 0:a.image3,alt:"Indoor framed portrait",loading:"lazy",className:"h-[120px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[170px]"})})]}),l.jsxs("div",{className:"max-w-[560px] animate-fade-up-soft-delay",children:[l.jsx("div",{className:"flex items-start gap-4",children:l.jsxs("div",{className:"space-y-8 pt-2 text-[15px] leading-9 text-[#7d7d7d] md:text-[16px]",children:[l.jsx("p",{children:"Let us tell you why we have the most magical and fulfilling job in the world. We are truly in love with love. Inspired by elegant couples, soft lighting, natural settings, and genuine emotions, we focus on capturing the real essence of your special day. At Wedding Diary, we don't simply take photographs—we preserve feelings, fleeting moments, and meaningful connections, turning them into timeless visual stories you can cherish forever."}),l.jsxs("p",{children:[l.jsx("b",{children:"Wedding Diary"})," is a team of passionate photographers who are fortunate to have turned their passion into a profession. We are friendly, easy-going, and attentive to every detail that makes your day unique. With professionally trained photographers and the latest equipment, we ensure every moment is captured with creativity and precision. Driven by passion and committed to excellence, we are here to tell your story in the most beautiful and authentic way."]})]})}),l.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[l.jsx(O,{className:"btn btn-primary",to:"/contact",children:"Contact us"}),l.jsx(O,{className:"btn btn-outline",to:"/portfolio",children:"View portfolio"})]})]})]})})})]})}function I_({item:n,index:e}){const{ref:t,isVisible:s}=xe({threshold:.1}),i=s?"is-visible":"";return l.jsxs(O,{ref:t,to:`/portfolio/${n.slug}`,className:`group relative block h-[420px] overflow-hidden sm:h-[470px] lg:h-[520px] scroll-animate scroll-animate-delay-${e%3+1} ${i}`,children:[l.jsx("img",{src:n.coverImage||n.cover,alt:n.title,className:"h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110",loading:"lazy"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-500 group-hover:from-black/70"}),l.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-6 text-white transition duration-500 group-hover:translate-y-[-4px]",children:[l.jsx("h3",{className:"font-serif text-[18px] tracking-[0.06em] sm:text-[21px]",children:n.title}),l.jsx("p",{className:"mt-1 text-[11px] uppercase tracking-[0.2em] text-white/85",children:n.subtitle||n.category})]})]})}function C_(){var a;Se("Portfolio");const[n,e]=A.useState("all"),{data:t}=V("portfolio"),{data:s}=V("site"),i=A.useMemo(()=>{if(!t)return[{value:"all",label:"ALL"}];const c=new Set;return t.forEach(h=>{h.category&&c.add(h.category)}),[{value:"all",label:"ALL"},...Array.from(c).map(h=>({value:h,label:h.toUpperCase()}))]},[t]),r=n==="all"?t:t.filter(c=>c.category===n),o=t&&t.length>0?t[0].coverImage||t[0].cover:(a=s.pageHeroes)==null?void 0:a.portfolio;return l.jsxs("div",{children:[l.jsxs("section",{className:"relative h-[100vh] min-h-[420px] w-full overflow-hidden",children:[l.jsx("img",{src:o,alt:"Portfolio",className:"absolute inset-0 h-full w-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-black/30"}),l.jsx("div",{className:"relative z-10 flex h-full items-center justify-center",children:l.jsx("h1",{className:"text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up",children:"Portfolio"})})]}),l.jsx("section",{className:"border-b border-black/10 bg-white",children:l.jsx("div",{className:"mx-auto max-w-[1200px] px-6",children:l.jsx("div",{className:"flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6",children:i.map(c=>l.jsx("button",{type:"button",onClick:()=>e(c.value),className:`text-[13px] tracking-[0.14em] transition duration-300 ${n===c.value?"text-[#7296a2] font-medium border-b-2 border-[#7296a2] pb-1":"text-[#999] hover:text-[#666] pb-1 border-b-2 border-transparent"}`,children:c.label},c.value))})})}),l.jsx("section",{className:"bg-white py-14 sm:py-20",children:l.jsxs("div",{className:"mx-auto max-w-[1200px] px-6",children:[l.jsx("div",{className:"grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:r.map((c,h)=>l.jsx(I_,{item:c,index:h},c.slug+h))}),r.length===0&&l.jsx("div",{className:"py-20 text-center",children:l.jsx("p",{className:"text-lg text-[#999]",children:"No albums found in this category."})})]})})]})}function T_({src:n,alt:e,index:t,onClick:s}){const{ref:i,isVisible:r}=xe({threshold:.08}),o=`scroll-animate-delay-${t%3+1}`,a=r?"is-visible":"";return l.jsx("button",{ref:i,type:"button",onClick:s,className:`group block w-full overflow-hidden scroll-animate ${o} ${a}`,children:l.jsx("img",{src:n,alt:e,className:"w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-95",loading:"lazy"})})}function S_(){const{slug:n}=xo(),{data:e}=V("portfolio"),t=e.find(r=>r.slug===n),[s,i]=A.useState(null);return Se(t?t.title:"Portfolio"),A.useEffect(()=>{if(s===null)return;const r=o=>{o.key==="Escape"&&i(null),o.key==="ArrowLeft"&&i(a=>a===0?t.images.length-1:a-1),o.key==="ArrowRight"&&i(a=>a===t.images.length-1?0:a+1)};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow=""}},[s,t]),t?l.jsxs("div",{children:[l.jsx("section",{className:"relative",children:l.jsxs("div",{className:"relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden bg-black sm:h-[55vh] sm:min-h-[420px]",children:[l.jsx("img",{src:t.coverImage,alt:t.title,className:"absolute inset-0 h-full w-full object-cover opacity-55"}),l.jsx("div",{className:"absolute inset-0 bg-black/40"}),l.jsxs("div",{className:"relative z-10 px-6 text-center",children:[l.jsx("h1",{className:"font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl",children:t.title}),l.jsx("p",{className:"mt-4 text-[13px] uppercase tracking-[0.25em] text-white/80",children:t.subtitle||t.category}),l.jsx("div",{className:"mx-auto mt-5 h-px w-12 bg-white/40"})]})]})}),l.jsx("section",{className:"bg-[#f1f1f1] py-12 sm:py-16",children:l.jsx("div",{className:"mx-auto max-w-[1200px] px-4 sm:px-6",children:l.jsx("div",{className:"columns-1 gap-2 sm:columns-2 sm:gap-3 lg:columns-3",children:t.images.map((r,o)=>l.jsx("div",{className:"mb-2 break-inside-avoid sm:mb-3",children:l.jsx(T_,{src:r,alt:`${t.title} image ${o+1}`,index:o,onClick:()=>i(o)})},r+o))})})}),l.jsx("section",{className:"bg-white py-10",children:l.jsxs("div",{className:"mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 sm:flex-row",children:[l.jsxs(O,{to:"/portfolio",className:"inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-[#7296a2] transition hover:opacity-70",children:[l.jsx(qt,{size:16})," Back to Portfolio"]}),l.jsxs(O,{to:"/contact",className:"inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-[#7296a2] transition hover:opacity-70",children:["Book / Ask a question ",l.jsx(Zn,{size:16})]})]})}),s!==null&&l.jsxs("div",{className:"fixed inset-0 z-[999] flex items-center justify-center bg-black/92 p-4",onClick:()=>i(null),children:[l.jsx("button",{type:"button",onClick:()=>i(null),className:"absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:right-6 sm:top-6",children:l.jsx(Io,{size:22})}),l.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),i(o=>o===0?t.images.length-1:o-1)},className:"absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:left-6",children:l.jsx(Co,{size:26})}),l.jsx("img",{src:t.images[s],alt:`${t.title} large ${s+1}`,className:"max-h-[90vh] max-w-[90vw] object-contain",onClick:r=>r.stopPropagation()},t.images[s]),l.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),i(o=>o===t.images.length-1?0:o+1)},className:"absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:right-6",children:l.jsx(To,{size:26})}),l.jsxs("div",{className:"absolute bottom-5 text-center text-sm text-white/70",children:[s+1," / ",t.images.length]})]})]}):l.jsxs("div",{className:"container-page py-14",children:[l.jsx("p",{className:"text-sm text-ink/70",children:"Project not found."}),l.jsxs(O,{className:"mt-4 inline-flex btn btn-primary",to:"/portfolio",children:[l.jsx(qt,{size:16})," Back to portfolio"]})]})}function ke({label:n,name:e,type:t="text",required:s,placeholder:i,value:r,onChange:o}){return l.jsxs("label",{className:"block",children:[l.jsxs("span",{className:"text-sm text-ink/80",children:[n,s?" *":""]}),l.jsx("input",{name:e,type:t,required:s,placeholder:i,value:r,onChange:o,className:"mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4"})]})}function Jl({label:n,name:e,required:t,placeholder:s,value:i,onChange:r,rows:o=5}){return l.jsxs("label",{className:"block",children:[l.jsxs("span",{className:"text-sm text-ink/80",children:[n,t?" *":""]}),l.jsx("textarea",{name:e,required:t,placeholder:s,value:i,onChange:r,rows:o,className:"mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4"})]})}const Ql="wd_submissions_endpoint",Xl="wd_submissions_cache",N_="wd_submissions_cache_ts";function Ot(){return localStorage.getItem(Ql)||""}function dy(n){const e=a_((n||"").trim());localStorage.setItem(Ql,e)}function Et(){try{const n=localStorage.getItem(Xl);return n?JSON.parse(n):[]}catch(n){return[]}}function Dt(n){try{localStorage.setItem(Xl,JSON.stringify(n)),localStorage.setItem(N_,Date.now().toString())}catch(e){}}async function k_(n){const e=Ot();if(!e)return!1;try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"add",submission:n}),mode:"no-cors"});const t=Et();return t.unshift(n),Dt(t),!0}catch(t){return!1}}async function fy(n){const e=Ot(),t=R(n,100),s=Et(),i=s.find(r=>r.id===t);if(i&&(i.read=!0,Dt(s)),!!e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"markRead",id:t}),mode:"no-cors"})}catch(r){}}async function py(){const n=Ot(),e=Et();if(e.forEach(t=>t.read=!0),Dt(e),!!n)try{await fetch(n,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"markAllRead"}),mode:"no-cors"})}catch(t){}}async function my(n){const e=Ot(),t=R(n,100),s=Et().filter(i=>i.id!==t);if(Dt(s),!!e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"delete",id:t}),mode:"no-cors"})}catch(i){}}async function gy(){Dt([]);const n=Ot();if(n)try{await fetch(n,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteAll"}),mode:"no-cors"})}catch(e){}}async function _y(){const n=Ot();if(!n)return{submissions:Et(),fromCloud:!1};try{const e=await fetch(`${n}?action=list&t=${Date.now()}`);if(!e.ok)throw new Error("Network error");const s=(await e.json()).submissions||[];return Dt(s),{submissions:s,fromCloud:!0}}catch(e){return{submissions:Et(),fromCloud:!1}}}async function yy(n){try{return{success:!0,message:(await(await fetch(`${n}?action=ping&t=${Date.now()}`)).json()).message||"Connected!"}}catch(e){return{success:!1,error:e.message}}}const vy=`// ============================================================
// Wedding Diary — Form Submissions Database Script
// ============================================================
// This script stores form submissions in a Google Sheet.
//
// SETUP:
// 1. Go to https://script.google.com and create a NEW project
// 2. Paste this entire code, replacing everything
// 3. Click Deploy → New deployment
// 4. Type: "Web app"
// 5. Execute as: "Me"
// 6. Who has access: "Anyone"
// 7. Click Deploy and copy the Web app URL
// 8. Paste that URL into Admin Panel → Inquiries → Database Setup
// ============================================================

var SHEET_NAME = 'Submissions';

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['id', 'page', 'data', 'timestamp', 'read']);
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet();

    switch (body.action) {
      case 'add':
        var s = body.submission;
        sheet.appendRow([
          s.id || '',
          s.page || '',
          JSON.stringify(s.data || {}),
          s.timestamp || new Date().toISOString(),
          false
        ]);
        return respond({ success: true });

      case 'markRead':
        return updateReadStatus(sheet, body.id, true);

      case 'markAllRead':
        var last = sheet.getLastRow();
        if (last > 1) {
          sheet.getRange(2, 5, last - 1, 1).setValue(true);
        }
        return respond({ success: true });

      case 'delete':
        return deleteRow(sheet, body.id);

      case 'deleteAll':
        var lastRow = sheet.getLastRow();
        if (lastRow > 1) sheet.deleteRows(2, lastRow - 1);
        return respond({ success: true });

      default:
        return respond({ error: 'Unknown action: ' + body.action });
    }
  } catch (err) {
    return respond({ error: err.toString() });
  }
}

function doGet(e) {
  var action = (e.parameter && e.parameter.action) || 'list';

  if (action === 'ping') {
    return respond({ status: 'ok', message: 'Submissions database is active!' });
  }

  if (action === 'list') {
    var sheet = getOrCreateSheet();
    var data = sheet.getDataRange().getValues();
    var submissions = [];
    for (var i = 1; i < data.length; i++) {
      try {
        submissions.push({
          id: String(data[i][0]),
          page: String(data[i][1]),
          data: JSON.parse(data[i][2] || '{}'),
          timestamp: data[i][3] instanceof Date
            ? data[i][3].toISOString()
            : String(data[i][3]),
          read: data[i][4] === true || data[i][4] === 'TRUE' || data[i][4] === 'true'
        });
      } catch (_) {}
    }
    submissions.reverse();
    return respond({ success: true, count: submissions.length, submissions: submissions });
  }

  return respond({ error: 'Unknown action' });
}

function updateReadStatus(sheet, id, status) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.getRange(i + 1, 5).setValue(status);
      return respond({ success: true });
    }
  }
  return respond({ error: 'Not found' });
}

function deleteRow(sheet, id) {
  var data = sheet.getDataRange().getValues();
  for (var i = data.length - 1; i >= 1; i--) {
    if (String(data[i][0]) === String(id)) {
      sheet.deleteRow(i + 1);
      return respond({ success: true });
    }
  }
  return respond({ error: 'Not found' });
}

function respond(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}`;async function Zl(n,e){const{page:t,...s}=e,i=bt(s,{name:{maxLength:200},email:{type:"email"},phone:{type:"phone"},groomName:{maxLength:200},brideName:{maxLength:200},message:{maxLength:1e4},location:{maxLength:500},plannedDate:{maxLength:50},shootType:{maxLength:100},functionTime:{maxLength:100},referral:{maxLength:200}}),r={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),page:R(t||"Unknown",50),data:i,timestamp:new Date().toISOString(),read:!1};if(k_(r).catch(()=>{}),!n||n.includes("yourFormId"))throw new Error("Form endpoint is not configured. Update site.formspreeEndpoint in src/data/site.js");const o=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({page:R(t||"Unknown",50),...i})});if(!o.ok){let a="Failed to submit";try{const c=await o.json();a=(c==null?void 0:c.error)||a}catch(c){}throw new Error(a)}return!0}function R_(){var a;Se("Packages");const{data:n}=V("site"),[e,t]=A.useState({groomName:"",brideName:"",email:"",phone:"",plannedDate:"",location:"",shootType:"Wedding",functionTime:"Day Time",referral:"Website",message:""}),[s,i]=A.useState({state:"idle",message:""});function r(c){return h=>t(u=>({...u,[c]:h.target.value}))}async function o(c){c.preventDefault(),i({state:"loading",message:""});const h=o_(e);try{await Zl(n.formspreeEndpoint,{page:"Packages",...h}),i({state:"success",message:"Submitted! We will contact you soon."}),t(u=>({...u,message:""}))}catch(u){i({state:"error",message:(u==null?void 0:u.message)||"Something went wrong. Please try again."})}}return l.jsxs(l.Fragment,{children:[l.jsxs("section",{className:"relative h-[100vh] min-h-[420px] w-full overflow-hidden",children:[l.jsx("img",{src:(a=n.pageHeroes)==null?void 0:a.packages,alt:"Packages",className:"absolute inset-0 h-full w-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-black/30"}),l.jsx("div",{className:"relative z-10 flex h-full items-center justify-center",children:l.jsx("h1",{className:"text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up",children:"Packages"})})]}),l.jsx("section",{className:"bg-[#f3f3f1] py-24",children:l.jsxs("div",{className:"mx-auto max-w-[1280px] px-6 text-center",children:[l.jsx(ys.p,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.4},transition:{duration:.8,ease:"easeOut"},className:"text-[15px] tracking-[0.08em] text-black/70",children:"All Packages"}),l.jsx(ys.h2,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.4},transition:{duration:1,ease:"easeOut",delay:.15},className:"mt-5 text-xl font-semibold leading-tight text-black lg:text-4xl",children:"Begin Your Journey with Wedding Diary"}),l.jsx(ys.p,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.4},transition:{duration:1,ease:"easeOut",delay:.3},className:"mx-auto mt-8 max-w-5xl text-[17px] leading-9 text-black/75",children:"Discover our exclusive photography packages, crafted to match every style and budget. Let us beautifully capture the essence of your love story with artistry and authenticity."})]})}),l.jsx("div",{className:"container-page py-14",children:l.jsx("div",{className:"mt-10",children:l.jsx("div",{className:"p-7 sm:p-10",children:l.jsxs("form",{className:"mt-7 grid gap-5",onSubmit:o,children:[l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsx(ke,{label:"Groom's Name",name:"groomName",required:!0,value:e.groomName,onChange:r("groomName")}),l.jsx(ke,{label:"Bride's Name",name:"brideName",required:!0,value:e.brideName,onChange:r("brideName")})]}),l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsx(ke,{label:"Email",name:"email",type:"email",required:!0,value:e.email,onChange:r("email")}),l.jsx(ke,{label:"Phone Number",name:"phone",required:!0,value:e.phone,onChange:r("phone")})]}),l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsx(ke,{label:"Wedding Date",name:"plannedDate",required:!0,type:"date",value:e.plannedDate,onChange:r("plannedDate")}),l.jsx(ke,{label:"Location",name:"location",required:!0,value:e.location,onChange:r("location")})]}),l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsxs("label",{className:"block",children:[l.jsx("span",{className:"text-sm text-ink/80",children:"Type of Shoot"}),l.jsxs("select",{className:"mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4",value:e.shootType,onChange:r("shootType"),children:[l.jsx("option",{children:"Wedding"}),l.jsx("option",{children:"Engagement"}),l.jsx("option",{children:"Pre Wedding"}),l.jsx("option",{children:"Homecoming"}),l.jsx("option",{children:"Casual Shoot"}),l.jsx("option",{children:"Other"})]})]}),l.jsxs("label",{className:"block",children:[l.jsx("span",{className:"text-sm text-ink/80",children:"Function Time"}),l.jsxs("select",{className:"mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4",value:e.functionTime,onChange:r("functionTime"),children:[l.jsx("option",{children:"Day Time"}),l.jsx("option",{children:"Night Time"})]})]})]}),l.jsxs("label",{className:"block",children:[l.jsx("span",{className:"text-sm text-ink/80",children:"Source of Referral"}),l.jsxs("select",{className:"mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4",value:e.referral,onChange:r("referral"),children:[l.jsx("option",{children:"From Friend or Relatives"}),l.jsx("option",{children:"Facebook"}),l.jsx("option",{children:"Instagram"}),l.jsx("option",{children:"Website"}),l.jsx("option",{children:"Other"})]})]}),l.jsx(Jl,{label:"Message",name:"message",value:e.message,onChange:r("message")}),l.jsxs("button",{className:"btn btn-primary w-full",type:"submit",disabled:s.state==="loading",children:[l.jsx(So,{size:16})," ",s.state==="loading"?"Sending...":"Send & request packages"]}),s.state!=="idle"?l.jsx("p",{className:["text-sm",s.state==="success"?"text-green-700":"",s.state==="error"?"text-red-700":"",s.state==="loading"?"text-ink/70":""].join(" "),children:s.message||(s.state==="loading"?"Submitting…":"")}):null]})})})})]})}function A_(){var a;Se("Contact Us");const{data:n}=V("site"),[e,t]=A.useState({name:"",email:"",message:""}),[s,i]=A.useState({state:"idle",message:""});function r(c){return h=>t(u=>({...u,[c]:h.target.value}))}async function o(c){c.preventDefault(),i({state:"loading",message:""});const h=r_(e);try{await Zl(n.formspreeEndpoint,{page:"Contact",...h}),i({state:"success",message:"Message sent! We will reply soon."}),t({name:"",email:"",message:""})}catch(u){i({state:"error",message:(u==null?void 0:u.message)||"Something went wrong. Please try again."})}}return l.jsxs(l.Fragment,{children:[l.jsxs("section",{className:"relative h-[100vh] min-h-[420px] w-full overflow-hidden",children:[l.jsx("img",{src:(a=n.pageHeroes)==null?void 0:a.contact,alt:"Contact Us",className:"absolute inset-0 h-full w-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-black/30"}),l.jsx("div",{className:"relative z-10 flex h-full items-center justify-center",children:l.jsx("h1",{className:"text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up",children:"Contact Us"})})]}),l.jsx("div",{className:"container-page py-14",children:l.jsxs("div",{className:"mt-10 grid gap-10 lg:grid-cols-2",children:[l.jsxs("div",{className:"p-7 sm:p-10",children:[l.jsx("h3",{className:"font-serif text-2xl",children:"Reach us"}),l.jsx("p",{className:"mt-3 text-sm text-ink/70 leading-relaxed",children:"Please don't hesitate to reach out and get in touch with us to discover how we can assist you further."}),l.jsxs("div",{className:"mt-7 soft-divider pt-7",children:[l.jsx("h4",{className:"font-serif text-xl",children:"Details"}),l.jsxs("ul",{className:"mt-4 text-sm text-ink/80 space-y-2",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Address:"})," ",n.address]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Phone:"})," ",n.phone]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Email:"})," ",n.email]})]}),l.jsx("div",{className:"mt-8 overflow-hidden rounded-xl ring-1 ring-black/10",children:l.jsx("iframe",{title:"Wedding Diary Location",src:n.mapEmbedUrl,className:"h-[260px] w-full border-0",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0})}),l.jsxs("div",{className:"mt-6 flex flex-wrap gap-2",children:[l.jsx("a",{className:"btn btn-outline",href:n.socials.facebook,target:"_blank",rel:"noreferrer",children:"Facebook"}),l.jsx("a",{className:"btn btn-outline",href:n.socials.instagram,target:"_blank",rel:"noreferrer",children:"Instagram"}),l.jsx("a",{className:"btn btn-outline",href:n.socials.whatsapp,target:"_blank",rel:"noreferrer",children:"WhatsApp"})]})]})]}),l.jsxs("div",{className:"p-7 sm:p-10",children:[l.jsx("h3",{className:"font-serif text-2xl",children:"Write us"}),l.jsxs("form",{className:"mt-7 grid gap-5",onSubmit:o,children:[l.jsx(ke,{label:"Name",name:"name",required:!0,value:e.name,onChange:r("name")}),l.jsx(ke,{label:"Email",name:"email",type:"email",required:!0,value:e.email,onChange:r("email")}),l.jsx(Jl,{label:"Message",name:"message",required:!0,value:e.message,onChange:r("message"),rows:6}),l.jsxs("button",{className:"btn btn-primary w-full",type:"submit",disabled:s.state==="loading",children:[l.jsx(So,{size:16})," ",s.state==="loading"?"Sending...":"Send"]}),s.state!=="idle"?l.jsx("p",{className:["text-sm",s.state==="success"?"text-green-700":"",s.state==="error"?"text-red-700":"",s.state==="loading"?"text-ink/70":""].join(" "),children:s.message||(s.state==="loading"?"Submitting…":"")}):null]})]})]})})]})}function P_(){return Se("Page Not Found"),l.jsxs("div",{className:"container-page py-20",children:[l.jsx("h1",{className:"font-serif text-4xl",children:"404"}),l.jsx("p",{className:"mt-3 text-sm text-ink/70",children:"This page doesn’t exist."}),l.jsx(O,{className:"mt-6 inline-flex btn btn-primary",to:"/",children:"Go home"})]})}function O_({post:n,index:e,visClass:t}){return l.jsxs(O,{to:`/blog/${n.slug}`,className:`group block scroll-animate scroll-animate-delay-${Math.min(e+1,3)} ${t}`,children:[l.jsxs("div",{className:"relative overflow-hidden aspect-[4/3]",children:[l.jsx("img",{src:n.image,alt:n.title,loading:"lazy",className:"h-full w-full object-cover transition duration-[800ms] ease-out group-hover:scale-110"}),l.jsx("div",{className:"absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/15"})]}),l.jsxs("div",{className:"mt-5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-[12px] tracking-[0.1em] text-[#7296a2]",children:[l.jsx(No,{size:13,className:"opacity-70"}),l.jsx("span",{children:n.date})]}),l.jsx("h3",{className:"mt-3 font-serif text-xl leading-snug text-ink transition duration-300 group-hover:text-[#7296a2] sm:text-[22px] md:text-2xl",children:n.title}),l.jsx("p",{className:"mt-3 text-[14px] leading-relaxed text-[#6f7680] line-clamp-3",children:n.excerpt}),l.jsxs("span",{className:"mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition group-hover:gap-2.5",children:["Read More ",l.jsx(Zn,{size:14})]})]})]})}function D_(){Se("Blog");const{ref:n,isVisible:e}=xe({threshold:.1}),{ref:t,isVisible:s}=xe({threshold:.08}),i=e?"is-visible":"",r=s?"is-visible":"",{data:o}=V("blogs");return l.jsxs("div",{children:[l.jsxs("section",{ref:n,className:"relative flex min-h-[340px] items-center justify-center bg-[#1a1a1a] pt-24 pb-16 text-center text-white sm:min-h-[400px]",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"}),l.jsxs("div",{className:`relative z-10 px-6 scroll-animate ${i}`,children:[l.jsx("h1",{className:"font-serif text-4xl tracking-[0.1em] text-white sm:text-5xl md:text-[56px]",children:"BLOG & ARTICLES"}),l.jsx("p",{className:"mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/65",children:"Check out our latest blogs and articles. Get the scoop on new tips, stories, and more. There's always something fun and interesting waiting for you!"})]})]}),l.jsx("section",{ref:t,className:"bg-[#f7f7f5] py-16 sm:py-20",children:l.jsx("div",{className:"mx-auto max-w-[1100px] px-6",children:l.jsx("div",{className:"grid gap-10 sm:grid-cols-2 lg:grid-cols-3",children:(o||[]).map((a,c)=>l.jsx(O_,{post:a,index:c,visClass:r},a.slug))})})})]})}function L_(n){const e=n.split(`

`),t=[];return e.forEach((s,i)=>{const r=s.split(`
`);if(r.length===1&&r[0].trim().endsWith(":")){t.push(l.jsx("h3",{className:"mt-8 mb-4 font-serif text-xl text-ink sm:text-[22px]",children:r[0].trim().replace(/:$/,"")},i));return}const o=r.filter(c=>c.trim().startsWith("- "));if(o.length>0&&o.length===r.length){t.push(l.jsx("ul",{className:"mb-6 ml-1 space-y-2.5",children:o.map((c,h)=>l.jsxs("li",{className:"flex items-start gap-3 text-[15px] leading-[1.85] text-[#4a4f57]",children:[l.jsx("span",{className:"mt-[10px] block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#7296a2]"}),l.jsx("span",{children:c.trim().replace(/^-\s*/,"")})]},h))},i));return}const a=r.filter(c=>/^\d+\.\s/.test(c.trim()));if(a.length>0&&a.length===r.length){t.push(l.jsx("ol",{className:"mb-6 ml-1 space-y-2.5",children:a.map((c,h)=>l.jsxs("li",{className:"flex items-start gap-3 text-[15px] leading-[1.85] text-[#4a4f57]",children:[l.jsx("span",{className:"mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7296a2]/10 text-[12px] font-semibold text-[#7296a2]",children:h+1}),l.jsx("span",{children:c.trim().replace(/^\d+\.\s*/,"")})]},h))},i));return}t.push(l.jsx("p",{className:"mb-5 text-[15px] leading-[1.85] text-[#4a4f57]",children:s},i))}),t}function j_({post:n}){Se(n.title);const{ref:e,isVisible:t}=xe({threshold:.05}),s=t?"is-visible":"";return l.jsxs("div",{children:[l.jsxs("section",{className:"relative min-h-[400px] sm:min-h-[480px]",children:[l.jsx("img",{src:n.image,alt:n.title,className:"absolute inset-0 h-full w-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"}),l.jsx("div",{className:"relative z-10 flex min-h-[400px] items-end pb-10 sm:min-h-[480px] sm:pb-14",children:l.jsxs("div",{className:"mx-auto w-full max-w-[900px] px-6",children:[l.jsxs("div",{className:"flex items-center gap-2 text-[12px] tracking-[0.15em] text-white/65",children:[l.jsx(No,{size:13}),l.jsx("span",{children:n.date})]}),l.jsx("h1",{className:"mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl",children:n.title})]})})]}),l.jsx("section",{ref:e,className:"bg-[#f7f7f5] py-14 sm:py-20",children:l.jsxs("div",{className:`mx-auto max-w-[750px] px-6 scroll-animate ${s}`,children:[l.jsxs(O,{to:"/blog",className:"mb-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition hover:gap-3",children:[l.jsx(qt,{size:14})," Back to Blog"]}),l.jsx("article",{className:"prose prose-lg max-w-none",children:L_(n.content)}),l.jsx("div",{className:"mt-14 border-t border-black/10 pt-8",children:l.jsxs(O,{to:"/blog",className:"inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition hover:gap-3",children:[l.jsx(qt,{size:14})," All Articles"]})})]})})]})}function wo(){const{slug:n}=xo(),{data:e}=V("blogs");if(n){const t=(e||[]).find(s=>s.slug===n);return t?l.jsx(j_,{post:t}):l.jsx("div",{className:"flex min-h-screen items-center justify-center pt-24",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h1",{className:"font-serif text-3xl text-ink",children:"Article Not Found"}),l.jsxs(O,{to:"/blog",className:"mt-4 inline-flex items-center gap-2 text-sm text-[#7296a2] hover:underline",children:[l.jsx(qt,{size:14})," Back to Blog"]})]})})}return l.jsx(D_,{})}const M_=A.lazy(()=>fc(()=>import("./AdminPanel-CqbSolks.js"),__vite__mapDeps([0,1,2,3])));function F_(){const{pathname:n}=bo();return A.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[n]),null}function U_(){return l.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-950",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"mx-auto h-10 w-10 animate-spin rounded-full border-[3px] border-gray-700 border-t-[#7296a2]"}),l.jsx("p",{className:"mt-4 text-sm tracking-widest text-gray-500",children:"LOADING ADMIN…"})]})})}function W_(){return l.jsxs("div",{className:"min-h-screen bg-sand text-ink",children:[l.jsx(F_,{}),l.jsx(f_,{}),l.jsx("main",{children:l.jsxs(Eo,{children:[l.jsx(J,{path:"/",element:l.jsx(x_,{})}),l.jsx(J,{path:"/about",element:l.jsx(E_,{})}),l.jsx(J,{path:"/portfolio",element:l.jsx(C_,{})}),l.jsx(J,{path:"/portfolio/:slug",element:l.jsx(S_,{})}),l.jsx(J,{path:"/packages",element:l.jsx(R_,{})}),l.jsx(J,{path:"/contact",element:l.jsx(A_,{})}),l.jsx(J,{path:"/blog",element:l.jsx(wo,{})}),l.jsx(J,{path:"/blog/:slug",element:l.jsx(wo,{})}),l.jsx(J,{path:"*",element:l.jsx(P_,{})})]})}),l.jsx(m_,{})]})}function B_(){return l.jsxs(Eo,{children:[l.jsx(J,{path:"/wd-x9panel",element:l.jsx(ie.Suspense,{fallback:l.jsx(U_,{}),children:l.jsx(M_,{})})}),l.jsx(J,{path:"/login",element:l.jsx(sc,{to:"/wd-x9panel",replace:!0})}),l.jsx(J,{path:"/*",element:l.jsx(W_,{})})]})}const V_="/";Ds.createRoot(document.getElementById("root")).render(l.jsx(A.StrictMode,{children:l.jsx(ic,{basename:V_,children:l.jsx(B_,{})})}));export{_y as A,Et as B,uy as C,fy as D,py as E,my as F,gy as G,Ot as H,dy as I,yy as J,a_ as K,u_ as L,Pt as M,sy as N,vy as S,G_ as a,J_ as b,Y_ as c,_s as d,n_ as e,ae as f,Qi as g,h_ as h,c_ as i,Q_ as j,X_ as k,Z_ as l,ey as m,ty as n,K_ as o,cy as p,hy as q,ly as r,Yi as s,iy as t,q_ as u,ay as v,oy as w,ry as x,ny as y,R as z};
