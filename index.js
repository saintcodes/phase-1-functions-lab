// Code your solution in this file!
let scuberHQ = 42
let feetPerBlock = 264

function distanceFromHqInBlocks(pickup) {
  let result = pickup > scuberHQ ? pickup - scuberHQ : scuberHQ - pickup *1
  return result
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup)*feetPerBlock
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(((start-end))*feetPerBlock)
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if(distance <=400) {
    return 0
  } else if (distance >400 && distance <=2000) {
    return (distance-400)*0.02
  } else if (distance >2000 && distance <=2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}