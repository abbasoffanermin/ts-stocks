
//Task1
//Part1
interface Stocks {
  symbol: string;
  price: number;
  sector: string;
  
}
const stocks :Stocks[] = [
  { symbol: 'Stock1', price: 10, sector: 'stock_sector1' },
  { symbol: 'Stock2', price: 20, sector: 'stock_sector2' },
  { symbol: 'Stock3', price: 30, sector: 'stock_sector3' }
]

//Part2


const update_prices :NodeJS.Timeout=setInterval(() => {
  for (let index = 0; index < stocks.length; index++) {
    stocks[index].price+=stocks[index].price+=Math.random()*10   
  }
}, 1000);




//Part3
let ar:Stocks[] = stocks.filter((item) => {
  return item
})
console.log(ar);

//Part4
setTimeout(() => {
  for (let index = 0; index < stocks.length; index++) {
    if (stocks[index].price >= 30) {
      console.log(`xeberdarliq: ${stocks[index].symbol} 30dan boyukdur.Price:${stocks[index].price}`);
    }
  }
}, 2000);

//Task2
//1.
let arr1 :Stocks[] = stocks.filter((item) => {
  return item
})
console.log(arr1);

let arr2:Stocks[] = stocks.map((item) => {
  return item
})
console.log(arr2);

let arr3:Stocks[] = stocks.map((item) => {
  return item
})
console.log(arr3);

//2.

let data:number=stocks[0].price
const update_data :NodeJS.Timeout=setInterval(() => {
  data+=Math.random()*10
  console.log('data->',data);
}, 1000);

setTimeout(() => {
  clearInterval(update_data)
}, 5000);


//3.

let data_1 :number=stocks[1].price
const data_update :NodeJS.Timeout= setInterval(() => {
  data_1+=5
if(data_1>5 && data_1<10){
  console.log('Data 5 ile 10 arasindadir',data_1);
}
if(data_1>10 && data_1<20){
  console.log('Data 10 ile 20 arasindadir',data_1);
}
if(data_1>20 && data_1<30){
  console.log('Data 20 ile 30 arasindadir',data_1);
}
if(data_1>30 && data_1<40){
  console.log('Data 5 ile 10 arasindadir',data_1);
}
}, 1000);

setTimeout(() => {
  clearInterval(data_update)
}, 10000);