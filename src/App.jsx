import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import QuoteCardList from './components/QuoteCardList';
import QuoteGenerate from './components/QuoteGenerate';

function App() {
  const [quote, setQuote] = useState([]);
  const [randomQuotes, setRandomQuote] = useState([]);

  async function getQuotes() {
    const quoteAPI = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(quoteAPI);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (quote.length === 0) {
    getQuotes();
  }

  function handleGenerateQuote() {
    const threeQuotes = [];
    for (let i = 0; i < 3; i++) {
      threeQuotes.push(quote[Math.floor(Math.random() * quote.length)]);
    }

    setRandomQuote(threeQuotes);
  }

  function tweetQuote(text, author) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(twitterUrl, '_blank');
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">ReactJS Quote Generator</h1>
      <QuoteCardList quote={randomQuotes} onTweetQuote={tweetQuote} />
      <QuoteGenerate onGenerateQuote={handleGenerateQuote} />
    </div>
  );
}

export default App;
