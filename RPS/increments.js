function incrementRscore() {
    // Ajax hívás a PHP fájlhoz.
    $.ajax({
        url: "RPS/update.php", // PHP fájl neve.
        type: "POST", // Adatok küldése POST kérésben.
        data: {field: "rscore"}, // Az rscore mező növelése.
        success: function(response) {
            console.log(response); // Adatbázis válaszának megjelenítése a konzolban.
        },
        error: function(xhr, status, error) {
            console.error(error); // Hibaüzenet megjelenítése a konzolban.
        }
    });
}

function incrementSscore() {
    $.ajax({
        url: "RPS/update.php",
        type: "POST",
        data: {field: "sscore"}, // Az sscore mező növelése.
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

function incrementPscore() {
    $.ajax({
        url: "RPS/update.php",
        type: "POST",
        data: {field: "pscore"}, // Az pscore mező növelése.
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

function incrementPlayerscore() {
    $.ajax({
        url: "RPS/update.php",
        type: "POST",
        data: {field: "playerscore"}, // Az playerscore mező növelése.
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

function incrementBotscore() {
    $.ajax({
        url: "RPS/update.php",
        type: "POST",
        data: {field: "botscore"}, // Az botscore mező növelése.
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}