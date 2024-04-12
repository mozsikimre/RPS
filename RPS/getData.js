function getData() {
  if (databaseOnline == true) {
    $.ajax({
      url: "RPS/getData.php", // PHP fájl neve.
      type: "GET", // Adatok küldése GET kérésben.
      dataType: "json", // Az adatok JSON formátumban érkeznek.
      success: function(response) {
        // Adatok frissítése a megfelelő HTML elemekben.
        $("#usernameRefresh").text(response.username);
        $("#emailRefresh").text(response.email);
        $("#rscoreRefresh").text(response.rscore);
        $("#sscoreRefresh").text(response.sscore);
        $("#pscoreRefresh").text(response.pscore);
        $("#playerscoreRefresh").text(response.playerscore);
        $("#botscoreRefresh").text(response.botscore);
      },
      error: function(xhr, status, error) {
        console.error(error); // Hibaüzenet megjelenítése a konzolban.
      }
    });
  }
}
  
  // A getData() függvény lefuttatása 1 másodpercenként.
setInterval(getData, 1000); // Az időt milliszekundumban adjuk meg (1000ms = 1s).
  