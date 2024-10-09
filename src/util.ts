
interface Basket {
  apple: number;
  banana: number;
}

// Primitives
const a: number = 3;
const b: string = "hello world";
const c: boolean = true;
const d: object = { }; // try not to use.
const e: undefined = undefined;
const f: null = null;

// Union types.
const g: number | null = null;
const h: number | string = "test";

// Interfaces.
interface User {
  id: string;
  name: string;
  thumbnailUrl: string;
  phoneNumber: string | null;
  hashedPassword?: string;
}

// Array types.
const arrayOfNumbers: number[] = [3, 2, 4];

// Function types.
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
}

interface Array {
  length: number;
  items: any[];
  pop: () => any;
  push: (item: any) => void;
}

const array: Array = {
  length: 0,
  items: [],
  pop(item: any) {
    return this.items.pop();
  },
  push() {
    this.items.push();
  }
}

// Generic types.
const sort = <T,>(array: T[]): T[] => {
  return [];
}

const numbers = [1, 2, 3];
const sortedNumbers = sort(numbers);
const strings = ["test", "hello", "foo"];
const sortedStrings = sort(strings);

const getPhoneNumberLength = (user: User) => {
  if (user.phoneNumber === null) {
    return 0;
  }
  return user.phoneNumber.length;
}

const user: User = {
  id: "1",
  name: "Tae",
  thumbnailUrl: "https://example.com/img.png",
  phoneNumber: null,
}

const getHashedPassword = (user: User) => {
  return user.hashedPassword;
}

const getTotalApples = (baskets: Basket[]) => {
  for (const basket of baskets) {
    basket.apple;
  }
  return baskets.map(basket => basket.apple).reduce((sum, value) => sum + value, 0);
}

const baskets = [ 
  {
    apple: 3,
    banana: 2,
  },
  {
    apple: 4,
    banana: 3
  },
] 

getTotalApples(baskets); // 7.
getTotalApples(4); 

// 1. Typescript checks that the arguments being passed into a function are valid.
getTotalApples([ ]);

const basket: Basket = { banana: 3, apple: 2 };

// 2. Typescript supports autocomplete for your variables because it knows the type.