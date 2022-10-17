class KModel{
    #konyvekTomb=[]
    constructor(){

    }

    adatBe(vegpont, myCallback){
        fetch(vegpont, {
            method: 'GET', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
        },})
        .then(response=>response.json())
        .then(data=>{
            this.#konyvekTomb=data.konyv;
            myCallback(this.#konyvekTomb)
        })
        .catch((error)=>{
            console.error('Error', error);
        })
            
    }

    getKonyvetTomb(){
        return this.#konyvekTomb;
    }
}

export default KModel;