const show = false;
const showModal = false;
var oldPledge = "";

function openMenu() {
  const menu = document.getElementById("navigation");
  menu.style.display === "none"
    ? (menu.style.display = "grid")
    : (menu.style.display = "none");
}

function backProject() {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal.style.display = "block";
  overlay.style.display = "block";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeModal() {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
}

function sendPledge() {
  closeModal();
  showSuccess();
}

function selectPledge(selectedPledge) {
  const pledge = document.getElementById(selectedPledge.value);
  pledge.style.display = "flex";
  if(oldPledge !== "" && oldPledge !== pledge) oldPledge.style.display = "none";
  oldPledge = pledge;
}

function showSuccess() {
  const successModal = document.getElementById("success-modal");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  successModal.style.display = "grid";
}

function closeSuccessModal() {
  const successModal = document.getElementById("success-modal");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  successModal.style.display = "none";
}