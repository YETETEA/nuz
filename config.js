const API_URL = "https://script.google.com/macros/s/AKfycbzJ9GUlX7mTTarbuLJBoVAXkruIJwrMjkaxSxgrMgd5rsrrmEONi3B67FsAPwNMsjFx/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    console.log("Data dari GAS:", data);

    const box = document.createElement("div");
    box.style.padding = "10px";
    box.style.marginTop = "20px";
    box.style.border = "1px solid #aaa";
    box.style.borderRadius = "8px";
    box.innerHTML = `
      <h3>Data dari Apps Script:</h3>
      <p><b>Message:</b> ${data.message}</p>
      <p><b>Waktu:</b> ${data.time}</p>
    `;

    document.body.appendChild(box);
  })
  .catch(err => {
    console.error("Error:", err);

    const errBox = document.createElement("div");
    errBox.style.padding = "10px";
    errBox.style.marginTop = "20px";
    errBox.style.border = "1px solid red";
    errBox.style.borderRadius = "8px";
    errBox.style.color = "red";
    errBox.innerHTML = `
      <h3>Error</h3>
      <p>Tidak bisa konek ke Apps Script. Cek console.</p>
    `;
    document.body.appendChild(errBox);
  });
