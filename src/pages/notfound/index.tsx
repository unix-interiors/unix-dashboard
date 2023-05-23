import { Box, Typography } from '@mui/material';
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded';

import PageTitle from '../../component/pageTitle';
import { Wrapper } from './style';

function NotFound() {
  return (
    <Wrapper>
      <PageTitle title="Not Found" heading={null} />
      <Box className="not-found">
        <div>
          <ThumbDownOffAltRoundedIcon fontSize="large" color="primary" />
          <Typography variant="h3" mt={2} fontSize={20} fontWeight={500}>
            Not Found
          </Typography>
        </div>
      </Box>
    </Wrapper>
  );
}

export default NotFound;
