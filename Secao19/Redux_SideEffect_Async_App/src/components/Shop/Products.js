import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Livro de Matemática",
    description: "Tudo sobre matemática",
  },
  {
    id: "p2",
    price: 9,
    title: "Livro de Lógica",
    description: "Tudo sobre lógica",
  },
  {
    id: "p3",
    price: 15,
    title: "Livro de Astronomia",
    description: "Tudo sobre astronomia",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Compre seus produtos favoritos</h2>
      <ul>
        {DUMMY_PRODUCTS.map((p) => (
          <ProductItem
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
