import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsController } from './applications/applications.controller';
import { ApplicationsService } from './applications/applications.service';
import { ApplicationsModule } from './applications/applications.module';

@Module({
  imports: [ApplicationsModule],
  controllers: [AppController, ApplicationsController],
  providers: [AppService, ApplicationsService],
})
export class AppModule {}
