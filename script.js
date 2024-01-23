document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav ul li a");

  // Add event listeners to menu links
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const category = link.textContent.toLowerCase().replace(/\s/g, "-");
      displayMeals(category);
    });
  });

  function displayMeals(category) {
    const meals = getMealsForCategory(category);

    // Get the container to display meals
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = ""; // Clear previous content

    // Create and append meal elements to the container
    meals.forEach((meal) => {
      const mealElement = createMealElement(meal);
      mealContainer.appendChild(mealElement);
    });

    // Add event listeners to "Add to Favorites" buttons
    const addToFavoritesButtons = mealContainer.querySelectorAll(".add-to-favorites");
    addToFavoritesButtons.forEach((button) => {
      button.addEventListener("click", addToFavorites);
    });
  }

  function createMealElement(meal) {
    const mealElement = document.createElement("div");
    mealElement.className = "dish";

    // Create an image element
    const imageElement = document.createElement("img");
    imageElement.src = meal.image; // Use the image source from HTML
    imageElement.alt = meal.name; // Replace with your actual alt text
    mealElement.appendChild(imageElement);

    // Create a paragraph element for the meal name
    const nameElement = document.createElement("p");
    nameElement.textContent = meal.name;
    mealElement.appendChild(nameElement);

    // Create "Add to Favorites" button
    const addToFavoritesButton = document.createElement("button");
    addToFavoritesButton.className = "add-to-favorites";
    addToFavoritesButton.textContent = "Add to Favorites";
    mealElement.appendChild(addToFavoritesButton);

    return mealElement;
  }

  function getMealsForCategory(category) {
    const mealElements = document.querySelectorAll(`#${category} .dish`);
    const meals = [];

    mealElements.forEach((element) => {
      const name = element.querySelector("p").textContent;
      const image = element.querySelector("img").src;
      meals.push({ name, image });
    });

    return meals;
  }

  function addToFavorites() {
    // Implement the logic to add the selected meal to favorites
    // You can use the meal name or any unique identifier to identify the meal
    // Example: const selectedMealName = this.parentNode.querySelector("p").textContent;
    // Implement the logic to add the meal to favorites using the selectedMealName
    // Update this function according to your requirements
    console.log("Add to Favorites clicked");
  }
});
