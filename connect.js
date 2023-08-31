function welcomeMessage() {
    // !! ".value" prend la valeur dans le champs, ne pas oublier !!
    let surname = document.getElementById("surname").value;
    /* let welcome = alert(`Bienvenue à toi, ${surname} !`); */

        // vérifie que le nom entré n'est pas vide et ne contient pas de caractères spéciaux
    if(surname == "" && (/[^a-zA-Z0-9-]/g)) {
        alert("Veuillez entrer votre nom");
    } else {
        alert(`Bienvenue sur le site ${surname} !`);
        // récupération de l'icone
        let userIcon = document.querySelector(".user-icon");
        
        // récupération du nom de l'utilisateur connecté
        let userName = document.createElement("span");
        userName.classList.add("user-name");
        userName.textContent = surname.value;

        
        // ajout de l'élément 'span' à l'élément 'userIcon'
        userIcon.appendChild(userName);
    }
}
// soumet le formulaire et y intègre la fonction précédente
document.querySelector("form").addEventListener("submit", welcomeMessage);