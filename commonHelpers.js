import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function f(i){const e="https://pixabay.com/api/",s=new URLSearchParams({key:"44946850-4c776fe0ffa968f959f660738",q:i,type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0)throw new Error("No images found");return o})}function m(i){return i.map(e=>`<li>
        <a class="gallery-link" href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}">
        </a>
        <div>
          <ul>
            <li><p>likes: ${e.likes}</p></li>
            <li><p>views: ${e.views}</p></li>
            <li><p>comments: ${e.comments}</p></li>
            <li><p>downloads: ${e.downloads}</p></li>
          </ul>
        </div>
      </li>`).join("")}const l={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),imgList:document.querySelector(".gallery")};let a;l.form.addEventListener("submit",i=>{i.preventDefault();const e=i.target.elements.text.value.trim();if(!e){c.error({title:"Error",message:"Please enter a search query!"});return}f(e).then(s=>{l.imgList.innerHTML=m(s.hits),a?a.refresh():a=new u(".gallery-link",{captionsData:"alt",captionDelay:250})}).catch(s=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.error("Fetch error: ",s)}),i.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
