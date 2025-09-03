import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificadoDto } from './dto/update-notificado.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.getOne(id);
  }

  @Post()
  create(@Body() dto: CreateNotificationDto) {
    return this.service.create(dto);
  }

  @Patch(':id/notificado')
  updateNotificado(@Param('id') id: string, @Body() dto: UpdateNotificadoDto) {
    return this.service.updateNotificado(id, dto);
  }

  @Patch(':id/validar')
  validar(@Param('id') id: string, @Body() body: { necessitaInfo: boolean }) {
    return this.service.validar(id, body.necessitaInfo);
  }
}
