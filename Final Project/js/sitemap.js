
/*------------------------ vars ------------------------*/
var file = "sitemap.xml";

/*------------------------ parser ------------------------*/
var Connect = new XMLHttpRequest();
Connect.open("GET", file , false);
Connect.setRequestHeader("Content-Type", "text/xml");
Connect.send(null);
var TheDocument = Connect.responseXML;
var XMLs = TheDocument.childNodes[0];
	
/*------------------------ output ------------------------*/
var output;
output = "<table><tr><th>Location</th><th>Last Modification</th><th>Change Frequency</th><th>Priority</th></tr>"; 	

for (var i = 0; i < XMLs.children.length; i++){
	var XML = XMLs.children[i];

	var LOC = XML.getElementsByTagName("loc");
	var LASTMOD = XML.getElementsByTagName("lastmod");
	var CHANGEFREQ = XML.getElementsByTagName("changefreq");
	var PRIORITY = XML.getElementsByTagName("priority");
	
	output += "<tr><td>";
	output += LOC[0].textContent.toString();
	output += "</td><td>";
	output += LASTMOD[0].textContent.toString(); 
	output += "</td><td>"; 
	output += CHANGEFREQ[0].textContent.toString();
	output += "</td><td>";
	output += PRIORITY[0].textContent.toString();
	output += "</td></tr>";
}

	output += "</table>";
	
	document.getElementById("sitemap").innerHTML = output;
	
	

