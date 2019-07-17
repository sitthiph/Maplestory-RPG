var player;
var game = {
    charSelect(charName) {
        switch (charName) {
            case "Phantom":
                alert("Scope Reached");
                phantomObject(player);
                alert(player.char);
        }
    }
};