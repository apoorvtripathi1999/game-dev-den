function gamer(button)
{
    var i;
    var x= document.getElementsByClassName("main-lower");
    for(i=0;i<x.length;i++){
      x[i].style.display = "none";
    }
    document.getElementById(button).style.display = "flex";
    document.getElementById("default").style.display = "none";
}
   


