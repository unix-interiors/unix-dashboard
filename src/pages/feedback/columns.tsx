import { Chip, Rating } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import moment from 'moment';

const overallColor = {
  exceeded: 'success',
  yes: 'success',
  no: 'error',
};

export const tableHeader: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Client Name',
    filterable: false,
    minWidth: 254,
  },
  {
    field: 'contact',
    headerName: 'Client Contact',
    headerAlign: 'center',
    filterable: false,
    sortable: false,
    minWidth: 150,
    align: 'center',
    disableColumnMenu: true,
  },
  {
    field: 'quality',
    headerName: 'Work Quality',
    headerAlign: 'center',
    filterable: false,
    minWidth: 150,
    align: 'center',
    renderCell: ({ value }) => (
      <Rating size="small" name="read-only" value={value} readOnly />
    ),
  },
  {
    field: 'behaviour',
    headerName: 'Staff Behaviour',
    headerAlign: 'center',
    filterable: false,
    minWidth: 150,
    align: 'center',
    renderCell: ({ value }) => (
      <Rating size="small" name="read-only" value={value} readOnly />
    ),
  },
  {
    field: 'overall',
    headerName: 'Over All',
    headerAlign: 'center',
    sortable: false,
    minWidth: 150,
    align: 'center',
    renderCell: ({ value }) => (
      <Chip
        label={value}
        size="small"
        //@ts-ignore
        color={overallColor[value]}
        variant="outlined"
        sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
      />
    ),
  },
  {
    field: 'experience',
    headerName: 'Experience',
    headerAlign: 'center',
    filterable: false,
    sortable: false,
    minWidth: 250,
    width: 340,
    align: 'center',
    disableColumnMenu: true,
  },
  {
    field: 'time',
    headerName: 'Sumitted At',
    headerAlign: 'center',
    filterable: false,
    sortable: false,
    minWidth: 180,
    align: 'center',
    disableColumnMenu: true,
    renderCell: ({ value }) => moment(value).format('lll'),
  },
];
