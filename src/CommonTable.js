// CommonTable.js
import React, { useState } from 'react';
import {MaterialReactTable} from 'material-react-table';
import { Box, Button, Checkbox, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const CommonTable = ({ columns, data, features }) => {
  const [tableData, setTableData] = useState(data);

  const handleDelete = (rows) => {
    const idsToDelete = rows.map(row => row.original.id);
    setTableData(prevData => prevData.filter(row => !idsToDelete.includes(row.id)));
  };

  const handleEdit = (row, updatedRow) => {
    setTableData(prevData => prevData.map(r => (r.id === row.id ? updatedRow : r)));
  };

  const handleAddRow = (newRow) => {
    setTableData(prevData => [...prevData, newRow]);
  };

  return (
    <Box>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enablePagination={features.pagination}
        enableSorting={features.sorting}
        enableRowSelection
        enableEditing
        renderRowActions={({ row }) => (
          <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <IconButton onClick={() => handleEdit(row, {/* updatedRow data */})}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleDelete([row])}>
              <Delete />
            </IconButton>
          </Box>
        )}
        renderTopToolbarCustomActions={({ selectedFlatRows }) => (
          <Button
            color="secondary"
            onClick={() => handleDelete(selectedFlatRows)}
            disabled={selectedFlatRows?.length === 0}
          >
            Delete Selected
          </Button>
        )}
      />
      <Button onClick={() => handleAddRow({/* newRow data */})}>
        Add New Row
      </Button>
    </Box>
  );
};

export default CommonTable;
