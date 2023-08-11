import React, { useState, useEffect } from 'react';
import './Quote.css';
import PropTypes from 'prop-types';

function QuoteDisplay({ category }) {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError(null);

      const apiKey = 'FYJa76lR4AMGbRiRQQaQ3Q==ZuSmxqtZfFXAzHwv';
      const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuoteData(data[randomIndex]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="quote">
      <p>{quoteData.quote}</p>
      <p>
        -
        {quoteData.author}
      </p>
    </div>
  );
}

QuoteDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default QuoteDisplay;
