import { supabase } from '../../../scripts/global.js';

const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");
const submitElement = document.querySelector("#submit");

submitElement.addEventListener(
    'click',
    handleSubmit
);

async function handleSubmit(event) {
    event.preventDefault();

    const email = emailElement.value;
    const password = passwordElement.value;

    const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
    })

    if (!error) {
        location.href = "../../app";
    } else {
        alert(error);
    }
}