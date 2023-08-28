import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; 
import yourImage from './images.png'; 

const AuthPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    // Authentication logic
    console.log(selectedOption,"userName")
    localStorage.setItem("userName", selectedOption)
    navigate('/Dashboard', { state: { selectedOption } });

  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h1 class="title">Gestion Cautions Marché</h1>
      <div className="auth-container">
        <div className="auth-card p-5">
          <div className="d-flex">
            <div className="content-container">
              <h3 className="mb-5">Veuillez choisir le profil correspondant</h3>
              <form>
                <div className="mb-4 row">
                  <label className="col-sm-4 col-form-label">Nom et Prénom:</label>
                  <div className="col-sm-8">
                    <select
                      className="form-select custom-input"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="User 1">User 1</option>
                      <option value="User 2">User 2</option>
                      <option value="User 3">User 3</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5 row">
                  <label className="col-sm-4 col-form-label">Mot de Passe:</label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control custom-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-center gap-5">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={handleLogin}
                  >
                    Valider
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleLogin}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
            <div className="image-container">
              <img src={yourImage} alt="Your Image" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
