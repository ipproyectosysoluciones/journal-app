import { Box } from '@mui/material';


const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <div sx={{ display: 'flex' }}>
      
      {/* Navbar drawarWidth */}

      {/* Sidebar drawarWidth */}

      <Box 
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}

        { children }
      </Box>
    </div>
  );
};

