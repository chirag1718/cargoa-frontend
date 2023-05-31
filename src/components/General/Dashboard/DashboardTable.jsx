import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
const DashboardTable = () => {
  return (
    <div className="">
      <TableContainer className="inline-flex h-[600px] scroll-smooth border-2 w-[270px] sm:w-[450px] md:w-[720px] lg:w-[950px] xl:w-[1400px] overflow-scroll scrollbar-hide ">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Order ID</TableCell>
              <TableCell align="center">To</TableCell>
              <TableCell align="center">From</TableCell>
              <TableCell align="center">Quanity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardTable;
