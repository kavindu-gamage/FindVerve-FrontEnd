import { Container, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import logo from '../../../assets/images/logo/FindVerve.png';
import { logoStyle } from '../NavBar/NavBarStyle';

export default function NavBar() {
  return (
    <AppBar position='static'>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img src={logo} alt='logo' style={logoStyle}/>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
