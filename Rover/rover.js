// Rover Object Goes Here
// ======================
const rover = {
  direction: "N",
  position: {
    x:1,
    y:1,
  }
}

const mapa = 
[
  [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 1, 0, 0, 0, 1],
]
// ======================
function turnLeft(rover){
  if ("N" === rover.direction) {
    rover.direction = "W"
  } else if ("W" === rover.direction) {
    rover.direction = "S"
  } else if ("S" === rover.direction) {
    rover.direction = "E"
  } else {
    rover.direction = "N"
  }
  
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    default:
      rover.direction = "N";
  }

  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      if (mapa[rover.position.x][rover.position.y-1] === 0 && (rover.position.y > 0) ) {
        rover.position.y-- ;
      } else {crash()}
      break;
    case "W":
        if (mapa[rover.position.x-1][rover.position.y]=== 0 && (rover.position.x > 0)) {
      rover.position.x-- ;
      } else {crash()}
      break;
    case "E":
      if (mapa[rover.position.x+1][rover.position.y] === 0 && (rover.position.x < mapa.length)) {
      rover.position.x++ ;
      } else {crash()}
      break;
    case "S":
      if (mapa[rover.position.x][rover.position.y+1] === 0 && (rover.position.y < mapa.length)) {
      rover.position.y++ 
      } else {crash()}
      break;
  }
  console.log("moveForward was called")
  console.log(rover.position)
}

function command (orders) {
 
  for (var i = 0; i < orders.length; i++){
    // var order = orders[i];
    switch (orders[i]) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;  
      case "l":
        turnLeft(rover);
        break;
        case "b":
        moveBackwards(rover);
        break;
        default:
        console.log ("not valid");
        break; 
      }
    }
    console.log ("is moving");
}

function crash () {
console.log ("No me puedo mover");
}

function moveBackwards(rover){
  switch (rover.direction) {
    case "N":
      if (mapa[rover.position.x][rover.position.y-1] === 0 && (rover.position.y > 0) ) {
        rover.position.y-- ;
      } else {crash()}
      break;
    case "W":
        if (mapa[rover.position.x-1][rover.position.y]=== 0 && (rover.position.x > 0)) {
      rover.position.x-- ;
      } else {crash()}
      break;
    case "E":
      if (mapa[rover.position.x+1][rover.position.y] === 0 && (rover.position.x < mapa.length)) {
      rover.position.x++ ;
      } else {crash()}
      break;
    case "S":
      if (mapa[rover.position.x][rover.position.y+1] === 0 && (rover.position.y < mapa.length)) {
      rover.position.y++ 
      } else {crash()}
      break;
  }
  console.log("moveBackward was called")
  console.log(rover.position)
}

  command("flrrblffrrfflb")