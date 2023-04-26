const btn = document.getElementById("btn");
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const randomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let url = `https://api.adviceslip.com/advice`;

const updateData = (data) => {
  adviceId.innerHTML = `Advice Id #${data.slip.id}`;
  adviceText.innerHTML = `${data.slip.advice}`;
};

const fetchApi = (id) => {
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      updateData(data);
    });
};

btn.onclick = () => {
  fetchApi(randomNumber());
};
