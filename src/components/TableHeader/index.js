import React from 'react';

function TableHeader(props) {
  const columnHeadings = [`Image`, `Name`, `Phone`, `Email`, `D.O.B.`];

  return (
    <thead>
      <tr>
        {columnHeadings.map((col) => (
          <th scope='col' key={`header-${col}`}>
            <button
              className='btn font-weight-bold'
              type='button'
              onClick={() => props.sort}
            >
              {col}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

// TODO: try to implement this later
//   {columns.map((col) => (
//     <td key={`${data.dob.date}-${col.property}`}>
//       {typeof col.nested === `undefined`
//         ? data[col.property]
//         : data[col.property][col.nested]}
//     </td>
//   ))}

// don't need property with the current implementation
// const columns = [
//   { heading: `Image`, property: `picture`, nested: `medium` },
//   { heading: `Name`, property: `name`, nested: `first` },
//   { heading: `Phone`, property: `phone` },
//   { heading: `Email`, property: `email` },
//   { heading: `D.O.B.`, property: `dob`, nested: `date` },
// ];
