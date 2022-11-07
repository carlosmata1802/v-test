import {
  CARGO_STATUSES_ID,
  GetReceivablesResponse,
  PAYMENT_STATUSES_ID,
} from "../ui-services/types";

export const PAYMENT_STATUSES_COLORS = {
  [PAYMENT_STATUSES_ID.COMPLETE]: "#4DB6AC",
  [PAYMENT_STATUSES_ID.PROCESSING]: "#FFA412",
  [PAYMENT_STATUSES_ID.MISSING]: "#EF5350",
};

export const CARGO_STATUSES_COLORS = {
  [CARGO_STATUSES_ID.DELIVERED]: "#2B478B",
  [CARGO_STATUSES_ID.PROCESSING]: "#FFA412",
  [CARGO_STATUSES_ID.MISSING]: "#EF5350",
};

export const CONFIG_COLUMN = {
  hideSortIcons: true,
  disableColumnMenu: true,
  sortable: false,
};

export const getDueDateColor = (receivable: GetReceivablesResponse) => {
  const colors = ["#EF5350", "#FFA412", "#E5E6EB"];
  return receivable.cargoStatusId === CARGO_STATUSES_ID.PROCESSING
    ? colors[2]
    : colors[
        Math.abs(receivable.paymentStatusId - receivable.cargoStatusId - 1)
      ] || "#FFA412";
};
