import React from 'react'
import './search.css';

function Search() {
  return (
    <div className="search">
        <input type="text" placeholder= "Search For Movies" />
        <ion-icon name="search-sharp"></ion-icon>
    </div>
  );
}

export default Search