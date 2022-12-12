// Changer la couleur des badge en fonction des thèmes
function colorBadgeByTheme() {
  //  On recupère nos badges
  const badges = document.querySelectorAll(".badge");
  // On boucle dessus
  for (const badge of badges) {
    // On récupère le contenu text de nos badge
    const textBadge = badge.textContent;
    // Si le contenu text = thème alors => couleur
    switch(textBadge) {
    case "Cinéma" :
      badge.style.backgroundColor = "red";
      break;
    case "Animaux" :
      badge.style.backgroundColor = "green";
      break;
    case "Technologie" :
      badge.style.backgroundColor = "cyan";
      break;
    case "Histoire" :
      badge.style.backgroundColor = "blue";
      break;
    case "Astronomie" :
      badge.style.backgroundColor = "black";
      break;
    case "Géographie" :
      badge.style.backgroundColor = "red";
      break;
    case "Gastronomie" :
      badge.style.backgroundColor = "brown";
      break;
    case "Littérature" :
      badge.style.backgroundColor = "yellow";
      break;
    case "Nature" :
      badge.style.backgroundColor = "purple";
      break;
    }
  }
}

colorBadgeByTheme();
