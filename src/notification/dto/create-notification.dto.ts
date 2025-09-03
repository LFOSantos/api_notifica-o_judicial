import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  titulo!: string;

  @IsNotEmpty()
  descricao!: string;

  @IsDateString()
  dataAudiencia!: string; 
}
