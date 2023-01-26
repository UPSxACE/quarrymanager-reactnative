import apiconfig from "./api-config";

const criarUrl = (endpoint) => {
  return "http://" + apiconfig.serverIP + "/api/" + endpoint;
};

const api = {
  listar_produto: criarUrl("produto/listar"),
  listar_marmores: criarUrl(
    "produto/produtos-loja?fields=tituloArtigo,preco&expand=id,url_fotografia"
  ),
  listar_granitos: criarUrl(
    "produto/produtos-loja?fields=tituloArtigo,preco&expand=id,url_fotografia"
  ),
  listar_ceramicas: criarUrl(
    "produto/produtos-loja?fields=tituloArtigo,preco&expand=id,url_fotografia"
  ),
  listar_porcelanas: criarUrl(
    "produto/produtos-loja?fields=tituloArtigo,preco&expand=id,url_fotografia"
  ),
  listar_material: criarUrl("material/listar"),

  produto_detalhe: (id) => {
    return criarUrl(
      "produto/find?id=" +
        id +
        "&fields=tituloArtigo,preco,Res_Compressao,Res_Flexao,Massa_Vol_Aparente,Absorcao_Agua,descricaoProduto"
    );
  },
  listar_profile: criarUrl("profile/get-profile"),

  // DASHBOARD
  listar_lote: criarUrl("lote/listar"),
  listar_status: criarUrl("home/stats"),
  listar_transportadora: criarUrl("transportadora/listar"),
};

export default api;
