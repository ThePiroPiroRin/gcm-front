import React from 'react';
import Navbar from '../layout/Navbar';
import './virement.css';

const Virement = () => {
  const columnHeaders = ['Référence marché', 'Code client', 'Code agence', 'Numéro de compte', 'Montant', 'Date comptable'];

  const data = [
    { ref: 1, cclient: '', cagence: 0, ncompte: '', montant: '', datec: '' },
    { ref: 2, cclient: '', cagence: 0, ncompte: '', montant: '', datec: '' },
    { ref: 3, cclient: '', cagence: 0, ncompte: '', montant: '', datec: '' },
    { ref: 4, cclient: '', cagence: 0, ncompte: '', montant: '', datec: '' },
    { ref: 5, cclient: '', cagence: 0, ncompte: '', montant: '', datec: '' },
    { ref: 6, cclient: '', cagence: 0, ncompte: '', montant: '', datec: '' },
  ];

  return (
    <div>
      <Navbar />
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              {columnHeaders.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.ref}>
                <td>{row.ref}</td>
                <td>{row.cclient}</td>
                <td>{row.cagence}</td>
                <td>{row.ncompte}</td>
                <td>{row.montant}</td>
                <td>{row.datec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Virement;
