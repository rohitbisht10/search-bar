const billItems = [
  {
    id: 1,
    itemName: "Bread",
    price: 20,
  },
  {
    id: 2,
    itemName: "Butter",
    price: 50,
  },
  {
    id: 3,
    itemName: "Tomatoes",
    price: 30,
  },
  {
    id: 4,
    itemName: "Onion",
    price: 40,
  },
  {
    id: 5,
    itemName: "Pomegranate",
    price: 60,
  },
  {
    id: 6,
    itemName: "Apple",
    price: 40,
  },
  {
    id: 7,
    itemName: "Grapes",
    price: 30,
  },
  {
    id: 8,
    itemName: "Mango",
    price: 100,
  },
];

const table = document.querySelector("table");
const searchInput = document.querySelector("#search-bar");

const createTableHeader = function () {
  const headerRow = document.createElement("tr");

  const idElement = document.createElement("th");
  idElement.innerText = "S no.";

  const itemNameElement = document.createElement("th");
  itemNameElement.innerText = "Item Name";

  const priceElement = document.createElement("th");
  priceElement.innerText = "Price";

  headerRow.appendChild(idElement);
  headerRow.appendChild(itemNameElement);
  headerRow.appendChild(priceElement);

  table.appendChild(headerRow);
};

const createTableBody = function (items) {
  let tableRowsFragment = document.createDocumentFragment();

  items.forEach(function (billItem) {
    const tableRow = document.createElement("tr");

    const idElement = document.createElement("td");
    idElement.innerText = billItem.id;

    const nameElement = document.createElement("td");
    nameElement.innerText = billItem.itemName;

    const priceElement = document.createElement("td");
    priceElement.innerText = billItem.price;

    tableRow.appendChild(idElement);
    tableRow.appendChild(nameElement);
    tableRow.appendChild(priceElement);

    tableRowsFragment.appendChild(tableRow);
  });

  table.appendChild(tableRowsFragment);
};

const createTable = function (billItems) {
  table.innerHTML = "";

  if (!(billItems && billItems.length)) {
    table.innerText = "No items found!";
    return;
  }

  createTableHeader();
  createTableBody(billItems);
};

const update = function (event) {
  console.log(event.target.value);
  const userInput = event.target.value;

  const matchedBillItems = billItems.filter(function (billItem) {
    return billItem.itemName.toLowerCase().includes(userInput.toLowerCase());
  });
  console.log(matchedBillItems);

  createTable(matchedBillItems);
};

createTable(billItems);
