import { styled, Grid, Box, TableBody, TableCell, Table, TableRow } from "@mui/material";
import { map } from "lodash";
import moment from "moment";

const StyledLoading = styled('div')(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: 'auto',
        height: '50px',
    },
}));

const StyledTable = styled(Table)(() => ({
    width: '100%',
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
}));
const AppTable = (props) => {
    console.log("aluminium data throgh props", props.aluminiumData);
    return (
        // <Container>
            <StyledLoading>
                <Grid container spacing={10}>
                    <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mt: 2 }}>
                        <Box>
                            <StyledTable >
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Count Aluminium </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.count_aluminium}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Check Coating </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.check_coating}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Take Receiving Challan </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.take_receiving_challan}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Scaffolding </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.scaffolding} </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Make Part Frame </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.make_part_frame} </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Take All Photos </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.take_all_photos} </TableCell>
                                    </TableRow>
                                </TableBody>
                            </StyledTable>
                        </Box>
                      
                    </Grid>



                    <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mt: 2 }}>
                        <Box>
                            <StyledTable >
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Check Fabrication</TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.check_fabrication} </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Scrap Management </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.scrap_management} </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Plaster Depth </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.plaster_depth} </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Remark </TableCell>
                                        <TableCell align="center">{props?.aluminiumData?.remark} </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Aluminium Date </TableCell>
                                        <TableCell align="center">{moment(props?.aluminiumData?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                    </TableRow>
                                    
                                </TableBody>
                            </StyledTable>
                        </Box>
                      
                    </Grid>

                </Grid>
            </StyledLoading>

        // </Container> 
    );
};

export default AppTable;
