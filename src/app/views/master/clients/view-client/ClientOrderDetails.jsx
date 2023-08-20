import {
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { H4 } from "app/components/Typography";
import React from "react";


const ClientOrderDetails = () => {
  return (
    <Card elevation={3}>
      <H4 sx={{ p: 2 }}>Order Details</H4>
      <Divider sx={{ mb: 2 }} />

      

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
  { title: "Order Group", value: "Order Received" },
  { title: "Site Name", value: "Order Confirmation" },
  { title: "Assessment", value: "Order Confirmation" },
  { title: "Site Incharge", value: "Order Confirmation" },
  { title: "Total Team", value: "Order Confirmation" },
  { title: "Safety Equipment", value: "Order Confirmation" },
];

export default ClientOrderDetails;
