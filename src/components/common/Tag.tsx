import { Chip, ChipProps } from "@mui/material";

interface TagProps extends ChipProps {
  bgColor: string;
  textColor?: string;
}

const Tag = ({ bgColor, textColor, ...props }: TagProps) => {
  return (
    <Chip
      {...props}
      sx={{
        width: "100%",
        maxWidth: "75px",
        height: "22px",
        backgroundColor: bgColor,
        color: textColor || "#FFFFFF",
        fontSize: 10,
        borderRadius: "5px",
      }}
    />
  );
};

export default Tag;
