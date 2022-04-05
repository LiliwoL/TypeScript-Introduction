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
// Un tableau typé
var tableauType = [1, 2, 3];
// Ajouter un élément
//tableauType.push("4"); // Ne poeut pas compiler car type incompatible
tableauType.push(4);
console.log(tableauType);
// ####### Tableau Générique
var tableauGenerique = [9, 8, 7];
//tableauGenerique.push("6");
tableauGenerique.push(6);
console.log(tableauGenerique);
// ####### Tableau Générique2
var tableauGenerique2 = [9, 8, 7];
tableauGenerique2.push("6");
tableauGenerique2.push(6);
console.log(tableauGenerique2);
// ##################### Classe Générique
var Viande = /** @class */ (function () {
    function Viande(type) {
        this.type = type;
    }
    return Viande;
}());
var Legume = /** @class */ (function () {
    function Legume(type) {
        this.type = type;
    }
    return Legume;
}());
var Poulet = /** @class */ (function (_super) {
    __extends(Poulet, _super);
    function Poulet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poulet;
}(Viande));
;
var Boeuf = /** @class */ (function (_super) {
    __extends(Boeuf, _super);
    function Boeuf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boeuf;
}(Viande));
;
var Carotte = /** @class */ (function (_super) {
    __extends(Carotte, _super);
    function Carotte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Carotte;
}(Legume));
;
var Poireau = /** @class */ (function (_super) {
    __extends(Poireau, _super);
    function Poireau() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poireau;
}(Legume));
;
// Classe générique
var Sandwich = /** @class */ (function () {
    function Sandwich(viande, legume) {
        this.viande = viande;
        this.legume = legume;
    }
    Sandwich.prototype.afficher = function () {
        console.log("Sandwich " + this.viande.type + " / " + this.legume.type);
    };
    return Sandwich;
}());
var sandwichPouletCarotte = new Sandwich(new Poireau("Poulet fermier"), new Boeuf("Carotte des sables"));
sandwichPouletCarotte.afficher();
