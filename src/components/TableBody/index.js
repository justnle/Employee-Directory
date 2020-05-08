import React from 'react';

function TableBody(props) {
  return (
    <tbody>
      {props.employees.map((data, index) => (
        <tr key={`${index}-row`}>
          <td>
            <img alt='user' src={data.picture.medium}></img>
          </td>
          <td>
            {data.name.first} {data.name.last}
          </td>
          <td>{data.phone}</td>
          <td>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </td>
          <td>
            {data.dob.date.replace(/^(\d{4})-(\d\d)-(\d\d).+$/, '$2/$3/$1')}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
