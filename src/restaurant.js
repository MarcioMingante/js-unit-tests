/* eslint-disable max-len */
// Siga as orientações do README!

const testParameters = { food: { coxinha: 1.99, peixe: 1.99, banana: 1.99 }, drinks: {} };

const createMenu = (object) => {
  const menu = {
    fetchMenu: () => object,
    consumption: [],
    order: (value) => {
      let toCheckValue = [];
      toCheckValue = toCheckValue.concat(Object.keys(object.food));
      toCheckValue = toCheckValue.concat(Object.keys(object.drinks));

      if (toCheckValue.includes(value)) {
        menu.consumption.push(value);
      } else {
        return 'Item indisponível';
      }
    },
    pay: () => {
      let totalPrice = 0;

      for (let index = 0; index < menu.consumption.length; index += 1) {
        const currentValue = menu.consumption[index];
        let currentPrice = object.food[currentValue];

        if (!currentPrice) {
          currentPrice = object.drinks[currentValue];
        }
        totalPrice += currentPrice;
      }
      return totalPrice;
    },
  };

  return menu;
};

module.exports = createMenu;
