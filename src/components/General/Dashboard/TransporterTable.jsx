import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TransporterTable = () => {
  return (
    <div>
      <TableContainer className="inline-flex h-[450px] md:h-[500px] w-[250px] sm:w-[390px] md:w-[700px] lg:w-[900px] xl:w-[1300px]">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className="font-poppins">
                Order ID
              </TableCell>
              <TableCell align="center" className="font-poppins">
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" className="font-poppins">
                123456789
              </TableCell>
              <TableCell align="center" className="font-poppins">
                ₹ 789.456
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransporterTable;
