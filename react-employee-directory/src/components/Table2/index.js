import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function Table2() {
  const columns = [
    { heading: `Image`, property: `picture`, nested: `medium` },
    { heading: `Name`, property: `name`, nested: `first` },
    { heading: `Phone`, property: `phone` },
    { heading: `Email`, property: `email` },
    { heading: `D.O.B.`, property: `dob`, nested: `date` },
  ];
  //   const users = [
  //     {
  //       picture: `n/a`,
  //       name: `Justin`,
  //       phone: `111-111-1111`,
  //       email: `test@test.com`,
  //       dob: `01-01-1901`,
  //     },
  //   ];

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    API.getUsers()
      .then((res) => {
        setUsers(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='Table'>
      <table className='table table-striped'>
        <thead>
          <tr>
            {columns.map((col) => (
              <th scope='col' key={`header-${col.heading}`}>
                {col.heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={`${index}-row`}>
              {columns.map((col) => (
                <td key={`${data.dob.date}-${col.property}`}>
                  {typeof col.nested !== `undefined`
                    ? data[col.property][col.nested]
                    : data[col.property]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;