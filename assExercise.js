var b=Math.floor(Math.random()*(20-1))+1;
var c=[];
var i=0;
while(i<5)
{    
    var d = prompt("give a number");
    if(isNaN(d) || d=='')
    {
    prompt("please Give a number");
    i--;
    }
    else if(b==d)
    {
    console.log("You Won the GAME");
    c.push(d);
    break;
    }
    else{
    console.log("You Loose Your Chance");
    c.push(d);
     }
     i++;
}
console.log("Given Numbers: "+c);
console.log("Game Over");
console.log("Lucky Number is "+b)


