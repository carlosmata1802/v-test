import { DrawerProps, Grid, Typography } from "@mui/material";
import { GetReceivablesResponse } from "../ui-services/types";
import DetailDrawer from "./common/DetailDrawer";

interface DetailReceivableDrawerProps extends DrawerProps {
  onClose: () => void;
  receivable: GetReceivablesResponse;
}

const DetailReceivableDrawer = ({
  receivable,
  ...props
}: DetailReceivableDrawerProps) => {
  return (
    <DetailDrawer
      title={`Receivable for client ${receivable.client}`}
      {...props}
    >
      <Grid container>
        <Typography>Cliente:</Typography>
        <Typography>{receivable.client}</Typography>
      </Grid>
    </DetailDrawer>
  );
};

export default DetailReceivableDrawer;
