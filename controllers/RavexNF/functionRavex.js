const Axios = require("../../config/Ravex.js");

const Ravex = {
  filtro: async (dados) => {
    const filtrar = await dados.data.filter(
      (item) => item.unidade === "Itambé R. de Janeiro"
    );
    return filtrar;
  },

  periodoLongo: async () => {
    const dados = await Promise.all([
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
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=5&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=6&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=7&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=8&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=9&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=10&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=11&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=12&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=13&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=14&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=15&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=16&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=17&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=18&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
      Axios.get(
        "/obter-notas-fiscais-por-periodo?skip=19&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
      ),
    ]);

    const agrupar = await dados
      .reduce((acc, item) => {
        //console.log(acc);
        return acc.concat(item.data.data);
      }, [])
      .filter(
        (item) =>
          item.unidade === "Itambé R. de Janeiro" &&
          item.status !== "A entregar" &&
          item.status !== "Entregue"
      );

    return agrupar;

    /*.then(async (response) => {
        console.log(response[0]);
        const reduzido = await response.reduce((acc, item) => {
          //console.log(acc);
          return acc.concat(item.data.data);
        }, []);

        return reduzido;
      })
      .catch((erro) => console.log(erro))*/
  },
};

module.exports = Ravex;
