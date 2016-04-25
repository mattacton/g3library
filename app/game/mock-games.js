System.register(['./game'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var game_1;
    var GAMES;
    return {
        setters:[
            function (game_1_1) {
                game_1 = game_1_1;
            }],
        execute: function() {
            exports_1("GAMES", GAMES = [
                new game_1.Game("Time Stories", "Matt A.", "images/game-box.png"),
                new game_1.Game("For Sale", "Home", "images/for_sale.jpg"),
                new game_1.Game("The Lord of the Rings: The Card Game", "Steve", "images/lotr-tcg.jpg"),
                new game_1.Game("Pandemic Legacy: Season 1", "Home", "images/pandemic-legacy.png")
            ]);
        }
    }
});
//# sourceMappingURL=mock-games.js.map