# User Management System

A React + TypeScript User Management System that fetches user data from an API and allows users to view, add, edit, and delete users.

## Features

- Fetch users from JSONPlaceholder API
- Display users in a responsive list
- View user details
- Add new users
- Edit existing users
- Delete users
- Global state management with Redux Toolkit
- Data fetching with React Query
- Routing with React Router
- TypeScript support

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Query
- React Router DOM
- Axios
- CSS

## Project Structure

```txt
src/
├── components/
├── hooks/
│   └── useUsers.ts
├── pages/
├── routes/
├── services/
│   └── userService.ts
├── store/
│   ├── store.ts
│   └── userSlice.ts
├── types/
│   └── user.ts
├── App.tsx
└── main.tsx
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd user-management-system
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Routes

| Route | Description |
|---------|-------------|
| /users | View all users |
| /users/:id | View user details |
| /add-user | Add a new user |
| /edit-user/:id | Edit an existing user |

## API

Initial user data is fetched from:

https://jsonplaceholder.typicode.com/users

Add, update, and delete operations are managed locally using Redux Toolkit.

## Author

David Emulo