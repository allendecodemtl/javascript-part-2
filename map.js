function Tile (type){
    this.type = type;  
    this.walkable = function{
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
    
}
