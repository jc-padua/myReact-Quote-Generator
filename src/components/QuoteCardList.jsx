import QuoteCard from './QuoteCard';

export default function QuoteCardList({ quote, onTweetQuote }) {
  if (quote.length === 0) {
    return (
      <p className="text-center mt-4">
        Click `Generate Quote` to display quotes
      </p>
    );
  }

  return (
    <div className="row d-flex justify-content-center gap-5 mt-5 mb-5">
      {quote.map((item, i) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
          <QuoteCard
            text={item.text}
            author={item.author}
            onTweetQuote={onTweetQuote}
          />
        </div>
      ))}
    </div>
  );
}
