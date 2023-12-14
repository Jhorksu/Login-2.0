import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";

const login = document.querySelector("#login")



login.addEventListener('submit', async e => {
    e.preventDefault()

    const email = login['login-email'].value;
    const password = login['login-password'].value;


    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials)

    Toastify({
        text: "Bienvenido " + email,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #007d6e, #6a9028)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if(error.code === 'auth/user-not-found'){
            alert('Usuario no encontrado. Intente de nuevo')
        } if(error.code === 'auth/wrong-password'){
            alert('Contraseña incorrecta')
        } else if (error.code) {
            alert('Algo salió mal. Intente de nuevo.')
        }
    }
})

  