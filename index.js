import"./assets/styles-CpGvQIKr.js";const d="https://dummyjson.com/products",f="/search?q=";document.querySelector(".categories");const r=document.querySelector(".products"),m=document.querySelector(".search-form__btn");let a=1;const n=12;async function i(t=1){try{const e=(t-1)*n;return await(await fetch(`${d}?limit=${n}&skip=${e}`)).json()}catch{throw new Error("Failed to load products")}}async function h(){try{const t=await i();if(!t.products.length){alert("No products found");return}r.insertAdjacentHTML("beforeend",c(t.products)),t.total>n&&y()}catch(t){alert(t.message)}}function y(){const t=document.createElement("button");t.textContent="Load more",t.classList.add("load-more-btn"),r.after(t),t.addEventListener("click",async()=>{a+=1;try{const e=await i(a);a*n>=e.total&&(t.style.display="none"),r.insertAdjacentHTML("beforeend",c(e.products))}catch(e){alert(e.message)}})}async function $(){const t=document.querySelector(".search-form__input").value.trim();if(!t)throw new Error("Please enter a search term");return await(await fetch(`${d}${f}${t}`)).json()}function P(){r.innerHTML=""}m.addEventListener("click",async t=>{t.preventDefault(),P();try{const e=await $();if(console.log(e),!e.products.length){alert("No products found for your search term");return}r.insertAdjacentHTML("beforeend",c(e.products))}catch(e){alert(e.message)}});function c(t){return t.map(({images:e,title:o,category:s,description:u,rating:l,price:p})=>`
    <li class="product-card">
      <img src="${e[0]}" alt="${o}" />
      <div class="product-info">
        <h3>${o}</h3>
        <p>Category: ${s}</p>
        <p>Description: ${u}</p>
        <p>Rating: ${l}</p>
        <p>Price: $${p}</p>
        
      </div>
    </li>
  `).join("")}h();
//# sourceMappingURL=index.js.map
