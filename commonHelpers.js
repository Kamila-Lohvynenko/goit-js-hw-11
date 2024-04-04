import{i as n,S as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function h(o,s){const t=new URLSearchParams({key:o,q:s.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(i=>{if(!i.ok)throw n.error({message:`Error number ${i.status}!`,position:"topRight"}),new Error;return i.json()})}function p(o){return o.length||n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.map(t=>`
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
            `).join("")}const d=document.querySelector(".form"),l=d.elements.input,u=document.querySelector(".container"),c=document.querySelector(".loader"),f="43199917-ac2cc136e7963c28457226ad3";d.addEventListener("submit",g);function g(o){if(o.preventDefault(),u.innerHTML="",!l.value.trim()){n.error({message:"Your query does not contain any letters!",position:"topRight"});return}c.classList.remove("is-hidden"),h(f,l).then(s=>{if(c.classList.add("is-hidden"),!s.hits)throw n.error({message:"There is a problem, data is missing on the server",position:"topRight"}),new Error;u.insertAdjacentHTML("beforeend",p(s.hits)),y.refresh()}).catch(()=>c.classList.add("is-hidden"))}const y=new m(".container a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
