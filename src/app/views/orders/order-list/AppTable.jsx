
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import PaginationTable from "./PaginationTable";
import { ContainerForOrder } from "../../Style"


const AppTable = () => {

  return (
    <>

      <ContainerForOrder>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Works", path: "/orders/order-list" }, { name: "All Work List" }]} />
        </Box>

        <PaginationTable />
      </ContainerForOrder>
    </>
  );
};

export default AppTable;
