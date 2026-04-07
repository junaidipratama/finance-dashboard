const ctx = document.getElementById('pieChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['SAHAM', 'BITCOIN', 'EMAS', 'RDPU' ],
    datasets: [{
      data: [20000000, 23000000, 6000000, 50000000],
    }]
  }
});
let dataKeuangan = JSON.parse(localStorage.getItem("dataKeuangan")) || [
  { kategori: "SAHAM", jumlah: 20000000 },
  { kategori: "BITCOIN", jumlah: 23000000 },
  { kategori: "EMAS", jumlah: 6000000 },
  { kategori: "RDPU", jumlah: 50000000 }
];

function simpanData() {
  localStorage.setItem("dataKeuangan", JSON.stringify(dataKeuangan));
}
