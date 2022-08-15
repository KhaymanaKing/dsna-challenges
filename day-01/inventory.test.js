let inventory = { 
    eggs: 20,
    bananas: 10,
    bread: 5, 
    peanutButter: 1
}

function inventoryChecker(inventory, item){
  const qty = inventory[item];
  return qty > 5 ? 'plenty of inventory' : `running low on ${item}`;
}

test("Inventory checking", () => {
    const item = 'grapes';
    const check = inventoryChecker(inventory, item);
    expect(check).toBe(`running low on ${item}`)
})
test("Inventory checking", () => {
    const item = 'bananas';
    const check = inventoryChecker(inventory, item);
    expect(check).toBe('plenty of inventory')
})