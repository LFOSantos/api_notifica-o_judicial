# Backend (NestJS + PostgreSQL)

API REST para o fluxo de Notificação Judicial.

## Requisitos
- Node 18+
- PostgreSQL rodando localmente
- Criar o banco `notificacoes` (ou ajuste no `.env`)
- Framework NestJS

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
## Tela-teste

<img width="1918" height="1016" alt="Captura de tela 2025-09-02 230254" src="https://github.com/user-attachments/assets/e9601dbc-9bc5-4e05-9865-e0bed413c374" />

## Observações

- O banco é criado automaticamente em modo desenvolvimento. Em produção, troque (`synchronize: true`) por "migrations".
- Para produção, utilize migrations.

