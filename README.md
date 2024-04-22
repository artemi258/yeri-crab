## REST API

# http://localhost:3001/api/applications POST

-body:<br />
{<br />
'Название фирмы клиента': string;<br />
'ФИО перевозчика': string;<br />
'Контактный телефон перевозчика': string;<br />
'Комментарии': string;<br />
'ATI': string;<br />
}

-response:<br />
`number`

# http://localhost:3001/api/applications GET

-response:<br />
{<br />
id: string;<br />
'Номер заявки': number;<br />
'Дата и время получения заявки от клиента': Date;<br />
'Название фирмы клиента': string;<br />
'ФИО перевозчика': string;<br />
'Контактный телефон перевозчика': string;<br />
'Комментарии': string;<br />
'Статус заявки': string;<br />
'ATI': string;<br />
}

# http://localhost:3001/api/applications/status PATCH

-body:<br />
{<br />
id: string;<br />
status: string;<br />
}

-response:<br />
{<br />
id: string;<br />
status: string;<br />
}

# http://localhost:3001/api/applications DELETE

body:<br />
{<br />
id: string<br />
}

-response:<br />
[<br />
{<br />
"id": string;<br />
"Номер заявки": number;<br />
"Дата и время получения заявки от клиента": string;<br />
"Статус заявки": string;<br />
"Название фирмы клиента": string;<br />
"ФИО перевозчика": string;<br />
"Контактный телефон перевозчика": string;<br />
"Комментарии": string;<br />
"ATI": string;<br />
}<br />
]

# http://localhost:3001/api/applications/value PATCH

body:<br />
{<br />
id: string;<br />
key: string;<br />
value: string<br />
}

response:<br />
{<br />
key: string;<br />
value: string<br />
}
