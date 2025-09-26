let homeButton = document.querySelector('.home');
let menuButton = document.querySelector('.menu');
let menuDropdown = document.querySelector('.menuDropdown');
menuDropdown.style.display = "none";

homeButton.onclick = function()
{
    window.location.href = 'index.html'; 
}

about.onclick = function()
{
    window.location.href = 'project.html';
}

menuButton.onclick = function()
{
    if (menuDropdown.style.display == "none")
    {
        menuDropdown.style.display = "flex";
    }
    else
    {
        menuDropdown.style.display = "none";
    }
    // clickMessage();
};