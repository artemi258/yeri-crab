## REST API

# http://localhost:3001/api/applications POST

-body:
{
'Название фирмы клиента': string;
'ФИО перевозчика': string;
'Контактный телефон перевозчика': string;
'Комментарии': string;
'ATI': string;
}

-response:
number

# http://localhost:3001/api/applications GET

-response:
{
id: string;
'Номер заявки': number;
'Дата и время получения заявки от клиента': Date;
'Название фирмы клиента': string;
'ФИО перевозчика': string;
'Контактный телефон перевозчика': string;
'Комментарии': string;
'Статус заявки': string;
'ATI': string;
}

# http://localhost:3001/api/applications/status PATCH

-body:
{
id: string;
status: string;
}

-response:
{
id: string;
status: string;
}

# http://localhost:3001/api/applications DELETE

body:
{
id: string
}

-response:
[
{
"id": string;
"Номер заявки": number;
"Дата и время получения заявки от клиента": string;
"Статус заявки": string;
"Название фирмы клиента": string;
"ФИО перевозчика": string;
"Контактный телефон перевозчика": string;
"Комментарии": string;
"ATI": string;
}
]

# http://localhost:3001/api/applications/value PATCH

body:
{
id: string;
key: string;
value: string
}

response:
{
key: string;
value: string
}
