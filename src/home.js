//Логіка сторінки Home

const BASE_URL = 'https://dummyjson.com/products';
const CATEGORIES_END_POINT = '/category-list';
const PRODUCT_SEARCH_END_POINT = '/search?q=';

const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const searchBtn = document.querySelector('.search-form__btn');

async function searchProduct() {
  const query = document.querySelector('.search-form__input').value;
  const response = await fetch(
    `${BASE_URL}${PRODUCT_SEARCH_END_POINT}${query}`
  );
  const data = await response.json();
  return data;
}

searchProduct()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    alert(error.message);
  });
