function list() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            var items = document.getElementById("items");
            if (items.value === "all") 
            {
                for (var i = 0; i < response.length; i++) 
                {
                    output += "<tr><td>" + response[i].slNo + "</td><td>" + response[i].name + "</td><td>" + response[i].quantity + "</td><td>" + response[i].unit + "</td><td>" + response[i].department + "</td><td>" + response[i].notes + "</td></tr>"
                }
            }
         else 
         {
            for (var i = 0; i < response.length; i++) {
                if (response[i].department === items.value) 
                {
                    output += "<tr><td>" + response[i].slNo + "</td><td>" + response[i].name + "</td><td>" + response[i].quantity + "</td><td>" + response[i].unit + "</td><td>" + response[i].department + "</td><td>" + response[i].notes + "</td></tr>"
                }
            }
        }   
            document.getElementById("tab").style.visibility = "visible";
            document.getElementById("content").innerHTML = output;
        }
    }
    xhttp.open("GET", "list.json", true);
    xhttp.send();
}
