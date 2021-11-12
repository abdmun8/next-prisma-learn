# Next JS

## install
npx create-next-app nama-aplikasi

## Feature
https://nextjs.org/docs/basic-features/pages

## Create Pages
- Employee
- Car
- Move Between Page

## Add Prisma
- npm install --save-dev prisma
- npx prisma init

## Create Models
- Table Employee
- Table Car

```
enum Gender {
  L
  P
}

model Employee {
  id      String @id @default(cuid())
  name    String
  gender  Gender
  email   String @unique
  address String
  Car     Car[]
}

model Car {
  id         String   @id @default(cuid())
  type       String
  brand      String
  year       Int
  employeId  String
  employeeId Employee @relation(fields: [employeId], references: [id])
}

```

## Push Schema to DB
- npx prisma db push
- npx prisma studio

## create API
- API Employee
- API Car


