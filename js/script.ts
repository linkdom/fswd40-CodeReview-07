class Locations{
LocationName = "";
LocationCity = "";
LocationZipCode = 0;
LocationAddress = "";
LocationTeaserImage = "";
LocationCreaTime = "";


constructor(name, city, zipCode, address, teaserImage, CreaTime){
 this.LocationName = name;
 this.LocationCity = city;
 this.LocationZipCode = zipCode;
 this.LocationAddress = address;
 this.LocationTeaserImage = teaserImage;
 this.LocationCreaTime = CreaTime;

}
}

class Places extends Locations{
constructor(name, city, zipCode, address, teaserImage, CreaTime){
 super(name, city, zipCode, address, teaserImage, CreaTime);
}
}


class Restaurants extends Locations{
  phone;
  types;
  webAddress;
  constructor(name, city, zipCode, address, teaserImage, CreaTime, phone, types, webAddress){
    super(name, city, zipCode, address, teaserImage, CreaTime);
    this.phone = phone;
    this.types = types;
    this.webAddress = webAddress;
}
}

class Events extends Locations{
  eventDate;
  eventTime;
  ticketPrice;
  concerthall;
  hall;
  webAddress1;
  constructor(name, city, zipCode, address, teaserImage, CreaTime, eventDate, eventTime, ticketPrice, concerthall, hall, webAddress1){
   super(name, city,zipCode, address, teaserImage, CreaTime);
   this.eventDate = eventDate;
   this.eventTime = eventTime;
   this.ticketPrice = ticketPrice;
   this.concerthall = concerthall;
   this.hall = hall;
   this.webAddress1 = webAddress1;
}
}



function addPlace(){
var Elements=[];

var StCharles = new Places("St. Charles Church","Wien", 1010, "Karlsplatz 1", "img/place1.jpg", "26.05.2018 05:23");
var viennaZoo = new Places("Zoo Vienna", "Wien", 1130, "Maxingstraße 13b", "img/place2.jpg", "26.05.2018 05:23");

Elements = [StCharles, viennaZoo]

for(var i = 0; i < Elements.length; i++){
 document.getElementById('places').innerHTML += `
   <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
     <img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
     <h3>${Elements[i].LocationName}</h3>
     <p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
     <p>Created: ${Elements[i].LocationCreaTime}</p>
    </div>
   </div>
  `;
}

}

addPlace();

function addRestaurants(){
var Elements=[];

var LemonLeafThai = new Restaurants("Lemon Leaf Thai Restaurant","Wien", 1050, "Kettenbrückengasse 19", "img/restaurant1.png", "25.05.2018 22:46", "+43(1)5812308", "Thai", "www.lemonleaf.at");
var Sixta = new Restaurants("SIXTA", "Wien", 1050, "Schönbrunner Straße 21", "img/restaurant2.png", "25.05.2018 22:46", "+43 1 58 528 56", "Wienerisch", "http://www.sixta-restaurant.at/");

Elements = [LemonLeafThai, Sixta]

for(var i = 0; i < Elements.length; i++){
 document.getElementById('restaurants').innerHTML += `
   <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
     <img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
     <h3>${Elements[i].LocationName}</h3>
     <p>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
     <p>Kontakt: ${Elements[i].phone}</p>
     <p>Art: ${Elements[i].types}</p>
     <p>Homepage: ${Elements[i].webAddress}</p>
     <p>Created: ${Elements[i].LocationCreaTime}</p>
    </div>
   </div>
  `;
}

}

addRestaurants();

function addEvents(){
var Elements=[];

var Kris = new Events("Kris Kristofferson","Wien", 1150, "Roland Rainer Platz 1", "img/event1.jpeg", "26.05.2018 12:06", "Fr., 15.06.2018", " 20:00", "58,50", "Wiener Stadthalle", "Halle F", "www.kriskristofferson.com/");
var Lenny = new Events("Lenny Kravitz", "Wien", 1150, "Roland Rainer Platz 1", "img/event2.jpg", "26.05.2018 12:06", "Sat, 09.06.2018", "19:30", "47,80", "Wiener Stadthalle", "Halle D", "www.lennykravitz.com/");
Elements = [Kris, Lenny]

for(var i = 0; i < Elements.length; i++){
 document.getElementById('events').innerHTML += `
		 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			 <img src="${Elements[i].LocationTeaserImage}" alt="text" class="img-responsive center-block">
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			 <h3>${Elements[i].LocationName}</h3>
			 <p>${Elements[i].concerthall} - ${Elements[i].hall}<br>${Elements[i].LocationAddress}, ${Elements[i].LocationZipCode} ${Elements[i].LocationCity}</p>
       <p>Preis: ${Elements[i].ticketPrice} €</p>
       <p>Homepage: ${Elements[i].webAddress1}</p>
       <p>Created: ${Elements[i].LocationCreaTime}</p>
      </div>
		 </div>
  `;
}

}

addEvents();
