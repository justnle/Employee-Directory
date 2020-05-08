import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

function Table() {
  const [employees, setEmployees] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortedEmployees, setSortedEmployees] = useState([]);

  const getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        setEmployees(res.data.results);
        setSortedEmployees(res.data.results);
      })
      .catch((err) => console.log(err));
  };

 const sortEmployeesName = () => {
    const sortNames = [...sortedEmployees];
    setEmployees(sortNames.sort((a,b) => a.name.first.localeCompare(b.name.first)));
    console.log(sortedEmployees);
  }

  useEffect(() => {
    getEmployees();
    sortEmployeesName();
  }, []);

  return (
    <div className='Table'>
      <table className='table table-striped'>
        <TableHeader sort={setSortField} />
        <TableBody employees={employees} />
      </table>
    </div>
  );
}

export default Table;
