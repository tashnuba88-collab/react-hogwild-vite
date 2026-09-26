import React, { useState } from "react";
import HogCard from "./HogCard";
import AddHogForm from "./AddHogForm";

function HogList({ hogs }) {
  const [visibleHogs, setVisibleHogs] = useState(hogs);
  const [sortBy, setSortBy] = useState("name");
  const [greasedOnly, setGreasedOnly] = useState(false);

  function handleHideHog(nameToHide) {
    setVisibleHogs((prevHogs) =>
      prevHogs.filter((hog) => hog.name !== nameToHide)
    );
  }

  function handleAddHog(newHog) {
    setVisibleHogs((prevHogs) => [...prevHogs, newHog]);
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  function handleGreasedFilterChange(e) {
    setGreasedOnly(e.target.checked);
  }

  const filteredHogs = greasedOnly
    ? visibleHogs.filter((hog) => hog.greased)
    : visibleHogs;

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "weight") {
      return a.weight - b.weight;
    }
    return a.name.localeCompare(b.name);
  });

  const hogCards = sortedHogs.map((hog) => (
    <HogCard key={hog.name} hog={hog} onHide={handleHideHog} />
  ));

  return (
    <div>
      <label>
        Sort by:
        <select value={sortBy} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>

      <label>
        Greased Pigs Only?
        <input
          type="checkbox"
          checked={greasedOnly}
          onChange={handleGreasedFilterChange}
        />
      </label>

      <AddHogForm onAddHog={handleAddHog} />

      <div className="ui grid container">{hogCards}</div>
    </div>
  );
}

export default HogList;