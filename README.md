# PesanApp

![image_2023-06-01_23-48-46](https://github.com/wkidit/PesanApp/assets/132723008/b03325be-e073-492f-a2ee-37f40168adc2)

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/wkidit/PesanApp.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL="mongodb+srv://<user>:<pass>@cluster0.12rouro.mongodb.net/test"

NEXTAUTH_SECRET="NEXTAUTH_SECRET"

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
