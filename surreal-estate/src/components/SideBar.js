import React, { useState } from 'react';
import qs from 'qs';
import { Link, useLocation, useHistory } from 'react-router-dom';

const SideBar = () => {
  const [query, setQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const history = useHistory();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
  };

  return (
    <nav className="sidebar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="sidebar-links">
        <h1>Sort by City</h1>
        <Link to={buildQueryString("query", { city: "Manchester" })}>
          <li className="sidebar-links-item">Manchester</li>
        </Link>
        <Link to={buildQueryString("query", { city: "Leeds" })}>
          <li className="sidebar-links-item">Leeds</li>
        </Link>
        <Link to={buildQueryString("query", { city: "Sheffield" })}>
          <li className="sidebar-links-item">Sheffield</li>
        </Link>
        <Link to={buildQueryString("query", { city: "Liverpool" })}>
          <li className="sidebar-links-item">Liverpool</li>
        </Link>
        <h1>Sort by price:</h1>
        <Link to={buildQueryString('sort', { price: 1 })}>
          <li className="sidebar-links-item">Ascending</li>
        </Link>
        <Link to={buildQueryString('sort', { price: -1 })}>
          <li className="sidebar-links-item">Descending</li>
        </Link>
      </ul>
    </nav>
  );
};

export default SideBar;