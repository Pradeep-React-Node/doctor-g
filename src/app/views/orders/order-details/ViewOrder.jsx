import { styled, Box, Icon, Grid, IconButton, Tooltip, TableBody, TableCell, Table, TableRow } from "@mui/material";
import moment from "moment";
import { Small } from 'app/components/Typography';
import { Heading, StyledCard } from "../../Style";

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

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
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
    console.log("oder data throgh props", props.orderData);
    return (
        <StyledLoading>
            {/* <Box align="center">
                            <img src="/assets/images/logomain.jpeg" alt="" />
                        </Box> */}
            <Box>
                <Grid>

               
                <Grid item sm={4} xs={12}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <Icon className="icon"></Icon>
                            <Box ml="12px">
                                <Small>Name</Small>
                                <Heading>{props?.orderData?.site_name}</Heading>
                            </Box>
                        </ContentBox>

                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </StyledCard>
                </Grid>

                <Grid item sm={4} xs={12}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <Icon className="icon"></Icon>
                            <Box ml="12px">
                                <Small>Name</Small>
                                <Heading>{props?.orderData?.site_name}</Heading>
                            </Box>
                        </ContentBox>

                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </StyledCard>
                </Grid>

                </Grid>

                
                {/* <StyledTable >
                    <TableBody>
                        <TableRow>
                            <TableCell>Order Date </TableCell>
                            <TableCell align="center">{moment(props?.orderData?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Order Group </TableCell>
                            <TableCell align="center">{props?.orderData?.work_order_group}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Site Name </TableCell>
                            <TableCell align="center">{props?.orderData?.site_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Site Owner </TableCell>
                            <TableCell align="center">{props?.orderData?.site_owner}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name Of Site Incharge </TableCell>
                            <TableCell align="center">{props?.orderData?.site_incharge} </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Team </TableCell>
                            <TableCell align="center">{props?.orderData?.total_team_members} </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sefety Equipment </TableCell>
                            <TableCell align="center">{props?.orderData?.safety_equipments?.map((a) => a + " ")} </TableCell>
                        </TableRow>
                    </TableBody>
                </StyledTable> */}
            </Box>
        </StyledLoading>
    );
};

export default AppTable;
