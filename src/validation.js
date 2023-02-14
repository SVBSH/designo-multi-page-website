export default function myFunction() {
  const inpObj = document.getElementById("name");
  if (!inpObj.checkValidity()) {
    document.getElementById("err").innerHTML = inpObj.validationMessage;
  }
}