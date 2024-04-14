import React from 'react'
import './search.css';

function Search() {
  return (
    <div className="search">
        <input type="text" placeHolder= "Search For Movies" />
        <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search