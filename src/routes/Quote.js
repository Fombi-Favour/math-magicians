import React, { useState, useEffect } from 'react';
import '../styles/Quote.css';

const Quote = () => {
  const url = 'https://api.api-ninjas.com/v1/quotes?category=learning';
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        headers: { 'X-Api-Key': 'LCtE0g6LgUqqWQMHAItLcw==uzZl8XsPhc4eSwQj' },
      });
      const json = await response.json();
      setIsLoading(false);
      setQuote(json[0]);
    } catch (error) {
      setErrors(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (errors) return <div>Retry Again!!!</div>;

  return (
    <div className="quotes">
      <p className="content">
        {isLoading === true ? (
          <span>Loading quotes...</span>
        ) : (
          <span>{quote && quote.quote}</span>
        )}
      </p>
    </div>
  );
};

export default Quote;
