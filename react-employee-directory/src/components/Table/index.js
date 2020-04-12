import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function Table() {
  // don't need property with the current implementation
  const columns = [
    { heading: `Image`, property: `picture`, nested: `medium` },
    { heading: `Name`, property: `name`, nested: `first` },
    { heading: `Phone`, property: `phone` },
    { heading: `Email`, property: `email` },
    { heading: `D.O.B.`, property: `dob`, nested: `date` },
  ];

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
              <td>
                <img alt='user' src={data.picture.medium}></img>
              </td>
              <td>
                {data.name.first} {data.name.last}
              </td>
              <td>{data.phone}</td>
              <td><a href={`mailto:${data.email}`}>{data.email}</a></td>
              <td>{data.dob.date.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// TODO: try to implement this later
//   {columns.map((col) => (
//     <td key={`${data.dob.date}-${col.property}`}>
//       {typeof col.nested === `undefined`
//         ? data[col.property]
//         : data[col.property][col.nested]}
//     </td>
//   ))}
