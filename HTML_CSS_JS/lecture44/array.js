let arr = [1,2,3,4,5]
console.log(arr)

for(element of arr){
    console.log(element)
}

const fruits = ["apple", "banana", "jackfruit"]
console.log(fruits)

const new_fruits = new Array("Mango", "Lemon", "Grape")
console.log(new_fruits)
//so when we'll create any array using Array constructor we'll have to access items using index or []
for(let i=0; i<new_fruits.length; i++){
    console.log(new_fruits[i])
}
