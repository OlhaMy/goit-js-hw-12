import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function p(s){const e="https://pixabay.com/api/",n=new URLSearchParams({key:"44946850-4c776fe0ffa968f959f660738",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${n}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).then(a=>{if(a.hits.length===0)throw new Error("No images found");return a})}function d(s){return s.map(e=>`<li class="gallery-list">
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
      </li>`).join("")}const o={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),imgList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let c;o.form.addEventListener("submit",s=>{s.preventDefault();const e=s.target.elements.text.value.trim();if(!e){l.error({title:"Error",message:"Please enter a search query!"});return}o.loader.classList.remove("loader--hidden"),o.imgList.innerHTML="",p(e).then(n=>{if(n.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}o.imgList.innerHTML=d(n.hits),c?c.refresh():c=new u(".gallery-link",{captionsData:"alt",captionDelay:250})}).catch(n=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.error("Fetch error: ",n)}).finally(()=>{o.loader.classList.add("loader--hidden")}),s.currentTarget.reset()});window.addEventListener("load",()=>{document.querySelector(".loader").classList.add("loader--hidden")});
//# sourceMappingURL=commonHelpers.js.map