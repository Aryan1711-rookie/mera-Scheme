import React from 'react'
import { useState } from 'react';
import "./ApplicationPage.css"

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    annualIncome: '',
    employmentStatus: '',
    residencyStatus: '',
    disabilityStatus: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Form Subbmitted.")
  };

  return (
    <>
    <div className="header-app">
        <nav className="navbar-app ">
        <h2 className="form-title">Check Your Eligibility for Government Schemes</h2>
        </nav>
      </div>
    <div className="form-container">
      
      <form onSubmit={handleSubmit} className="eligibility-form">
        
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Annual Income:</label>
          <input
            type="number"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Employment Status:</label>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Residency Status:</label>
          <select
            name="residencyStatus"
            value={formData.residencyStatus}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            <option value="Resident">Resident</option>
            <option value="Non-Resident">Non-Resident</option>
            <option value="Permanent Resident">Permanent Resident</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Disability Status:</label>
          <select
            name="disabilityStatus"
            value={formData.disabilityStatus}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Check Eligibility</button>
      </form>
    </div>
    </>
  );
};

export default ApplicationPage;
