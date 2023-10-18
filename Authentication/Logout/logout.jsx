function acceptUserLogin()
{
    console.log("We have accepted user input")
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
}

window.addEventListener("load", function()
{
    document.getElementById("login").addEventListener("click", acceptUserLogin);
});