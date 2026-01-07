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
    padding: "20px",
  };

  return (
    <div style={styles}>
      <nav style={{ marginBottom: "20px" }} class="nav flex-column">
        <Link to="/Home" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/About" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/PasswordGenerator" style={{ marginRight: "10px" }}>PasswordGenerator</Link>
        <Link to="/MouseTracker" style={{ marginRight: "10px" }}>MouseTracker</Link>
        <Link to="/CounterRedux" style={{ marginRight: "10px" }}>CounterRedux</Link>
        <Link to="/UseStateCounter" style={{ marginRight: "10px" }}>UseStateCounter</Link>

        <button
          onClick={toggleTheme}
          style={{ marginLeft: "20px" }}
          className={`btn ${theme === "light" ? "btn-dark" : "btn-light"}`}
        >
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>

      </nav>
      {children}
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
      <ErrorBoundary> <BuggyComponent /> </ErrorBoundary>
    </ThemeProvider>

  );
}

export default App;