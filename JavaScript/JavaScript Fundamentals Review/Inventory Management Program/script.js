let inventory = [];

function findProductIndex(item){
  let search = item.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].name === search) {
    return i;
  }
}
return -1;
}

function addProduct(item){
  let name = item.name.toLowerCase();
  let quantity = item.quantity;

  let index = findProductIndex(name);

  if (index !== -1){
    inventory[index].quantity += quantity;
    console.log(name + " quantity updated");
  } else {
    inventory.push({ name: name, quantity: quantity });
    console.log(name + " added to inventory");
  }
}

function removeProduct(name, quantityToRemove) {
  name = name.toLowerCase();

  let index = findProductIndex(name);

  if (index === -1) {
    console.log(name + " not found");
  } else {
    let currentQuantity = inventory[index].quantity;

    if (currentQuantity < quantityToRemove) {
      console.log("Not enough " + name + " available, remaining pieces: " + currentQuantity);
    } else {
      inventory[index].quantity -= quantityToRemove;

      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
      } else {
        console.log("Remaining " + name + " pieces: " + inventory[index].quantity);
      }
    }
  }
}
