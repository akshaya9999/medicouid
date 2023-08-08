function searchcard() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById('cardsearch').value;
    filter = input.toLowerCase();
    cardContainer = document.getElementById('allcards');
    cards = cardContainer.getElementsByClassName("card");
  
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-title").innerText.toLowerCase();
      if (title.indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  