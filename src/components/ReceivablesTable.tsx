import { Grid, IconButton, Typography } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  CARGO_STATUSES,
  CARGO_STATUSES_ID,
  GetReceivablesResponse,
  PaymentType,
  PAYMENT_STATUSES,
  PAYMENT_TYPES,
} from "../ui-services/types";
import { convertDateToHumanReadable, formatCurrency } from "../utils";
import DataTable from "./common/DataTable";
import StringAvatar from "./StringAvatar";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { useState } from "react";
import AuthorizeCreditModal from "./common/AuthorizeCreditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import DetailReceivableDrawer from "./DetailReceivableDrawer";
import Tag from "./common/Tag";
import {
  CARGO_STATUSES_COLORS,
  CONFIG_COLUMN,
  getDueDateColor,
  PAYMENT_STATUSES_COLORS,
} from "./config";

interface ReceivablesTableProps {
  receivables: GetReceivablesResponse[];
}

const ReceivablesTable = ({ receivables }: ReceivablesTableProps) => {
  const [isAuthorizeCreditModalOpen, setIsAuthorizeCreditModal] =
    useState<boolean>(false);

  const [isDetailReceivableOpen, setIsDetailReceivable] =
    useState<boolean>(false);

  const [selectedReceivable, setSelectedReceivable] =
    useState<GetReceivablesResponse>();
  const columns: GridColDef[] = [
    {
      ...CONFIG_COLUMN,
      field: "client",
      headerName: "Client",
      width: 180,
      renderCell: (params) => (
        <Grid display="flex" container alignItems="center">
          <Grid xs={2}>
            <StringAvatar name={params.row.client} size="small" />
          </Grid>
          <Grid xs={10}>
            <Typography ml={1} fontSize={14}>
              {params.row.client}
            </Typography>
          </Grid>
        </Grid>
      ),
    },
    {
      ...CONFIG_COLUMN,
      align: "center",
      headerAlign: "center",
      field: "paymentStatusId",
      headerName: "Payment Status",
      width: 130,
      renderCell: (params: { row: GetReceivablesResponse }) => (
        <Tag
          label={PAYMENT_STATUSES[params.row.paymentStatusId]}
          size="small"
          bgColor={PAYMENT_STATUSES_COLORS[params.row.paymentStatusId]}
        />
      ),
    },
    {
      ...CONFIG_COLUMN,
      align: "center",
      headerAlign: "center",
      field: "cargoStatusId",
      headerName: "Cargo Status",
      width: 120,
      renderCell: (params: { row: GetReceivablesResponse }) => (
        <Tag
          label={CARGO_STATUSES[params.row.cargoStatusId]}
          size="small"
          bgColor={CARGO_STATUSES_COLORS[params.row.cargoStatusId]}
        />
      ),
    },
    {
      ...CONFIG_COLUMN,
      align: "center",
      headerAlign: "center",
      field: "date",
      headerName: "Date",
      width: 80,
    },
    {
      ...CONFIG_COLUMN,
      headerAlign: "center",
      align: "right",
      field: "amount",
      headerName: "Amount",
      valueGetter: (params: GridValueGetterParams) =>
        formatCurrency(params.row.amount),
      width: 90,
    },
    {
      ...CONFIG_COLUMN,
      align: "center",
      headerAlign: "center",
      field: "paymentType",
      headerName: "Type of payment",
      width: 140,
      valueGetter: (params: GridValueGetterParams) =>
        PAYMENT_TYPES[params.row.paymentType as PaymentType],
    },
    {
      ...CONFIG_COLUMN,
      headerAlign: "center",
      align: "center",
      field: "installmentsPayed",
      headerName: "Installment Payed",
      width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.installmentsPayed}/${params.row.totalInstallments}`,
    },
    {
      ...CONFIG_COLUMN,
      headerAlign: "center",
      align: "center",
      field: "paymentsDueDate",
      headerName: "Payments due date",
      width: 125,
      renderCell: (params) => (
        <Tag
          label={convertDateToHumanReadable(params.row.paymentsDueDate)}
          size="small"
          bgColor={getDueDateColor(params.row as GetReceivablesResponse)}
          textColor={
            params.row.cargoStatusId === CARGO_STATUSES_ID.PROCESSING
              ? "#9E9E9E"
              : undefined
          }
        />
      ),
    },
    {
      ...CONFIG_COLUMN,
      headerAlign: "center",
      field: "actions",
      headerName: "Actions",
      width: 130,
      type: "actions",
      renderCell: (params) => (
        <Grid container justifyContent="center" alignItems="center">
          <IconButton
            color="info"
            title="Athorize credit"
            size="small"
            onClick={() => {
              setSelectedReceivable(params.row);
              setIsAuthorizeCreditModal(true);
            }}
          >
            <CreditScoreIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            title="Remove receivable"
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      ),
    },
  ];
  const handleRowClick = (data: any) => {
    setSelectedReceivable(data.row);
    setIsDetailReceivable(true);
  };

  return (
    <>
      <DataTable
        rows={receivables}
        columns={columns}
        onRowClick={handleRowClick}
      />
      <AuthorizeCreditModal
        open={isAuthorizeCreditModalOpen}
        onClose={() => setIsAuthorizeCreditModal(false)}
        creditName={selectedReceivable?.client}
      />
      {selectedReceivable && (
        <DetailReceivableDrawer
          open={isDetailReceivableOpen}
          onClose={() => setIsDetailReceivable(false)}
          receivable={selectedReceivable}
        />
      )}
    </>
  );
};

export default ReceivablesTable;
