var player;
var currentPlayerAnimation = null;
var game = {
    charSelect(charName) {
        switch (charName) {
            case "Phantom":
                player = phantomObject(player);
                game.display(player, "default");
        }
    },

    display(player, animationName) {
        let animation;
        switch (animationName) {
            case "default":
                animation = player.charDefaultAnimation;
        }
        let increase = true; let frame = 0;
        currentPlayerAnimation = setInterval(function () {
            $("#char1").attr("src", animation[frame]);
            if(increase) {
                if(frame === animation.length - 1) {
                    increase = false;
                    frame--;
                }
                else
                    frame++;
            } else {
                if(frame === 0) {
                    increase = true;
                    frame++;
                }
                else
                    frame--;
            }
        }, 600);
    }
};
game.charSelect("Phantom");

setTimeout(function () { // Clear animation before running attack animation;
    alert("ACTIVATED");
    clearInterval(currentPlayerAnimation);
}, 100000000000000000000000);
