# React User & Post Fetch Hooks

Mini React project demonstrating **custom hooks** to fetch data from an API and separate **JS logic** from UI components.  
This project is a practice for **React patterns used in blockchain frontends**.

## Features

- `useFetchUser` hook – fetches user data (`/users/1`)
- `useFetchPost` hook – fetches post data (`/posts/1`)
- Separation of concerns: **hooks contain JS logic**, components handle **rendering**
- Minimalist UI for fast testing

## Folder Structure

src/
├── components/
│ ├── User.jsx # User component using useFetchUser
│ └── Post.jsx # Post component using useFetchPost
├── hooks/
│ ├── useFetchUser.js
│ └── useFetchPost.js
├── App.jsx
└── main.jsx

bash
Copy code

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/MilosMicun/react-user-fetch-hooks.git
Install dependencies:

bash
Copy code
cd react-user-fetch-hooks
npm install
Run the dev server:

bash
Copy code
npm run dev
Open the browser at the URL shown (usually http://localhost:5173)

Usage
The app displays User Info and Post Info fetched from JSONPlaceholder

While fetching, a loading message is displayed

If an error occurs, an error message is shown

Learnings
How to create custom hooks in React

How to separate JS logic from UI components

Handling loading, error, and data states with hooks

Minimal UI pattern useful for blockchain frontend projects

Author
Milos Micun