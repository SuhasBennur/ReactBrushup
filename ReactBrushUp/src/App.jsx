import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "./Pages/Theme";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ErrorBoundary from "./Pages/ErrorBoundary";
import PasswordGenerator from "./Pages/PasswordGenerator";
import MouseTracker from "./Pages/MouseTracker";
import CounterRedux from "./Pages/CounterRedux";
import UseStateCounter from "./Pages/UseStateCounter";
import Login from "./Authorization/Login";
import Register from "./Authorization/Register";
import { AuthProvider } from "./Authorization/AuthContext";
import PrivateRoute from "./Authorization/PrivateRoute";
import { useAuth } from "./Authorization/AuthContext";
import { useNavigate } from "react-router-dom";

function BuggyComponent() {
  throw new Error("I crashed!");
}

function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // clear user state
    navigate("/Login"); // redirect to login page
  };

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex", // flex container for sidebar + content
  };

  return (
    <div style={styles}>
      {/* Sidebar navigation */}
      <button
        onClick={handleLogout} style={{ position: 'absolute', top: 10, right: 10 }}
        className="btn btn-danger">
        Logout
      </button>
      <nav
        className="nav flex-column p-3"
        style={{
          width: "220px",
          borderRight: "1px solid #ccc",
          minHeight: "100vh",
        }}
      >
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/About" className="nav-link">About</Link>
        <Link to="/PasswordGenerator" className="nav-link">Password Generator</Link>
        <Link to="/MouseTracker" className="nav-link">Mouse Tracker</Link>
        <Link to="/CounterRedux" className="nav-link">Counter Redux</Link>
        <Link to="/UseStateCounter" className="nav-link">UseState Counter</Link>

        <button
          onClick={toggleTheme}
          className={`btn mt-3 ${theme === "light" ? "btn-dark" : "btn-light"}`}
        >
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
      </nav>

      {/* Main content area */}
      <main className="flex-grow-1 p-4">{children}</main>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout><Home /></Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/Home",
    element: (
      <PrivateRoute>
        <Layout><Home /></Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/About",
    element: (
      <PrivateRoute>
        <Layout><About /></Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/PasswordGenerator",
    element: (
      <PrivateRoute>
        <Layout><PasswordGenerator /></Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/MouseTracker",
    element: (
      <PrivateRoute>
        <Layout><MouseTracker /></Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/CounterRedux",
    element: (
      <PrivateRoute>
        <Layout><CounterRedux /></Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/UseStateCounter",
    element: (
      <PrivateRoute>
        <Layout><UseStateCounter /></Layout>
      </PrivateRoute>
    ),
  },
]);



function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;