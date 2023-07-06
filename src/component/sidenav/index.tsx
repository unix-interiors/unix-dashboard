import { List, Typography } from '@mui/material';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { map } from 'lodash';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';

import { ENDPOINTS } from '../../constants/endpoint';
import { ListItem, Wrapper } from './style';

const NAV_LIST = [
  {
    title: 'Dashboard',
    icon: <DashboardRoundedIcon color="inherit" />,
    to: ENDPOINTS.DASHBOARD,
  },
  {
    title: 'Client',
    icon: <PeopleAltRoundedIcon color="inherit" />,
    to: ENDPOINTS.CLIENT,
  },
  {
    title: 'Staff',
    icon: <Diversity3RoundedIcon color="inherit" />,
    to: ENDPOINTS.STAFF,
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
  const match = useMatch(NAV_LIST[2].to);

  console.log(match);

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
