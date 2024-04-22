'use client';

import {
 Table as Tab,
 Link,
 Select,
 TableActionConfig,
 TableDataItem,
 useToaster,
 withTableActions,
 withTableSorting,
 Checkbox,
 Label,
 TextInput,
} from '@gravity-ui/uikit';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { IColumns, IColumnsFromServer } from '@/interfaces/columns.interface';
import { API } from '@/API/requests';
import { columns, getRowId } from './const';
import { useAppDispatch, useAppSelector } from '@/hooks/store.hook';
import { status } from './const';
import { filterApplications, fetchingAllApplications } from './TableSlice';
import { ITableState } from './table.interface';

import styles from './table.module.scss';
import { useDebounce } from '@/hooks/useDebounce';

export const Table = ({ isAdmin }: { isAdmin: boolean }) => {
 const { applications, filteredApplications } = useAppSelector<ITableState>((state) => state.table);
 const MyTable = useMemo(
  () => (isAdmin ? withTableSorting(withTableActions(Tab)) : withTableSorting(Tab)),
  [applications, filteredApplications],
 );
 const dispatch = useAppDispatch();
 const [value, setValue] = useState<{ id: string; key: string; value: string }>({
  id: '',
  key: '',
  value: '',
 });
 const debouncedValue = useDebounce(value.value);
 const { add } = useToaster();

 const handleUpdateCheckbox = (checked: boolean) => {
  if (checked) {
   dispatch(
    filterApplications(applications.filter((item) => item['Статус заявки'] !== 'завершено')),
   );
  } else {
   dispatch(filterApplications([]));
  }
 };

 useEffect(() => {
  if (debouncedValue) {
   API.applications.changeValueCell({ ...value, value: debouncedValue }).then(() => {
    dispatch(fetchingAllApplications());
    add({
     name: 'данные ячейки',
     title: `${value.key}`,
     content: `изменено на '${value.value}'`,
     theme: 'success',
    });
   });
  }
 }, [debouncedValue]);

 const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  setValue({ id: e.target.id, key: e.target.name, value: e.target.value });
 };

 const handleUpdateStatus = (status: string[]) => {
  const idAndStatus = status[0].split(':');
  API.applications.updateStatus({ id: idAndStatus[0], status: idAndStatus[1] }).then(() => {
   add({
    name: 'статус',
    title: 'Статус изменен',
    theme: 'success',
   });
   dispatch(fetchingAllApplications());
  });
 };

 const getData = (data: IColumnsFromServer[]) => {
  return data.map((item) => {
   const options = status
    .filter((elem) => elem !== item['Статус заявки'])
    .map((elem) => ({ value: `${item.id}:${elem}`, content: `${elem}` }));

   return {
    ...item,
    'Название фирмы клиента': isAdmin ? (
     <TextInput
      onChange={onChange}
      name='Название фирмы клиента'
      id={`${item.id}`}
      defaultValue={`${item['Название фирмы клиента']}`}
     />
    ) : (
     item['Название фирмы клиента']
    ),
    'ФИО перевозчика': isAdmin ? (
     <TextInput
      id={`${item.id}`}
      onChange={onChange}
      name='ФИО перевозчика'
      defaultValue={`${item['ФИО перевозчика']}`}
     />
    ) : (
     item['ФИО перевозчика']
    ),
    Комментарии: isAdmin ? (
     <TextInput
      id={`${item.id}`}
      onChange={onChange}
      name='Комментарии'
      defaultValue={`${item['Комментарии']}`}
     />
    ) : (
     item['Комментарии']
    ),
    'Контактный телефон перевозчика': isAdmin ? (
     <TextInput
      id={`${item.id}`}
      onChange={onChange}
      name='Контактный телефон перевозчика'
      defaultValue={`${item['Контактный телефон перевозчика']}`}
     />
    ) : (
     item['Контактный телефон перевозчика']
    ),
    'Статус заявки': isAdmin ? (
     <Select
      defaultValue={[item['Статус заявки']]}
      onUpdate={handleUpdateStatus}
      options={options}></Select>
    ) : (
     item['Статус заявки']
    ),
    'Дата и время получения заявки от клиента': new Intl.DateTimeFormat('ru', {
     dateStyle: 'short',
     timeStyle: 'medium',
    }).format(new Date(item['Дата и время получения заявки от клиента'])),
    ATI: (
     <Link target='_blank' href={`https://ati.su/firms/${item.ATI}/info `}>
      {item.ATI}
     </Link>
    ),
   };
  });
 };

 const data: IColumns[] = useMemo(
  () => (!filteredApplications.length ? getData(applications) : getData(filteredApplications)),
  [applications, filteredApplications, isAdmin],
 );
 useEffect(() => {
  dispatch(fetchingAllApplications());
 }, []);

 const handleClickRemove = (item: TableDataItem) => {
  API.applications.deleteApplicationById({ id: item.id }).then(() => {
   add({
    name: 'удаление заявки',
    title: 'Заявка удалена',
    theme: 'success',
   });
   dispatch(fetchingAllApplications());
  });
 };

 const getRowActions = (): TableActionConfig<TableDataItem>[] => {
  return [
   {
    text: 'Удалить',
    handler: handleClickRemove,
    theme: 'danger',
   },
  ];
 };

 return (
  <div className={styles.root}>
   <Label theme='info' value={`${data.length}`}>
    Количество заявок
   </Label>

   <div className={styles.checkbox}>
    <Checkbox onUpdate={handleUpdateCheckbox} size='l'>
     Скрыть завершенные
    </Checkbox>
   </div>

   {isAdmin ? (
    <MyTable data={data} columns={columns} getRowId={getRowId} getRowActions={getRowActions} />
   ) : (
    <MyTable data={data} columns={columns} />
   )}
  </div>
 );
};
