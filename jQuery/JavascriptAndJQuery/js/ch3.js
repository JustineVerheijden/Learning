(function (){
    var hotel = {
        name: "Park",
        roomRate: 240,
        discountOffered: 36,
        daysValid: 7,
        calcOfferPrice: function(){
            return this.roomRate-this.discountOffered;
        }
    };

    var elHotel = document.getElementById("hotelName");
    elHotel.textContent = hotel.name.toUpperCase();

    var elRoomRate = document.getElementById("roomRate");
    elRoomRate.textContent = "$"+hotel.roomRate.toFixed(2);

    var elDiscountOffered = document.getElementById("specialRate");
    var offerPrice = hotel.calcOfferPrice();
    elDiscountOffered.textContent = "$"+offerPrice;

    var elExpiry = document.getElementById("offerEnds");
    var today = new Date();
    elExpiry.innerHTML = offerExpires(today).toUpperCase();

    function offerExpires(currentDate) {
        var expiryDate, month, day, daysOfWeek, monthsOfYear, expiryMsg;

        daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        monthsOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        expiryDate = new Date(currentDate.getTime() + hotel.daysValid*1000*60*60*24);
        day = daysOfWeek[expiryDate.getDay()];
        month = monthsOfYear[expiryDate.getMonth()];
        expiryMsg="OFFER EXPIRES NEXT "+day+"<br /> ("+expiryDate.getDate()+" "+month.toUpperCase()+" "+expiryDate.getFullYear()+")";
        return(expiryMsg);
    }
}());