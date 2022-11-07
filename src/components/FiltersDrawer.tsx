import { DrawerProps } from "@mui/material";
import DetailDrawer from "./common/DetailDrawer";

interface FiltersDrawerProps extends DrawerProps {
  onClose: () => void;
}

const FiltersDrawer = ({ ...props }: FiltersDrawerProps) => {
  return <DetailDrawer title="Filters" {...props}></DetailDrawer>;
};

export default FiltersDrawer;
