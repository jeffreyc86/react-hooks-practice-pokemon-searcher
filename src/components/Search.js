import React from "react";

function Search({query, setQuery}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
