 export let displayMeal=document.getElementById('displaymeal')
export function displaymeals(meals) {
  displayMeal.innerHTML = ''; // clear previous items
  // displayMeal.innerHTML=`<div>${meals.strCategoryDescription}</div>`
  meals.forEach(meal => {
    displayMeal.innerHTML += `
      <div class="card col-12 col-md-6 col-lg-3 m-lg-3">
        <p class="text-center text-white fw-light rounded px-2 py-1 align-items-end fs-6 fs-md-5 fs-lg-4">${meal.strMeal}</p>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img1 pb-1">
      </div>
    `;
  });
}