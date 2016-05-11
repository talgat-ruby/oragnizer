var fillTable = function(myArr) {
	var container = document.getElementById('table-body'), elem = '', len = myArr.length, i;
	for(i = 0; i < len; i++) {
		elem += '<tr>' + '<td>' + myArr[i].name + '</td>' + '<td>' + myArr[i].email + '</td>' + '<td>' + myArr[i].surname + '</td>' + '</tr>';
	}
	container.innerHTML += elem ;	
};

var fillOrganizer = function(myObj) {
	var calendar = document.getElementById('datepicker'),
	dropdown = document.getElementById('dropdown'), len = myObj.options.length, 
	elem = '', i;

	calendar.value = myObj.date;
	for(i = 0; i < len; i++) {
		elem += '<option>' + myObj.options[i] + '</option>';
	}
	dropdown.innerHTML += elem;
}

function loadJSON(path, fn) {   
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', path, true); 
    req.onreadystatechange = function () {
      if (req.readyState == 4 && req.status == "200") {
        var jsonObj = req.responseText;
        fn(JSON.parse(jsonObj));
      }
    };
    req.send(null);  
 }

var button = document.getElementById('submit'), alterTable = true;

button.addEventListener('click', function(){
	if(alterTable){
		loadJSON('data/table2.json', fillTable);
		alterTable = false;
	}
}, false);


loadJSON('data/table1.json', fillTable);
loadJSON('data/test.json', fillOrganizer);
