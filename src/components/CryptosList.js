import { useState } from "react";
// import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CryptoCard from "./CryptoCard";
import ListView from "./ListView";

const CryptosList = () => {
  //   const cryptos = useSelector((state) => state?.data?.data);
  //   console.log(cryptos);
  const [alignment, setAlignment] = useState("cards");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box className="mainContent">
      {/* Content Header and Toggle Buttons */}
      <Box className="headerToggle">
        <h2 style={{ margin: 0 }}>Featured Cryptocurrencies</h2>
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="toggle view"
            sx={{
              margin: "0.1em",
              "& .MuiToggleButton-root": {
                border: "1px solid #FFFFFF",
                color: "#FFFFFF",
              },
            }}
          >
            <ToggleButton value="cards" aria-label="Cards View">
              Card View
            </ToggleButton>
            <ToggleButton value="list" aria-label="List View">
              List View
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {/* Conditionally rendered views of cryptos  (cards/list) */}
      <Box>{alignment === "cards" ? <CryptoCard /> : <ListView />}</Box>
    </Box>
  );
};

export default CryptosList;
