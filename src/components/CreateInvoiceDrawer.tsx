import { DrawerProps } from "@mui/material";
import DetailDrawer from "./common/DetailDrawer";

interface CreateInvoiceDrawerProps extends DrawerProps {
  onClose: () => void;
}

const CreateInvoiceDrawer = ({ ...props }: CreateInvoiceDrawerProps) => {
  return <DetailDrawer title="Create new invoice" {...props}></DetailDrawer>;
};

export default CreateInvoiceDrawer;
