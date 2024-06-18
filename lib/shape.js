/** The parent of all things resembling shapes */

export class Shape{

    //privates with defaults
    #height=1;
    #width=1;
    #fill="white";
    #opacity=0;
    #borderWidth=0;
    #borderColor="black";

    constructor(height, width){
        validateSize(height, width);
        this.#height = height;
        this.#width = width;
    };

    setHeight(height){
        if(height && !isNaN(height)) this.#height = height;
    }
    setWidth(width){
        if(width && !isNaN(width)) this.#width = width;
    }
    setFill(color) {
        if(color) this.#fill = color;
    };
    setBorder(width, color){
        if(width && !isNaN(width)) this.#borderWidth = width;
        if(color) this.#borderColor = color;
    };
    setBorderColor(color){
        if(color) this.#borderColor = color;
    }
    setBorderWidth(width){
        if(width && !isNaN(width)) this.#borderWidth = width;
    }
    setOpacity(val){
        if(val && val>0 && val<1)
        this.#opacity = val;
    };
    getOpacity(){
        return this.#opacity;
    }
    getBorderColor(){
        return this.#borderColor;
    }
    getBorderWidth(){
        return this.#borderWidth;
    }
    getHeight(){
        return this.#height;
    }
    getWidth(){
        return this.#width;
    }
    getFill(){
        return this.#fill;
    }
}

function validateSize(height, width){
    if(isNaN(height) || isNaN(width))
        throw "Height and width must be numeric!";
}