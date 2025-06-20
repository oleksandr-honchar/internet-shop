//Логіка сторінки Home

const BASE_URL = 'https://dummyjson.com/products';
const CATEGORIES_END_POINT = '/category-list';
const PRODUCT_SEARCH_END_POINT = '/search?q=';

const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const searchBtn = document.querySelector('.search-form__btn');

async function searchProduct() {
  const query = document.querySelector('.search-form__input').value.trim();
  if (!query) {
    throw new Error('Please enter a search term');
  }
  const response = await fetch(
    `${BASE_URL}${PRODUCT_SEARCH_END_POINT}${query}`
  );
  const data = await response.json();
  return data;
}

function clearProducts() {
  productsContainer.innerHTML = '';
}

searchBtn.addEventListener('click', async e => {
  e.preventDefault();

  clearProducts();

  try {
    const data = await searchProduct();
    console.log(data);

    if (!data.products.length) {
      alert('No products found for your search term');
      return;
    }
    productsContainer.insertAdjacentHTML(
      'beforeend',
      createMarkup(data.products)
    );
  } catch (error) {
    alert(error.message);
  }
});

function createMarkup(arr) {
  return arr
    .map(
      ({ images, title, category, description, rating, price }) => `
    <li class="product-card">
      <img src="${images[0]}" alt="${title}" />
      <div class="product-info">
        <h3>${title}</h3>
        <p>Category: ${category}</p>
        <p>Description: ${description}</p>
        <p>Rating: ${rating}</p>
        <p>Price: $${price}</p>
        
      </div>
    </li>
  `
    )
    .join('');
}
