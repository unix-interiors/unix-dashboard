import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  width: '100%';
`;

export const Number = styled('div')<{ number: number }>`
  @property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
  }

  transition: --num 2s;
  counter-reset: num var(--num);
  --num: ${(props) => props.number};

  &::after {
    content: counter(num);
  }
`;
