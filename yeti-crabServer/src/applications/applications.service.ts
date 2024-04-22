import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRequestWithId } from './applications.interface';
import { UpdateStatusApplicationDto } from './dto/updateApplication.dto';

@Injectable()
export class ApplicationsService {
 private applications: CreateRequestWithId[];
 constructor() {
  this.applications = [];
 }

 create = (application: CreateRequestWithId) => {
  return this.applications.push(application);
 };

 getAll = () => {
  return this.applications;
 };

 updateStatus = (applicationStatus: UpdateStatusApplicationDto) => {
  const index = this.applications.findIndex((item) => item.id === applicationStatus.id);
  if (index < 0) throw new HttpException('заявка не найдена', HttpStatus.NOT_FOUND);
  this.applications[index]['Статус заявки'] = applicationStatus.status;
  return { id: this.applications[index]['id'], status: applicationStatus.status };
 };

 deleteById = ({ id }: { id: string }) => {
  const index = this.applications.findIndex((item) => item.id === id);
  if (index < 0) throw new HttpException('заявка не найдена', HttpStatus.NOT_FOUND);
  return this.applications.splice(index, 1);
 };

 changeValue = ({ id, key, value }: { id: string; key: string; value: string }) => {
  const index = this.applications.findIndex((item) => item.id === id);
  if (index < 0) throw new HttpException('заявка не найдена', HttpStatus.NOT_FOUND);

  this.applications[index][key] = value;
  return { key, value };
 };
}
