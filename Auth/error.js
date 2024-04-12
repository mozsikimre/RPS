//Ha rossz jelszót adunk meg bejelentkezéskor, ezt a hibaüzenetet írja ki, illetve jeleníti meg a hiba-ablakot.
if($message == "Wrong password!")
{
    document.getElementById('error-message').innerText = '$message';
    document.getElementById('error-message').style.display = 'block';
}
//Ha nem regisztrált adatokkal akarunk belépni, ezt a hibaüzenetet írja ki, illetve jeleníti meg a hiba-ablakot.
else if($message == "User Not Registered"){
   document.getElementById('error-message').innerText = '$message';
   document.getElementById('error-message').style.display = 'block';
}
