# SegTour - Seguro de Viagens ✈️

**SegTour** é uma API RESTful desenvolvida com **NestJS** e **TypeORM**, voltada para o gerenciamento de clientes e seus seguros de viagem. O sistema permite operações de CRUD completo para clientes e seguros, e realiza o cálculo automático do valor final do seguro com base na duração da viagem.

---

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Bloco 2 - Back-End** da formação da **[Generation Brasil](https://brazil.generation.org/)**, sendo o **segundo desafio prático** do módulo.

**Nome da equipe:** 🧠 **DevDivs**

---

## 👥 Participantes

### 👑 Product Owner
- **Grazielle Gualter**  
  [github.com/grazielle30](https://github.com/grazielle30)

### 👨‍💻 Desenvolvedores
- **Pedro Henrique**  
  [github.com/KarpaTech](https://github.com/KarpaTech)

- **Letícia Santos**  
  [github.com/Santos-Leticia](https://github.com/Santos-Leticia)

- **Agata Andrade**  
  [github.com/Agataandrade](https://github.com/Agataandrade)

- **Lucas Alves**  
  [github.com/RaideriSpace](https://github.com/RaideriSpace)

### 🧪 Tester
- **Alex**  
  [github.com/alex-sqls](https://github.com/alex-sqls)

---

## 🛠 Tecnologias Utilizadas


- **NestJS**
- **TypeORM**
- **MySQL**
- **TypeScript**
- **Class Validator**

---

## ⚙️ Funcionalidades

- Cadastro, listagem, atualização e remoção de **clientes** e **seguros**
- Associação entre **cliente** e **seguro** (relacionamento `ManyToOne`)
- Cálculo do **valor final** do seguro:
  - Se `tempoViagem > 20 dias`, aplica-se **20% de desconto**
  - Caso contrário, mantém-se o valor original

---

## 📦 Endpoints

### 🧍 Clientes

| Método | Rota                  | Descrição                           |
|--------|-----------------------|-------------------------------------|
| GET    | /clientes             | Lista todos os clientes             |
| GET    | /clientes/:id         | Busca cliente por ID                |
| GET    | /clientes/nome/:nome  | Busca cliente por nome              |
| GET    | /clientes/valor/:valor| Filtra clientes pelo valor do seguro|
| POST   | /clientes             | Cadastra novo cliente               |
| PUT    | /clientes             | Atualiza dados de cliente           |
| DELETE | /clientes/:id         | Deleta cliente por ID               |

---

### 🛡️ Seguros

| Método | Rota                         | Descrição                          |
|--------|------------------------------|------------------------------------|
| GET    | /seguros                     | Lista todos os seguros             |
| GET    | /seguros/:id                 | Busca seguro por ID                |
| GET    | /seguros/cobertura/:cobertura| Filtra por tipo de cobertura       |
| POST   | /seguros                     | Cadastra novo seguro               |
| PUT    | /seguros                     | Atualiza dados de seguro           |
| DELETE | /seguros/:id                 | Deleta seguro por ID               |

---

## 🗃️ Estrutura do Projeto

```plaintext
src/
├── clientes/
│ ├── entities/
│ ├── services/
│ ├── controllers/
│ └── clientes.module.ts
│
├── seguros/
│ ├── entities/
│ ├── services/
│ ├── controllers/
│ └── seguros.module.ts
│
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── main.ts
```

---

## 💾 Configuração do Banco de Dados

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_segtour',
  entities: [Clientes, Seguros],
  synchronize: true,
  logging: true,
}),
```
## 🚀 Como Rodar o Projeto
1 - Clone o repositório
```
git clone https://github.com/seu-usuario/segtour-api.git
```

2 - Instale as dependências
```
npm install
```
3 - Configure seu banco de dados MySQL com o nome `db_segtour`

4 - Rode o projeto
```
npm run start:dev
```

## ✅ Validações e Regras
- Todos os campos obrigatórios são validados com `@IsNotEmpty`

- A associação entre cliente e seguro é obrigatória.

- O valor final do seguro depende da duração da viagem.

## 💡 Observações
- Este projeto é puramente educacional, feito com o intuito de praticar conceitos de backend, modelagem relacional, validação, boas práticas REST e estruturação com NestJS.