import React from 'react';
import CommonTable from './CommonTable';

const columns2 = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Start Date', accessor: 'startdate' },
  { Header: 'End Date', accessor: 'enddate' },
  { Header: 'Role', accessor: 'role' },
];

const data2 = [
    { id: 1, name: 'Jane Smith', email: 'jane@example.com', startdate: '2023-02-01', enddate: '2023-11-30', role: 'Developer' },
];

const Component2 = () => {
  const features2 = { pagination: true, sorting: true };

  return <CommonTable columns={columns2} data={data2} features={features2} />;
};

export default Component2;