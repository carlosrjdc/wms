const Axios = require("../../config/Ravex.js");

const Ravex = {
  filtro: async (dados) => {
    const filtrar = await dados.data.filter(
      (item) => item.unidade === "Itambé R. de Janeiro"
    );
    return filtrar;
  },

  periodoLongo: async () => {
    const dados = Promise.all([
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=0&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=1&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=2&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=3&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=4&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
    ])
      .then((response) => {
        console.log(response[0].data);
        return response[0].data.data;
      })
      .catch((erro) => console.log(erro));

    return dados;
  },
};

module.exports = Ravex;
