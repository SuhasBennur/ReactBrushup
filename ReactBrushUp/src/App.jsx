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

function BuggyComponent() {
  throw new Error("I crashed!");
}

function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex", // flex container for sidebar + content
  };

  return (
    <div style={styles}>
      {/* Sidebar navigation */}
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
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/Home", element: <Layout><Home /></Layout> },
  { path: "/About", element: <Layout><About /></Layout> },
  { path: "/PasswordGenerator", element: <Layout><PasswordGenerator /></Layout> },
  { path: "/MouseTracker", element: <Layout><MouseTracker /></Layout> },
  { path: "/CounterRedux", element: <Layout><CounterRedux /></Layout> },
  { path: "/UseStateCounter", element: <Layout><UseStateCounter /></Layout> },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;