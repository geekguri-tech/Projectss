document.querySelector(".plea").addEventListener("click" , showSlidebar);
document.querySelector(".plea").addEventListener("click" , checkie);

function checkie()
{
    var Raw = document.querySelector(".plea");
    Raw.classList.toggle("plead");
}

function showSlidebar()
{ 
    var element = document.querySelector(".klaser");
    element.classList.toggle("Guri"); 
}