let lunches = [];

function addLunchToEnd(lunches, item) {
  lunches.push(item);
  console.log(item + " added to the end of the lunch menu.");
  return lunches;
}

function addLunchToStart(lunches, item){
  lunches.unshift(item);
  console.log(item + " added to the start of the lunch menu.");
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = lunches.pop();
    console.log(removed + " removed from the end of the lunch menu.");
  }
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = lunches.shift();
    console.log(removed + " removed from the start of the lunch menu.");
  }
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * lunches.length);
    console.log("Randomly selected lunch: " + lunches[randomIndex]);
  }
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + lunches.join(", "));
  }
}
