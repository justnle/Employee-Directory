import React from 'react';

function SearchBar() {
  return (
    <div className='SearchBar'>
      <input
        className='form-control'
        type='text'
        placeholder='Search'
        aria-label='Search'
      ></input>
    </div>
  );
}

export default SearchBar;
