let homeButton = document.querySelector('.home');
let menuButton = document.querySelector('.menu');
let menuDropdown = document.querySelector('.menuDropdown');
let about = document.querySelector('#about');
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
    // clickMessage();
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
