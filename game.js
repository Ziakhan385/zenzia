function generateTable() {
      const num = parseInt(document.getElementById("userNumber").value);
      const res = document.getElementById("tableResult");
      res.innerHTML = "";
      if (isNaN(num) || num < 1 || num > 100) {
        res.innerHTML = `<p>Please enter a valid number between 1 and 100.</p>`;
        return;
      }
      const table_one = document.createElement("table");
      table_one.setAttribute("aria-label", `Multiplication table for ${num}`);
      for (let i = 1; i <= 20; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${num} × ${i}</td><td>=</td><td>${num * i}</td>`;
        table_one.appendChild(row);
      }
      res.appendChild(table_one);
    }
    function toggleMenu() {
      document.getElementById("links").classList.toggle("active");
    }