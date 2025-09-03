import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateNotificadoDto {
  @IsNotEmpty()
  nome!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  telefone!: string;

  @IsNotEmpty()
  endereco!: string;
}
