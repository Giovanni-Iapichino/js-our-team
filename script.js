//# Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
//# (trovate l’array del team all’interno della cartella in allegato)
//? Bonus
//? Rendere l’esercizio responsive, mandando a capo le card
//? Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)

//* ARRAY TEAM MEMBERS
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//* SELECTORS
const teamContainer = document.getElementById("card-member-container");
const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
const form = document.getElementById("add-member-form");
const newMemberName = document.getElementById("name");
const newMemberRole = document.getElementById("role");
const newMemberEmail = document.getElementById("email");
const newMemberImg = document.getElementById("image");

//* FUNCTIONS
const createCard = (name, role, email, img) => {
  return `<div class="col-12 col-md-3 col-lg-4 mb-4 mt-4 d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="${name}'s photo">
     <div class="card-body">
      <p class="card-text">${name}</p>
       <p class="card-text">${role}</p>
         <p class="card-text">${email}</p>
     </div>
  </div>
</div>`;
};

//* ADD CARD TO DOM
let cardsHTML = ``;
for (const member of teamMembers) {
  const { name, role, email, img } = member;

  cardsHTML += createCard(name, role, email, img);
}

teamContainer.innerHTML = cardsHTML;
titleEl.innerText = "Meet Our Team";
descriptionEl.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat adipisci nostrum animi cumque sint maiores in illum accusamus corrupti dicta, veritatis, porro fuga sapiente aut hic, totam asperiores aspernatur.";

//** ADD NEW MEMBER

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Prendi i valori dal form
  const name = newMemberName.value;
  const role = newMemberRole.value;
  const email = newMemberEmail.value;
  const img = newMemberImg.value;

  teamContainer.innerHTML += createCard(name, role, email, img);
});
