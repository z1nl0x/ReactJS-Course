import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Paulo", text: "Learning ReactJS" },
//   { id: "q2", author: "Lucas", text: "Learning TypeScript" },
//   { id: "q3", author: "Maria", text: "Programming React Native" },
// ];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedQuote.text) {
    return <p>Anotação não encontrada!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comentários
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
