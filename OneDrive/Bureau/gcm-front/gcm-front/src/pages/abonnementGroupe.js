import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import "./abonnementGroupe.css"

const AG = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };
    const [selectedOption2, setSelectedOption2] = useState('');
    const handleOptionChange2 = (e) => {
        setSelectedOption2(e.target.value);
      };
    const [selectedOption3, setSelectedOption3] = useState('');
    const handleOptionChange3 = (e) => {
        setSelectedOption3(e.target.value);
    };
    const [selectedOption4, setSelectedOption4] = useState('');
    const handleOptionChange4 = (e) => {
        setSelectedOption4(e.target.value);
    };
    const [selectedOption5, setSelectedOption5] = useState('');
    const handleOptionChange5 = (e) => {
        setSelectedOption5(e.target.value);
    };
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
                <span>Convention originale</span>
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
        <br></br>
        <br></br>
        <div className='checkline'>
            <div className="col-md-6">
                <label className="d-flex align-items-center">Commentaire: </label> 
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
<br></br>
<br></br>
<div className='checkline'>
    <div className="col-md-6">
        <label className="d-flex align-items-center">Commentaire: </label> 
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
        <label className="d-flex align-items-center" htmlFor="dateReceptionC">Date réception courrier: </label>
              <input 
                type="date"
                className="form-control"
                id="dateReceptionC"
                name="dateReceptionC"
                value={formData.dateReceptionC}
                onChange={handleInputChange}
                placeholder="entrer la date "
              /><br></br><br></br>
</div>

<form className="form-container">
<form className="form-container" style={{paddingLeft:'20px',paddingRight:'200px'}}>
        <div className="form-column2">
                <label style={{paddingLeft:'10px', paddingBottom:'20px'}} className="d-flex align-items-center"  htmlFor="codeClient">Code client:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="nomClient">Nom du client:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="dre">DRE:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="caf">CAF:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="cce">CCE:</label><br></br>
        </div>
        <div className="form-column">
        <label style={{paddingBottom:'25px'}}>Mandataire du groupement</label>
            <input 
                type="text"
                className="form-control"
                id="codeClient"
                name="codeClient"            
                value={formData.codeClient}            
                onChange={handleInputChange}            
                placeholder="entrer le code du client"            
            />
            <input 
                type="text"
                className="form-control"
                id="nomClient"
                name="nomClient"            
                value={formData.nomClient}            
                onChange={handleInputChange}            
                placeholder="entrer le nom du client"            
            />
            <input 
                type="text"
                className="form-control"
                id="dre"
                name="dre"            
                value={formData.dre}            
                onChange={handleInputChange}            
                placeholder="entrer le dre"            
            />
            <input 
                type="text"
                className="form-control"
                id="caf"
                name="caf"            
                value={formData.caf}            
                onChange={handleInputChange}            
                placeholder="entrer le caf"            
            />
            <input 
                type="text"
                className="form-control"
                id="cce"
                name="cce"            
                value={formData.cce}            
                onChange={handleInputChange}            
                placeholder="entrer le cce"            
            />
        </div>
        </form>

        <form className="form-container">
        <div className="form-column2">
                <label style={{paddingLeft:'10px', paddingBottom:'20px'}} className="d-flex align-items-center"  htmlFor="codeClient2">Code client:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="nomClient2">Nom du client:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="dre2">DRE:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="caf2">CAF:</label>
                <label style={{paddingLeft:'10px', paddingBottom:'15px'}} className="d-flex align-items-center" htmlFor="cce2">CCE:</label><br></br>
        </div>
        <div className="form-column">
        <label style={{paddingBottom:'25px'}}>Entreprise N°2</label>
            <input 
                type="text"
                className="form-control"
                id="codeClient2"
                name="codeClient2"            
                value={formData.codeClient2}            
                onChange={handleInputChange}            
                placeholder="entrer le code du client"            
            />
            <input 
                type="text"
                className="form-control"
                id="nomClient2"
                name="nomClient2"            
                value={formData.nomClient2}            
                onChange={handleInputChange}            
                placeholder="entrer le nom du client"            
            />
            <input 
                type="text"
                className="form-control"
                id="dre2"
                name="dre2"            
                value={formData.dre2}            
                onChange={handleInputChange}            
                placeholder="entrer le dre"            
            />
            <input 
                type="text"
                className="form-control"
                id="caf2"
                name="caf2"            
                value={formData.caf2}            
                onChange={handleInputChange}            
                placeholder="entrer le caf2"            
            />
            <input 
                type="text"
                className="form-control"
                id="cce2"
                name="cce2"            
                value={formData.cce2}            
                onChange={handleInputChange}            
                placeholder="entrer le cce"            
            />
        </div>
        </form>
        </form>
<br></br><p></p>
<div className="col-md-6">
        <label className="d-flex align-items-center" htmlFor="refMarc">Référence marché: </label>
              <input 
                type="text"
                className="form-control"
                id="refMarc"
                name="refMarc"
                value={formData.refMarc}
                onChange={handleInputChange}
                placeholder="entrer la référence"
              /> 
        <label className="d-flex align-items-center" htmlFor="mnt">Montant: </label> 
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

<form className="fourthFrame" onSubmit={handleSubmit}>
    <form className="form-container">
        <div className="form-column1">
                <label className="d-flex align-items-center"  htmlFor="capital">Capital:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="tribunal">Tribunal:</label><br></br><br></br>
                <label className="d-flex align-items-center" htmlFor="numAnalytique">Numéro analytique:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="numChronologique">Numéro chronologique:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="adresseSiege">Adresse du siege:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="CNSS">N°CNSS:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="identifiantFiscal">Identifiant fiscal:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="patente">N°patente:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="representantTitulaire">Représentant titulaire du marché:</label><br></br><br></br>
                <label className="d-flex align-items-center" htmlFor="qualiteRep">Qualité du représentant:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="objetMarche">Objet du marché:</label><p></p>
                <label className="d-flex align-items-center" htmlFor="maitriseOuvrage">Maîtrise d'ouvrage du marché:</label><br></br><br></br>
                <label className="d-flex align-items-center" htmlFor="chargePaiement">Personne chargée du paiement:</label><br></br><p></p>
                <label className="d-flex align-items-center" htmlFor="destinataireLettreSignification">Destinataire de la lettre de signification:</label>
        </div>
        <div className="form-column">
        <label>Mandataire</label>
            <input 
                type="text"
                className="form-control"
                id="capital"
                name="capital"            
                value={formData.capital}            
                onChange={handleInputChange}            
                placeholder="entrer le capital"            
            />                                                

            <select
                            className="form-select custom-input"
                            value={selectedOption}
                            onChange={handleOptionChange}
                            >
                                <option value="premiere">1ère instance</option>
                                <option value="commerce">commerce</option>
            </select>
            <input
                                type="text"
                                className="form-control"
                                id="tribunal"
                                name="tribunal"
                                value={formData.tribunal}
                                onChange={handleInputChange}
                                placeholder="entrer le tribunal"
            />

            <input
                                type="text"
                                className="form-control"
                                id="numAnalytique"
                                name="numAnalytique"
                                value={formData.numAnalytique}
                                onChange={handleInputChange}
                                placeholder="entrer le numéro analytique"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="numChronologique"
                                name="numChronologique"
                                value={formData.numChronologique}
                                onChange={handleInputChange}
                                placeholder="entrer le numéro chronologique"
            />                

            <input
                                type="adresseSiege"
                                className="form-control"
                                id="adresseSiege"
                                name="adresseSiege"
                                value={formData.adresseSiege}
                                onChange={handleInputChange}
                                placeholder="entrer l'adresse du siege"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="CNSS"
                                name="CNSS"
                                value={formData.CNSS}
                                onChange={handleInputChange}
                                placeholder="entrer le N°CNSS"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="identifiantFiscal"
                                name="identifiantFiscal"
                                value={formData.identifiantFiscal}
                                onChange={handleInputChange}
                                placeholder="entrer l'identifiant fiscal"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="patente"
                                name="patente"
                                value={formData.patente}
                                onChange={handleInputChange}
                                placeholder="entrer le N°patente"
            />                

            <select
                            className="form-select custom-input"
                            value={selectedOption3}
                            onChange={handleOptionChange3}
                            >
                                <option value="M">M.</option>
                                <option value="Mme">Mme.</option>
            </select>
            <input                                
                                type="text"
                                className="form-control"
                                id="representantTitulaire"
                                name="representantTitulaire"
                                value={formData.representantTitulaire}
                                onChange={handleInputChange}
                                placeholder="entrer le représentant titulaire du marché"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="qualiteRep"
                                name="qualiteRep"
                                value={formData.qualiteRep}
                                onChange={handleInputChange}
                                placeholder="entrer la qualité du représentant"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="objetMarche"
                                name="objetMarche"
                                value={formData.objetMarche}
                                onChange={handleInputChange}
                                placeholder="entrer l'objet du marché"
            />                

            <textarea
                                type="text"
                                className="form-control"
                                id="maitriseOuvrage"
                                name="maitriseOuvrage"
                                value={formData.maitriseOuvrage}
                                onChange={handleInputChange}
                                placeholder="entrer la maîtrise d'ouvrage du marché"
            />                

            <select
                            className="form-select custom-input"
                            value={selectedOption5}
                            onChange={handleOptionChange5}
                            >
                                <option value="M">M.</option>
                                <option value="Mme">Mme.</option>
            </select>                
            <input                
                                type="text"
                                className="form-control"
                                id="chargePaiement"
                                name="chargePaiement"
                                value={formData.chargePaiement}
                                onChange={handleInputChange}
                                placeholder="entrer la personne chargée du paiement"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="destinataireLettreSignification"
                                name="destinataireLettreSignification"
                                value={formData.destinataireLettreSignification}
                                onChange={handleInputChange}
                                placeholder="entrer le destinataire de la lettre de signification"
            />                
        </div>
        <div className="form-column">
            <label>Entreprise 2</label>
            <input 
                            type="text"
                            className="form-control"
                            id="capital2"
                            name="capital2"
                            value={formData.capital2}
                            onChange={handleInputChange}
                            placeholder="entrer le capital de la deuxième entreprise"
            />            

            <select
                            className="form-select custom-input"
                            value={selectedOption2}
                            onChange={handleOptionChange2}
                            >
                                <option value="premiere">1ère instance</option>
                                <option value="commerce">commerce</option>
            </select>                
            <input                
                                type="text"
                                className="form-control"
                                id="tribunal2"
                                name="tribunal2"
                                value={formData.tribunal2}
                                onChange={handleInputChange}
                                placeholder="entrer le tribunal de la deuxième entreprise"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="numAnalytique2"
                                name="numAnalytique2"
                                value={formData.numAnalytique2}
                                onChange={handleInputChange}
                                placeholder="entrer le numéro analytique de la deuxième entreprise"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="numChronologique2"
                                name="numChronologique2"
                                value={formData.numChronologique2}
                                onChange={handleInputChange}
                                placeholder="entrer le numéro chronologique de la deuxième entreprise"
            />                

            <input
                                type="adresseSiege"
                                className="form-control"
                                id="adresseSiege2"
                                name="adresseSiege2"
                                value={formData.adresseSiege2}
                                onChange={handleInputChange}
                                placeholder="entrer l'adresse du siege de la deuxième entreprise"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="CNSS2"
                                name="CNSS2"
                                value={formData.CNSS2}
                                onChange={handleInputChange}
                                placeholder="entrer le N°CNSS de la deuxième entreprise"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="identifiantFiscal2"
                                name="identifiantFiscal2"
                                value={formData.identifiantFiscal2}
                                onChange={handleInputChange}
                                placeholder="entrer l'identifiant fiscal de la deuxième entreprise"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="patente2"
                                name="patente2"
                                value={formData.patente2}
                                onChange={handleInputChange}
                                placeholder="entrer le N°patente de la deuxième entreprise"
            />                

            <select
                            className="form-select custom-input"
                            value={selectedOption4}
                            onChange={handleOptionChange4}
                            >
                                <option value="M">M.</option>
                                <option value="Mme">Mme.</option>
            </select>                
            <input                
                                type="text"
                                className="form-control"
                                id="representantTitulaire2"
                                name="representantTitulaire2"
                                value={formData.representantTitulaire2}
                                onChange={handleInputChange}
                                placeholder="entrer le représentant titulaire du marché de la deuxième entreprise"
            />                

            <input
                                type="text"
                                className="form-control"
                                id="qualiteRep2"
                                name="qualiteRep2"
                                value={formData.qualiteRep2}
                                onChange={handleInputChange}
                                placeholder="entrer la qualité du représentant de la deuxième entreprise"
            />                 
        </div>
    </form>
    </form>,

  ];

  return (
    <div>
    <Navbar/>
    <div>
      <div style={{ display: "flex", backgroundColor:'rgb(240, 240, 240)', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <button className="btn" style={{color:'crimson', backgroundColor:'white', fontWeight:'500', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => setActiveTab(0)}>Check-list mandataire</button>
        <button className="btn" style={{color:'crimson', backgroundColor:'white', fontWeight:'500', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => setActiveTab(1)}>Check-list entreprise 2</button>
        <button className="btn" style={{color:'crimson', backgroundColor:'white', fontWeight:'500', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => setActiveTab(2)}>Contrat de nantissement</button>
        <button className="btn" style={{color:'crimson', backgroundColor:'white', fontWeight:'500', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => setActiveTab(3)}>Informations Société du groupement</button>
      </div>
      <div>
        <p>{tabContents[activeTab]}</p>
      </div>
    </div>
    </div>
  );
};

export default AG;
