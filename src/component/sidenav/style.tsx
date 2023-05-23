import { Box, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 91vh;
`;

export const ListItem = styled(ListItemButton)`
  min-height: 60px;
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: ${(props) => props.theme.palette.common.darkGrey};

  &.Mui-selected {
    background-color: ${(props) => props.theme.palette.common.lightBrown};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
