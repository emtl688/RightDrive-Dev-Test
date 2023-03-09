import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const CryptosList = () => {
  const cryptos = useSelector((state) => state?.data?.data);
  console.log(cryptos);
  return (
    <Box className="mainContent">
        <h2>Featured Cryptocurrencies</h2>
    </Box>
  )
};

export default CryptosList;
