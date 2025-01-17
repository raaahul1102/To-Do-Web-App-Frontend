
# Todo App Frontend

This is the frontend for the Todo App, built with React.js. It connects to the backend API to manage tasks, allowing users to create, view, update, and delete todos.

---

## Features
- Add a new todo task.
- View all existing tasks.
- Delete individual tasks.
- Clear all tasks.
- Responsive and user-friendly UI.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn** (Node Package Manager)

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>/frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `frontend` directory.
   - Add the following environment variable:
     ```env
     REACT_APP_API_BASE_URL=http://localhost:5000
     ```
     Replace `http://localhost:5000` with the URL of your backend API if different.

4. **Run the Application:**
   ```bash
   npm start
   ```

5. The app will run on `http://localhost:3000` by default.

---

## Project Structure
```
frontend/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── services/       # API service functions
│   ├── App.js          # Main app component
│   ├── App.css         # Global styles
│   └── index.js        # Entry point
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload if you make edits.

### `npm run build`
Builds the app for production to the `build` folder.
- It bundles React in production mode and optimizes the build for the best performance.

---

## API Integration

The app communicates with the backend API. Ensure the backend is running and accessible at the URL specified in the `.env` file (`REACT_APP_API_BASE_URL`).

### Example Endpoints Used:
- **GET /api/todos**: Fetch all tasks.
- **POST /api/todos**: Create a new task.
- **DELETE /api/todos/:id**: Delete a task.
- **DELETE /api/todos**: Clear all tasks.

---

## Styling

The app uses `App.css` for styling:
- Input fields and buttons are styled for a clean and user-friendly experience.
- Hover effects and responsive layouts enhance usability.

---

## Deployment

To deploy the app:
1. Run `npm run build` to create an optimized production build.
2. Deploy the contents of the `build` folder to your preferred hosting service (e.g., Netlify, Vercel, AWS S3).

---

## Backend

https://github.com/raaahul1102/To-Do-Web-App-Backend
