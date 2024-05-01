
export function percent_text_color(input) {

    if (input > 0)
    return {color: 'green'} 
    else if (input < 0)
    return {color: 'red'}
    else
    return {color: 'black'}
  
}
export function caret_color(input) {
    if(input > 0)
    return 'green'
   else
    return 'red'
}
export function chip_color(input) {
    if (input > 0)
    return {backgroundColor: 'green'} 
    else if (input < 0)
    return {backgroundColor: 'red'}
    else
    return {backgroundColor: 'gray'}
}
