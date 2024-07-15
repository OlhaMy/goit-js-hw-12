import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function l(o){const e="https://pixabay.com/api/",i=new URLSearchParams({key:"44946850-4c776fe0ffa968f959f660738",q:o,type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function u(o){return o.map(e=>`<li>
        <a class="gallery-link" href="${e.largeImageUR}">
      <img src="${e.webformatURL}" alt="${e.tags}"> </a>
      <div>
        <ul>
          <li>
            <p>likes:${e.likes}</p>
          </li>
          <li>
            <p>views:${e.views}</p>
          </li>
          <li>
            <p>comments:${e.comments}</p>
          </li>
          <li>
            <p>downloads:${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`).join("")}const a={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),imgList:document.querySelector(".image-gallery")};a.form.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.text.value.trim();l(e).then(i=>{a.imgList.innerHTML=u(i.hits)}).catch(i=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
