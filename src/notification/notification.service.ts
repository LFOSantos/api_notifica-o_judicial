import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificadoDto } from './dto/update-notificado.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly repo: Repository<Notification>,
  ) {}

  async list() {
    return this.repo.find({ order: { dataAudiencia: 'ASC' } });
  }

  async getOne(id: string) {
    const n = await this.repo.findOne({ where: { id } });
    if (!n) throw new NotFoundException('Notificação não encontrada');
    return n;
  }

  async create(dto: CreateNotificationDto) {
    const entity = this.repo.create({ ...dto, status: 'EM ANDAMENTO' });
    return this.repo.save(entity);
  }

  async updateNotificado(id: string, dto: UpdateNotificadoDto) {
    const n = await this.getOne(id);
    Object.assign(n, dto, { status: 'VALIDACAO' });
    return this.repo.save(n);
  }

  async validar(id: string, necessitaInfo: boolean) {
    const n = await this.getOne(id);
    n.status = necessitaInfo ? 'EM ANDAMENTO' : 'CONCLUIDO';
    return this.repo.save(n);
  }
}
