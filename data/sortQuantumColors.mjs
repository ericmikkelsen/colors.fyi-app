import colors from './quantumColors.json'
// import namedColors from './named-colors.json'
import {findNearestNamedColor} from '../modules/nearestColor'
import fs from 'fs'
const sortedColors = colors.reduce( (c, color) => {

    const namedColor = findNearestNamedColor(color)
    if(c[namedColor.name]){
        c[namedColor.name].push(color)
    } else {
        c[namedColor.name] = [color]
    }
    return c
}, {})

fs.writeFileSync( './quantumColorsSorted.json',JSON.stringify(sortedColors) )