document.addEventListener('DOMContentLoaded', () => {
  const cocktailGallery = document.getElementById('cocktailGallery');
  const ingredientInfo = document.getElementById('ingredientInfo');

  // URL запиту до бекенду для інгредієнта (замініть на власний)
  const ingredientApiUrl =
    'https://drinkify.b.goit.study/api/v1/ingredients/64aebb7f82d96cc69e0eb4a5';

  // Виконуємо GET-запит за допомогою fetch для інгредієнта
  fetch(ingredientApiUrl)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Не вдалося отримати дані про інгредієнт');
      }
    })
    .then(ingredient => {
      // Виводимо дані про інгредієнт на сторінку
      const ingredientCard = document.createElement('div');
      ingredientCard.className = 'ingredient-card';

      const ingredientImage = document.createElement('img');
      ingredientImage.src = ingredient.ingredientThumb;
      ingredientCard.appendChild(ingredientImage);

      const ingredientTitle = document.createElement('h2');
      ingredientTitle.textContent = ingredient.title;
      ingredientCard.appendChild(ingredientTitle);

      const ingredientDescription = document.createElement('p');
      ingredientDescription.textContent = ingredient.description;
      ingredientCard.appendChild(ingredientDescription);

      ingredientInfo.appendChild(ingredientCard);
    })
    .catch(error => {
      // Обробка помилок для інгредієнта
      console.error('Помилка:', error);
    });

  // URL запиту до бекенду для коктейлів (замініть на власний)
  const cocktailsApiUrl = 'https://drinkify.b.goit.study/api/v1/cocktails';

  // Виконуємо GET-запит за допомогою fetch для коктейлів
  fetch(cocktailsApiUrl)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Не вдалося отримати дані про коктейлі');
      }
    })
    .then(cocktails => {
      // Виводимо дані про коктейлі в галерею
      cocktails.forEach(cocktail => {
        const cocktailCard = document.createElement('div');
        cocktailCard.className = 'cocktail-card';

        const cocktailImage = document.createElement('img');
        cocktailImage.src = cocktail.thumb;
        cocktailCard.appendChild(cocktailImage);

        const cocktailName = document.createElement('h2');
        cocktailName.textContent = cocktail.title;
        cocktailCard.appendChild(cocktailName);

        const cocktailDescription = document.createElement('p');
        cocktailDescription.textContent = cocktail.description;
        cocktailCard.appendChild(cocktailDescription);

        cocktailGallery.appendChild(cocktailCard);
      });
    })
    .catch(error => {
      // Обробка помилок для коктейлів
      console.error('Помилка:', error);
    });
});
