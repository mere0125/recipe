# Recipe API

## Overview
The Recipe API is a simple tool for retrieving cooking recipes based on dish name, dietary preferences, or cooking time. It’s designed to be easy to use and flexible, offering different ways to filter and explore recipes.

## Base URL
The API will be available at:  
`http://<your-deployment-url>` (Replace this with the Render deployment URL.)

## Endpoints

### 1. Get a Recipe by Dish Name
**URL:** `/recipe/:dishName`  
**Method:** `GET`  
**Description:** Get detailed information about a specific dish by providing the dish name.  
**Example:**  
`GET /recipe/Spaghetti`  
**Response Example:**
```json
{
  "dishName": "Spaghetti",
  "ingredients": ["spaghetti", "tomato sauce", "meatballs"],
  "diet": "non-vegetarian",
  "time": 30,
  "description": "A classic Italian dish made with spaghetti and meatballs."
}
