const createMenu = require('../src/restaurant');

let firstParameters = { food: {}, drinks: {} };
let secondParameters = createMenu({ food: { coxinha: 1.99, banana: 1.99 }, drinks: { agua: 1.99, suco: 1.99 } });
let thirdParameters = createMenu({ food: { coxinha: 1.99, banana: 1.99 }, drinks: { agua: 1.99, suco: 1.99 } });
let fourthParameter = createMenu({ food: {coxinha: 1.90, maca: 2.90}, drinks: { agua: 2.00, suco: 1.50}});

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(typeof createMenu()).toBe('object');
    expect(typeof createMenu().fetchMenu).toBe('function');
    expect(Object.keys(createMenu(firstParameters).fetchMenu())).toEqual(['food', 'drinks']);
    expect(createMenu(firstParameters).fetchMenu()).toEqual(firstParameters);
    //
    expect(createMenu(firstParameters).consumption).toEqual([]);
    //
    expect(secondParameters.order('abacate')).toBe('Item indisponível');
    expect(secondParameters.consumption).toEqual([]);
    expect(secondParameters.order('banana')).toBe(undefined);
    expect(secondParameters.consumption).toEqual(['banana']);
    //
    secondParameters.order('coxinha');
    secondParameters.order('agua');
    expect(secondParameters.consumption).toEqual(['banana', 'coxinha', 'agua']);
    //
    thirdParameters.order('banana');
    thirdParameters.order('banana');
    expect(thirdParameters.consumption).toEqual(['banana', 'banana']);
    //
    fourthParameter.order('maca');
    fourthParameter.order('coxinha');
    fourthParameter.order('agua');
    expect(fourthParameter.pay()).toBe(6.8);
  });
});
