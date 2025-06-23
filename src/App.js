import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Full Name Display</h1>
          <label htmlFor="firstName">
            First Name:
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <br />
          </label>
          <label htmlFor="lastName">
            Last Name:
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {fullName && <p>Full Name: {fullName}</p>}
      </div>
    </>
  );
};

export default App;
