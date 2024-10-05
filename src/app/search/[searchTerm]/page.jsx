import React from "react";
import Result from "@/app/components/Result";

const page = async ({ params }) => {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=true`
  );

  const data = await res.json();
  const results = data.results;

  return  (
        <div>
          {results &&
            results === <h1 className="text-center pt-6">No results found</h1>}
          {results && <Result results={results} />}
        </div>
      );
};

export default page;
