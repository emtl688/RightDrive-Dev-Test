import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, CardMedia, Pagination } from "@mui/material";

const CardsView = () => {
  const cryptos = useSelector((state) => state?.data?.data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cryptos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cryptos.length / itemsPerPage);

  const handlePageChange = (event, value) => setCurrentPage(value);

  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Box className="cardsContainer">
        {currentItems.map((coin) => (
          <Card
            key={coin.id}
            sx={{
              margin: "0.5em",
              width: "23%",
              maxHeight: "100%",
              border: "3px solid black",
            }}
          >
            <CardMedia
              sx={{ height: 160, borderBottom: "1px solid black" }}
              image={coin.image}
              title="coin symbol"
            />
            <CardContent>
              <h4 style={{ margin: "0.3em 0" }}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </h4>
              <p>Current Price: {priceFormatter.format(coin.current_price)}</p>
              <p>All Time High: {priceFormatter.format(coin.ath)}</p>
              <p>Total Volume: {priceFormatter.format(coin.total_volume)}</p>
              <p>Market Cap: {priceFormatter.format(coin.market_cap)}</p>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box className="pagination">
        <Pagination
          color="primary"
          variant="outlined"
          size="large"
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            ".css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root": {
              color: "white",
              border: "1px solid white",
              backgroundColor: "#ffffff1a",
            },
            ".css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
              {
                color: "#0080ff",
                border: "2px solid #0080ff",
                backgroundColor: "rgb(25 118 210 / 31%)",
                fontWeight: "bold"
              },
            ".css-1scal0h-MuiPaginationItem-root": {
              color: "white",
            },
          }}
        />
      </Box>
    </>
  );
};

export default CardsView;
