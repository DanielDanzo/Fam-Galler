var email = document.getElementById("email-input");
const submit_btn = document.getElementById("submit-btn");
const full_form = document.getElementById("full-form");


const registration = false;
const signin = false;
const waiting = true;


function smoothTRansition(){
    // Get the current height of the article
    const currentHeight = full_form.clientHeight;

    // Temporarily set the height to auto to get the new height
    full_form.style.height = 'auto';
    const newHeight = full_form.scrollHeight;

    // Reset to original height, then set to new height to trigger transition
    full_form.style.height = `${currentHeight}px`;
    setTimeout(() => {
        full_form.style.height = `${newHeight}px`;
    }, 10);

}



submit_btn.addEventListener("click", ()=>{
    //Show registration form if user is not registered
    if(!full_form.querySelector('input[id="password_text"]') && registration){
        submit_btn.remove();
        
        const fullName_text = document.createElement('input');
        fullName_text.type = 'text';
        fullName_text.id = 'fullName_text';
        fullName_text.className = 'add';
        fullName_text.placeholder = 'Full Name *';
        fullName_text.required;
        full_form.appendChild(fullName_text);

        const pass1 = document.createElement('input');
        pass1.type = 'password';
        pass1.id = 'password_text';
        pass1.className = 'add';
        pass1.placeholder = 'password *';
        full_form.appendChild(pass1);

        const pass2 = document.createElement('input');
        pass2.type = 'password';
        pass2.id = 'confirmPassword_text';
        pass2.className = 'add';
        pass2.placeholder = 'confirm password *';
        full_form.appendChild(pass2);

        submit_btn.innerText = 'Register';
        full_form.appendChild(submit_btn);
    }

    //Show password input text if user is already registered
    if(!full_form.querySelector('input[id="password_text"]')  && signin){
        submit_btn.remove();
        //const label = document.createElement('label');
        //label.for = 'password';
        const password_text = document.createElement('input');
        password_text.type = 'password';
        password_text.id = 'password_text';
        password_text.className = 'add';
        password_text.placeholder = 'Password *';
        password_text.required;
        full_form.appendChild(password_text);
        submit_btn.innerText = 'Login';
        full_form.appendChild(submit_btn);
    }
    

    //Otherwise it means user is waiting for approval from the admin which is you
    if( waiting ){
        submit_btn.remove();

        const message = document.createElement('p');
        message.id = 'inform';
        message.innerText = 'Dear user, your application is currently in the process of being approved by the admin. We appreciate your patience, an admin will approve your registration as soon as possible. If your processing takes too long please email us at';
        const adminEmail = document.createElement('a');
        adminEmail.innerText = ' sempapadaniel123@gmail.com.';
        message.appendChild(adminEmail);

        full_form.appendChild(message);
        smoothTRansition();
        // Trigger the transition
        requestAnimationFrame(() => {
            message.classList.add('show');
        });
        //add a way for user to contact us via email

        
    }
    
});

