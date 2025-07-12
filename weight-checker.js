document.getElementById("weightForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const roti = parseInt(document.getElementById("roti").value);
  const coldDrink = document.querySelector('input[name="coldDrink"]:checked').value;
  const cigarette = document.querySelector('input[name="cigarette"]:checked').value;
  const sugar = document.querySelector('input[name="sugar"]:checked').value;
  const walk = document.querySelector('input[name="walk"]:checked').value;
  const fastFood = document.querySelector('input[name="fastFood"]:checked').value;

  let weight = 45 + (roti * 2);

  if (coldDrink === "yes") weight += 3;
  if (cigarette === "yes") weight -= 2;
  if (sugar === "yes") weight -= 3;
  if (walk === "yes") weight -= 2;
  if (fastFood === "yes") weight += 4;



  const idealWeight = 18 + (0.5 * age);
  let message = `Your estimated weight is ${weight} kg. \n ye mera estimate kia hua weight hai, apky actual weight mein 2 se 3 Kg ka difference ho sakta hai.`;

  if (Math.abs(weight - idealWeight) > 10) {
    message += `\n\nYour weight does not match your age. Here are some health tips:
    - Eat more fresh vegetables and fruits.
    - Avoid cold drinks, fast food and smoking.
    - Drink 8–10 glasses of water daily.
    - Exercise or walk daily for at least 30 minutes.
    - Reduce your intake of oily or fried items.`;
  }

  alert(message);
});
