var express = require('express');
var app = express();



var HRServiseController=function (req, res) {
  console.log("Your HR Service is Here");
  var  HRService=[
				{firstName:'pramod',lastName:'desai',Type:'Manager',Salary:"1200000",company:					"infoway"},
				{firstName:'Vikas',lastName:'Singh',Type:'Manager',Salary:"1200000",company:"Microsoft"},
				{firstName:'Heerendra',lastName:'Mahore',Type:'Sales_Manager',Salary:"1000000",company:"Cybage"},
				{firstName:'Aditya',lastName:'Suryawanshi',Type:'Team_Leader',Salary:"1100000",company:"IACSD"},
			
				];
  res.send(HRService);
};

app.get('/HRService',HRServiseController );

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Your HR Service is listening at http://localhost:8000", host, port)
})
