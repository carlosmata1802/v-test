export const PAYMENT_STATUSES_ID = {
  COMPLETE: 1,
  PROCESSING: 2,
  MISSING: 3,
};

export const CARGO_STATUSES_ID = {
  DELIVERED: 1,
  PROCESSING: 2,
  MISSING: 3,
};

export const PAYMENT_STATUSES = {
  [PAYMENT_STATUSES_ID.COMPLETE]: "Completed" as const,
  [PAYMENT_STATUSES_ID.PROCESSING]: "Processing" as const,
  [PAYMENT_STATUSES_ID.MISSING]: "Missing" as const,
};

export const CARGO_STATUSES = {
  [CARGO_STATUSES_ID.DELIVERED]: "Delivered" as const,
  [CARGO_STATUSES_ID.PROCESSING]: "Processing" as const,
  [CARGO_STATUSES_ID.MISSING]: "Missing" as const,
};

export const PAYMENT_TYPES = {
  1: "Supplier" as const,
  2: "Other" as const,
};

export type PaymentStatus = keyof typeof PAYMENT_STATUSES;
export type CargoStatus = keyof typeof CARGO_STATUSES;
export type PaymentType = keyof typeof PAYMENT_TYPES;

export interface GetReceivablesResponse {
  id: Number;
  client: string;
  paymentStatusId: PaymentStatus;
  cargoStatusId: CargoStatus;
  date: string;
  amount: string;
  paymentType: PaymentType;
  installmentsPayed: number;
  totalInstallments: number;
  paymentsDueDate: string;
}
