function light(){
    var lightbulb = document.getElementById("bulb")
    if (lightbulb.src.match("bulboff")){
        lightbulb.src="bulbon.gif"
    }
    else{
        lightbulb.src="bulboff.gif"
    }


    
}
