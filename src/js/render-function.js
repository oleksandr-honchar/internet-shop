//Функцію для створення, рендеру або видалення розмітки

export const markupCategory = arr => {
  return arr
    .map(
      ({ name }) => `<li class="categories__item">
   <button class="categories__btn" type="button">${name}</button>
 </li>`
    )
    .join('');
};

export const renderCategory = async () => {
  const categoryArr = await getCategory();
  refs.categoryList.insertAdjacentHTML('beforeend', categoryArray);
};
