function makeDiagonalRed(table) {

  for ( let i = 0; i < table.getElementsByTagName("tr").length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }  
}
