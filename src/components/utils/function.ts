/**
 * 
 * @param txt - input txt 
 * @param max - the maximum need to be displayed 
 * @returns - sliced txt after 
 */

export  function txtSlicer(txt:string , max:number = 50){
    if(txt.length >= max )return `${txt.slice( 0 , max)} ...` ;
    return txt;
}