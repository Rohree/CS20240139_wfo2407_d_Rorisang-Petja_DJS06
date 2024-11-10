// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Ecercises
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//--------------------------------------------------------------------------
const upperProvinces = provinces.map(item => item.toUpperCase())
console.log(upperProvinces)
//--------------------------------------------------------------------------
const itemLegnth = provinces.map(item => item.length)
console.log(itemLegnth)
//--------------------------------------------------------------------------
const sortedProvinces = [...provinces].sort(); 
console.log(sortedProvinces);

//--------------------------------------------------------------------------
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

//--------------------------------------------------------------------------
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

//--------------------------------------------------------------------------
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);


// Advanced Excercises
console.log(products.forEach(product => console.log(product.product)));

//---------------------------------------------------------------------------
console.log(products.filter(product => product.product.length <= 5));

//---------------------------------------------------------------------------

console.log(
  products
    .filter(product => product.price && !isNaN(product.price))
    .map(product => Number(product.price))
    .reduce((total, price) => total + price, 0)
);

//---------------------------------------------------------------------------

console.log(products.reduce((acc, product) => acc + product.product, ''));

//---------------------------------------------------------------------------
console.log(
  products
    .filter(product => product.price && !isNaN(product.price))
    .map(product => ({ product: product.product, price: Number(product.price) }))
    .reduce((acc, product) => {
      if (product.price > acc.highest.price) acc.highest = product;
      if (product.price < acc.lowest.price) acc.lowest = product;
      return acc;
    }, { highest: { price: -Infinity }, lowest: { price: Infinity } })
);

//----------------------------------------------------------------------------

console.log(
  Object.entries(products).reduce((acc, [_, { product, price }]) => {
    acc.push({ name: product, cost: price });
    return acc;
  }, [])
);

