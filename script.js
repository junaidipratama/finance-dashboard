let dataKeuangan = JSON.parse(localStorage.getItem("dataKeuangan")) || [
  { kategori: "SAHAM", jumlah: 20000000 },
  { kategori: "BITCOIN", jumlah: 23000000 },
  { kategori: "EMAS", jumlah: 6000000 },
  { kategori: "RDPU", jumlah: 50000000 }
];

function simpanData() {
  localStorage.setItem("dataKeuangan", JSON.stringify(dataKeuangan));
}
function renderChart() {
  const ctx = document.getElementById('pieChart');

  const labels = dataKeuangan.map(d => d.kategori);
  const values = dataKeuangan.map(d => d.jumlah);

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: values,
      }]
    }
  });
}

renderChart();
function tambahData() {
  const kategori = document.getElementById("kategori").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);

  if (!kategori || !jumlah) {
    alert("Isi semua field!");
    return;
  }

  dataKeuangan.push({ kategori, jumlah });

  simpanData();
  location.reload();
}
function renderLineChart() {
  const ctx = document.getElementById('lineChart');

  let total = 0;
  const growth = dataKeuangan.map(d => {
    total += d.jumlah;
    return total;
  });

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataKeuangan.map(d => d.kategori),
      datasets: [{
        label: "Pertumbuhan Aset",
        data: growth
      }]
    }
  });
}

renderLineChart();
