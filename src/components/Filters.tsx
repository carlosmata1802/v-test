import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

interface SearchInputProps {
  onChange: (searchCriteria: string) => void;
}

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <TextField
      id="search"
      size="small"
      placeholder="Search"
      sx={{
        maxWidth: "360px",
        width: "100%",
        margin: "1rem 0",
        backgroundColor: "#fff",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
