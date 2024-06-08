import React, { useState } from "react";
import Weather from "./Weather";

function Page1() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city);
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Weather App</h1>
      <form onSubmit={handleFormSubmit} className="mt-3 d-flex justify-content-center">
        <div className="input-group mb-3" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            className="form-control form-control-sm "
            placeholder="Enter city name"
          />
          <div className="input-group-append">
            <button className="btn btn-primary btn-sm" type="submit">
              Get Weather
            </button>
          </div>
        </div>
      </form>
      <div className="mt-3 d-flex justify-content-center">
        {submittedCity && <Weather city={submittedCity} />}
      </div>

    </div>
  );
}

export default Page1;
