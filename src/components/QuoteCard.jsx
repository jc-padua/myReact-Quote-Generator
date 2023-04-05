export default function QuoteCard({ text, author }) {
  return (
    <>
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title">{author === null ? 'unknown' : author}</h3>
          <hr />
          <p className="card-text">
            <i>{text}</i>
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">
            Tweet this
          </a>
        </div>
      </div>
    </>
  );
}
