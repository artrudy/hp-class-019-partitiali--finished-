var numberOfObjects = 10;
var objectsArray = [];
for (var i = 1; i <= numberOfObjects; i += 1) {
    console.log(i);
    var key = "" + i;
    var entry = "entry" + i;
    objectsArray.push({ key: entry });
}
// console.log(objectsArray);
// console.log(objectsArray[0]);
objectsArray.map(function (it, index) {
    var li = document.createElement("li");
    document.body.appendChild(li);
    li.innerHTML = index + 1 + ": " + JSON.stringify(it);
});
// for (let j = 0; j < objectsArray.length; j += 1) {
//   console.log(objectsArray[i]);
//   let li = document.createElement("li");
//   document.body.appendChild(li);
//   li.innerHTML = JSON.stringify(objectsArray[j]);
// }
