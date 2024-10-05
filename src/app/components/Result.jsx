import Card from "./Card";

const Result = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <div key={result.id}>
          <Card key={result.id} result={result} />
        </div>
      ))}
    </div>
  );
};

export default Result;
