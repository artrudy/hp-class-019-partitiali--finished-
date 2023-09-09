const numberOfObjects: number = 10;

const objectsArray: [object] = [];

for (let i = 1; i <= numberOfObjects; i += 1) {
  console.log(i);

  let key: string = `${i}`;

  let entry: string = `entry${i}`;

  objectsArray.push({ key: entry });
}

// console.log(objectsArray);

// console.log(objectsArray[0]);

objectsArray.map((it, index) => {
  let li = document.createElement("li");
  li.classList.add(`class${index}`);
  li.setAttribute("id", `id_${index}`);

  const elementToAppend = document.querySelector(".arrays");
  // console.log(elementToAppend);
  elementToAppend?.appendChild(li);

  li.innerHTML = `${index + 1}: ${JSON.stringify(it)}`;

  const imageElement = document.createElement("img");
  li.appendChild(imageElement);
  imageElement.src = `${index}.jpg`;

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
