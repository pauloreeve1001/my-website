let homeButton = document.querySelector('.home');
let menuButton = document.querySelector('.menu');
let menuDropdown = document.querySelector('.menuDropdown');
let about = document.querySelector('#about');
let gallery_title = document.querySelector('.gallery-title');
let gallery_container = document.querySelector('.gallery-container');
let clickCount = 0;
menuDropdown.style.display = "none";

function clickMessage()
{
    clickCount += 1;
    console.log(clickCount);
    if(clickCount >= 5 && clickCount <= 7)
    {
        alert('The fuck you doing? Stop clicking me you annoying piece of shit.');
    }
    else if(clickCount >= 8)
    {
        alert(`Just what the fuck are you doing? You clicked me ${clickCount} times already`)
    }
    else
    {
        alert('Why you clicking me bitch?');
    }
}

homeButton.onclick = function()
{
    window.location.href = 'index.html'; 
};

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

about.onclick = function()
{
    window.location.href = 'about.html';
}

gallery_title.onclick = function()
{
    if (gallery_container.style.display == "none")
    {
        gallery_container.style.display = "grid";
    }
    else
    {
        gallery_container.style.display = "none";
    }
}