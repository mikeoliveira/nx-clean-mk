import { TodoEntity } from './todo.entity';

describe('Todo Entity', () => {
  it('should be properly initialized', () => {
    const model = TodoEntity.create({
      id: '1',
      name: 'foo',
      completed: true,
    });

    expect(model.id).toEqual('1');
    expect(model.name).toEqual('foo');
    expect(model.completed).toEqual(true);
  });
});

//  Teste de Entity, definindo os valores para cada variavel da entidade e resgatando.
// SOLUÇÃO: Criar as variáveis de cada atributo da entidade e resgatar os valores da entidade. Caso seja reescrita alguma variavel os valores da entidade ficam inconsistentes e o teste quebrará.
