import React, { useState } from "react";
import Alert from "./Alert";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <input
          id="title"
          name="title"
          placeholder="2 bedroom flat"
          value={fields.title}
          onChange={handleFieldChange}
        />
        <label htmlFor="city">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Leeds">Leeds</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Manchester">Manchester</option>
            <option value="Sheffield">Sheffield</option>
          </select>
        </label>
        <label htmlFor="type">
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <input
          id="bedrooms"
          name="bedrooms"
          type="number"
          placeholder="bedrooms"
          min="0"
          max="50"
          value={fields.bedrooms}
          onChange={handleFieldChange}
        />
        <input
          id="bathrooms"
          name="bathrooms"
          type="number"
          min="0"
          max="50"
          placeholder="bathrooms"
          value={fields.bathrooms}
          onChange={handleFieldChange}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="youremail@address.co.uk"
          value={fields.email}
          onChange={handleFieldChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
