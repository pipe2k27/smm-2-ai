import { Box, Stack } from '@mui/material';
import React from 'react';

export const Header: React.FC = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    p="10px 20px"
    color="#fff"
    sx={{ backgroundColor: '#6799cc', height: '68px' }}
  >
    <Stack>
      <Box>仕入</Box>
      <Box>値引・原価訂正伝票入力[新規]</Box>
    </Stack>
    <Stack direction="row">
      <Box mr={10}>SJ210000</Box>
      <Stack mr={3} alignItems="center">
        <Box>2006/07/24</Box>
        <Box>YB保守</Box>
      </Stack>
      <Stack alignItems="center">
        <Box>17:40:10</Box>
        <Box>NRI01</Box>
      </Stack>
    </Stack>
  </Stack>
);
