import { DataGrid, DataGridProps, esES } from "@mui/x-data-grid";

type DataTableProps = DataGridProps;

const DataTable: React.FC<DataTableProps> = ({ columns, rows, onRowClick }) => {
  return (
    <DataGrid
      sx={{
        maxHeight: "430px",
        backgroundColor: "#fff",
        "&.MuiDataGrid-root ": {
          cursor: "pointer",
        },
        "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
          outline: "none !important",
        },
      }}
      onRowClick={onRowClick}
      columns={columns}
      rows={rows}
      hideFooter
      hideFooterPagination
      hideFooterSelectedRowCount
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
    />
  );
};

export default DataTable;
