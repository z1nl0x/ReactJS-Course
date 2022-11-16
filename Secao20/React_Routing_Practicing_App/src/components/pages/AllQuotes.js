import React, { useEffect } from "react";
import QuoteList from "../quotes/QuoteList";
import { getAllQuotes } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Paulo", text: "Learning ReactJS" },
//   { id: "q2", author: "Lucas", text: "Learning TypeScript" },
//   { id: "q3", author: "Maria", text: "Programming React Native" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
