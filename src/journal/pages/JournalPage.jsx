import { IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aliquid consequuntur quae illum possimus voluptate blanditiis quam aspernatur tempore nulla, similique, necessitatibus, et officia nobis vitae voluptatem tenetur voluptatum architecto!</Typography> */}

      {/* Nothing Selected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
