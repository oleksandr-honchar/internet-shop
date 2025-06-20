import"./assets/styles-0jjx1hvP.js";const u="https://dummyjson.com/products",i="/search?q=";document.querySelector(".categories");const c=document.querySelector(".products"),d=document.querySelector(".search-form__btn");async function p(){const e=document.querySelector(".search-form__input").value.trim();if(!e)throw new Error("Please enter a search term");return await(await fetch(`${u}${i}${e}`)).json()}function l(){c.innerHTML=""}d.addEventListener("click",async e=>{e.preventDefault(),l();try{const r=await p();if(console.log(r),!r.products.length){alert("No products found for your search term");return}c.insertAdjacentHTML("beforeend",m(r.products))}catch(r){alert(r.message)}});function m(e){return e.map(({images:r,title:t,category:o,description:n,rating:s,price:a})=>`
    <li class="product-card">
      <img src="${r[0]}" alt="${t}" />
      <div class="product-info">
        <h3>${t}</h3>
        <p>Category: ${o}</p>
        <p>Description: ${n}</p>
        <p>Rating: ${s}</p>
        <p>Price: $${a}</p>
        
      </div>
    </li>
  `).join("")}
//# sourceMappingURL=index.js.map
