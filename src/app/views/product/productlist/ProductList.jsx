import { Grow, Icon, IconButton, Button, TextField } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { Breadcrumb } from "app/components";
import { H5, Span } from "app/components/Typography";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getProductList, deleteProduct } from "app/redux/actions/ProductAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Ellipsis = styled(Span)(() => ({
  display: "block",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));

const StyledSpan = styled(Span)(({ bgColor }) => ({
  color: "#fff",
  padding: "8px 15px",
  borderRadius: "4px",
  background: bgColor,
}));

const IMG = styled("img")(() => ({
  height: 55,
  borderRadius: "4px",
}));

const ProductList = () => {
  // const { palette } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const bgGreen = "rgba(9, 182, 109, 1)";
  // const bgError = palette.error.main;
  // const bgSecondary = palette.secondary.main;

  const productList = useSelector(state => state.products.productList)
  console.log(productList);
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch])

  //   const options = {
  //     onRowsDelete: (e) => deleteProducts(e)
  // }

  const deleteProducts = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload(false);
    toast.success('Delete Product Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const columns = [
    {
      name: "name", // field name in the row object
      label: `Material Name`, // column title that will be shown in table
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let product = productList[dataIndex];
          return (
            <FlexBox>
              <IMG src={"http://localhost:6002/uploads/" + product?.product_pic} height="auto" width="50px" alt="IMG" />
              <Box ml="12px">
                <H5 sx={{ fontSize: "15px" }}>{product?.name}</H5>
              </Box>
            </FlexBox>
          );
        },
      },
    },
    {
      name: "brand",
      label: "Brand",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <Ellipsis>{productList[dataIndex]?.brand}</Ellipsis>
        ),
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <span>₹{productList[dataIndex]?.price}</span>
        )
      },
    },
    {
      name: "color",
      label: "Color",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <Ellipsis>{productList[dataIndex]?.color}</Ellipsis>
        ),
      },
    },
    {
      name: "size",
      label: "Size",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <Ellipsis>{productList[dataIndex]?.size}</Ellipsis>
        ),
      },
    },

    // {
    //   name: "grade",
    //   label: "grade",
    //   options: {
    //     filter: true,
    //     customBodyRenderLite: (dataIndex) => (
    //       <Ellipsis>{productList[dataIndex]?.grade}</Ellipsis>
    //     ),
    //   },
    // },
    // {
    //   name: "delivery_time",
    //   label: "delivery_time",
    //   options: {
    //     filter: true,
    //     customBodyRenderLite: (dataIndex) => (
    //       <Ellipsis>{productList[dataIndex]?.delivery_time}</Ellipsis>
    //     ),
    //   },
    // },
    {
      name: "remark",
      label: "Remark",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <Ellipsis>{productList[dataIndex]?.remark}</Ellipsis>
        ),
      },
    },

    // {
    //   name: "quantity",
    //   label: "Invenotry",
    //   options: {
    //     filter: true,
    //     customBodyRenderLite: (dataIndex) => {
    //       let quantity = productList[dataIndex]?.quantity;

    //       if (quantity === 0) return <StyledSpan bgColor={bgError}>Out of Stock</StyledSpan>;
    //       else if (quantity >= 30) return <StyledSpan bgColor={bgGreen}>Available</StyledSpan>;
    //       else if (quantity < 30)
    //         return <StyledSpan bgColor={bgSecondary}>Limited Stock</StyledSpan>;
    //     },
    //   },
    // },
    {
      name: "action",
      label: "Action ",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => (
          <FlexBox>
            <Box flexGrow={0} />
            <Link color="primary" variant="contained" to="/products/edit-product" state={productList[dataIndex]}>
              <IconButton
                aria-label="edit"
                aria-haspopup="true"
              >
                <Icon color="primary">edit</Icon>
              </IconButton>
            </Link>
            <Link variant="contained" to="/products/product-details" state={productList[dataIndex]}>
              <IconButton
                aria-label="details"
                aria-haspopup="true"
              >
                <Icon style={{ color: "primary" }} >trending_flat</Icon>
              </IconButton>
            </Link>
            <IconButton
              aria-label="delete"
              aria-haspopup="true"
              onClick={() => deleteProducts(productList[dataIndex]?._id)}
            >
              <Icon color="error">close</Icon>
            </IconButton>
          </FlexBox>
        ),
      },
    },
  ];


  return (
    <>
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Materials", path: "/products/productlist" }, { name: "Material List" }]} />
      </div>

      <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/products/add-products")}>
        Add New Products
      </Button>

      <Box overflow="auto">
        <Box minWidth={1000}>
          <MUIDataTable
            title={"All Materials"}
            data={productList}
            columns={columns}
            options={{
              filterType: "textField",
              responsive: "standard",
              elevation: 0,
              rowsPerPageOptions: [5, 10, 20, 40, 80, 100],
              customSearchRender: (searchText, handleSearch, hideSearch, options) => {
                return (
                  <Grow appear in={true} timeout={300}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      onChange={({ target: { value } }) => handleSearch(value)}
                      InputProps={{
                        style: { paddingRight: 0 },
                        startAdornment: (
                          <Icon fontSize="small" sx={{ mr: 1 }}>
                            search
                          </Icon>
                        ),
                        endAdornment: (
                          <IconButton onClick={hideSearch}>
                            <Icon fontSize="small">clear</Icon>
                          </IconButton>
                        ),
                      }}
                    />
                  </Grow>
                );
              },
            }}
          />
        </Box>
      </Box>
    </Container>
    </>
  );
};


export default ProductList;
