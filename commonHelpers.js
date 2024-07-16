import{i as l,S as p}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function u(a){const e="https://pixabay.com/api/",n=new URLSearchParams({key:"44946850-4c776fe0ffa968f959f660738",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${n}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r})}function f(a){return a.map(e=>`<li class="gallery-list">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}">
        </a>
        <div >
          <ul class="text-list">
            <li class="text-item"><p class="text"><span class="text-span">Likes</span><span class="link-span">${e.likes}</span></p></li>
            <li class="text-item"><p class="text"><span class="text-span">Views</span><span class="link-span">${e.views}</span></p></li>
            <li class="text-item"><p class="text"><span class="text-span">Comments</span><span class="link-span">${e.comments}</span></p></li>
            <li class="text-item"><p class="text"><span class="text-span">Downloads</span><span class="link-span">${e.downloads}</span></p></li>
          </ul>
        </div>
      </li>`).join("")}const c={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),imgList:document.querySelector(".gallery")};let o;c.form.addEventListener("submit",a=>{a.preventDefault();const e=a.target.elements.text.value.trim();if(!e){l.error({title:"Error",message:"Please enter a search query!"});return}u(e).then(n=>{c.imgList.innerHTML=f(n.hits),o?o.refresh():o=new p(".gallery-link",{captionsData:"alt",captionDelay:250})}).catch(n=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}),a.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
