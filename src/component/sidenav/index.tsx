import { List, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { map } from 'lodash';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';

import { ENDPOINTS } from '../../constants/endpoint';
import { ListItem, Wrapper } from './style';

const NAV_LIST = [
  {
    title: 'Dashboard',
    icon: <DashboardRoundedIcon color="inherit" />,
    to: ENDPOINTS.DASHBOARD,
  },
  {
    title: 'Staff',
    icon: <PeopleAltRoundedIcon color="inherit" />,
    to: '/staff',
  },
  {
    title: 'Feedback',
    icon: <GradingRoundedIcon color="inherit" />,
    to: ENDPOINTS.FEEDBACK,
  },
];

function SideNav() {
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <List sx={{ paddingX: '10%' }}>
        {map(NAV_LIST, (item) => (
          <ListItem
            key={item.to}
            selected={router.pathname === item.to}
            onClick={() => navigate(item.to)}
          >
            {item.icon}
            <Typography
              fontSize="10px"
              fontWeight={500}
              mt="5px"
              color="inherit"
            >
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

export default SideNav;
