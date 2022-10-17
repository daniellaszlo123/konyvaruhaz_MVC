import KModel from "../Model/KModel.js";
import KonyvekView from "../View/KonyvekView.js";
//import KonyvView from "../View/KonyvView";

class KController{
    constructor(){
        //console.log("konztr. hív");
        new KonyvekView();
        const konyvModell = new KModel();
        konyvModell.adatBe("../adat.json", this.konyvAdatok);
    }

    konyvAdatok(tomb){
        console.log(tomb);
    }
}

export default KController;