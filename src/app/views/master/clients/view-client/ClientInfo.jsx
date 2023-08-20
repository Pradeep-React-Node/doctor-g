import {
  Avatar,
  Button,
  Card,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { FlexBox } from "app/components/FlexBox";
import { H4, Small } from "app/components/Typography";
import React from "react";
import { useLocation } from 'react-router-dom'

const ContentBox = styled(FlexBox)(() => ({
  alignItems: "center",
  flexDirection: "column",
}));


const ClientInfo = () => {
  const location = useLocation()
  const clientData = location.state

  return (
    <Card sx={{ pt: 3 }} elevation={3}>
      <ContentBox mb={3} alignContent="center">
        <Avatar sx={{ width: 84, height: 84 }} src="/assets/images/face-1.png" />
        <H4 sx={{ mt: "17px", mb: "8px" }}>{clientData?.first_name} {clientData?.last_name}</H4>
        <Small color="text.secondary">company Name</Small>
      </ContentBox>

      <Divider />

      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ pl: 2 }}>Email</TableCell>
            <TableCell>
              <div>{clientData?.email}</div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ pl: 2 }}>Phone</TableCell>
            <TableCell>
              <div>{clientData?.phone}</div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ pl: 2 }}>Group Name</TableCell>
            <TableCell>
              <div>{clientData?.group_name}</div>
            </TableCell>
          </TableRow>

      
        </TableBody>
      </Table>
    </Card>
  );
};

export default ClientInfo;
