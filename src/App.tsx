import { AppBar, Box, Button, Modal, Toolbar, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const RootContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled(AppBar)`
  flex-shrink: 0;
`;

const MainContainer = styled('div')`
  padding: ${({ theme }) => theme.spacing(3)};
  flex-grow: 1;
`;

const LoginContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <RootContainer>
      <Header position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            Login
          </Button>
        </Toolbar>
      </Header>
      <MainContainer>
        <Typography variant="h4" gutterBottom>
          Welcome to My App
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a sample screen created using Material-UI and React.
        </Typography>
      </MainContainer>
      <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LoginContainer>
          <TextField label="Username" variant="outlined" />
          <TextField label="Password" type="password" variant="outlined" />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </LoginContainer>
      </Modal>
    </RootContainer>
  );
}

export default App;
