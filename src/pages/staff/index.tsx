import { useEffect, useState } from 'react';
import { Auth } from 'firebase/auth';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { clientAuth } from '@unix/utils/firebaseCongif';
import PageTitle from '../../component/pageTitle';
import ImageLoader from '../../component/imageLoader';
import { Wrapper } from './style';
import NewMember from './newMember';

function Staff() {
  const [newMemberModal, setNewMemberModal] = useState(false);

  async function getAllusers(auth: Auth) {
    console.log(auth);
  }

  useEffect(() => {
    getAllusers(clientAuth);
  }, [clientAuth]);

  return (
    <Wrapper>
      <PageTitle heading="Staff" title="Staff" />
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
        top={0}
      >
        <Button
          size="small"
          variant="contained"
          onClick={function () {
            setNewMemberModal(true);
          }}
        >
          Add New Member
        </Button>
      </Box>

      <Box
        display="flex"
        padding={1.8}
        bgcolor={(theme) => theme.palette.common.plainWhite}
        flexDirection="column"
        borderRadius={2}
        gap={1.5}
        height={536}
        overflow="auto"
      >
        {[...Array(5)].map((_, i) => (
          <Paper key={i} elevation={2}>
            <Box
              paddingY={1.5}
              paddingX={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgcolor={(theme) => theme.palette.common.white}
            >
              <Box display="flex" gap={2.5} alignItems="center">
                <Box
                  width="45px"
                  height="45px"
                  position="relative"
                  overflow="hidden"
                  borderRadius={1}
                >
                  <ImageLoader
                    src="https://placehold.co/150x150"
                    alt="person"
                  />
                </Box>
                <Box
                  height={45}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Typography variant="h5" fontSize={17}>
                    Abhijeet Gupta
                  </Typography>
                  <Typography
                    variant="h6"
                    color={(theme) => theme.palette.common.lightGrey}
                    fontStyle="italic"
                    fontSize={12}
                  >
                    Software Engineer
                  </Typography>
                </Box>
              </Box>
              <IconButton>
                <InfoOutlinedIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* <Grid container spacing={4}>
        {[...Array(6)].map((v, i) => (
          <Grid key={i} item>
            <Paper elevation={2} sx={{ width: '250px', overflow: 'hidden' }}>
              <Box
                width="100%"
                position="relative"
                maxWidth="250px"
                height="150px"
                overflow="hidden"
              >
                <ImageLoader src="https://placehold.co/250x150" alt="person" />
              </Box>
              <Typography
                variant="h3"
                mt={1.5}
                fontSize={16}
                textAlign="center"
              >
                Abhijeet RG
              </Typography>
              <Typography
                variant="h4"
                my={0.5}
                color={'gray'}
                fontSize={12}
                textAlign="center"
              >
                Software Developer
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid> */}
      <NewMember isOpen={newMemberModal} setIsOpen={setNewMemberModal} />
    </Wrapper>
  );
}

export default Staff;
