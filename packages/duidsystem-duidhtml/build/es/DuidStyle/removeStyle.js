export default function removeStyle(id) {
  let sheetToBeRemoved = window.document.getElementById(id);
  let sheetParent = sheetToBeRemoved.parentNode;
  sheetParent.removeChild(sheetToBeRemoved);
}