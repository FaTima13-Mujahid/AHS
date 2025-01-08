import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const SteelWeightCalculator = () => {
  const [material, setMaterial] = useState('0');
  const [shape, setShape] = useState('2');
  const [width, setWidth] = useState('0');
  const [depth, setDepth] = useState('0');
  const [length, setLength] = useState('0');
  const [unitW, setUnitW] = useState('mm');
  const [unitD, setUnitD] = useState('mm');
  const [unitL, setUnitL] = useState('mm');
  const [weightKg, setWeightKg] = useState(0);
  const [weightLb, setWeightLb] = useState(0);

  const densities = {
    '0': 7850, // Mild Steel (kg/m^3)
    '1': 7200, // Cast Iron
    '2': 2700, // Aluminium
    '3': 1410, // Acetal
  };

  const convertToMeters = (value, unit) => {
    const conversionFactors = {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      in: 0.0254,
      ft: 0.3048,
    };
    return value * conversionFactors[unit];
  };

  const calculate = () => {
    const density = densities[material];
    const widthM = convertToMeters(parseFloat(width), unitW);
    const depthM = convertToMeters(parseFloat(depth), unitD);
    const lengthM = convertToMeters(parseFloat(length), unitL);

    const volume = widthM * depthM * lengthM; // m^3
    const weightInKg = volume * density; // kg
    const weightInLb = weightInKg * 2.20462; // lb

    setWeightKg(weightInKg.toFixed(2));
    setWeightLb(weightInLb.toFixed(2));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: '#f5f5f5', // Light grey background
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh', // Full height for page
        paddingTop: '20px', // Padding from the top
        paddingBottom: '20px', // Padding from the bottom
      }}
    >
      <div
        className="card p-5 shadow-lg rounded-4"
        style={{
          width: '100%',
          maxWidth: '700px', // Card width
          borderRadius: '16px',
          background: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginTop: '20px', // Space between the navbar
          marginBottom: '20px', // Space between the footer
        }}
      >
        <h1
          className="text-center text-primary mb-5 font-weight-bold"
          style={{ fontSize: '2.2rem' }}
        >
          Steel Weight Calculator
        </h1>

        <form>
          {/* Material selection */}
          <div className="mb-4">
            <label htmlFor="material" className="form-label text-dark">
              Material
            </label>
            <select
              className="form-select"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              style={styles.selectInput}
            >
              <option value="0">Mild Steel</option>
              <option value="1">Cast Iron</option>
              <option value="2">Aluminium</option>
              <option value="3">Acetal</option>
            </select>
          </div>

          {/* Shape selection */}
          <div className="mb-4">
            <label htmlFor="shape" className="form-label text-dark">
              Form
            </label>
            <select
              className="form-select"
              value={shape}
              onChange={(e) => setShape(e.target.value)}
              style={styles.selectInput}
            >
              <option value="0">Round bar</option>
              <option value="1">Square bar</option>
              <option value="2">Rectangular bar</option>
              <option value="3">Sheet/plate</option>
              <option value="4">Hex bar</option>
            </select>
          </div>

          {/* Width, Depth, Length Inputs */}
          <div className="row">
            <div className="col-12 col-md-4 mb-4"> {/* Increased margin-bottom */}
              <label htmlFor="width" className="form-label text-dark">
                Width
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Enter width"
                  style={styles.inputField}
                />
                <select
                  className="form-select"
                  value={unitW}
                  onChange={(e) => setUnitW(e.target.value)}
                  style={styles.selectInput}
                >
                  <option value="mm">mm</option>
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                  <option value="in">in</option>
                  <option value="ft">ft</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4"> {/* Increased margin-bottom */}
              <label htmlFor="depth" className="form-label text-dark">
                Depth
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  placeholder="Enter depth"
                  style={styles.inputField}
                />
                <select
                  className="form-select"
                  value={unitD}
                  onChange={(e) => setUnitD(e.target.value)}
                  style={styles.selectInput}
                >
                  <option value="mm">mm</option>
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                  <option value="in">in</option>
                  <option value="ft">ft</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4"> {/* Increased margin-bottom */}
              <label htmlFor="length" className="form-label text-dark">
                Length
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="Enter length"
                  style={styles.inputField}
                />
                <select
                  className="form-select"
                  value={unitL}
                  onChange={(e) => setUnitL(e.target.value)}
                  style={styles.selectInput}
                >
                  <option value="mm">mm</option>
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                  <option value="in">in</option>
                  <option value="ft">ft</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="d-grid gap-2 mb-5" style={{ marginTop: '30px' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={calculate}
              style={styles.calculateButton}
            >
              Calculate Weight
            </button>
          </div>
        </form>

        {/* Displaying Results */}
        <div className="text-center" style={{ paddingTop: '40px' }}>
          {weightKg > 0 && weightLb > 0 && (
            <div
              className="alert alert-info"
              role="alert"
              style={styles.resultBox}
            >
              <p><strong>Weight (kg):</strong> {weightKg} kg</p>
              <p><strong>Weight (lb):</strong> {weightLb} lb</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  inputField: {
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '15px',
    fontSize: '16px',
    height: '50px', // Increased height for better usability
    marginRight: '10px', // Added spacing between input and unit selector
  },
  selectInput: {
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '15px',
    marginTop: '10px',
    fontSize: '16px',
    height: '50px', // Increased height for better usability
  },
  calculateButton: {
    // backgroundColor: '#2196F3', // Blue background
    // border: 'none',
    // color: 'white',
    // fontWeight: 'bold',
    // fontSize: '18px',
    // transition: 'background-color 0.3s ease',
  },
  resultBox: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#e9f7fd',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
};

export default SteelWeightCalculator;
