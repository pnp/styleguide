const hamburgerMenu = document.querySelector('.hamburger');


if(hamburgerMenu){

    hamburgerMenu.addEventListener('click', evt => {

        hamburgerMenu.classList.toggle('show');

        if(hamburgerMenu.classList.contains('show')){
            hamburgerMenu.ariaLabeledBy = "Hurra";
        } else {
            hamburgerMenu.ariaLabeledBy = "murks";
        }

    });

}