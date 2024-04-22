'use client';

import { Form, Search, Table } from '@/components';

import styles from './page.module.scss';
import { Switch } from '@gravity-ui/uikit';
import { useState } from 'react';

export default function Home() {
 const [isAdmin, setIsAdmin] = useState<boolean>(false);
 const onUpdate = (checked: boolean) => {
  setIsAdmin(checked);
 };
 return (
  <div className={styles.root}>
   <Switch onUpdate={onUpdate} size='l'>
    режим администратора
   </Switch>
   {isAdmin && <Form />}
   <Search />
   <Table isAdmin={isAdmin} />
  </div>
 );
}
