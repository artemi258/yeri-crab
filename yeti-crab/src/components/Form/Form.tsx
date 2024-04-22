'use client';

import { Button, TextInput, useToaster } from '@gravity-ui/uikit';
import { FormEvent, useState } from 'react';

import styles from './form.module.scss';
import { API } from '@/API/requests';
import { useAppDispatch } from '@/hooks/store.hook';
import { fetchingAllApplications } from '../Table/TableSlice';

export const Form = () => {
 const [loading, setLoading] = useState<boolean>(false);
 const dispatch = useAppDispatch();
 const { add } = useToaster();

 const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  setLoading(true);
  e.preventDefault();
  const data: Record<string, string> = {};

  (Array.from(e.currentTarget.elements) as HTMLInputElement[]).forEach((item) => {
   const { name, value } = item;
   if (name) {
    data[name] = value;
   }
  });

  API.applications.createApplication(data).then(() => {
   add({
    name: 'создание заявки',
    title: 'Заявка создана',
    theme: 'success',
   });
   dispatch(fetchingAllApplications());
   setLoading(false);
  });
 };

 return (
  <form onSubmit={onSubmit} className={styles.root}>
   <TextInput name='Название фирмы клиента' placeholder='Название фирмы клиента' />
   <TextInput name='ФИО перевозчика' placeholder='ФИО перевозчика' />
   <TextInput name='Контактный телефон перевозчика' placeholder='Контактный телефон перевозчика' />
   <TextInput name='Комментарии' placeholder='Комментарии' />
   <TextInput name='ATI' placeholder='ATI' />
   <div>
    <Button loading={loading} type='submit' width='auto' view='normal' size='l'>
     Создать
    </Button>
   </div>
  </form>
 );
};
