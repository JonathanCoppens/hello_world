function welcomeMessage() {
    // !! ".value" prend la valeur dans le champs, ne pas oublier !!
    let surname = document.getElementById("surname").value;
    /* let welcome = alert(`Bienvenue à toi, ${surname} !`); */

    if(surname == "") {
        alert("Veuillez entre votre nom");
    } else {
        alert(`Bienvenue sur le site ${surname} !`)
    }
}
// soumet le formulaire et y intègre la fonction précédente
document.querySelector("form").addEventListener("submit", welcomeMessage);



/* function alert(message) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert");
    alertBox.textContent = message;
  
    document.body.appendChild(alertBox);
  
    // Attendre que l'utilisateur ferme la fenêtre d'alerte
    alertBox.addEventListener("click", () => alertBox.remove());
  } */