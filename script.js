document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("womenWinnersChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Booker Prize",
        "National Book Award (Fiction)",
        "Pulitzer Prize for Fiction"
      ],
      datasets: [
        {
          label: "Number of Women Winners",
          data: [18, 20, 33],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          },
          title: {
            display: true,
            text: "Number of Women Winners"
          }
        },
        x: {
          title: {
            display: true,
            text: "Literary Award"
          }
        }
      }
    }
  });
});
