// MAIN CONTROLLER
function mainController($scope) {


function ajouterTableau(){
  let enfantRow = document.createElement('TR');
  enfantRow.innerHTML=`<td>${$scope.lastname}</td><td>${$scope.firstname}</td><td>${$scope.email}</td>`
  let parentTb = document.getElementById("parentTable");
  parentTb.appendChild(enfantRow);
  }
document.getElementById('ajouter').addEventListener('click', ajouterTableau);
}
