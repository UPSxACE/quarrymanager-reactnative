import apiconfig from "./api-config";

const criarUrl = (endpoint) => {
  return "http://" + apiconfig.serverIP + "/api/" + endpoint;
};

const api = {
  listar_produto: criarUrl("produto/listar"),
  listar_material: criarUrl("material/listar"),
};

export default api;
