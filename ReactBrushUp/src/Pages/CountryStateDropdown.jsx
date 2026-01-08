import React, { useState } from "react";

const countryStateData = {
  India: ["Tamil Nadu", "Kerala", "Karnataka"],
  USA: ["California", "Texas", "New York"],
  Canada: ["Ontario", "Quebec", "British Columbia"]
};
const stateCityData={
  "Tamil Nadu":["Chennai","Coimbatore","Madurai"],
  "Kerala":["Kochi","Thiruvananthapuram","Kozhikode"],
  "Karnataka":["Bangalore","Mysore","Mangalore"],
};

function CountryStateDropdown() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState(""); // reset state when country changes
    setCity(""); // reset city when country changes
  };

  return (
    <div>
      <select value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {Object.keys(countryStateData).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={state} onChange={(e) => setState(e.target.value)} disabled={!country}>
        <option value="">Select State</option>
        {country &&
          countryStateData[country].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
      </select>
        
        <select value={city} onChange={(e) => setCity(e.target.value)} disabled={!state}>
          <option value="">Select City</option>
          {state && stateCityData[state].map((s)=> (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      <p>Selected: {country} - {state} -  {city}</p>
    </div>
  );
}

export default CountryStateDropdown;