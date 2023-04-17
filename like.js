// Define a function to click the element and press the arrow key down
let fifthNum = 1;
function clickAndArrow() {
  // Find the element using its XPath with the updated fifth number
  const element = document.evaluate(`/html/body/div[2]/div[3]/div[2]/div[1]/div[$(fifthNum)]/div/div[2]/div[2]/button[1]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  // Click the element
  element.click();

  // Press the arrow key down
  window.dispatchEvent(new KeyboardEvent('keydown', { 'keyCode': 40 }));

  // Update the fifth number in the XPath for the next iteration
  fifthNum += 1;

  // Wait for a short time before calling the function again
  setTimeout(clickAndArrow, 1000);
}

// Call the function to start the endless loop
clickAndArrow();
