import { TableColumnConfig, TableDataItem } from '@gravity-ui/uikit';
import { IColumns } from '@/interfaces/columns.interface';

import styles from './table.module.scss';

export const status: string[] = ['в работе', 'завершено'];

export const getRowId: string = 'id';

export const columns: TableColumnConfig<TableDataItem>[] = [
 {
  id: 'Номер заявки',
  className: styles.column,
  align: 'center',
 },
 {
  id: 'Дата и время получения заявки от клиента',
  align: 'center',
  width: 160,
  className: styles.column,
  meta: {
   sort: (a: IColumns, b: IColumns) => {
    const dataAndTimeFirst = a['Дата и время получения заявки от клиента'].split(',');
    const dataFirst = dataAndTimeFirst[0].split('.');
    const dataAndTimeSecond = b['Дата и время получения заявки от клиента'].split(',');
    const dataSecond = dataAndTimeSecond[0].split('.');

    return (
     Date.parse(`${dataFirst[2]}-${dataFirst[1]}-${dataFirst[0]}T${dataAndTimeFirst[1].trim()}`) -
     Date.parse(`${dataSecond[2]}-${dataSecond[1]}-${dataSecond[0]}T${dataAndTimeSecond[1].trim()}`)
    );
   },
  },
 },
 { id: 'Название фирмы клиента', width: 170, align: 'center', className: styles.column },
 { id: 'ФИО перевозчика', width: 170, align: 'center', className: styles.column },
 { id: 'Контактный телефон перевозчика', width: 170, align: 'center', className: styles.column },
 {
  id: 'Комментарии',
  width: 170,
  align: 'center',
  className: styles.column,
 },
 { id: 'Статус заявки', width: 170, align: 'center', className: styles.column },
 { id: 'ATI', width: 170, align: 'center', className: styles.column },
];
