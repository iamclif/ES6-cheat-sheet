// person.js
const person = {
  name: 'Clif'
}
export defualt person

// utility.js
export const clean = () => {}
export const baseData = 10


//// apps.js
// person can be named anything
import person from './person.js'
// since there is no defualt export must call specific export name
import {clean} from './utility.js'
import {baseData} from './utility.js'
// or
import {clean, baseData} from './utility.js'

//// variation apps.js
// assign alias
import {clean as Clean, baseData as Data} from './utility.js'
// import all and assign alias
import * as bundled from './utility.js'
// bundled.clean
// bundled.baseData
