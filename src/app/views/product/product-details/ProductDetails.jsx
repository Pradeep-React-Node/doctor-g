import { Card, Grid, Box, TableBody, TableCell, TableRow, Table, Icon, Button } from "@mui/material";
import { H2, H4 } from "app/components/Typography";
import { styled } from "@mui/system";
import { Breadcrumb } from "app/components";
import { FlexAlignCenter } from "app/components/FlexBox";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const ProductCard = styled(Card)(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
}));

const PriceBox = styled("box")(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}));

const Red = styled("box")(() => ({
    color: "red",
}));

const ProductDetailCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}));

const IMG = styled("img")(() => ({
    marginBottom: 32,
    maxWidth: "70%",
    maxHeight: "70%",
}));

const StyledTable = styled(Table)(() => ({
    width: '100%',
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 2, paddingRight: 2 } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 20, textTransform: "capitalize" } },
    },
}));


const ProductDetails = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const productData = location.state

    console.log("oder data throgh props", productData);

    const [selectedImage, setSelectedImage] = useState("/assets/images/sq-1.jpg");
    const StyledImg = styled("img")(({ url }) => ({
        width: 80,
        marginLeft: 2,
        marginRight: 2,
        borderRadius: "4px",
    }));

    return (
        <Container>
            <Container>
                <Breadcrumb routeSegments={[{ name: "Material List", path: "/products/productlist" }, { name: "View Material" }]} />
            </Container>

            <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
        <Icon >navigate_before</Icon> Back
      </Button>

            <Card sx={{ px: 2, py: 2 }} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <ProductCard>
                            <IMG src={"http://localhost:6002/uploads/" + productData?.product_pic} alt="site" />

                            {/* <FlexAlignCenter gap={2} py={2}>
                                {imageList.map((imgUrl) => (
                                    <StyledImg
                                        src={imgUrl}
                                        alt="site"
                                        key={imgUrl}
                                        url={imgUrl}
                                        onClick={() => setSelectedImage(imgUrl)}
                                    />
                                ))}
                            </FlexAlignCenter> */}
                        </ProductCard>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <ProductDetailCard>
                            <PriceBox>
                                <H2 sx={{ ml: 2, mt: 1 }}>{productData?.name}</H2>
                                <H2 sx={{ mr: 3, mt: 1, }}><Red>Price : ₹{productData?.price}</Red> </H2>
                            </PriceBox>
                            <H4 sx={{ ml: 2, mt: 1 }}>Product Properties</H4>
                            <Box >
                                <StyledTable >
                                    <TableBody sx={{ pl: 2, pt: 1 }}>
                                        {/* <TableRow>
                                            <TableCell>Created At </TableCell>
                                            <TableCell align="center">{moment(productData?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                        </TableRow> */}
                                        <TableRow>
                                            <TableCell>Name </TableCell>
                                            <TableCell align="center">{productData?.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Brand </TableCell>
                                            <TableCell align="center">{productData?.brand}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Color </TableCell>
                                            <TableCell align="center">{productData?.color}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Size </TableCell>
                                            <TableCell align="center">{productData?.size} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Delivery Time </TableCell>
                                            <TableCell align="center">{productData?.delivery_time} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Grade </TableCell>
                                            <TableCell align="center">{productData?.grade} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Remark </TableCell>
                                            <TableCell align="center">{productData?.remark} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Created At </TableCell>
                                            <TableCell align="center">{moment(productData?.createdAt).format('MMMM Do YYYY  h:mm:ss a')}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </StyledTable>
                            </Box>
                        </ProductDetailCard>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

const imageList = [
    "/assets/images/sq-9.jpg",
    "/assets/images/sq-10.jpg",
    "/assets/images/sq-1.jpg",
];
export default ProductDetails;
