import { Stack } from '@mui/material';
import type { GridColDef } from 'dipcore-react-lib';
import { DipDataGrid } from 'dipcore-react-lib';
import React, { useMemo } from 'react';
import { firstMock, secondMock } from './MockData';

export const FirstTable = (): React.ReactElement => {
  const firstRow: GridColDef[] = useMemo(
    () => [
      {
        id: '1',
        field: 'corporationCode',
        headerName: '法人',
        width: 50,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: ' center-cell',
        headerAlign: 'center',
      },
      {
        id: '2',
        field: 'storeCode',
        headerName: '店',
        width: 70,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '3',
        field: 'storeName',
        headerName: '店名',
        width: 200,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '4',
        field: 'inspectionDate',
        headerName: '検収日',
        width: 90,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
    ],
    []
  );

  const secondRow: GridColDef[] = useMemo(
    () => [
      {
        id: '1',
        field: 'type',
        headerName: '分類',
        width: 50,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: ' center-cell',
        headerAlign: 'center',
      },
      {
        id: '2',
        field: 'slipType',
        headerName: '伝票区分',
        width: 70,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '3',
        field: 'slipNumber',
        headerName: '伝票番号',
        width: 70,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '4',
        field: 'cd',
        headerName: 'C/D',
        width: 50,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '5',
        field: 'supplierCode',
        headerName: '取引先',
        width: 70,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
      {
        id: '6',
        field: 'supplierName',
        headerName: '取引先名',
        width: 200,
        sortable: false,
        headerClassName: 'purple-cell center-cell',
        cellClassName: 'center-cell',
        headerAlign: 'center',
      },
    ],
    []
  );

  return (
    <Stack alignItems="flex-start" mt={4}>
      <Stack direction="row">
        <Stack
          padding={1}
          bgcolor="#aaddff"
          border="1px solid rgba(224, 224, 224, 1)"
          borderRadius="4px 0 0 4px"
        >
          カード区分
        </Stack>
        <Stack
          padding={1}
          bgcolor="#fff"
          width={40}
          alignItems="center"
          border="1px solid rgba(224, 224, 224, 1)"
        >
          30
        </Stack>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <DipDataGrid
          sx={{ backgroundColor: 'white' }}
          columns={firstRow}
          rows={firstMock}
          rowHeight={30}
          hideFooter
          disableColumnMenu
          columnHeaderHeight={30}
          //   processRowUpdate={updateCellValue}
        />
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <DipDataGrid
          sx={{ backgroundColor: 'white' }}
          columns={secondRow}
          rows={secondMock}
          rowHeight={30}
          hideFooter
          disableColumnMenu
          columnHeaderHeight={30}
          //   processRowUpdate={updateCellValue}
        />
      </Stack>
    </Stack>
  );
};
