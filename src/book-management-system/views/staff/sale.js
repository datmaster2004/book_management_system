// Mở popup thêm sách
document
  .getElementById("openAddSaleModal")
  .addEventListener("click", function () {
    document.getElementById("addSalePopup").style.display = "flex";
  });

// Đóng popup thêm sách
document
  .getElementById("closeAddSalePopup")
  .addEventListener("click", function () {
    document.getElementById("addSalePopup").style.display = "none";
  });

// Mở popup edit sách
document.getElementById("editSale").addEventListener("click", function () {
  document.getElementById("editSalePopup").style.display = "flex";
});

// Đóng popup edit sách
document
  .getElementById("closeEditSalePopup")
  .addEventListener("click", function () {
    document.getElementById("editSalePopup").style.display = "none";
  });
