class HashTable {
    constructor(size=11){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let prime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, val){
        var index = this._hash(key);
        if(!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, val]); 
    }

    get(key){
        var index = this._hash(key);
        var ret = this.keyMap[index];
        if(!ret) return undefined;
        for(let arr of ret){
            if(arr[0] === key) return arr[1];
        }
    }

    keys(){
        var keyArr = [];
        for(let key of this.keyMap){
            if(key) {
                for(let val of key){
                    if(!keyArr.includes(val[0])) keyArr.push(val[0]);
                }
            }
        }
        return keyArr;
    }

    values(){
        var valArr = [];
        for(let key of this.keyMap){
            if(key) {
                for(let val of key){
                    if(!valArr.includes(val[1])) valArr.push(val[1]);
                }
            }
        }
        return valArr;
    }
}

var table = new HashTable();
table.set("cyan", 13);
table.set("pink", 13);
table.set("blue", 26);
table.set("green", 36);
table.set("red", 45);
table.set("yellow", 153);
table.keys();