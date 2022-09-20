import { AppBar, Box, Toolbar } from '@mui/material';
import logoImage from '../../assets/Dona Maria.png'
export const Header = () => {
  return (
    <Box height="48px">
      <AppBar component="nav">
        <Toolbar variant="dense"
        sx={{
          background: '#fa8072',
        }}>
          <Box
           component='img'
           sx={{
            height: 150,
            width: 200,
          }}
           src={logoImage}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
