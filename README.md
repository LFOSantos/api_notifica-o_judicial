# Backend (NestJS + PostgreSQL)

API REST para o fluxo de Notificação Judicial.

## Requisitos
- Node 18+
- PostgreSQL rodando localmente
- Criar o banco `notificacoes` (ou ajuste no `.env`)

## Configuração
1. Copie `.env.example` para `.env` e ajuste credenciais do Postgres.
2. Instale dependências:
   ```bash
   npm install
   ```
3. Rode em desenvolvimento (usa TypeORM `synchronize: true` para criar tabela automaticamente):
   ```bash
   npm run dev
   ```
   Servirá em `http://localhost:3000`.

## Endpoints
- `GET /notifications` — lista todas
- `GET /notifications/:id` — detalha uma notificação pelo ID
- `POST /notifications` — cria (status inicial **EM ANDAMENTO**)
  ```json
  { "titulo":"...", "descricao":"...", "dataAudiencia":"YYYY-MM-DD" }
  ```
- `PATCH /notifications/:id/notificado` — preenche dados do notificado e muda status para **VALIDACAO**
  ```json
  { "nome":"...", "email":"...", "telefone":"...", "endereco":"..." }
  ```
- `PATCH /notifications/:id/validar` — valida informações
  ```json
  { "necessitaInfo": true | false }
  ```
## Observações

- O banco é criado automaticamente em modo desenvolvimento. Em produção, troque (`synchronize: true`) por "migrations".
- Para produção, utilize migrations.

