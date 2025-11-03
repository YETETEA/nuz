// URL Web App Apps Script kamu
const API_URL = "https://script.google.com/macros/s/AKfycbyb0pRVhA67_qF7YSByO_s-PdxmAc2gxClueYsBi8JE98ql06Qs61h8jwwFMmOgKxU/exec";

// Fetch data dari Apps Script
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    console.log("Data dari Apps Script:", data);

    // Biar keliatan bukti muncul di halaman
    const box = document.createElement("div");
    box.style.padding = "10px";
    box.style.marginTop = "20px";
    box.style.border = "1px solid #aaa";
    box.style.borderRadius = "8px";
    box.innerHTML = `
      <h3>Data dari Apps Script:</h3>
      <p><b>Message:</b> ${data.message || JSON.stringify(data)}</p>
      <p><b>Timestamp:</b> ${data.time || "-"}</p>
    `;
    document.body.appendChild(box);
  })
  .catch(error => {
    console.error("Error:", error);

    const errBox = document.createElement("div");
    errBox.style.padding = "10px";
    errBox.style.marginTop = "20px";
    errBox.style.border = "1px solid red";
    errBox.style.borderRadius = "8px";
    errBox.style.color = "red";
    errBox.innerHTML = `
      <h3>Error</h3>
      <p>Tidak bisa konek ke Apps Script. Cek console untuk detail.</p>
    `;
    document.body.appendChild(errBox);
  });
