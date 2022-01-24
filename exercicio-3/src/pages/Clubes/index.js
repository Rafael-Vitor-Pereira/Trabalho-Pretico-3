import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Clubes = () => {
  const base_url = 'http://localhost/Api_codeigniter';
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    async function getClubes() {
      const resposta = await axios.get(`${base_url}/listar`);
      setClubes(resposta.data);
    }
    getClubes();
  }, []);

  async function remover(id) {
    if (window.confirm('Tem certeza que deseja excluir este clube?')) {
      try {
        await axios.delete(`${base_url}/excluir`, { data: { id } });
        setClubes(clubes.filter((clube) => clube.id !== id));
        alert('Clube removido com sucesso');
      } catch (error) {
        alert('Problema ao remover o clube!');
      }
    }
  }

  if (clubes.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <center>
        <h1>Lista de clubes</h1>
      </center>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Clube</th>
          <th>Fundação</th>
          <th>Liga</th>
          <th>País</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {clubes.map((clube) => (
            <tr key={clube.id}>
              <td>{clube.clube}</td>
              <td>{clube.fundacao}</td>
              <td>{clube.liga}</td>
              <td>{clube.pais}</td>
              <td>
                <center>
                  <Link to={`editar/${clube.id}`} className="btn btn-primary">
                    Editar
                  </Link>
                </center>
              </td>
              <td>
                <center>
                  <button
                    style={{ border: '0' }}
                    className="btn btn-danger"
                    onClick={() => remover(clube.id)}
                  >
                    Remover
                  </button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clubes;
