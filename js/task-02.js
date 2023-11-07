const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const ingredientsList = document.querySelector("#ingredients")
const liArray = []
ingredients.forEach(ingredient => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.classList.add("item");
  ingredientsListItem.textContent = ingredient;
  liArray.push(ingredientsListItem);

})

ingredientsList.append(...liArray);