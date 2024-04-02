import{i as a,S as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const c=document.querySelector(".form"),l=c.elements.input,u=document.querySelector(".container"),d=document.querySelector(".message");c.addEventListener("submit",m);function m(r){if(r.preventDefault(),u.innerHTML="",!l.value.trim()){a.show({message:"Your query does not contain any letters!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});return}d.classList.remove("is-hidden"),h().then(t=>p(t.hits)).catch(t=>console.log(t))}function h(){const r=new URLSearchParams({key:"43199917-ac2cc136e7963c28457226ad3",q:`${l.value.trim()}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(r){d.classList.add("is-hidden"),r.length||a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});const t=r.map(o=>`
            <li class="item">
            <a href="${o.largeImageURL}">
            <img src="${o.webformatURL}" alt="${o.tags}">
            </a>
            <div class="item-content">
            <div>
            <h3 class="title">Likes</h3>
            <p class="amount">${o.likes}</p>
            </div>
            <div>
            <h3 class="title">Views</h3>
            <p class="amount">${o.views}</p>
            </div>
            <div>
            <h3 class="title">Comments</h3>
            <p class="amount">${o.comments}</p>
            </div>
            <div>
            <h3 class="title">Downloads</h3>
            <p class="amount">${o.downloads}</p>
            </div>
            </div>
            </li>
            `).join("");u.insertAdjacentHTML("beforeend",t),g.refresh()}const g=new f(".container a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
