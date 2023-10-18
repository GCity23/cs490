function acceptUserSignup()
{
    console.log("This will display user info")
}

window.addEventListener("load", function()
{
    document.getElementById("Edit Profile").addEventListener("click", acceptUserSignup);
});