import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import './demandePrefi.css';


const DemandePrefi = () => {
  const [formData, setFormData] = useState({
    dateEntree: '',
    codeClient: '',
    nomClient: '',
    DRE: '',
    CAF: '',
    CCE: '',
    referenceMarche: '',
    montant: '',
    numeroCompteMarche: '',
  });

  const [showAdditionalCheckboxes, setShowAdditionalCheckboxes] = useState(false);

  const handleMainCheckboxChange = (event) => {
    setShowAdditionalCheckboxes(event.target.checked);
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

  return (
    <div>
    <Navbar/>
    <div className='test'>
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="d-flex align-items-center" htmlFor="dateEntree">Date d'entrée</label>
              <input 
                type="date"
                className="form-control"
                id="dateEntree"
                name="dateEntree"
                value={formData.dateEntree}
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
              <label className="d-flex align-items-center" htmlFor="numeroCompteMarche">Numéro de compte de marche</label>
              <input
                type="text"
                className="form-control"
                id="numeroCompteMarche"
                name="numeroCompteMarche"
                value={formData.numeroCompteMarche}
                onChange={handleInputChange}
                placeholder="entrer le Numéro de compte de marché"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
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
                  <span>Ordre de service</span>
                </label>
                </div>
                <div>
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    
                    style={{ marginRight: '16px' }}
                  />
                  <span>Confirmation des garantis et des réserves</span>
                </label>
                </div>
                <div>
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    
                    style={{ marginRight: '16px' }}
                  />
                  <span>Demande de préfinancement</span>
                </label>
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

export default DemandePrefi;
