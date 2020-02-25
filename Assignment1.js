var b=Math.floor(Math.random()*(20-1))+1;
var a=prompt("give me number");
if(a==b)
{
    console.log("You Won the GAME");
}
else{
    console.log("You Loose Your Chance");
}


var c=[];

for(i=0;i<5;i++)
{
    d=prompt("give a number");
    c.push(d);
}
console.log("Game Over");
