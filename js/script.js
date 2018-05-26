var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, zipCode, address, teaserImage, CreaTime) {
        this.LocationName = "";
        this.LocationCity = "";
        this.LocationZipCode = 0;
        this.LocationAddress = "";
        this.LocationTeaserImage = "";
        this.LocationCreaTime = "";
        this.LocationName = name;
        this.LocationCity = city;
        this.LocationZipCode = zipCode;
        this.LocationAddress = address;
        this.LocationTeaserImage = teaserImage;
        this.LocationCreaTime = CreaTime;
    }
    return Locations;
}());
var Places = /** @class */ (function (_super) {
    __extends(Places, _super);
    function Places(name, city, zipCode, address, teaserImage, CreaTime) {
        return _super.call(this, name, city, zipCode, address, teaserImage, CreaTime) || this;
    }
    return Places;
}(Locations));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zipCode, address, teaserImage, CreaTime, phone, types, webAddress) {
        var _this = _super.call(this, name, city, zipCode, address, teaserImage, CreaTime) || this;
        _this.phone = phone;
        _this.types = types;
        _this.webAddress = webAddress;
        return _this;
    }
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, teaserImage, CreaTime, eventDate, eventTime, ticketPrice, concerthall, hall, webAddress1) {
        var _this = _super.call(this, name, city, zipCode, address, teaserImage, CreaTime) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        _this.concerthall = concerthall;
        _this.hall = hall;
        _this.webAddress1 = webAddress1;
        return _this;
    }
    return Events;
}(Locations));
function addPlace() {
    var Elements = [];
    var StCharles = new Places("St. Charles Church", "Wien", 1010, "Karlsplatz 1", "img/place1.jpg", "26.05.2018 05:23");
    var viennaZoo = new Places("Zoo Vienna", "Wien", 1130, "Maxingstraße 13b", "img/place2.jpg", "26.05.2018 05:23");
    Elements = [StCharles, viennaZoo];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('places').innerHTML += "\n   <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n     <img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n     <h3>" + Elements[i].LocationName + "</h3>\n     <p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n     <p>Created: " + Elements[i].LocationCreaTime + "</p>\n    </div>\n   </div>\n  ";
    }
}
addPlace();
function addRestaurants() {
    var Elements = [];
    var LemonLeafThai = new Restaurants("Lemon Leaf Thai Restaurant", "Wien", 1050, "Kettenbrückengasse 19", "img/restaurant1.png", "25.05.2018 22:46", "+43(1)5812308", "Thai", "www.lemonleaf.at");
    var Sixta = new Restaurants("SIXTA", "Wien", 1050, "Schönbrunner Straße 21", "img/restaurant2.png", "25.05.2018 22:46", "+43 1 58 528 56", "Wienerisch", "http://www.sixta-restaurant.at/");
    Elements = [LemonLeafThai, Sixta];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('restaurants').innerHTML += "\n   <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n     <img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n     <h3>" + Elements[i].LocationName + "</h3>\n     <p>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n     <p>Kontakt: " + Elements[i].phone + "</p>\n     <p>Art: " + Elements[i].types + "</p>\n     <p>Homepage: " + Elements[i].webAddress + "</p>\n     <p>Created: " + Elements[i].LocationCreaTime + "</p>\n    </div>\n   </div>\n  ";
    }
}
addRestaurants();
function addEvents() {
    var Elements = [];
    var Kris = new Events("Kris Kristofferson", "Wien", 1150, "Roland Rainer Platz 1", "img/event1.jpeg", "26.05.2018 12:06", "Fr., 15.06.2018", " 20:00", "58,50", "Wiener Stadthalle", "Halle F", "www.kriskristofferson.com/");
    var Lenny = new Events("Lenny Kravitz", "Wien", 1150, "Roland Rainer Platz 1", "img/event2.jpg", "26.05.2018 12:06", "Sat, 09.06.2018", "19:30", "47,80", "Wiener Stadthalle", "Halle D", "www.lennykravitz.com/");
    Elements = [Kris, Lenny];
    for (var i = 0; i < Elements.length; i++) {
        document.getElementById('events').innerHTML += "\n\t\t <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t <img src=\"" + Elements[i].LocationTeaserImage + "\" alt=\"text\" class=\"img-responsive center-block\">\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t <h3>" + Elements[i].LocationName + "</h3>\n\t\t\t <p>" + Elements[i].concerthall + " - " + Elements[i].hall + "<br>" + Elements[i].LocationAddress + ", " + Elements[i].LocationZipCode + " " + Elements[i].LocationCity + "</p>\n       <p>Preis: " + Elements[i].ticketPrice + " \u20AC</p>\n       <p>Homepage: " + Elements[i].webAddress1 + "</p>\n       <p>Created: " + Elements[i].LocationCreaTime + "</p>\n      </div>\n\t\t </div>\n  ";
    }
}
addEvents();
