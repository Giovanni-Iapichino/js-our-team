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

//* FUNCTIONS
const createCard = (name, role, email, img) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgEl = document.createElement("img");
  imgEl.src = img;
  imgEl.alt = `${name}'s photo`;

  const nameEl = document.createElement("h2");
  nameEl.innerText = name;

  const roleEl = document.createElement("p");
  roleEl.innerText = role;

  const emailEl = document.createElement("p");
  emailEl.innerText = email;

  card.append(imgEl, nameEl, roleEl, emailEl);

  return card;
};

cardsHTML = ``;
for (const member of teamMembers) {
  const { name, role, email, img } = member;

  cardsHTML += `
   <div class="col-4 col-md-6 col-lg-3 mb-4">
     <div class="card" style="width: 18rem;">
       <img src="${img}" class="card-img-top" alt="${name}'s photo">
        <div class="card-body">
         <p class="card-text">${name}</p>
          <p class="card-text">${role}</p>
            <p class="card-text">${email}</p>
        </div>
     </div>
  </div>
  `;
}

teamContainer.innerHTML = cardsHTML;
titleEl.innerText = "Team Members";
descriptionEl.innerText = "Meet our amazing team of professionals.";
