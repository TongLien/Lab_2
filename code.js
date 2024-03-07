var fruit = [
    ["Nho",15],
    ["Tao",25],
    ["Xoai",35],
    ["Chuoi",45],
    ["Mit",5],
]
console.log(fruit);

console.log("Độ dài là: "+fruit.length);

console.log(fruit.pop());

console.log(fruit.shift());

for(i=0;i<fruit.length;i++)
{
    console.log("Trái "+fruit[i][0]+" có giá: "+fruit[i][1]);
}

var i=0;
while(i<fruit.length)
{
    console.log("Trái "+fruit[i][0]+" có giá: "+fruit[i][1]);
    i++;
}

i=0;
do{
    console.log("Trái "+fruit[i][0]+" có giá: "+fruit[i][1]);
    i++;
} while(i<fruit.length)

var myDog = {
    "name": "Ngáo",
    "leg": 4,
    "friend": ["everything!"]
};

delete myDog.name
console.log(myDog);

myDog.newName = "Husky"

myDog.color = "Brown"

delete myDog.friend