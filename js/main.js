
getWeather("cairo")
let searchInput=document.getElementById("searchInput")
searchInput.addEventListener("input",function(){
    //console.log(searchInput.value)
    getWeather(searchInput.value)
})
async function getWeather(a){
    let response=await fetch(`    https://api.weatherapi.com/v1/forecast.json?key=a58b88199b7f41f8a71133420241412&q=${a}&days=3
`)
if(response.ok){
    let dataResponse=await response.json();
    displayData(dataResponse)
    //console.log(dataResponse)

}
}

//async function search(a){let t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`
//getWeather("london")
function displayData(arr){
   
console.log(arr.forecast.forecastday[1].day.condition)
    //var day=""
    var dayArray=["sunday","monday","tuesday","wednsday","thursday","friday","saturday"];
    var monthArray=["January","February","march","April","May","June","July","August","september","October","Novmber","December"]
    var nextday="";
    var anotherday="";
    var day="";
    var month="";;
    var dt=new Date(arr.current.last_updated);

    var dayFrom=dt.getDay()
    day=dayArray[dayFrom];
    if(dayFrom==6){
        nextday=dayArray[0];
        anotherday=dayArray[1]
    }
    else if(dayFrom==5){
        anotherday=dayArray[0];
        nextday=dayArray[dayFrom+1];
    }
else{
    nextday=dayArray[dayFrom+1];
    anotherday=dayArray[dayFrom+2];
}
    month=monthArray[dt.getMonth()]
    let cartona=""
   cartona+=`       
   <tr>
<th class="one"><div class="hh"><span>${day}</span><span>${dt.getDate()}${month}</span></div></th>
<th class="two">${nextday}</th>
<th class="one">${anotherday}</th>
</tr>
<tr>
<td class="td-one">
   <p class=" cairoName ps-2 text-secondary">${arr.location.name}</p>
   <h1 class="ps-2">${arr.current.temp_c}&deg;C</h1>
   
  <img class="dataImg ps-5" src=https:${arr.current.condition.icon}>
   <p class="ps-2">${arr.current.condition.text}</p>

</td>
<td class="td-two text-center">
   <img class="dataImg " src="https:${arr.forecast.forecastday[1].day.condition.icon}">
   <h4 class="p-2">${arr.forecast.forecastday[1].day.maxtemp_c}&deg;C</h4>
   <h6>${arr.forecast.forecastday[1].day.mintemp_c}&deg;C</h6>
   <p class="ps-2">${arr.forecast.forecastday[1].day.condition.text}</p>
</td>maxtemp_c
<td class="td-one text-center">
   <img class="dataImg " src="https:${arr.forecast.forecastday[2].day.condition.icon}">
   <h4 class="p-2">${arr.forecast.forecastday[1].day.maxtemp_c}&deg;C</h4>
   <h6>${arr.forecast.forecastday[1].day.mintemp_c}&deg;C</h6>
   <p class="ps-2">${arr.forecast.forecastday[1].day.condition.text}</p>
</td>
</td>
</tr>       

`
    document.getElementById("tableData").innerHTML=cartona
}