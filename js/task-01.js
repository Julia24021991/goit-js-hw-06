const categoriesList = document.getElementById("categories");

const categoriesListItem = document.getElementsByClassName("item")

console.log(`Number of categories: ${categoriesListItem.length}`);

Array.from(categoriesListItem).forEach(category => {
    const categoryName = category.getElementsByTagName("h2")[0];
    const categoryItems = category.getElementsByTagName("li");

    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);
});







