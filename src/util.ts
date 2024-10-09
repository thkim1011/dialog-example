const getTotalApples = (baskets) => {
  return baskets.map(basket => basket.apple).reduce((x, y) => x + y, 0);
}

const basket = {
  apple: 3,
  banana: 2,
}

const baskets = [ 
  {
    apple: 3,
    banana: 2,
  },
  { apple: 4, banana: 3 },
] 