import { CreateRequestDto } from './dto/createRequest.dto';

export class CreateRequestWithId extends CreateRequestDto {
 id: string;
 'Номер заявки': number;
 'Дата и время получения заявки от клиента': Date;
 'Статус заявки': string;
}
