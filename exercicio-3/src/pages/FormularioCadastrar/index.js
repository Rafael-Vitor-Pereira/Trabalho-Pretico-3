import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FormularioCadadastrar = () => {
  const base_url = 'http://localhost/Api_codeigniter';

  const [ligas, setLigas] = useState([]);

  const [clube, setClube] = useState('');
  const [idLiga, setIdLiga] = useState(1);
  const [fundacao, setFundacao] = useState('');

  useEffect(() => {
    async function getLigas() {
      const resposta = await axios.get(`${base_url}/ligas`);
      setLigas(resposta.data);
    }
    getLigas();
  }, []);

  async function enviarFormulario(e) {
    e.preventDefault();

    try {
      await axios.post(`${base_url}/cadastrar`, {
        nome: clube,
        ligaId: Number(idLiga),
        anoFundacao: fundacao,
      });
      setClube('');
      setIdLiga(1);
      setFundacao('');

      alert('Dados salvos com sucesso!');
    } catch (error) {
      alert('Erro ao salvar dados!');
    }
  }

  return (
    <form className="form-group" onSubmit={enviarFormulario}>
      <div>
        <center>
          <h1>Formulario de cadastro</h1>
        </center>
        <div className="form-group">
          <label htmlFor="clube">Clube</label>
          <input
            type="text"
            name="clube"
            id="clube"
            className="form-control"
            value={clube}
            onChange={(e) => setClube(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fundacao">Ano de Fundação</label>
          <input
            type="text"
            name="fundacao"
            id="fundacao"
            className="form-control"
            value={fundacao}
            onChange={(e) => setFundacao(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="liga">Liga</label>
          <select
            name="liga"
            id="liga"
            className="form-control"
            value={idLiga}
            onChange={(e) => setIdLiga(e.target.value)}
          >
            {ligas.map((liga) => (
              <option key={liga.id} value={liga.id}>
                {liga.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default FormularioCadadastrar;
