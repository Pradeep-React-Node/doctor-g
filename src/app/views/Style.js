import { Table, Card } from '@mui/material';
import { Box, styled } from '@mui/system';
import { TextValidator } from 'react-material-ui-form-validator';
import { Span } from 'app/components/Typography';

export const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const ContainerForOrder = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

export const Container = styled('div')(({ theme }) => ({
  margin: '20px',
  backgroundColor: 'bg-green',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

export const StyledTable = styled(Table)(() => ({
  minWidth: 900,
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0, fontSize: '1rem' } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

export const StylPopUp = styled(Card)(({ theme }) => ({
  minWidth: 900,
  overflow: 'auto',
  padding: '10px !important',
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));


export const StylPopUp2 = styled(Card)(({ theme }) => ({
    display:"none",
}));

export const StyledLoading = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: '100%',
  },
}));

export const StyledTableBox = styled(Table)(() => ({
  width: '100%',
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

export const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

export const TextField3 = styled(TextValidator)(() => ({
  display: 'none',
  width: '100%',
  marginBottom: '16px',
}));

export const Form = styled('form')(() => ({
  paddingLeft: '16px',
  paddingRight: '16px',
}));

export const StyledTextField = styled(TextField)(() => ({
  marginBottom: '16px',
}));

export const Ellipsis = styled(Span)(() => ({
  display: 'block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

export const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

export const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

export const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '0px',
  fontSize: '18px',
  fontWeight: '500',
  textAlign:'start',
  color: "navy",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

export const NStyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px !important',
  width: '100%',
  overflow: 'auto',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '0px !important' },
}));

export const StyledCard3 = styled(Card)(({ theme }) => ({
  padding: '10px !important',
  background: '#d0e6fe',
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

export const StyledCard4 = styled(Card)(({ theme }) => ({
  display: 'none',
}));

export const StyledCard2 = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '10px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

export const SpanTaxt = styled('Span')(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

export const SurveyIMG = styled('img')(() => ({
  padding: '10px',
  borderRadius: '20px',
  width: '85%',
  height: 'auto',
}));

export const SurveyIMG2 = styled('img')(() => ({
  padding: '10px',
  borderRadius: '20px',
  width: '285px',
  height: '200px',
}));

export const DateBx = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}));

export const DateText = styled('div')(() => ({
  fontSize: '15px',
  fontWeight: '600',
  marginBottom: '5px',
}));
