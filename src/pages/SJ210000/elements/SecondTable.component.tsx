import { Stack } from '@mui/material';
import type { GridColDef } from 'dipcore-react-lib';
import { DipDataGrid } from 'dipcore-react-lib';
import React, { useMemo } from 'react';
import { thirdMock } from '@/utils/consts/SJ210000.consts';

export const SecondTable = (): React.ReactElement => {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const column: GridColDef[] = useMemo(
    () => [
      {
        id: '1',
        field: 'black',
        headerName: '',
        width: 5,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: ' center-cell',
        headerAlign: 'center',
      },
      {
        id: '2',
        field: 'productName',
        headerName: '商品名',
        width: 350,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '3',
        field: 'row',
        headerName: '行',
        width: 10,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '4',
        field: 'reasoningCode',
        headerName: '理',
        width: 10,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '5',
        field: 'productCode',
        headerName: '商品コード',
        width: 150,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '6',
        field: 'productQuantity',
        headerName: '数量',
        width: 100,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
        valueFormatter: ({ value }: { value: number | bigint | null | undefined }): string => {
          if (value === null || value === undefined) {
            return '';
          }
          return currencyFormatter.format(value);
        },
      },
      {
        id: '7',
        field: 'unitPrice',
        headerName: '原単価',
        width: 100,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
        valueFormatter: ({ value }: { value: number | bigint | null | undefined }): string => {
          if (value === null || value === undefined) {
            return '';
          }
          return currencyFormatter.format(value);
        },
      },
      {
        id: '8',
        field: 'costAmount',
        headerName: '原価金額',
        width: 100,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
        valueFormatter: ({ value }: { value: number | bigint | null | undefined }): string => {
          if (value === null || value === undefined) {
            return '';
          }
          return currencyFormatter.format(value);
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Stack mt={2}>
      <DipDataGrid
        sx={{ backgroundColor: 'white' }}
        columns={column}
        rows={thirdMock}
        rowHeight={30}
        hideFooter
        disableColumnMenu
        columnHeaderHeight={30}
      />
    </Stack>
  );
};
