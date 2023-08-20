import { Card, Divider, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { H4 } from "app/components/Typography";
import React from "react";


const ClientBillings = () => {
  return (
    <Card elevation={3}>
      <H4 sx={{ p: 2 }}>Billing Details</H4>
      <Divider />

      <Table>
        <TableBody>
          {customerInfo.map((item, ind) => (
            <TableRow key={ind}>
              <TableCell sx={{ pl: 2 }}>{item.title}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const customerInfo = [
  { title: "Credit Card", value: "**** **** **** 4242" },
  { title: "Paid", value: "500" },
  { title: "Draft", value: "150" },
  { title: "Unpaid/Due", value: "355" },
  { title: "Refunded", value: "0.00" },
  { title: "Gross Income", value: "2,100.00" },
];

export default ClientBillings;
