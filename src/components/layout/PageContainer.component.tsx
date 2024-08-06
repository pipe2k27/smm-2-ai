import { Box } from '@mui/material';
import React from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

export const PageContainer = ({ children }: Props): React.ReactElement => <Box>{children}</Box>;
