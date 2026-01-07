import { useState } from "react";

function FormExample(props) {
  const [inputValue, setName] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const buttonSubmitted = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h2 style={{ padding: '20px', fontSize: '20px' }}>Form Example</h2>
      <form onSubmit={buttonSubmitted}>
        <input style={{ padding: '10px', border: '1px solid black', borderRadius: '5px', marginRight: '15px', marginLeft: '20px' }}
          type="text"
          value={inputValue}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <div>
        {submittedValue && (<p>You entered: <strong>{submittedValue}</strong></p>)}
      </div>
    </>
  );
}
export default FormExample;