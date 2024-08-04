// import React, { useMemo, useState } from 'react';
// import {MaterialReactTable} from 'material-react-table';
// import { Box, Button, TextField, MenuItem, Select, Checkbox, ListItemText } from '@mui/material';

// const BasicEditTable = () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'John Doe', role: 'Captain', date: '2024-08-04', city: '' },
//     { id: 2, name: 'Jane Smith', role: 'Major', date: '2024-08-04', city: '' },
//     { id: 3, name: 'Jim Brown', role: 'Soldier', date: '2024-08-04', city: '' },
//   ]);

//   const cityOptions = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'name',
//         header: 'Name',
//         Cell: ({ cell, row, column }) => (
//           <TextField
//             value={cell.getValue()}
//             onChange={(e) => {
//               const newData = [...data];
//               newData[row.index][column.id] = e.target.value;
//               setData(newData);
//             }}
//           />
//         ),
//       },
//       {
//         accessorKey: 'role',
//         header: 'Role',
//         Cell: ({ cell, row, column }) => (
//           console.log("props", cell, row, column)

         
//         ),
//       },
//       {
//         accessorKey: 'date',
//         header: 'Date',
//         Cell: ({ cell, row, column }) => (
//           <TextField
//             type="date"
//             value={cell.getValue()}
//             onChange={(e) => {
//               const newData = [...data];
//               newData[row.index][column.id] = e.target.value;
//               setData(newData);
//             }}
//           />
//         ),
//       },
//       {
//         accessorKey: 'city',
//         header: 'City',
//         Cell: ({ cell, row, column }) => (

//           // <Select
//           //   value={cell.getValue() || ''}
//           //   onChange={(e) => {
//           //     const newData = [...data];
//           //     newData[row.index][column.id] = e.target.value;
//           //     console.log("column" , )
//           //     console.log("column" , e)
//           //     setData(newData);
//           //   }}
//           //   displayEmpty
//           // >
//           //   <MenuItem value="" disabled>
//           //     Select City
//           //   </MenuItem>
//           //   {cityOptions.map((city) => (
//           //     <MenuItem key={city} value={city}>
//           //       {city}
//           //     </MenuItem>
//           //   ))}
//           // </Select>
//           <Select
//             multiple
//             value={cell.getValue() || []}
//             onChange={(e) => {
//               const newData = [...data];
//               newData[row.index][column.id] = e.target.value;
//               setData(newData);
//             }}
//             renderValue={(selected) => selected.join(' ')}
//           >
//             {cityOptions.map((city) => (
//               <MenuItem key={city} value={city}>
//                 <Checkbox checked={cell.getValue().indexOf(city) > -1} />
//                 <ListItemText primary={city} />
//               </MenuItem>
//             ))}
//           </Select>

//         ),
//       },
//     ],
//     [data]
//   );

//   return (
//     <Box sx={{ p: 2 }}>
//       <MaterialReactTable columns={columns} data={data} />
//       <Button
//         onClick={() => {
//           console.log('Updated Data:', data);
//         }}
//       >
//         Save Changes
//       </Button>
//     </Box>
//   );
// };

// export default BasicEditTable;
import React, { useMemo, useState } from 'react';
import {MaterialReactTable} from 'material-react-table';
import { Box, Button, TextField, MenuItem, Select, Checkbox, ListItemText, Tooltip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const initialData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Captain',
    date: '2024-08-04',
    city: ['New York', 'Chicago'],
    subRows: [{ id: 1.1, detail: 'Sub-row 1' }, { id: 1.2, detail: 'Sub-row 2' }],
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Major',
    date: '2024-08-04',
    city: ['Los Angeles'],
    subRows: [{ id: 2.1, detail: 'Sub-row 1' }],
  },
  {
    id: 3,
    name: 'Jim Brown',
    role: 'Soldier',
    date: '2024-08-04',
    city: [],
    subRows: [],
  },
];

const cityOptions = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

const BasicEditTable = () => {
  const [data, setData] = useState(initialData);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        Cell: ({ cell, row, column }) => (
          <TextField
            value={cell.getValue()}
            onChange={(e) => {
              const newData = [...data];
              newData[row.index][column.id] = e.target.value;
              setData(newData);
            }}
          />
        ),
      },
      {
        accessorKey: 'role',
        header: 'Role',
        Cell: ({ cell, row, column }) => (
          <TextField
            value={cell.getValue()}
            onChange={(e) => {
              const newData = [...data];
              newData[row.index][column.id] = e.target.value;
              setData(newData);
            }}
          />
        ),
      },
      {
        accessorKey: 'date',
        header: 'Date',
        Cell: ({ cell, row, column }) => (
          <TextField
            type="date"
            value={cell.getValue()}
            onChange={(e) => {
              const newData = [...data];
              newData[row.index][column.id] = e.target.value;
              setData(newData);
            }}
          />
        ),
      },
    //   {
    //     accessorKey: 'city',
    //     header: 'City',
    //     Cell: ({ cell, row, column }) => {
    //       const selectedCities = cell.getValue() || [];
    //       const tooltipText = selectedCities.join(', ') || 'No cities selected';
          
    //       return (
    //         <Tooltip title={tooltipText}>
    //           <div>
    //             <Select
    //               multiple
    //               value={selectedCities}
    //               onChange={(e) => {
    //                 const newData = [...data];
    //                 newData[row.index][column.id] = e.target.value;
    //                 setData(newData);
    //               }}
    //               renderValue={(selected) => (selected.length ? selected.join(', ') : 'Select City')}
    //             >
    //               {cityOptions.map((city) => (
    //                 <MenuItem key={city} value={city}>
    //                   <Checkbox checked={selectedCities.indexOf(city) > -1} />
    //                   <ListItemText primary={city} />
    //                 </MenuItem>
    //               ))}
    //             </Select>
    //           </div>
    //         </Tooltip>
    //       );
    //     },
    //   },
    // ],
    // [data]
    {
      accessorKey: 'city',
      header: 'City',
      Cell: ({ cell, row, column }) => {
        const selectedCities = cell.getValue() || [];
        const tooltipContent = (
          <div>
            {selectedCities.length > 0 ? (
              selectedCities.map((city, index) => (
                <div key={index}>{city}</div>
              ))
            ) : (
              <div>No cities selected</div>
            )}
          </div>
        );
        const displayValue =
          selectedCities.length > 1
            ? `${selectedCities[0]} + ${selectedCities.length - 1} more`
            : selectedCities[0] || 'Select City';

        return (
          <Tooltip title={tooltipContent} arrow>
            <div>
              <Select
                multiple
                value={selectedCities}
                onChange={(e) => {
                  const newData = [...data];
                  newData[row.index][column.id] = e.target.value;
                  setData(newData);
                }}
                renderValue={() => displayValue}
              >
                {cityOptions.map((city) => (
                  <MenuItem key={city} value={city}>
                    <Checkbox checked={selectedCities.indexOf(city) > -1} />
                    <ListItemText primary={city} />
                  </MenuItem>
                ))}
              </Select>
            </div>
          </Tooltip>
        );
      },
    },
  ],
  [data]
  );

  const subRowColumns = useMemo(
    () => [
      {
        accessorKey: 'detail',
        header: 'Detail',
        Cell: ({ cell, row, column }) => (
          <TextField
            value={cell.getValue()}
            onChange={(e) => {
              const newData = [...data];
              const subRows = [...newData[row.index].subRows];
              subRows[row.subRowIndex][column.id] = e.target.value;
              newData[row.index].subRows = subRows;
              setData(newData);
            }}
          />
        ),
      },
    ],
    [data]
  );

  const handleAddRow = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        name: '',
        role: '',
        date: '',
        city: [],
        subRows: [],
      },
    ]);
  };

  const handleAddSubRow = (parentRowIndex) => {
    const newData = [...data];
    newData[parentRowIndex].subRows.push({ id: Date.now(), detail: '' });
    setData(newData);
  };

  const handleRemoveSubRow = (parentRowIndex, subRowIndex) => {
    const newData = [...data];
    newData[parentRowIndex].subRows.splice(subRowIndex, 1);
    setData(newData);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="contained" color="primary" onClick={handleAddRow} startIcon={<AddIcon />}>
        Add New Row
      </Button>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowExpansion
        getSubRows={(row) => row.subRows}
        renderSubTable={(props) => (
          <MaterialReactTable
            columns={subRowColumns}
            data={props.row.original.subRows}
            renderRowActions={(row) => (
              <IconButton
                color="error"
                onClick={() => handleRemoveSubRow(props.row.index, row.index)}
              >
                <RemoveIcon />
              </IconButton>
            )}
          />
        )}
      />
      <Button variant="contained" color="primary" onClick={() => console.log('Updated Data:', data)}>
        Save Changes
      </Button>
    </Box>
  );
};

export default BasicEditTable;
