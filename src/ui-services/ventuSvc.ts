import { receivablesResponseMock } from "./mocks";
import { GetReceivablesResponse } from "./types";

const getReceivables = async (): Promise<GetReceivablesResponse[]> => {
  return receivablesResponseMock;
};

const ventuSvc = {
  getReceivables,
};

export default ventuSvc;
