var b=Math.floor(Math.random()*(20-1))+1;
var c=[];

console.log(b)
for(i=0;i<5;i++)
{
    d=prompt("give a number");
    c.push(d);
    if(b==d)
    {
    console.log("You Won the GAME");
    break;
    }
    else{
    console.log("You Loose Your Chance");
    }
}
console.log(c);

console.log("Game Over");
