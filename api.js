import AsyncStorage from '@react-native-async-storage/async-storage';
import apiconfig from './api-config';
import { Buffer } from 'buffer';

const criarUrl = (endpoint) => {
  return 'http://' + apiconfig.serverIP + '/api/' + endpoint;
};

const api = {
  gerar_auth_header: async () => {
    const auth_token = await AsyncStorage.getItem('auth_token');
    const encripted_token = Buffer.from(auth_token + ':').toString('base64');
    return { Authorization: 'Basic ' + encripted_token };
  },
  listar_produto: criarUrl('produto/listar'),
  listar_marmores: criarUrl(
    'pedido/loja-pesquisa?titulo=Marmore&fields=tituloArtigo,preco&expand=id,url_fotografia'
  ),
  listar_granitos: criarUrl(
    'pedido/loja-pesquisa?titulo=Granito&fields=tituloArtigo,preco&expand=id,url_fotografia'
  ),
  listar_ceramicas: criarUrl(
    'pedido/loja-pesquisa?titulo=Ceramica&fields=tituloArtigo,preco&expand=id,url_fotografia'
  ),
  listar_porcelanas: criarUrl(
    'pedido/loja-pesquisa?titulo=Porcelana&fields=tituloArtigo,preco&expand=id,url_fotografia'
  ),
  listar_material: criarUrl('material/listar'),

  produto_detalhe: (id) => {
    return criarUrl(
      'produto/find?id=' +
        id +
        '&fields=tituloArtigo,preco,Res_Compressao,Res_Flexao,Massa_Vol_Aparente,Absorcao_Agua,descricaoProduto'
    );
  },
  listar_profile: criarUrl('profile/get-profile'),

  // DASHBOARD

  listar_lote: criarUrl('lote/listar'),
  listar_status: criarUrl('home/stats'),
  listar_transportadora: criarUrl('transportadora/listar'),
  listar_pedido: criarUrl('estado-pedido/listar-encomendas'),
  novo_pedido: criarUrl('pedido/pedido-orcamento-v2'),
  obter_perfil: criarUrl('profile/get-profile'),
  editar_perfil: criarUrl('profile/editar'),
  obter_produtos_loja: criarUrl(
    'produto/produtos-loja?fields=tituloArtigo,preco&expand=id,url_fotografia'
  ),
  login: criarUrl('auth/login'),
  register: criarUrl('auth/register'),
  refresh_token: (push_token) =>
    criarUrl('auth/refresh-token?push_token=' + push_token),
};

export default api;
