export default function QuoteGenerate({ onGenerateQuote }) {
  return (
    <div className="text-center">
      <button className="btn btn-primary p-3 mt-3" onClick={onGenerateQuote}>
        Generate Quotes
      </button>
    </div>
  );
}
