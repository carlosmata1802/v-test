import { GetReceivablesResponse } from "./types";

export const receivablesResponseMock: GetReceivablesResponse[] = [
  {
    id: 1,
    client: "Carlos Mata",
    paymentStatusId: 2,
    cargoStatusId: 1,
    date: "10/05/22",
    amount: "487653",
    paymentType: 1,
    installmentsPayed: 3,
    totalInstallments: 10,
    paymentsDueDate: "2022-10-12",
  },
  {
    id: 2,
    client: "Santiago Bustamante",
    paymentStatusId: 1,
    cargoStatusId: 2,
    date: "10/05/22",
    amount: "89653",
    paymentType: 1,
    installmentsPayed: 10,
    totalInstallments: 12,
    paymentsDueDate: "2022-11-22",
  },
  {
    id: 3,
    client: "Jane Foster",
    paymentStatusId: 3,
    cargoStatusId: 1,
    date: "10/05/22",
    amount: "109500",
    paymentType: 1,
    installmentsPayed: 1,
    totalInstallments: 6,
    paymentsDueDate: "2022-10-10",
  },
  {
    id: 4,
    client: "Thor Odinson",
    paymentStatusId: 2,
    cargoStatusId: 2,
    date: "10/05/22",
    amount: "12309",
    paymentType: 1,
    installmentsPayed: 2,
    totalInstallments: 6,
    paymentsDueDate: "2022-10-22",
  },
  {
    id: 5,
    client: "Tony Stark",
    paymentStatusId: 3,
    cargoStatusId: 1,
    date: "10/05/22",
    amount: "65450",
    paymentType: 1,
    installmentsPayed: 10,
    totalInstallments: 12,
    paymentsDueDate: "2022-10-12",
  },
  {
    id: 6,
    client: "Peter Parker",
    paymentStatusId: 2,
    cargoStatusId: 1,
    date: "10/05/22",
    amount: "2840",
    paymentType: 1,
    installmentsPayed: 2,
    totalInstallments: 3,
    paymentsDueDate: "2022-10-12",
  },
  {
    id: 7,
    client: "Steven Strange",
    paymentStatusId: 1,
    cargoStatusId: 3,
    date: "10/05/22",
    amount: "12202",
    paymentType: 1,
    installmentsPayed: 4,
    totalInstallments: 9,
    paymentsDueDate: "2022-05-22",
  },
  {
    id: 8,
    client: "Michel Jackson",
    paymentStatusId: 3,
    cargoStatusId: 2,
    date: "10/05/22",
    amount: "6350",
    paymentType: 1,
    installmentsPayed: 8,
    totalInstallments: 9,
    paymentsDueDate: "2022-10-22",
  },
];