import { mkdir, createWriteStream } from "node:fs";
/**
 * Mod for writing the actual file
 * note: a mostly copy/paste from previous readme generator challenge
 */

/**
 * vars for dir and file name
 */
const DIR_OUT = './output'; 
const FILE_OUT = 'logo.svg';

/**
 * Writer for writing to the readme.md file
 * @returns a wrapped write function returns itself to allow for chaining and
 * re-use of the write stream
 */
export function writer(){
    //make sure dir is there
    outputDir();
    //create the stream writer to be used for multiple 
    //calls to the write function (below)
    const w = createWriteStream(`${DIR_OUT}/${FILE_OUT}`);
    //return a write function which is a decorator of the 
    //stream write method
    return {
        write: function(input){
            w.write(input);
            return this;
        }
    }
}

/**
 * Create the output directory
 */
const outputDir = () => {
    //create the output directory if it doesn't exist
    mkdir(DIR_OUT, ()=>{});
}