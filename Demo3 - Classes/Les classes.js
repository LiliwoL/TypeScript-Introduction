var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Déclaration en TS
var Sport = /** @class */ (function () {
    // Constructor
    // Création des attributs en live!
    function Sport(nom, description) {
        this.description = description;
        this.nom = nom;
        this.prive = "valeur cachée mise par défaut";
    }
    // Méthode d'affichage
    Sport.prototype.afficher = function () {
        console.log("Classe SPORT - afficher()");
        console.log(this.nom + " " + this.description + " / " + this.prive);
    };
    return Sport;
}());
// Test d'instanciation
var sport = new Sport("Squash", "Un sport de raquette");
// Appel à la méthode d'affichage
sport.afficher();
// ######### Héritage
var SportDeCompetition = /** @class */ (function (_super) {
    __extends(SportDeCompetition, _super);
    // Pas besoin de déclarer l'attribut public niveau
    function SportDeCompetition(nom, description, niveau) {
        var _this = 
        // Appel au constructeur parent
        _super.call(this, nom, description) || this;
        _this.niveau = niveau;
        return _this;
    }
    // Surcharger la méthode afficher()
    SportDeCompetition.prototype.afficher = function () {
        // Appel à la méthode parente
        _super.prototype.afficher.call(this);
        console.log("Classe SportDeCompétition - afficher()");
        console.log("Niveau: " + this.niveau);
    };
    return SportDeCompetition;
}(Sport));
console.log("#############");
// instance de SportDeCompetition
var sportDeCompetition = new SportDeCompetition("Tennis", "Un jeu de raquettes", "International");
sportDeCompetition.afficher();
// Défnition d'une classe qui implémente Jouable
var SportJouable = /** @class */ (function (_super) {
    __extends(SportJouable, _super);
    function SportJouable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Je dois implémenter la methode jouer()
    SportJouable.prototype.jouer = function (joueur1, joueur2) {
        var vainqueur = joueur1;
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainqueur = joueur2;
        }
        // Cette fonction DOIT renvoyer du string
        return vainqueur;
    };
    return SportJouable;
}(Sport));
// Instanciation
var sportJouable = new SportJouable("Badminton", "Un sport super fatigant");
var vainqueur = sportJouable.jouer("Batman", "Superman");
console.log("Le vainqueur est " + vainqueur);
var jouerAuBadminton = function (joueur1, joueur2) {
    console.log(joueur1 + " et " + joueur2 + " jouent au badminton");
    return joueur1;
};
console.log("Le vainqueur est " + jouerAuBadminton("Brivael", "Wayan"));
