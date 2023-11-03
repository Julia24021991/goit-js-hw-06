const categoriesList = document.querySelector("#categories");

const categoriesListItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesListItem.length}`)

categoriesListItem.forEach(
    category => {
        const categoryName = category.querySelector("h2");
        const categoryItem = category.querySelectorAll("li");

        console.log(`Category: ${categoryName.textContent}`)
        console.log(`Elements: ${categoryItem.length}`)
    }
)












