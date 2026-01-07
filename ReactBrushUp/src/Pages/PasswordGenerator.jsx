import { useCallback, useEffect, useState, useRef} from "react";

export default function PasswordGenerator()

{ const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("dr25$gfd");
  const passowrdGenerator = useCallback(() => 
    {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "0123456789";
      if(characterAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    }, 
  [length, numberAllowed, characterAllowed, setPassword]);
  
  useEffect(() => {passowrdGenerator()},[length, numberAllowed, characterAllowed]);

  const pwdRef = useRef(null)
  const copyPwdToClipboard = useCallback(() => {
    pwdRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  },[Password])

    return (
        <div style={{backgroundColor: 'white', padding: '20px', marginTop: '20px'}}>
       <h1>Password Generator</h1>
      <input type="text" 
      placeholder="Generated Password" 
      value={Password}
      style={{width: '400px', padding: '5px', margin: '10px 0'}}
      ref={pwdRef}></input>

      <button style={{marginLeft: '10px'}} onClick={copyPwdToClipboard}>Copy</button>
      <div>
      <input type="range" min={6} max={100} value={length} 
      onChange={(e) => setLength(e.target.value)}></input>
      <label style={{paddingLeft: '10px'}}>Length={length} </label>

      <input type="checkbox" 
      onChange={(e) => setNumberAllowed(e.target.checked)} style={{marginLeft: '10px'}}></input>
      <label style={{marginLeft: '10px'}} >Include Numbers </label>

      <input type="checkbox" 
      onChange={()=>{setCharacterAllowed((prev)=> !prev)}} style={{marginLeft: '10px'}}></input>
      <label style={{marginLeft: '10px'}}>Include Special Characters </label>
      <br />
      <button onClick={passowrdGenerator}>Generate Password</button>
      </div>
      </div>
    );
}