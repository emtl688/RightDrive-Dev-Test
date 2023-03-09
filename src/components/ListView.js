import { useState } from "react";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Box,
  Pagination,
} from "@mui/material";

const ListView = () => {
  const cryptos = useSelector((state) => state?.data?.data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
      <Box data-testid="listView" sx={{ marginBottom: "1em" }}>
        <TableContainer component={Paper}>
          <Table aria-label="crypto table">
            <TableHead>
              <TableRow>
                <TableCell size="small" sx={{ fontWeight: "bold", borderBottom: "1px solid black" }}>Name</TableCell>
                <TableCell size="small" sx={{ fontWeight: "bold", borderBottom: "1px solid black" }}>Current Price</TableCell>
                <TableCell size="small" sx={{ fontWeight: "bold", borderBottom: "1px solid black" }}>All Time High</TableCell>
                <TableCell size="small" sx={{ fontWeight: "bold", borderBottom: "1px solid black" }}>Market Cap.</TableCell>
                <TableCell size="small" sx={{ fontWeight: "bold", borderBottom: "1px solid black" }}>Total Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" size="small">
                    {row.name}
                  </TableCell>
                  <TableCell size="small">
                    {priceFormatter.format(row.current_price)}
                  </TableCell>
                  <TableCell size="small">
                    {priceFormatter.format(row.ath)}
                  </TableCell>
                  <TableCell size="small">
                    {priceFormatter.format(row.market_cap)}
                  </TableCell>
                  <TableCell size="small">
                    {priceFormatter.format(row.total_volume)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="pagination">
        <Pagination
          color="primary"
          variant="outlined"
          size="medium"
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            ".css-1y7coo4-MuiButtonBase-root-MuiPaginationItem-root": {
              color: "white",
              border: "1px solid white",
              backgroundColor: "#ffffff1a",
            },
            ".css-1y7coo4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
              {
                color: "#0080ff",
                border: "2px solid #0080ff",
                backgroundColor: "rgb(25 118 210 / 31%)",
                fontWeight: "bold",
              },
            ".css-1v2lvtn-MuiPaginationItem-root": {
              color: "white",
            },
          }}
        />
      </Box>
    </>
  );
};

export default ListView;
