function addItem(e) {
  e.preventDefault();

  let mpesaCode = document.getElementById("mpesaCode").value;

  if (!mpesaCode) {
    alert("Please enter your M-Pesa transaction code");
    return;
  }

  let items = getItems();

  let newItem = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    phone: document.getElementById("phone").value,
    image: document.getElementById("image").value || "https://via.placeholder.com/150",
    paymentCode: mpesaCode,
    status: "pending"
  };

  items.push(newItem);
  saveItems(items);

  alert("Submitted! Waiting for approval.");
  window.location.href = "index.html";
}
function getItems() {
  return JSON.parse(localStorage.getItem("items") || "[]");
}

function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

// Add item
function addItem(e) {
  e.preventDefault();

  let items = getItems();

  let newItem = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    phone: document.getElementById("phone").value,
    image: document.getElementById("image").value || "https://via.placeholder.com/150"
  };

  items.push(newItem);
  saveItems(items);

  alert("Item posted! Pay KSh 20 via M-Pesa (manual in next version)");
  window.location.href = "index.html";
}

// Display items
function displayItems(data) {
  let container = document.getElementById("items");
  container.innerHTML = "";

  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}" width="100%">
        <h3>${item.name}</h3>
        <p>KSh ${item.price}</p>
        <a href="https://wa.me/${item.phone}">Chat Seller</a>
      </div>
    `;
  });
}

function searchItems() {
  let q = document.getElementById("search").value.toLowerCase();
  let items = getItems();

  let filtered = items.filter(i =>
    i.name.toLowerCase().includes(q)
  );

  displayItems(filtered);
}

// Load items on homepage
if (document.getElementById("items")) {
  displayItems(getItems());
}
