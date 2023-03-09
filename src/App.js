import { useEffect } from "react";
import axios from "axios";
import { listCryptos } from "./app/actions";
import store from "./app/store";
import { Box } from "@mui/system";
import Header from "./components/Header";
import CryptosList from "./components/CryptosList";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => store.dispatch(listCryptos(response.data)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box data-testid="app" className="App">
      <Header />
      <CryptosList />
    </Box>
  );
}

export default App;
