const meals = [
    { name: "Grilled Salmon", description: "A delicious grilled salmon served with seasonal vegetables.", day: "Monday" },
    { name: "Chicken Caesar Salad", description: "Fresh romaine lettuce with grilled chicken and Caesar dressing.", day: "Tuesday" },
    { name: "Vegetable Stir Fry", description: "A mix of seasonal vegetables stir-fried to perfection.", day: "Wednesday" },
    { name: "Beef Tacos", description: "Spicy beef tacos with fresh toppings.", day: "Thursday" },
    { name: "Pasta Primavera", description: "Pasta with fresh vegetables and a light sauce.", day: "Friday" },
    { name: "Shrimp Risotto", description: "Creamy risotto with succulent shrimp.", day: "Saturday" },
    { name: "Quinoa Bowl", description: "Healthy quinoa bowl with assorted toppings.", day: "Sunday" }
];

const today = new Date().toLocaleString('en-US', { weekday: 'long' });
const todaysMeal = meals.find(meal => meal.day === today);

document.getElementById('todays-meal-name').innerText = todaysMeal.name;
document.getElementById('todays-meal-description').innerText = todaysMeal.description;

const mealCardsContainer = document.querySelector('.meal-cards');

meals.forEach(meal => {
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.innerHTML = `
        <h3>${meal.name}</h3>
        <p>${meal.description}</p>
        ${meal.day === today ? '<button class="order-button">Order Now</button>' : '<p class="coming-soon">Coming Soon</p>'}
    `;
    mealCardsContainer.appendChild(card);
});

// Order button functionality
document.getElementById('order-button').addEventListener('click', () => {
    alert(`You have ordered: ${todaysMeal.name}`);
    // Here you can integrate the checkout process
});
