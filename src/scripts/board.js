class Board {
    constructor(area){
        this._area = area;
    }
    get area(){
        return this._area;
    }
    blocks(){
        let blocks = [];
        this._area.forEach(element => {blocks.push({block: element, isClicked: false});
         });
        return blocks;
    }
}

export default Board;