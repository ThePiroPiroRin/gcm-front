import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import "./contratNan.css"

const ContratNan = () => {
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
    
  const tabContents = [
    
    <form className="secondFrame" onSubmit={handleSubmit}>
        <div>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>KYC validé sur DELTA</span>
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Dossier Juridique à jour</span>
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Notification validée et signée</span>
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Cachet exemplaire unique</span>
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Numéro d'appel d'offre</span>
                <input
                style={{marginLeft:'200px', width:'500px'}}
                type="text"
                className="form-control"
                id="nappelOffre"
                name="nappelOffre"
                value={formData.nappelOffre}
                onChange={handleInputChange}
                placeholder="entrer le Numéro d'appel d'offre'"
                />
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Quittance ou cachet d'enregistrement</span>
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Article de nantissement</span>
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Informations de la maîtrise d'ouvrage</span>
            </label>
        </div>
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>N°de compte ASMA</span>
                <input
                style={{marginLeft:'230px', width:'500px'}}
                type="text"
                className="form-control"
                id="ncompteASMA"
                name="ncompteASMA"
                value={formData.ncompteASMA}
                onChange={handleInputChange}
                placeholder="entrer le Numéro de compte ASMA"
                />
            </label>
        </div> 
        <div className='checkline'>
            <label className="d-flex align-items-center">
                <input
                type="checkbox"    
                style={{ marginRight: '16px' }}
                />
                <span>Checklist reçue</span>
            </label>
        </div>
        <br></br>
        <br></br>
        <div className='checkline'>
            <div className="col-md-6">
                <label className="d-flex align-items-center">Remarques: </label> 
                    <textarea
                        type="text"
                        className="form-control"
                        id="commentaire"
                        name="commentaire"
                        style={{width:'1000px'}}
                        value={formData.commentaire}
                        onChange={handleInputChange}
                        placeholder=""
                        />
            </div>
        </div>      
    </form>,

<form className="thirdFrame" onSubmit={handleSubmit}>
    <div className="col-md-6">
        <label className="d-flex align-items-center" htmlFor="dateReceptionC">Date réception courrier:</label>
              <input 
                type="date"
                className="form-control"
                id="dateReceptionC"
                name="dateReceptionC"
                value={formData.dateReceptionC}
                onChange={handleInputChange}
                placeholder="entrer la date "
              />
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
    </div>
</form>,
  ];

  return (
    <div>
    <Navbar/>
    <div>
      <div style={{ display: "flex", backgroundColor:'rgb(240, 240, 240)', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <button className="btn" style={{color:'crimson', backgroundColor:'white', fontWeight:'500', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => setActiveTab(0)}>Check-list mandataire</button>
        <button className="btn" style={{color:'crimson', backgroundColor:'white', fontWeight:'500', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => setActiveTab(1)}>Contrat de nantissement</button>
      </div>
      <div>
        <p>{tabContents[activeTab]}</p>
      </div>
    </div>
    </div>
  );
};

export default ContratNan;
