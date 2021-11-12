# Next JS

## install
yarn create-next-app nama-aplikasi
or
npx create-next-app nama-aplikasi

## Feature
https://nextjs.org/docs/basic-features/pages

## Create Pages
- Page
- Move Between Page
- API

## Add Prisma
yarn add -D prisma or npm install --save-dev prisma
npx init prisma

## Create Models
- Table karyawan
```
model Karyawan {
  id                  String                @id @default(cuid())
  name                String
  gender              Gender
  email               String                @unique]=
  address
}

model Car {
  id                  String                @id @default(cuid())
  type                String
  brand               String
  email               String                @unique]=
  address
}
```

