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

  document.body.appendChild(li);

  li.innerHTML = `${index + 1}: ${JSON.stringify(it)}`;
});

// for (let j = 0; j < objectsArray.length; j += 1) {
//   console.log(objectsArray[i]);
//   let li = document.createElement("li");

//   document.body.appendChild(li);

//   li.innerHTML = JSON.stringify(objectsArray[j]);
// }
