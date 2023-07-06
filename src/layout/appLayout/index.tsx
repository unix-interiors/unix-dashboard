import { Suspense } from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Loader from '@unix/component/loader';
import Header from '@unix/component/header';
import SideNav from '@unix/component/sidenav';
import ToastMessage from '@unix/component/toastMessage';
import { Wrapper, ChildrenGrid } from './style';

const AppLayout = (props: { children?: JSX.Element | JSX.Element[] }) => {
  return (
    <Wrapper>
      <Header />
      <Grid container zIndex={2}>
        <Grid
          item
          sm={0.7}
          xs={0.7}
          md={0.7}
          lg={0.7}
          xl={0.7}
          zIndex={2}
          minWidth="80px"
          boxShadow={'0px 4px 20px rgba(0, 0, 0, 0.1);'}
        >
          <SideNav />
        </Grid>
        <ChildrenGrid
          item
          xs={9.4}
          sm={10.35}
          md={10.92}
          lg={11.18}
          xl={11.3}
          zIndex={1}
        >
          <Suspense fallback={<Loader />}>{props.children}</Suspense>
        </ChildrenGrid>
      </Grid>
      <Outlet />
      <ToastMessage />
    </Wrapper>
  );
};

export default AppLayout;
