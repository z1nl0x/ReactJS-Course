import classes from "./NoQuotesFound.module.css";
import { Link } from "react-router-dom";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>Nenhuma anotação encontrada!</p>
      <Link className="btn" to="/new-quote">
        Add Anotações
      </Link>
    </div>
  );
};

export default NoQuotesFound;
