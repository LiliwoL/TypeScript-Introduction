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
var BO;
(function (BO) {
    var Acheteur = /** @class */ (function () {
        function Acheteur(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        return Acheteur;
    }());
    BO.Acheteur = Acheteur;
    var Auteur = /** @class */ (function () {
        function Auteur(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        Auteur.prototype.afficher = function () {
            return this.nom + " " + this.prenom;
        };
        return Auteur;
    }());
    BO.Auteur = Auteur;
    // ##########
    // Classes
    // ##########
    var Oeuvre = /** @class */ (function () {
        function Oeuvre(annee, titre, auteurs) {
            this.annee = annee;
            this.titre = titre;
            this.auteurs = auteurs;
        }
        Oeuvre.prototype.encherir = function (nouvelleEnchere, acheteur) {
            this.meilleureEnchere = nouvelleEnchere;
            this.acheteur = acheteur;
        };
        Oeuvre.prototype.afficher = function () {
            var stringAuteurs;
            if (this.auteurs != undefined) {
                stringAuteurs = "";
                // Expression lambda de parcours du tableau en une seule ligne
                this.auteurs.forEach(function (value) { return stringAuteurs += (stringAuteurs == "" ? "" : ", ") + value.afficher(); });
            }
            return "[annee : " + this.annee +
                ", titre : " + this.titre +
                ", auteurs : [" + stringAuteurs + "]" +
                (this.meilleureEnchere != undefined ? (", meilleure enchère : " + this.meilleureEnchere) : "") +
                (this.acheteur != undefined ? (", acheteur : " + this.acheteur.nom + " " + this.acheteur.prenom) : "") +
                "]";
        };
        return Oeuvre;
    }());
    BO.Oeuvre = Oeuvre;
    var Sculpture = /** @class */ (function (_super) {
        __extends(Sculpture, _super);
        function Sculpture(annee, titre, auteurs, matiere) {
            var _this = _super.call(this, annee, titre, auteurs) || this;
            _this.matiere = matiere;
            return _this;
        }
        return Sculpture;
    }(Oeuvre));
    BO.Sculpture = Sculpture;
    var Livre = /** @class */ (function (_super) {
        __extends(Livre, _super);
        function Livre(annee, titre, auteurs) {
            return _super.call(this, annee, titre, auteurs) || this;
        }
        return Livre;
    }(Oeuvre));
    BO.Livre = Livre;
    var Peinture = /** @class */ (function (_super) {
        __extends(Peinture, _super);
        function Peinture(annee, titre, auteurs) {
            return _super.call(this, annee, titre, auteurs) || this;
        }
        return Peinture;
    }(Oeuvre));
    BO.Peinture = Peinture;
})(BO || (BO = {}));
// ####################################
// Tableau des oeuvres
var oeuvres = [];
oeuvres.push(new BO.Sculpture(1925, "le penseur de rodin", [new BO.Auteur("RODIN", "Auguste")], "bronze"));
oeuvres.push(new BO.Livre(1876, "Au bonheur des dames", [new BO.Auteur("ZOLA", "Emile")]));
oeuvres.push(new BO.Peinture(1938, "Guernica", [new BO.Auteur("PICASSO", "Pablo")]));
// ####################################
// Tableau de vendables
var vendables = [];
// Ajout de toutes les oeuvres dans le tableau de vendables
oeuvres.forEach(function (value) { return vendables.push(value); });
// ####################################
// Tableau des affichables
var affichables = [];
// Ajout de toutes les oeuvres dans le tableau des affichables
oeuvres.forEach(function (value) { return affichables.push(value); });
//Ne compile pas c'est normal!! des vendables ne sont pas forcément affichable.
//vendables.forEach((value)=>affichables.push(value));
// ####################################
//Affichage des oeuvres
console.log("Affichage des oeuvres avant enchères:");
oeuvres.forEach(function (value) { return console.log(value.afficher()); });
// ####################################
//Enchères
console.log("Enchères mise en place");
//vendables.forEach((value)=>value.encherir(1000,new BO.Acheteur("Bowie", "David")));
oeuvres.forEach(function (value) { return value.encherir(1000, new BO.Acheteur("Bowie", "David")); });
// ####################################
//Affichage des affichables
console.log("Affichage des affichables:");
//affichables.forEach((value)=>console.log(value.afficher()));
oeuvres.forEach(function (value) { return console.log(value.afficher()); });
