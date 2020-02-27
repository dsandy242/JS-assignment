
function chances(num)
{
    var b=Math.floor(Math.random()*(20-1))+1;
    var c=[];
    var i=0;
 while(i<num)
{    
    var d = prompt("give a number");
    if(isNaN(d)|| d=='')
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
    c.push(d);
     }
     i++;
}
console.log("You Loose Your Chance");
console.log("Given Values:"+c);
console.log("LUCKY Number:"+b)
console.log("Game Over");

}
chances(3)

