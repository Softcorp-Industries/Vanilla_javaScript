//alert('working')
//  Array Loops
//  for Loop
var myArray = [];

for (let i = 0; i < 5; i++) {
  myArray.push(i);
}
// console.log(myArray); // display the populated array myArray

//  Object Loops
// for..in Loop
var myObjects = {
  'Canada': 'Sasquatch',
  'Nepal': 'Yeti',
  'Scotland': 'Loch Ness Monster'
};

//  var in object
//  for([var] in [object]) {};
for (let property in myObjects) {
  //console.log(property);  // displays the property name
  //console.log(myObjects[property]); // displays the property value
  //console.log("In", property, "we have the", myObjects[property]);
}
