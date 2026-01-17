
function toggleDropdown() {
  const dropdown = document.getElementById("countryDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// function selectCountry(country) {
//   document.getElementById("downBtn").innerText = country + " ▼";
//   document.getElementById("countryDropdown").style.display = "none";
//   selectCountry('Kenya', './images/kenya.png')
// 

// }


function selectCountry(name, image) {
  const dropdownBtn = document.getElementById("downBtn");

  dropdownBtn.innerHTML = `
    <img src="assets/images/${image}" class="flag">
    ${name} ▼
  `;

  document.getElementById("countryDropdown").style.display = "none";
}



