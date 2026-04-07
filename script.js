const ctx = document.getElementById('pieChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Saham', 'Crypto', 'Cash'],
    datasets: [{
      data: [5000000, 2000000, 1000000],
    }]
  }
});
