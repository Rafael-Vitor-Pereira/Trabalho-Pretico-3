import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormularioEditar = () => {
  const base_url = 'http://localhost/Api_codeigniter';

  const [ligas, setLigas] = useState([]);

  const [clube, setClube] = useState('');
  const [idLiga, setIdLiga] = useState('');
  const [anoFundacao, setAnoFundacao] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function getClubes() {
        const resposta = await axios.get(`${base_url}/buscar`, {
          params: { id: params.id },
        });
        setClube(resposta.data.clube);
        setIdLiga(resposta.data.ligaId);
        setAnoFundacao(resposta.data.fundacao);
      }
      getClubes();
    }
  }, [params.id]);

  useEffect(() => {
    async function getLigas() {
      const resposta = await axios.get(`${base_url}/ligas`);
      setLigas(resposta.data);
    }
    getLigas();
  });

  async function enviarFormulario(e) {
    e.preventDefault();

    try {
      await axios.put(`${base_url}/editar`, {
        nome: clube,
        id: params.id,
        ligaId: Number(idLiga),
        anoFundacao: anoFundacao,
      });
      setClube('');
      setIdLiga(1);
      setAnoFundacao('');

      alert('Dados salvos com sucesso!');
    } catch (error) {
      alert('Erro ao salvar dados!');
    }
  }

  return (
    <form className="form-group" onSubmit={enviarFormulario}>
      <div>
        <center>
          <h1>Formulario de edição</h1>
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
            value={anoFundacao}
            onChange={(e) => setAnoFundacao(e.target.value)}
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

export default FormularioEditar;
