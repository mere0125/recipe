const express = require('express');
const app = express();
const port = 3001;

const recipes = [
  {
    dishName: "Spaghetti",
    ingredients: ["spaghetti", "tomato sauce", "meatballs"],
    diet: "non-vegetarian",
    time: 30,
    description: "A classic Italian dish made with spaghetti and meatballs."
  },
  {
    dishName: "Vegan Tacos",
    ingredients: ["tortillas", "black beans", "avocado"],
    diet: "vegan",
    time: 20,
    description: "Tasty tacos made with black beans and fresh avocado."
  },
  {
    dishName: "Salad",
    ingredients: ["lettuce", "tomato", "cucumber"],
    diet: "vegetarian",
    time: 10,
    description: "A fresh salad with a variety of vegetables."
  },
  {
    dishName: "Chocolate Cake",
    ingredients: ["chocolate", "flour", "sugar"],
    diet: "non-vegetarian",
    time: 45,
    description: "A rich chocolate cake perfect for any occasion."
  },
  {
    dishName: "Omelette",
    ingredients: ["eggs", "cheese", "bell peppers"],
    diet: "vegetarian",
    time: 10,
    description: "A fluffy omelette loaded with cheese and veggies."
  }
];

// Route 1: Get recipe by dish name
app.get('/recipe/:dishName', (req, res) => {
  const dishName = req.params.dishName.toLowerCase();
  const recipe = recipes.find(r => r.dishName.toLowerCase() === dishName);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
});

// Route 2: Filter recipes by diet
app.get('/recipes', (req, res) => {
  const diet = req.query.diet;
  if (diet) {
    const filteredRecipes = recipes.filter(r => r.diet.toLowerCase() === diet.toLowerCase());
    res.json(filteredRecipes);
  } else {
    res.json(recipes);
  }
});

// Route 3: Get quick recipes by time
app.get('/recipes/quick', (req, res) => {
  const time = parseInt(req.query.time);
  if (time) {
    const quickRecipes = recipes.filter(r => r.time <= time);
    res.json(quickRecipes);
  } else {
    res.status(400).json({ message: "Please provide a valid time parameter" });
  }
});

app.listen(port, () => {
  console.log(`Recipe API is running on http://localhost:${port}`);
});
