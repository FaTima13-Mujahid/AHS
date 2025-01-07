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
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true); // Show the modal with results
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Steel Weight Calculator</h1>
      <div className="calculator card shadow p-4 rounded border-secondary">
        <form>
          <div className="mb-3">
            <label htmlFor="material" className="form-label">Material</label>
            <select className="form-select" value={material} onChange={(e) => setMaterial(e.target.value)}>
              <option value="0">Mild Steel</option>
              <option value="1">Cast Iron</option>
              <option value="2">Aluminium</option>
              <option value="3">Acetal</option>
            </select>
          </div>

          {/* Shape, Width, Depth, Length Inputs */}
          <div className="mb-3">
            <label htmlFor="shape" className="form-label">Form</label>
            <select className="form-select" value={shape} onChange={(e) => setShape(e.target.value)}>
              <option value="0">Round bar</option>
              <option value="1">Square bar</option>
              <option value="2">Rectangular bar</option>
              <option value="3">Sheet/plate</option>
              <option value="4">Hex bar</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="width" className="form-label">Width</label>
            <div className="input-group">
              <input type="text" className="form-control" value={width} onChange={(e) => setWidth(e.target.value)} />
              <select className="form-select" value={unitW} onChange={(e) => setUnitW(e.target.value)}>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="depth" className="form-label">Depth</label>
            <div className="input-group">
              <input type="text" className="form-control" value={depth} onChange={(e) => setDepth(e.target.value)} />
              <select className="form-select" value={unitD} onChange={(e) => setUnitD(e.target.value)}>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="length" className="form-label">Length</label>
            <div className="input-group">
              <input type="text" className="form-control" value={length} onChange={(e) => setLength(e.target.value)} />
              <select className="form-select" value={unitL} onChange={(e) => setUnitL(e.target.value)}>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary" onClick={calculate}>
              Calculate
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Results */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Calculation Results</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Weight (kg):</strong> {weightKg} kg</p>
                <p><strong>Weight (lb):</strong> {weightLb} lb</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
    </div>
    
  );
};

export default SteelWeightCalculator;
