//Heading FreeLancer Forum

//DOM
const body = document.getElementById("title");
const title = document.createElement("h1");
title.textContent = "Freelancer Forum!";
body.append(title);

//Names of Freelancers
const names = ["Alice", "Bob", "Carol"];

//Occupations
const occupations = ["Writer", "Teacher", "Programmer"];

//Prices
const prices = ["$30", "$50", "$70"];

//Group the list
const groups = [
  {
    name: "Alice",
    occupation: "Writer",
    price: "$30",
  },
];

//Timer
const addGroupsIntervalId = setInterval(addGroups, 1000);

//Time to Render! (Rendering refers to showing the output in the browser):
function render() {
  const freelance = document.querySelector("#freelance");
  const freeLanceElements = groups.map((group) => {
    const element = document.createElement("li");
    element.classList.add(group.name, group.occupation, group.price);
    element.textContent = `${group.name} - ${group.occupation} - ${group.price}`;
    return element;
  });
  freelance.replaceChildren(...freeLanceElements);
}

//Ranomizing the push
function addGroups() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];

  groups.push({ name, occupation, price });

  render();
}
