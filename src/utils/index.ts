import { DateTime } from "luxon";

export const formatCurrency = (amount: number | string = 0): string => {
  const value = Number(amount);
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};

export const convertDateToHumanReadable = (date: string) =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED).split(",")[0];
