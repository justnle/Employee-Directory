import React from 'react';

function BirthBar() {
  return (
    <div className='BirthBar'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <label className='input-group-text font-weight-bold'>D.O.B.</label>
        </div>
        <input
          className='form-control'
          type='date'
          placeholder='mm/dd/yyyy'
          id='date-input'
        ></input>
      </div>
    </div>
  );
}

export default BirthBar;
