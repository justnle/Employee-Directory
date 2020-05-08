import React from 'react';

function Header() {
  return (
    <div className='Header'>
      <div className='jumbotron text-center'>
        <h1 className='display-3'>Employee Directory</h1>
        <p className='lead'>
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </p>
      </div>
    </div>
  );
}

export default Header;
