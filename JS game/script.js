var character = document.getElementById("character");
var block = document.getElementById("block");
function jump () {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}


var checkDead = setInterval(function () {
    var character_base = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (block_left > 0 && block_left < 20 && character_base >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lost !")
    }
} , 10)