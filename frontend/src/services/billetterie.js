// Structure de données pour un événement sportif
const Evenement = {
  id: 0,
  nom: "",
  date: "",
  heure: "",
  lieu: "",
  categorie: "",
  offres: [],
  description: ""
};

// Création des 10 événements
const evenements = [
  {
    "id": 1,
    "nom": "Finale 100m nage libre (H)",
    "date": "2024-07-28",
    "heure": "21:00",
    "lieu": "Centre aquatique olympique",
    "categorie": "Natation",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Le sprint le plus rapide du monde. Qui succédera aux légendes de la discipline ?"
  },
  {
    "id": 2,
    "nom": "Finale du marathon féminin",
    "date": "2024-08-09",
    "heure": "10:00",
    "lieu": "Champs de Mars",
    "categorie": "Athlétisme",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Un parcours historique à travers Paris pour couronner la marathonienne olympique."
  },
  {
    "id": 3,
    "nom": "Finale de football masculin",
    "date": "2024-08-11",
    "heure": "20:00",
    "lieu": "Stade de France",
    "categorie": "Football",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Le match tant attendu qui sacrera la meilleure équipe de football du monde."
  },
  {
    "id": 4,
    "nom": "Finale de gymnastique artistique féminine",
    "date": "2024-08-03",
    "heure": "19:00",
    "lieu": "Arena de Paris",
    "categorie": "Gymnastique",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Des prouesses physiques et techniques qui vous laisseront sans voix."
  },
  {
    "id": 5,
    "nom": "Finale de basketball 3x3",
    "date": "2024-07-29",
    "heure": "22:00",
    "lieu": "Esplanade des Invalides",
    "categorie": "Basketball",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Du basketball rapide et intense en plein cœur de Paris."
  },
  {
    "id": 6,
    "nom": "Finale de gymnastique rythmique individuelle",
    "date": "2024-08-04",
    "heure": "18:00",
    "lieu": "Arena de Paris",
    "categorie": "Gymnastique",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Les gymnastes les plus gracieuses du monde s'affrontent lors de compositions alliant danse, musique et manipulation d'objets."
  },
  {
    "id": 7,
    "nom": "Course poursuite par équipes en cyclisme sur piste",
    "date": "2024-08-06",
    "heure": "19:30",
    "lieu": "Vélodrome national",
    "categorie": "Cyclisme",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Un sprint collectif intense où les équipes se relaient pour tenter de distancer leurs adversaires."
  },
  {
    "id": 8,
    "nom": "Finale de judo par équipes mixtes",
    "date": "2024-08-08",
    "heure": "20:00",
    "lieu": "Arena de Paris",
    "categorie": "Judo",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Une compétition inédite où des équipes mixtes s'affrontent dans des combats dynamiques."
  },
  {
    "id": 9,
    "nom": "Finale du marathon masculin",
    "date": "2024-08-10",
    "heure": "10:00",
    "lieu": "Champs de Mars",
    "categorie": "Athlétisme",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Un parcours exigeant à travers les rues de Paris pour couronner le marathonien olympique."
  },
  {
    "id": 10,
    "nom": "Finale du tournoi de tennis en simple dames",
    "date": "2024-08-11",
    "heure": "15:00",
    "lieu": "Stade Roland-Garros",
    "categorie": "Tennis",
    "offres": ["Solo", "Duo", "Famille"],
    "description": "Les meilleures joueuses de tennis s'affrontent pour le titre olympique."
  }
]

// Fonction pour afficher les événements dans la liste
function afficherEvenements(evenements) {
  const listeEvenements = document.querySelector("#evenements ul");
  evenements.forEach(evenement => {
      const li = document.createElement("li");
      li.textContent = evenement.nom;
      li.addEventListener("click", () => afficherDetails(evenement));
      listeEvenements.appendChild(li);
  });
}

// Fonction pour afficher les détails d'un événement
function afficherDetails(evenement) {
  const detailEvenement = document.getElementById("detail_evenement");
  detailEvenement.querySelector("#nom_evenement").textContent = evenement.nom;
  detailEvenement.querySelector("#date_evenement").textContent = evenement.date;
  detailEvenement.querySelector("#heure_evenement").textContent = evenement.heure;
  detailEvenement.querySelector("#lieu_evenement").textContent = evenement.lieu;
  detailEvenement.querySelector("#categorie_evenement").textContent = evenement.categorie;
  detailEvenement.querySelector("#description_evenement").textContent = evenement.description;

  const offresListe = detailEvenement.querySelector("#offres_evenement");
    offresListe.innerHTML = "";
    evenement.offres.forEach(offre => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "offre";
        input.value = offre;
        input.id = `offre_${offre}`;
        const label = document.createElement("label");
        label.htmlFor = `offre_${offre}`;
        label.textContent = offre;
        li.appendChild(input);
        li.appendChild(label);
        offresListe.appendChild(li);
    });

    const ajouterAuPanierBtn = document.getElementById("ajouterAuPanier");
    ajouterAuPanierBtn.addEventListener("click", () => {
        // Ici, vous ajouteriez la logique pour ajouter l'offre sélectionnée au panier
        const offreSelectionnee = document.querySelector('input[name="offre"]:checked').value;
        console.log("Offre sélectionnée :", offreSelectionnee);
    });
}

afficherEvenements(evenements);