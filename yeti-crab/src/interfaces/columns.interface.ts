export interface IColumns {
 id: string;
 'Номер заявки': string;
 'Дата и время получения заявки от клиента': string;
 'Название фирмы клиента': JSX.Element | string;
 'ФИО перевозчика': JSX.Element | string;
 'Контактный телефон перевозчика': JSX.Element | string;
 Комментарии: JSX.Element | string;
 'Статус заявки': JSX.Element | string;
 ATI: JSX.Element;
}

export interface IColumnsFromServer {
 id: string;
 'Номер заявки': string;
 'Дата и время получения заявки от клиента': string;
 'Название фирмы клиента': string;
 'ФИО перевозчика': string;
 'Контактный телефон перевозчика': string;
 Комментарии: string;
 'Статус заявки': string;
 ATI: string;
}
