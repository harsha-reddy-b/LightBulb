function light(){
    var lightbulb = document.getElementById("bulb")
    if (lightbulb.src.match("bulboff")){
        lightbulb.src="img/bulbon.gif"
    }
    else{
        lightbulb.src="img/bulboff.gif"
    }


    
}