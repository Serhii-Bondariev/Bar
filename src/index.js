document.addEventListener('DOMContentLoaded', () => {
  // URL запиту до бекенду для коктейлів
  const cocktailsApiUrl = 'https://drinkify.b.goit.study/api/v1/cocktails/?r=9';

  // Отримуємо елемент для вставки фотографій коктейлів
  const cocktailGallery = document.getElementById('cocktailGallery');

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
        cocktailImage.src = cocktail.drinkThumb;
        cocktailCard.appendChild(drinkThumb);

        const cocktailName = document.createElement('h2');
        cocktailName.textContent = cocktail.title;
        cocktailCard.appendChild(drink);

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
