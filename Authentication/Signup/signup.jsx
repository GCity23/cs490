function acceptUserSignup()
{
    console.log("We have accepted user input")
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password2").value;
    const email = document.getElementById("email").value;
    
    console.log(firstname);
    console.log(lastname);
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    console.log(email);

    if (password == confirmPassword)
    {
        console.log("Passwords match");
        console.log("Sending data to server");
    }
    else
    {
        console.log("Passwords do not match");
        console.log("Fix ur shit");
    }
}

window.addEventListener("load", function()
{
    document.getElementById("signup").addEventListener("click", acceptUserSignup);
});