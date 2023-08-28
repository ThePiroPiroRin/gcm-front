import React from "react";
import './Navbar.css'; 


export default function Navbar() {

  return (


<div>
    <header>
        <nav>
            <h1 class="logo">Gestion Cautions Marché</h1>
            <ul class="menu">
                <li><a href="#">Creer dossier</a>
                    <ul class="submenu">
                        <li><a href="#">Contrat de Nantissement marché</a>
                            <ul class="submenu2">
                                <li><a href="/AG">Abonnement groupé</a></li>
                                <li><a href="/contratNan">Contrat de nantissement</a></li>
                                <li><a href="/retour">Retour à l'agence</a></li>
                            </ul>
                        </li>
                        <li><a href="/mobilisationADC">Mobilisation ADC</a></li>
                        <li><a href="/demandePrefi">Demande Préfinancement</a></li>
                        <li><a href="/virement">Reprise Virement</a></li>
                    </ul>
                </li>
                <li><a href="#">Traitement de demande</a>
                    <ul class="submenu">
                        <li><a href="#">Finalisation de la phase de nantissement</a>
                            <ul class="submenu2">
                                <li><a href="#">Acte de nantissement</a></li>
                                <li><a href="#">Lettre de signification</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Demandes incomplètes</a></li>
                        <li><a href="#">Demandes rejetées</a></li>
                    </ul>
                </li>
                <li><a href="#">Validation</a>
                    <ul class="submenu">
                        <li><a href="#">Simple</a></li>
                        <li><a href="#">Croisée</a></li>
                    </ul>
                </li>
                <li><a href="#">Reportings</a>
                    <ul class="submenu">
                        <li><a href="#">Productivité quotidienne</a></li>
                        <li><a href="#">CAF</a></li>
                    </ul>
                </li>
                <li><a href="#">Contrôle</a></li>
                <li><a href="#">Mise à jour</a></li>
                <li><a href="#">Administration</a></li>
            </ul>
            <div className="username">
          Welcome, {localStorage.getItem("userName")}
        </div> 
        </nav>
    </header>
</div>);
}
