import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateRequestDto } from './dto/createRequest.dto';
import { randomUUID } from 'crypto';
import { UpdateStatusApplicationDto } from './dto/updateApplication.dto';

@Controller('applications')
export class ApplicationsController {
 applicationNumber: number;
 constructor(private readonly applicationsService: ApplicationsService) {
  this.applicationNumber = 0;
 }

 @Post()
 create(@Body() application: CreateRequestDto) {
  const newApplication = {
   id: randomUUID(),
   'Номер заявки': ++this.applicationNumber,
   'Дата и время получения заявки от клиента': new Date(),
   'Статус заявки': 'новая',
   ...application,
  };
  return this.applicationsService.create(newApplication);
 }

 @Get()
 getAll() {
  return this.applicationsService.getAll();
 }

 @Patch('/status')
 updateStatus(@Body() applicationStatus: UpdateStatusApplicationDto) {
  return this.applicationsService.updateStatus(applicationStatus);
 }

 @Delete()
 delete(@Body() id: { id: string }) {
  return this.applicationsService.deleteById(id);
 }

 @Patch('/value')
 changeValue(@Body() data: { id: string; key: string; value: string }) {
  return this.applicationsService.changeValue(data);
 }
}
