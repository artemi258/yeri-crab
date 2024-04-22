'use client';

import { TextInput } from '@gravity-ui/uikit';

import { useAppDispatch, useAppSelector } from '@/hooks/store.hook';
import { ITableState } from '../Table/table.interface';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { filterApplications } from '../Table/TableSlice';

import styles from './search.module.scss';

export const Search = () => {
 const { applications } = useAppSelector<ITableState>((state) => state.table);
 const [value, setValue] = useState<string>('');
 const dispatch = useAppDispatch();
 const debouncedValue = useDebounce(value);

 useEffect(() => {
  if (debouncedValue) {
   const regExp = new RegExp(`${debouncedValue}`, 'i');
   const filter = applications.filter((item) => regExp.test(item['Название фирмы клиента']));
   dispatch(filterApplications(filter));
  } else {
   dispatch(filterApplications([]));
  }
 }, [debouncedValue]);

 const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
 };

 return (
  <TextInput
   onChange={onChange}
   hasClear
   className={styles.root}
   placeholder='поиск по названию фирмы клиента'
  />
 );
};
