import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Melhor peixe e Vegetais",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Uma especialidade Alemã!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Americano, Delicioso, Suculento",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Saudável...e Verdinho...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
