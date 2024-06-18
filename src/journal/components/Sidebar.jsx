
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component={'nav'}
      sx={{ 
        width: { sm: drawerWidth }, 
        flexShrink: { sm: 0 } 
      }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth 
          }
        }}
      >
        <Toolbar>
          <Typography 
            variant='h6' 
            noWrap 
            component={'div'}
          >
            Jon Doe
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            [ 'Janaury', 'February', 'March', 'April', 'May' ].map( text => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>

                  <Grid container>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Aliquip cillum quis enim Lorem.' } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  );
};
