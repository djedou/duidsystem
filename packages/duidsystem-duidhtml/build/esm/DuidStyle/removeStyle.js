export default function removeStyle(id) {
  var sheetToBeRemoved = window.document.getElementById(id);
  var sheetParent = sheetToBeRemoved.parentNode;
  sheetParent.removeChild(sheetToBeRemoved);
}