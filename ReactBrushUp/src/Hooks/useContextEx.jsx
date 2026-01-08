import React, { useContext } from "react";
//Share global data without prop drilling.
const ThemeContext = React.createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext); // consume context
  return <button style={{ background: theme === "dark" ? "#333" : "#eee" }}>Click Me</button>;
}

export default function Apps() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
