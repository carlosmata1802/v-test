import { TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";

interface DashboardProps {}

const CORRECTIONS = {
  realy: "really",
  wierd: "weird",
  tierd: "tired",
};

type Corrections = keyof typeof CORRECTIONS;

const Dashboard = () => {
  const [data, setData] = useState<string>("");
  const handleChange = (event: any) => {
    const wordArray = event.target.value.split(" ");
    const lastWord: Corrections = wordArray[wordArray.length - 2];

    if (CORRECTIONS[lastWord]) {
      wordArray[wordArray.length - 2] = CORRECTIONS[lastWord];
      return setData(wordArray.join(" "));
    }
    setData(event.target.value);
  };
  return (
    <div>
      <Typography variant="subtitle2" fontSize={28} fontWeight="600">
        Autocorrect
      </Typography>
      <Typography>Words to correct</Typography>
      {Object.keys(CORRECTIONS).map((objectKey) => (
        <Typography>
          {objectKey} : {CORRECTIONS[objectKey as Corrections]}
        </Typography>
      ))}
      <TextareaAutosize
        minRows={3}
        name="Autocorrect"
        value={data}
        onChange={handleChange}
      />
    </div>
  );
};

export default Dashboard;
