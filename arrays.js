var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(){
  chocolateBars = ['snickers', 'hundred grand', 'kitkat']
  chocolateBars = ['foo', ...chocolateBars]
  return chocolateBars
}
addElementToBeginningOfArray()