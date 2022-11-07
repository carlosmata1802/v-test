import Avatar from "@mui/material/Avatar";

const SIZE: Record<"small" | "medium", any> = {
  small: {
    width: "25px",
    height: "25px",
    fontSize: 11,
  },
  medium: {
    width: "35px",
    height: "35px",
    fontSize: 15,
  },
};

const stringToColor = (string: string): string => {
  let hash = 0;
  let color = "#";
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

const stringAvatar = (name: string, size: "small" | "medium") => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      ...SIZE[size],
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const StringAvatar = ({
  name,
  size,
}: {
  name: string;
  size: "small" | "medium";
}) => {
  return <Avatar {...stringAvatar(name, size)} />;
};

export default StringAvatar;
