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

    let { data, error } = await supabase.auth.signUp({
          email: email,
          password: password
    })

    if (!error) {
        alert('Please check your email to confirm your registration.');
    } else {
        alert(error);
    }
}