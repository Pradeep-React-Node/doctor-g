// import useSettings from 'app/hooks/useSettings';
import { Box, styled } from '@mui/system';

const MatxLogo = ({ className }) => {
  // const { settings } = useSettings();
  // const theme = settings.themes[settings.activeTheme];

  const StyledLoading = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& img': {
      width: 'auto',
      height: '35px',
    },
  }));


  return (
    <>
     <StyledLoading>
      <Box position="relative">
        <img src="/assets/images/logo.png" alt="" />
      </Box>
    </StyledLoading>
    </>
   
  );
};

export default MatxLogo;
