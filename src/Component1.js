// Component1.js
import React from 'react';
import CommonTable from './CommonTable';

const columns1 = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Start Date', accessor: 'startdate' },
  { Header: 'End Date', accessor: 'enddate' },
  { Header: 'Age', accessor: 'age' },
];

const data1 = [
    { id: 1, name: 'John Doe', email: 'john@example.com', startdate: '2023-01-01', enddate: '2023-12-31', age: 25 },
];

const Component1 = () => {
  const features1 = { pagination: false, sorting: false };

  return <CommonTable columns={columns1} data={data1} features={features1} />;
};

export default Component1;