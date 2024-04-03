import{i as d,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(s,o){const t=new URLSearchParams({key:s,q:o.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function h(s){return s.length||iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"}),s.map(t=>`
            <li class="item">
            <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}">
            </a>
            <div class="item-content">
            <div>
            <h3 class="title">Likes</h3>
            <p class="amount">${t.likes}</p>
            </div>
            <div>
            <h3 class="title">Views</h3>
            <p class="amount">${t.views}</p>
            </div>
            <div>
            <h3 class="title">Comments</h3>
            <p class="amount">${t.comments}</p>
            </div>
            <div>
            <h3 class="title">Downloads</h3>
            <p class="amount">${t.downloads}</p>
            </div>
            </div>
            </li>
            `).join("")}const u=document.querySelector(".form"),a=u.elements.input,c=document.querySelector(".container"),l=document.querySelector(".loader"),p="43199917-ac2cc136e7963c28457226ad3";u.addEventListener("submit",g);function g(s){if(s.preventDefault(),c.innerHTML="",!a.value.trim()){d.error({message:"Your query does not contain any letters!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});return}l.classList.remove("is-hidden"),m(p,a).then(o=>{l.classList.add("is-hidden"),c.insertAdjacentHTML("beforeend",h(o.hits)),y.refresh()}).catch(o=>alert(o))}const y=new f(".container a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
