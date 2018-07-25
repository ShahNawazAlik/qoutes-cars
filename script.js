let cars= [
{
	name:"Corolla",
	companyname: "Toyota",
	model:"2018",
	imgURL:"corolla.jpg",
	readMoreUrl:"https://en.wikipedia.org/wiki/Toyota_Corolla"

},
{
	name:"Civic",
	companyname: "Honda",
	model:"2018",
	imgURL:"honda-civic.jpg",
	readMoreUrl:"https://en.wikipedia.org/wiki/Honda_Civic"
},
{
	name:"Tucson",
	companyname: "Hyundai",
	model:"2018",
	imgURL:"hyundai-tucson.jpg",
	readMoreUrl:"https://en.wikipedia.org/wiki/Hyundai_Tucson"

},
{
	name:"Jimny",
	companyname: "Suzuki",
	model:"2018",
	imgURL:"jimmny.png",
	readMoreUrl:"https://en.wikipedia.org/wiki/Suzuki_Jimny"

},
{
	name:"AMG C-Class Coupe",
	companyname: "Mercedes",
	model:"2018",
	imgURL:"mercedes-amg.png",
	readMoreUrl:"https://en.wikipedia.org/wiki/Mercedes-AMG"

},
{
	name:"Juke",
	companyname: "Nissan",
	model:"2017",
	imgURL:"nisan-juke.png",
	readMoreUrl:"https://en.wikipedia.org/wiki/Nissan_Juke"

},
{
	name:"DN F-SEDAN",
	companyname: "Daihatsu",
	model:"2017",
	imgURL:"sedan-dihatsu.jpg",
	readMoreUrl:"https://en.wikipedia.org/wiki/Daihatsu"

},
{
	name:"Fortuner",
	companyname: "Toyota",
	model:"2018",
	imgURL:"fortuner-toyota.jpg",
	readMoreUrl:"https://en.wikipedia.org/wiki/Toyota_Fortuner"

},]

function initialize(){
	carsGroupEl=document.querySelector("#cars-list");
	for (let i = 0; i < cars.length; i++) {
		carsGroupEl.innerHTML+= `<div class="car-image-div" 
		style="background-image: url('images/${cars[i].imgURL}')" onclick="changeCar(${i})">
		<p class="cars-img-text">${cars[i].name}</P>
		</div>
		
		` 

	}
}
function changeCar(abcd){
	//console.log(cars[abcd].name);
	document.querySelector("#car-name").innerHTML= cars[abcd].name;
	document.querySelector("#car-company").innerHTML= cars[abcd].companyname;
	//document.querySelector("#car-img").innerHTML = cars[abcd].imgURL;
	document.querySelector("#car-img").style.background =`url(images/${cars[abcd].imgURL})`s;;
	document.querySelector("#car-model").innerHTML = cars[abcd].model;
	document.querySelector("#cars-bottom-links a").href= cars[abcd].readMoreUrl;
}