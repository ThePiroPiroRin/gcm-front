import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import './mobilisationADC.css';


const MobilisationADC = () => {
  const [formData, setFormData] = useState({
    dateValeur: '',
    codeClient: '',
    nomClient: '',
    DRE: '',
    CAF: '',
    CCE: '',
    referenceMarche: '',
    montant: '',
    numeroMobilisation: '',
  });

  const [showAdditionalCheckboxes, setShowAdditionalCheckboxes] = useState(false);

  const handleMainCheckboxChange = (event) => {
    setShowAdditionalCheckboxes(event.target.checked);
    setTveChecked(!tveChecked);
    setAdcChecked(false);
    setShowAdditionalCheckboxes(!showAdditionalCheckboxes);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const [adcChecked, setAdcChecked] = useState(false);
  const [tveChecked, setTveChecked] = useState(false);

  const handleAdcCheckboxChange = () => {
    setAdcChecked(!adcChecked);
    setTveChecked(false);
    setShowAdditionalCheckboxes(false);
  };


  return (
    <div>
    <Navbar/>
    <div className='test'>
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="dateValeur">Date valeur</label>
              <input 
                type="date"
                className="form-control"
                id="dateValeur"
                name="dateValeur"
                value={formData.dateValeur}
                onChange={handleInputChange}
                placeholder="entrer la date"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="codeClient">Code client</label>
              <input
                type="text"
                className="form-control"
                id="codeClient"
                name="codeClient"
                value={formData.codeClient}
                onChange={handleInputChange}
                placeholder="entrer le code client"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="CAF">CAF</label>
              <input
                type="text"
                className="form-control"
                id="CAF"
                name="CAF"
                value={formData.CAF}
                onChange={handleInputChange}
                placeholder="entrer CAF"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="CCE">CCE</label>
              <input
                type="text"
                className="form-control"
                id="CCE"
                name="CCE"
                value={formData.CCE}
                onChange={handleInputChange}
                placeholder="entrer CCE"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="nomClient">Nom client</label>
              <input
                type="nomClient"
                className="form-control"
                id="nomClient"
                name="nomClient"
                value={formData.nomClient}
                onChange={handleInputChange}
                placeholder="entrer le nom du client"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="DRE">DRE</label>
              <input
                type="text"
                className="form-control"
                id="DRE"
                name="DRE"
                value={formData.DRE}
                onChange={handleInputChange}
                placeholder="entrer DRE"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="referenceMarche">Référence marché</label>
              <input
                type="text"
                className="form-control"
                id="referenceMarche"
                name="referenceMarche"
                value={formData.referenceMarche}
                onChange={handleInputChange}
                placeholder="entrer la référence marché"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="montant">Montant</label>
              <input
                type="text"
                className="form-control"
                id="montant"
                name="montant"
                value={formData.montant}
                onChange={handleInputChange}
                placeholder="entrer le montant"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="numeroMobilisation">Numéro de mobilisation</label>
              <input
                type="text"
                className="form-control"
                id="numeroMobilisation"
                name="numeroMobilisation"
                value={formData.numeroMobilisation}
                onChange={handleInputChange}
                placeholder="entrer le Numéro de mobilisation"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
      <div className="col-md-6">
              <div className="form-group">
              <div className="row">
              <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    checked={adcChecked}
                    onChange={handleAdcCheckboxChange}
                    style={{ marginRight: '16px' }}
                  />
                    <span>ADC normal</span>
                </label>
                </div>
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    checked={showAdditionalCheckboxes && tveChecked}
                    onChange={handleMainCheckboxChange}
                    style={{ marginRight: '16px' }}
                  />
                  <span>TVE</span>
                </label>
              </div>
              {showAdditionalCheckboxes && (
                <div className="form-group">
                  <label>
                    <input type="checkbox"  style={{ marginRight: '16px' }}/>
                    <span>Mail d'accord</span>
                  </label>
                </div>
            )}
            </div>
            <div className="col-md-6">
              <div>
            <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    
                    style={{ marginRight: '16px' }}
                  />
                  <span>Checklist Reçue</span>
                </label>
                </div>
                <div>
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    
                    style={{ marginRight: '16px' }}
                  />
                  <span>Notification validée et signée</span>
                </label>
                </div>
                <div>
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    
                    style={{ marginRight: '16px' }}
                  />
                  <span>Original de l'ADC</span>
                </label>
                </div>
                <div>
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    
                    style={{ marginRight: '16px' }}
                  />
                  <span>Lettre de signification</span>
                </label>
                </div>
                <div>
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    
                    style={{ marginRight: '16px' }}
                  />
                  <span>Droit constaté conforme</span>
                </label>
                </div>
                </div>
          </div>
        <br></br>
        <br></br>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default MobilisationADC;
