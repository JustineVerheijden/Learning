function Hotel(name,rooms,booked) {
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailability = function (){
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel("Quay",40,25);
var parkHotel = new Hotel("Park",120,77);

var details1=quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();

var elHotel1 = document.getElementById("hName1");
elHotel1.textContent = details1;

parkHotel.gym = true;
parkHotel.pool=false;
delete parkHotel.booked;

var details2 = parkHotel.name;// + " rooms: ";
//    details2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById("hName2");
elHotel2.textContent = details2;

var elPool = document.getElementById("pool");
elPool.className = "Pool: " + parkHotel.pool;
elPool.textContent ="asfasfasdfasf";

var elGym = document.getElementById("gym");
elGym.className = "Gym: " + parkHotel.gym;
elGym.textContent="asfasf";
/*
var msg = '<h2>brower window</h2><p>width: '+window.innerWidth+'</p>';
msg += '<p>height: ' +window.innerHeight+'</p>';
msg += '<h2>history</h2><p>items: '+window.history.length +'</p>';
msg += '<h2>screen</h2><p>width:'+window.screen.width+'</p>';
msg += '<p>height: '+window.screen.height+'</p>';

var el = document.getElementById("info");
el.innerHTML = msg;

alert ('Current page: '+window.location);*/
/*
var msg = '<p><b>page title: </b>'+document.title + '<br />';
msg += '<b>page address: </b>' + document.URL + '<br />';
msg += '<b>last modified: </b>' +document.lastModified+'<br />';

var el = document.getElementById("footer");
el.innerHTML=msg;
*/
/*
var saying = "Home Sweet Home";
var msg='<h2>length</h2><p>' + saying.length + '</p>';
msg += '<h2>uppercase</h2><p>'+saying.toUpperCase()+'</p>';
msg += '<h2>lowercase</h2><p>'+saying.toLowerCase()+'</p>';
msg += '<h2>character index</h2><p>'+saying.charAt(12)+'</p>';
msg += '<h2>first ee</h2><p>'+saying.indexOf('ee')+'</p>';
msg += '<h2>last e</h2><p>' +saying.lastIndexOf('e')+'</p>';
msg += '<h2>character index: 8-14</h2><p>'+saying.substring(8,14)+'</p>';
msg += '<h2>replace</h2><p>'+saying.replace('me','w')+'</p>';

var el = document.getElementById("info");
el.innerHTML = msg;
*//*
var originalNunber = 10.23456;

var msg = '<h2>original number</h2><p>'+originalNunber+"</p>";
msg += '<h2>toFixed()</h2><p>'+originalNunber.toFixed(3)+"</p>";
msg += '<h2>toPrecision()</h2><p>'+originalNunber.toPrecision(3)+'</p>';

var el = document.getElementById("info");
el.innerHTML = msg;
*/
var today = new Date();
var year = today.getFullYear();

var elf= document.getElementById("footer");
elf.innerHTML = '<p>Copyright &copy;' + year+'</p>';

