# User Management System

A React and TypeScript application that manages user data using Redux Toolkit for global state management. The application fetches an initial list of users from an external API and provides full Create, Read, Update, and Delete (CRUD) functionality managed locally within Redux.

## Features

- Fetch users from JSONPlaceholder API
- Store user data in Redux Toolkit
- Display all users
- View individual user details
- Add new users
- Edit existing users
- Delete users
- Client-side routing with React Router
- Loading state handling
- TypeScript type safety

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- Vite

## Application Routes

| Route | Description |
|---------|------------|
| /users | Display all users |
| /users/:id | Display a single user's details |
| /add-user | Add a new user |
| /edit-user/:id | Edit an existing user |

## Installation

```bash
git clone <repository-url>
cd user-management-system
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```text
src
├── components
│   ├── UserCard.tsx
│   └── UserForm.tsx
├── pages
│   ├── AddUser.tsx
│   ├── EditUser.tsx
│   ├── UserDetails.tsx
│   └── Users.tsx
├── routes
│   └── AppRouter.tsx
├── store
│   ├── store.ts
│   └── userSlice.ts
├── types
│   └── user.ts
├── App.tsx
└── main.tsx
```

## API

Initial user data is fetched from:

https://jsonplaceholder.typicode.com/users

The Add, Update, and Delete operations are handled locally using Redux Toolkit state management as required by the project specification.

## Author

David Emulo
