# Job Tracker

A modern job application tracking platform built with Next.js, Prisma, PostgreSQL, and Tailwind CSS.

## Features

- Create and manage job applications
- Track application status
- Filter and search applications
- Manage interview schedules
- Responsive and modern UI
- PostgreSQL database with Prisma ORM

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- Server Actions

## Getting Started

### Clone the repository

```bash
git clone https://github.com/MohammadAkib404/task-flow.git
cd task-flow
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file:

```env
DATABASE_URL=your_database_url
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run migrations

```bash
npx prisma migrate dev
```

### Start development server

```bash
npm run dev
```

Open http://localhost:3000

## Deployment

This project is optimized for deployment on Vercel.

## License

MIT
