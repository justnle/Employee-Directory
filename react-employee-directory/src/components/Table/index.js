import React from 'react';

function Table() {
  return (
    <div className='Table'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
            <th scope='col'>D.O.B.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>test</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>test</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
