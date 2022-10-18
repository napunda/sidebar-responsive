function openmenu() {
  const sidebar = document.querySelector(".sidebar");
  const info = document.querySelector(".info");
  const logo = document.querySelector("#logo");
  const nav_1 = document.querySelector("#nav-1");
  const nav_2 = document.querySelector("#nav-2");
  const nav_3 = document.querySelector("#nav-3");
  const nav_4 = document.querySelector("#nav-4");
  const nav_5 = document.querySelector("#nav-5");
  sidebar.classList.toggle("disable-sidebar");
  logo.classList.toggle("disable-item");
  info.classList.toggle("disable-item");
  nav_1.classList.toggle("disable-item");
  nav_2.classList.toggle("disable-item");
  nav_3.classList.toggle("disable-item");
  nav_4.classList.toggle("disable-item");
  nav_5.classList.toggle("disable-item");
}
