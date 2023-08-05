import request from 'supertest';
import { server } from '../../../index';

describe('Produto Service', () => {
  beforeAll(async () => {
    // Inicializa o servidor.
    await server.bootstrap();
  });

  it('deve retornar 403 Forbidden se o usuário tentar adicionar um produto sem estar autenticado', async () => {
    // Faz uma solicitação POST à rota /v1/produto/ sem estar autenticado.
    const res = await request(server.server).post('/v1/produto/', {
      nome: 'Celular Motorola Moto g52',
      preco: 1259,
      estoque: 120,
    });

    // Verifica se o status code da resposta é `403`.
    expect(res.statusCode).toEqual(403);

    // Verifica se o corpo da resposta é um objeto com a mensagem `Não autorizado`.
    expect(res.body).toEqual({
      msg: 'Não autorizado',
    });
  });
});
