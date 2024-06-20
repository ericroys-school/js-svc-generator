/** The parent of all things resembling shapes */

export class Shape{

    //privates with defaults
    #height=1;
    #width=1;
    #fill="white";
    #opacity=0;
    #borderWidth=0;
    #borderColor="black";

    /**
     * Construct a shape
     * @param number height 
     * @param height width 
     */
    constructor(height, width){
        validateSize(height, width);
        this.#height = height;
        this.#width = width;
    };

    /**
     * Set the height of the shape
     * @param number height 
     */
    setHeight(height){
        if(height && !isNaN(height)) this.#height = height;
    }
    /**
     * Set the width of the shape
     * @param number width 
     */
    setWidth(width){
        if(width && !isNaN(width)) this.#width = width;
    }
    /**
     * Set the fill color of the shape
     * @param string or hex color 
     */
    setFill(color) {
        if(color) this.#fill = color;
    };
    /**
     * Set the shape border color and size
     * @param number width 
     * @param string or hex color 
     */
    setBorder(width, color){
        if(width && !isNaN(width)) this.#borderWidth = width;
        if(color) this.#borderColor = color;
    };
    /**
     * Set the border color
     * @param string or hex color 
     */
    setBorderColor(color){
        if(color) this.#borderColor = color;
    }
    /**
     * Set the border width
     * @param number width 
     */
    setBorderWidth(width){
        if(width && !isNaN(width)) this.#borderWidth = width;
    }
    /**
     * Set the opacity of the shape (0-1)
     * @param number val 
     */
    setOpacity(val){
        if(val && val>0 && val<1)
        this.#opacity = val;
    };
    /**
     * Get the shape opacity
     * @returns opacity {number}
     */
    getOpacity(){
        return this.#opacity;
    }
    /**
     * Get the border color
     * @returns border color {string}
     */
    getBorderColor(){
        return this.#borderColor;
    }
    /**
     * get the border width
     * @returns border width {number}
     */
    getBorderWidth(){
        return this.#borderWidth;
    }
    /**
     * Get the height of the shape
     * @returns shape height {number}
     */
    getHeight(){
        return this.#height;
    }
    /**
     * Get the shape width
     * @returns width {number}
     */
    getWidth(){
        return this.#width;
    }
    /**
     * Get the fill color
     * @returns fill {string}
     */
    getFill(){
        return this.#fill;
    }
    /**
     * return a shapes svg definition
     */
    render(){}
}

function validateSize(height, width){
    if(isNaN(height) || isNaN(width))
        throw "Height and width must be numeric!";
}