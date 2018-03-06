(function (){
    var app=angular.module('app',[]);
    app.controller('Ch3',[Ch3]);

    function Ch3(){
        var vm = this;
        vm.hotelName = 'Park';
        vm.roomRate = 240;
        vm.discountOffered= 36;
        vm.daysValid= 7;
        vm.specialRate=calcOfferPrice(vm.roomRate,vm.discountOffered);

        function calcOfferPrice(roomRate, discountOffered){
            return roomRate-discountOffered;
        }

        var today = new Date();
        vm.offerEnds = offerExpires(today).toUpperCase();

        function offerExpires(currentDate) {
            var expiryDate, month, day, daysOfWeek, monthsOfYear, expiryMsg;

            daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            monthsOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            expiryDate = new Date(currentDate.getTime() + vm.daysValid*1000*60*60*24);
            day = daysOfWeek[expiryDate.getDay()];
            month = monthsOfYear[expiryDate.getMonth()];
            expiryMsg="OFFER EXPIRES NEXT "+day+"\r\n ("+expiryDate.getDate()+" "+month.toUpperCase()+" "+expiryDate.getFullYear()+")";
            return(expiryMsg);
        }

 
    }
})();

