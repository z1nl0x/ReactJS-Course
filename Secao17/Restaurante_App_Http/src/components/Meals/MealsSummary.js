import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Cardápio Maravilhoso, Entregue até Você!</h2>
      <p>
        Escolha seu prato favorito de nossa seleção de pratos e aproveite um
        delicioso almoço ou jantar em sua casa.
      </p>
      <p>
        Todos os nossos pratos são cozinhados com ingredientes de alta
        qualidade, no tempo certo e claro por nossos experientes Chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
