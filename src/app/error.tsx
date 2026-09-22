"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="container section">
      <h1>Something needs a moment.</h1>
      <p className="lead">
        We couldn’t load this information. Please try again shortly.
      </p>
      <button className="button" style={{ marginTop: 25 }} onClick={reset}>
        Try again
      </button>
    </section>
  );
}
