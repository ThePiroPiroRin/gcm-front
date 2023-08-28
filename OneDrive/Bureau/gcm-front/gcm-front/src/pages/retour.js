import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import './retour.css';

const Retour = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
      capital: '',
      capital2: '',
      tribunal: '',
      tribunal2: '',
      numAnalytique: '',
      numAnalytique2: '',
      numChronologique: '',
      numChronologique2: '',
      adresseSiege: '',
      adresseSiege2: '',
      CNSS: '',
      CNSS2: '',
      identifiantFiscal: '',
      identifiantFiscal2: '',
      patente: '',
      patente2: '',
      representantTitulaire: '',
      representantTitulaire2: '',
      qualiteRep: '',
      qualiteRep2: '',
      objetMarche: '',
      maitriseOuvrage: '',
      chargePaiement: '',
      destinataireLettreSignification: '',
      dateReceptionC: '',
      refMarc:'',
      mnt:'',
      codeClient:'',
      nomClient:'',
      dre:'',
      caf:'',
      cce:'',
      codeClient2:'',
      nomClient2:'',
      dre2:'',
      caf2:'',
      cce2:'',
    });

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
      <Navbar />
      <form className="fifthFrame" onSubmit={handleSubmit}>
      <div className="col-md-6">
      <label className="d-flex align-items-center"  htmlFor="codeClient">Code client:</label>
            <input 
                type="text"
                className="form-control"
                id="codeClient"
                name="codeClient"            
                value={formData.codeClient}            
                onChange={handleInputChange}            
                placeholder="entrer le code du client"            
            />
            <label className="d-flex align-items-center" htmlFor="nomClient">Nom du client:</label>
            <input 
                type="text"
                className="form-control"
                id="nomClient"
                name="nomClient"            
                value={formData.nomClient}            
                onChange={handleInputChange}            
                placeholder="entrer le nom du client"            
            />
            <label className="d-flex align-items-center" htmlFor="dre">DRE:</label>
            <input 
                type="text"
                className="form-control"
                id="dre"
                name="dre"            
                value={formData.dre}            
                onChange={handleInputChange}            
                placeholder="entrer le dre"            
            />
            <label className="d-flex align-items-center" htmlFor="caf">CAF:</label>
            <input 
                type="text"
                className="form-control"
                id="caf"
                name="caf"            
                value={formData.caf}            
                onChange={handleInputChange}            
                placeholder="entrer le caf"            
            />
            <label className="d-flex align-items-center" htmlFor="cce">CCE:</label>
            <input 
                type="text"
                className="form-control"
                id="cce"
                name="cce"            
                value={formData.cce}            
                onChange={handleInputChange}            
                placeholder="entrer le cce"            
            />
        <label className="d-flex align-items-center" htmlFor="refMarc">Référence marché:</label>
              <input 
                type="text"
                className="form-control"
                id="refMarc"
                name="refMarc"
                value={formData.refMarc}
                onChange={handleInputChange}
                placeholder="entrer la référence"
              />
        <label className="d-flex align-items-center" htmlFor="mnt">Montant:</label>  
              <input 
                type="text"
                className="form-control"
                id="mnt"
                name="mnt"
                value={formData.mnt}
                onChange={handleInputChange}
                placeholder="entrer le montant"
              />
        <label className="d-flex align-items-center">Motif: </label> 
                    <textarea
                        type="text"
                        className="form-control"
                        id="commentaire"
                        name="commentaire"
                        value={formData.commentaire}
                        onChange={handleInputChange}
                        placeholder=""
                        />
      </div>
      </form>
    </div>
  );
};

export default Retour;
