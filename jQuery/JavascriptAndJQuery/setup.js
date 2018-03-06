
  var dummyElement = document.createElement('select');
  dummyElement.setAttribute("id","equipmentType");
//var model = document.getElementById("model");
  document.getElementById = jasmine.createSpy('HTML Element').andReturn(dummyElement);

  var HTMLElements = {};
  document.getElementById = jasmine.createSpy('HTML Element').andCallFake(function(ID) {
   if(!HTMLElements[ID]) {
      var newElement = document.createElement('select');
      newElement.setAttribute("id","equipmentType");
      HTMLElements[ID] = newElement;
   }
   return HTMLElements[ID];
});