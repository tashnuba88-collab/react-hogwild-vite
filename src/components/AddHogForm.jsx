import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      "highest medal achieved": "none",
      image: "",
    };
    onAddHog(newHog);
    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Specialty:
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Greased?
        <input
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </label>
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
