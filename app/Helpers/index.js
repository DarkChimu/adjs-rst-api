'use strict'

const Helper = (exports = module.exports = {})
const Helpers = use('Helpers')

Helper.doNotate = (obj,target,prefix) => {
    //Manejo de Excepción
    if(typeof obj !== 'object' || obj === null) {
      throw new Error(`${obj} is not a object`)
    }
  
    target = target || {},
    prefix = prefix || "";
  
    //Recorrer el Objeto
    Object.keys(obj)
      .forEach((key) => {
        if ( typeof(obj[key]) === "object" ) 
        {
          doNotate(obj[key],target,prefix + key + ".")
        } 
        else 
        {
          return target[prefix + key] = obj[key]
        }
      })
  
    return target
  }
  
  
  Helper.undoNotate = (notated) =>{  
    //Manejo de Excepción
    if(typeof notated !== 'object' || notated === null) {
      throw new Error(`${notated} is not a object`)
    } 
  
    let obj = {}
    let parent = obj
  
    //Recorrer el Objeto
    Object.keys(notated)
      .forEach((key) => {
        
        let subkeys = key.split('.')
        let last = subkeys.pop()
        
        subkeys.forEach((subkey) => {
          parent[subkey] = typeof parent[subkey] === 'undefined' ? {} : parent[subkey]
          parent = parent[subkey]
        })
  
        parent[last] = notated[key]
        parent = obj
      })
  
      return parent
    }