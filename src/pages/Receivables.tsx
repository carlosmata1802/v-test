import { Grid, Typography } from "@mui/material";
import ButtonStyled from "../components/common/Common.styled";
import SearchInput from "../components/Filters";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CreateInvoiceDrawer from "../components/CreateInvoiceDrawer";
import { useCallback, useEffect, useState } from "react";
import FiltersDrawer from "../components/FiltersDrawer";
import ventuSvc from "../ui-services/ventuSvc";
import { GetReceivablesResponse } from "../ui-services/types";
import ReceivablesTable from "../components/ReceivablesTable";

const Receivables = () => {
  const [isCreateInvoiceDrawerOpen, setIsCreateInvoiceDrawer] =
    useState<boolean>(false);
  const [isFiltersDrawerOpen, setIsFiltersDrawer] = useState<boolean>(false);
  const [receivables, setReceivables] = useState<
    GetReceivablesResponse[] | null
  >();

  const getReceivables = useCallback(async () => {
    const response = await ventuSvc.getReceivables();
    setReceivables(response);
  }, []);

  useEffect(() => {
    getReceivables();
  }, [getReceivables]);

  return (
    <>
      <Typography variant="subtitle2" fontSize={28} fontWeight="600">
        Receivables
      </Typography>

      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Grid xs={12} lg={6}>
          <SearchInput onChange={(text) => console.log(text)} />
        </Grid>
        <Grid xs={12} lg={3} display="flex" justifyContent="space-between">
          <ButtonStyled
            variant="contained"
            startIcon={<FilterAltIcon />}
            onClick={() => setIsFiltersDrawer(true)}
          >
            Filters
          </ButtonStyled>
          <ButtonStyled
            variant="contained"
            onClick={() => setIsCreateInvoiceDrawer(true)}
          >
            + New Invoice
          </ButtonStyled>
        </Grid>
      </Grid>
      <CreateInvoiceDrawer
        open={isCreateInvoiceDrawerOpen}
        onClose={() => setIsCreateInvoiceDrawer(false)}
      />
      <FiltersDrawer
        open={isFiltersDrawerOpen}
        onClose={() => setIsFiltersDrawer(false)}
      />
      {receivables && <ReceivablesTable receivables={receivables} />}
    </>
  );
};

export default Receivables;
