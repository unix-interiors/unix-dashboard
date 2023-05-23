import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TableWrapper } from './style';
import { Box, CircularProgress } from '@mui/material';

interface IProps {
  previewData: any[];
  tableHeader: GridColDef[];
  loading?: boolean;
}

const DataTable = (props: IProps) => {
  const { previewData, tableHeader, loading = false } = props;

  const CustomLoader = () => (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={50} thickness={2} />
    </Box>
  );

  return (
    <TableWrapper maxheight={181}>
      <DataGrid
        className="grid-class"
        rows={previewData}
        columns={tableHeader.map((data) => ({
          ...data,
          headerClassName: 'header-cell',
        }))}
        loading={loading}
        rowSelection={false}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        sx={{
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
            width: '0.4em',
            height: '0.4em',
          },
        }}
        disableColumnSelector
        pageSizeOptions={[10, 20, 50, 100]}
        slots={{
          loadingOverlay: CustomLoader,
        }}
      />
    </TableWrapper>
  );
};

export default DataTable;
