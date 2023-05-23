import { Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Toolbar)`
  width: '100%';
  justify-content: space-between;
`;

export const Username = styled(Typography)(() => ({
  display: 'inline-block',
  marginLeft: '10px',
  fontSize: '12px',
}));
