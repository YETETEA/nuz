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
function submitBarangMasuk() {
  const nama = document.getElementById("bm_nama").value;
  const qty  = Number(document.getElementById("bm_qty").value);
  const ket  = document.getElementById("bm_ket").value;

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "barangMasuk",
      nama: nama,
      qty: qty,
      keterangan: ket
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(r => r.json())
  .then(res => {
    document.getElementById("bm_result").innerHTML =
      "<b>" + res.message + "</b>";

    // bersihkan input
    document.getElementById("bm_nama").value = "";
    document.getElementById("bm_qty").value = "";
    document.getElementById("bm_ket").value = "";
  });
}
function submitBarangKeluar() {
  const nama = document.getElementById("bk_nama").value;
  const qty  = Number(document.getElementById("bk_qty").value);
  const ket  = document.getElementById("bk_ket").value;

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "barangKeluar",
      nama: nama,
      qty: qty,
      keterangan: ket
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(r => r.json())
  .then(res => {
    document.getElementById("bk_result").innerHTML =
      "<b>" + res.message + "</b>";

    document.getElementById("bk_nama").value = "";
    document.getElementById("bk_qty").value = "";
    document.getElementById("bk_ket").value = "";
  });
}
function loadStok() {
  fetch(API_URL + "?action=stok")
    .then(r => r.json())
    .then(data => {
      document.getElementById("stok_list").innerHTML =
        "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
    });
}

