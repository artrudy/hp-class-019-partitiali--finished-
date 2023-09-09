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
    li.classList.add("class" + index);
    li.setAttribute("id", "id_" + index);
    var elementToAppend = document.querySelector(".arrays");
    // console.log(elementToAppend);
    elementToAppend === null || elementToAppend === void 0 ? void 0 : elementToAppend.appendChild(li);
    li.innerHTML = index + 1 + ": " + JSON.stringify(it);
    var imageElement = document.createElement("img");
    li.appendChild(imageElement);
    imageElement.src = index + ".jpg";
    li.appendChild;
    li.style.display = "flex";
    li.style.flexDirection = "column";
});
document.body.style.listStyle = "none";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "space-around";
document.body.style.alignItems = "center";
// console.log(elementToChangeStyle);
