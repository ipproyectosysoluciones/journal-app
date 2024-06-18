import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aliquid consequuntur quae illum possimus voluptate blanditiis quam aspernatur tempore nulla, similique, necessitatibus, et officia nobis vitae voluptatem tenetur voluptatum architecto!</Typography> */}

      <NothingSelectedView />

      {/* Nothing Selected */}
      {/* NoteView */}
    </JournalLayout>
  );
};
