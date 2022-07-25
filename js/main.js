let users = [
  {
    name: "Avazbek",
    telNumber: "998911645099"
  },
  {
    name: "Umid",
    telNumber: "998911758585"
  },
  {
    name: "O'ktam",
    telNumber: "998911777767"
  },
  {
    name: "Valijon",
    telNumber: "998917777777"
  },
  {
    name: "Sarvar",
    telNumber: "998911222222"
  },
  {
    name: "Sardor",
    telNumber: "998911222322"
  },
  {
    name: "Toxir",
    telNumber: "998911645022"
  }
]

function findUser(array, number) {

  for(i = 0; i < Object.values(users).length; i++){
    var elValue = Object.values(users[i]);


    if(number == elValue[1]){
      return elValue[0];
    }
    else{
      console.log("");;
    }
  }

}

console.log(findUser(users, 998917777777));