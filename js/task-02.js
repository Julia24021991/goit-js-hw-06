const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const ingredientsList = document.querySelector("#ingredients")


for (let i = 0; i < ingredients.length; i++) {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.classList.add("item");
  ingredientsListItem.textContent = ingredients[i];
  ingredientsList.appendChild(ingredientsListItem);
}