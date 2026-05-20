import React, { useState } from "react";

function Task5() {

  // Form Data State

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  // Error State

  const [errors, setErrors] = useState({});

  // Handle Input Change

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  // Validation Function

  const validateForm = () => {

    let newErrors = {};

    // Name Validation

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email Validation

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    // Phone Validation

    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Password Validation

    if (formData.password.length < 6) {
      newErrors.password = "Password must be minimum 6 characters";
    }

    // Confirm Password Validation

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Address Validation

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    }

    // City Validation

    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
    }

    // State Validation

    if (formData.state.trim() === "") {
      newErrors.state = "State is required";
    }

    // Country Validation

    if (formData.country.trim() === "") {
      newErrors.country = "Country is required";
    }

    // Zip Code Validation

    if (formData.zipCode.length < 5) {
      newErrors.zipCode = "Zip Code must be minimum 5 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  // Submit Function

  const handleSubmit = (event) => {

    event.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully");
    }

  };

  return (

    <div className="container">

      <form className="form-box" onSubmit={handleSubmit}>

        <h1>Form Validation</h1>

        {/* Name */}

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <p className="error">{errors.name}</p>

        {/* Email */}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <p className="error">{errors.email}</p>

        {/* Phone */}

        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <p className="error">{errors.phone}</p>

        {/* Password */}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <p className="error">{errors.password}</p>

        {/* Confirm Password */}

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <p className="error">{errors.confirmPassword}</p>

        {/* Address */}

        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <p className="error">{errors.address}</p>

        {/* City */}

        <input
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <p className="error">{errors.city}</p>

        {/* State */}

        <input
          type="text"
          placeholder="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />

        <p className="error">{errors.state}</p>

        {/* Country */}

        <input
          type="text"
          placeholder="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />

        <p className="error">{errors.country}</p>

        {/* Zip Code */}

        <input
          type="number"
          placeholder="Zip Code"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />

        <p className="error">{errors.zipCode}</p>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Task5;