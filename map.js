function Tile (type){
    this.type = type;  
    this.walkable = function(){
        if (this.type === "grass" || this.type === "sand"){
            return true
        } else {
            return false
        }
    }
}

function Map(width, height){
    this.width = width;
    this.height = height;
    this.titles = twoD(width, height);
}


function twoD(width, height){
    
    var rows = [];
    
    for (var i =0; i<height; i++){
        
        var cols = [];
        
        var tileTypeList = ["water","grass","sand"];
        var titleType = tileTypeList[Math.floor(Math.random()*tileTypeList.length)];
         
        for (var j=0; j<width; j++){
            cols.push(new Tile(titleType));
        }
        rows.push(cols);
        
    }
    
    return rows;
}


console.log(new Map(5,3));
