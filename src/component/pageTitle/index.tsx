import Typography from '@mui/material/Typography';
import { ReactElement, useEffect } from 'react';

interface IProps {
  title: string;
  heading: string | ReactElement | null;
}

const PageTitle = ({ title, heading }: IProps) => {
  useEffect(() => {
    document.title = `Unix | ${title}`;
  }, [title]);

  return (
    <Typography
      variant="h2"
      mb="1.5rem"
      // eslint-disable-next-line react/prop-types
      color={(props) => props.palette.common.black}
      fontSize={18}
      fontWeight={500}
    >
      {heading}
    </Typography>
  );
};

export default PageTitle;
