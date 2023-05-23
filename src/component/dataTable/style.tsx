import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const TableWrapper = styled(Box)<{ maxheight: number }>`
  width: 100%;
  max-height: calc(100vh - ${(props) => props.maxheight + 'px'});
  min-height: calc(100vh - ${(props) => props.maxheight + 'px'});
  overflow: auto;

  .grid-class {
    height: calc(100vh - ${(props) => props.maxheight + 'px'});
  }

  .header-cell {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.common.white};

    svg {
      fill: ${(props) => props.theme.palette.common.white};
    }
  }
`;
