import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  width: '100%';

  .alert-toast {
    top: 98px;
  }
`;

export const ChildrenGrid = styled(Grid)`
  min-height: 90vh;
  max-height: 90vh;
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.background.default};
  position: relative;
  overflow: auto;
`;
