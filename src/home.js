import { getCategoryService } from './js/products-api.js';

import { loadCategories } from './js/helpers.js';
import { renderCategory } from './js/render-function.js';
import { getCategory, refs } from './js/refs.js';
import { markupCategory } from './js/render-function.js';

refs.categoryList.addEventListener('click', getTargetBtn);

function getTargetBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const categoryName = e.target.textContent;
  console.log(`Selected category: ${categoryName}`);
}

//Логіка сторінки Home

// const BASE_URL = 'https://dummyjson.com/products';
// const CATEGORIES_END_POINT = '/category-list';
// const PRODUCT_SEARCH_END_POINT = '/search?q=';

// const categoriesContainer = document.querySelector('.categories');
// const productsContainer = document.querySelector('.products');
// const searchBtn = document.querySelector('.search-form__btn');
// let currentPage = 1;
// const PRODUCTS_PER_PAGE = 12;

// async function loadProducts(page = 1) {
//   try {
//     const skip = (page - 1) * PRODUCTS_PER_PAGE;
//     const response = await fetch(
//       `${BASE_URL}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Failed to load products');
//   }
// }

// async function displayInitialProducts() {
//   try {
//     const data = await loadProducts();
//     if (!data.products.length) {
//       alert('No products found');
//       return;
//     }
//     productsContainer.insertAdjacentHTML(
//       'beforeend',
//       createMarkup(data.products)
//     );

//     if (data.total > PRODUCTS_PER_PAGE) {
//       addLoadMoreButton();
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }

// function addLoadMoreButton() {
//   const loadMoreBtn = document.createElement('button');
//   loadMoreBtn.textContent = 'Load more';
//   loadMoreBtn.classList.add('load-more-btn');
//   productsContainer.after(loadMoreBtn);

//   loadMoreBtn.addEventListener('click', async () => {
//     currentPage += 1;
//     try {
//       const data = await loadProducts(currentPage);
//       if (currentPage * PRODUCTS_PER_PAGE >= data.total) {
//         loadMoreBtn.style.display = 'none';
//       }

//       productsContainer.insertAdjacentHTML(
//         'beforeend',
//         createMarkup(data.products)
//       );
//     } catch (error) {
//       alert(error.message);
//     }
//   });
// }

// async function searchProduct() {
//   const query = document.querySelector('.search-form__input').value.trim();
//   if (!query) {
//     throw new Error('Please enter a search term');
//   }
//   const response = await fetch(
//     `${BASE_URL}${PRODUCT_SEARCH_END_POINT}${query}`
//   );
//   const data = await response.json();
//   return data;
// }

// function clearProducts() {
//   productsContainer.innerHTML = '';
// }

// searchBtn.addEventListener('click', async e => {
//   e.preventDefault();

//   clearProducts();

//   try {
//     const data = await searchProduct();
//     console.log(data);

//     if (!data.products.length) {
//       alert('No products found for your search term');
//       return;
//     }
//     productsContainer.insertAdjacentHTML(
//       'beforeend',
//       createMarkup(data.products)
//     );
//   } catch (error) {
//     alert(error.message);
//   }
// });

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ images, title, category, description, rating, price }) => `
//     <li class="product-card">
//       <img src="${images[0]}" alt="${title}" />
//       <div class="product-info">
//         <h3>${title}</h3>
//         <p>Category: ${category}</p>
//         <p>Description: ${description}</p>
//         <p>Rating: ${rating}</p>
//         <p>Price: $${price}</p>

//       </div>
//     </li>
//   `
//     )
//     .join('');
// }

// displayInitialProducts();
