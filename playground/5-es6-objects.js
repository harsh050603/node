//obj property shorthand

const name = 'Harsh'
const userAge = 19

const user = {
    name,
    age:userAge,
    location:'Mumbai' 
}

console.log(user)

//object destructuring

const product = {
    label:'Red Notebook',
    price: 3,
    stock:201,
    salePrice: undefined,
    rating:4.5
}

// const {label:productLabel, stock, rating= 5} = product 
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label,stock}) => {
console.log(type,label,stock)
}
transaction('order', product)