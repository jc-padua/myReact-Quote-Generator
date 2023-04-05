import QuoteCard from './QuoteCard';

export default function QuoteCardList({ quote }) {
  if (quote.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row d-flex justify-content-center gap-5 mt-5 mb-5">
      <div className="col-sm-6 col-md-4 col-lg-3">
        <QuoteCard key={0} text={quote[0].text} author={quote[0].author} />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <QuoteCard key={1} text={quote[1].text} author={quote[1].author} />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <QuoteCard key={2} text={quote[2].text} author={quote[2].author} />
      </div>
    </div>
  );
}
