function pesan(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the reservation form
    var nama = document.getElementById("nama").value;
    var nomor = document.getElementById("nomor").value;
    var durasi = document.getElementById("durasi").value;

    // Display an alert
    alert("Data disimpan");


    // Update the content of the #pesanan element
    document.getElementById("pesanan").innerHTML = `
    <h2 class="bold">Pesanan</h2>
    <div class="form">
        <div class="field">
            <label>Nama</label>
            <input class="input" id="pnama" type="text" value="${nama}" readonly>
        </div>
        <div class="field">
            <label>Nomor Whatsapp</label>
            <input class="input" id="pnomor" type="number" value="${nomor}" readonly>
        </div>
        <div class="field">
            <label>Durasi</label>
            <input class="input" id="pdurasi" type="text" value="${durasi}" readonly>
        </div>
        <a href="index.html" class="button">Back To Home</a>
    </div>
`;
}
