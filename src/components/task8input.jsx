import React, { useContext } from "react";
import { FormContext } from "../App";

function InputFields() {

  const { formData, handleChange } = useContext(FormContext);

  return (

    <div className="input-container">

      {/* Name */}

      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* Email */}

      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* City */}

      <input
        type="text"
        placeholder="Enter City"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      {/* Display Data */}

      <div className="preview">

        <h3>Preview Data</h3>

        <p>
          <strong>Name:</strong> {formData.name}
        </p>

        <p>
          <strong>Email:</strong> {formData.email}
        </p>

        <p>
          <strong>City:</strong> {formData.city}
        </p>

      </div>

    </div>

  );
}

export default InputFields;