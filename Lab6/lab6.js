function getExtension() {
  var name;
  var extension

  //Get the value of the input field with id="filename"
  name = document.getElementById("filename").value;

  //Get file extension
  extension = name.split('.').pop();
  document.getElementById("extension").innerHTML = "<strong>File Extension: " + extension + "</strong>";
}