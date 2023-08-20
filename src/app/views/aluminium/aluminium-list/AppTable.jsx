
import { Box, styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "app/components";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppTable = () => {
  // const navigate = useNavigate();
 
  return (
    <Container>
      <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Aluminium", path: "/aluminium/aluminium-list" }, { name: "Aluminium List" }]} />
      </Box>
      {/* <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/aluminium/new-aluminium")}>
        Add New Payment
      </Button> */}
      <SimpleCard title="All Aluminium">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
};

export default AppTable;
