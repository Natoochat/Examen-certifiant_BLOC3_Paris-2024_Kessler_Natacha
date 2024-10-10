function afficherPanier() {
  const tablePanier = document.getElementById("tablePanier").querySelector("tbody");
  tablePanier.innerHTML = "";

  let total = 0;
  panier.forEach(billet => {
      const row = tablePanier.insertRow();
      row.insertCell().textContent = billet.nomEvenement;
      row.insertCell().textContent = billet.offre;
      row.insertCell().textContent = billet.quantite;
      row.insertCell().textContent = billet.prixUnitaire + " €";
      row.insertCell().textContent = billet.prixTotal + " €";
      total += billet.prixTotal;
  });

  document.getElementById("totalPanier").textContent = total;
}