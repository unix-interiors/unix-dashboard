import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box display="flex" mt={5} justifyContent="center">
      <CircularProgress size={50} thickness={2} />
    </Box>
  );
}

export default Loader;
