import { useState } from "react";
import { Box } from "@mui/system";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CardsView from "./CardsView";
import ListView from "./ListView";

const CryptosList = () => {
  const [alignment, setAlignment] = useState("cards");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box className="mainContainer">
      {/* Content Header and Toggle Buttons */}
      <Box className="headerToggle">
        <h2 style={{ margin: 0 }}>Featured Cryptocurrencies (Top 100)</h2>
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="toggle view"
            sx={{
              "& .MuiToggleButton-root": {
                border: "1px solid white",
                color: "#FFFFFF",
                fontWeight: "bold"
              },
              ".css-d9c359-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {
                color: "#0080ff",
                backgroundColor: "rgb(25 118 210 / 31%)",
                fontWeight: "bold"
              }
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
      {/* Conditionally rendered views of cryptos (cards/list) */}
      <Box sx={{ width: "100%" }}>
        {alignment === "cards" ? <CardsView /> : <ListView />}
      </Box>
    </Box>
  );
};

export default CryptosList;
