
function colorBadgeByTheme() {
  const badges = document.querySelectorAll(".badge");

  for (const badge of badges) {
    const textBadge = badge.textContent;
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
