var Country=["US","UK","India","China","Japan","Russia"]
Currency=["$","£","₹","¥ ","₽"]
userCountry=prompt("Give Country Name");
Amount=prompt("Give Amount You want to Convert:")
for(i=0;i<Country.length;i++)
{
if(userCountry==Country[i])
{
    document.write("Exchangable:"+Country[i]+"  "+Currency[i])
    break;
}
}


