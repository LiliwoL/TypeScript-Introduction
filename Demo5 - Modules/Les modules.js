"use strict";
exports.__esModule = true;
// Création d'un module
var BusinessObject;
(function (BusinessObject) {
    // ...
    var Sport = /** @class */ (function () {
        function Sport(nom, description) {
            this.nom = nom;
            this.description = description;
        }
        Sport.prototype.afficher = function () {
            console.log(this.nom + " " + this.description);
        };
        return Sport;
    }());
    BusinessObject.Sport = Sport;
})(BusinessObject || (BusinessObject = {}));
// Utilisation du module
var sportClassModule = new BusinessObject.Sport("Football", "Sport de ballon");
sportClassModule.afficher();
// Import d'un module depuis un autre fichier
var Validator_1 = require("./Validator");
var classeStringValidator = Validator_1.Validator.StringValidator;
var newSV = new classeStringValidator("une chaine");
newSV.afficher();
