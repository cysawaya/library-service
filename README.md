# 📚 Library Service

Este serviço é responsável pela gestão de usuários e livros. Ele também se comunica com o `mail-service` via RabbitMQ para envio de e-mails de boas-vindas e confirmação de aluguel.

---

## 🚀 Como rodar o projeto

### Pré-requisitos:

- Node.js (v18+)
- npm ou yarn
- Docker (para subir o RabbitMQ)

### Instalação:

```bash
npm install

### INICIAR O PROJETO:

npm run start:dev

### CONFIGURANDO O RABBITMQ:

docker run -d --hostname rabbitmq-host --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:3-management

  ### TESTANDO:

# CRIAR USUARIO 

POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "Ana Costa",
  "email": "ana@example.com"
}

# CRIAR LIVRO

POST http://localhost:3000/books
Content-Type: application/json

{
  "title": "O Hobbit",
  "author": "J.R.R. Tolkien"
}

# ALUGAR LIVRO

POST http://localhost:3000/books/<BOOK_ID>/rent
Content-Type: application/json

{
  "name": "Ana Costa",
  "email": "ana@example.com"
}