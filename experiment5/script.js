const productsElement = document.querySelector("#products");
const category = document.querySelector("#category");

const products = [
  { id: 1, name: "Shirt", category: "clothing" },
  { id: 2, name: "Book", category: "books" },
  { id: 3, name: "T-shirt", category: "clothing" },
  { id: 4, name: "Pen", category: "books" },
  { id: 5, name: "Pant", category: "clothing" },
  { id: 6, name: "Notebook", category: "books" },
];

function filterProducts(category) {
  if (category === "all") {
    return products;
  } else {
    return products.filter((value) => {
      return value.category === category;
    });
  }
}
let filtered;
category.addEventListener("change", (e) => {
  filtered = filterProducts(e.target.value);
  productsElement.innerHTML = filtered
    .map((value) => {
      return `<div style="border: 1px solid gray; padding: 10px;margin:5px;">${value.name}</div>`;
    })
    .join("");
});

filtered = filterProducts("all");

productsElement.innerHTML = filtered
  .map((value) => {
    return `<div style="border: 1px solid gray; padding: 10px;margin:5px;">${value.name}</div>`;
  })
  .join("");
