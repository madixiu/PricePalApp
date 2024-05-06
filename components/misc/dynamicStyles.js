

import color from "./color"

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
    return {backgroundColor: color.gauge.green} 
    else if (input < 0)
    return {backgroundColor: color.gauge.red}
    else
    return {backgroundColor: 'gray'}
}
