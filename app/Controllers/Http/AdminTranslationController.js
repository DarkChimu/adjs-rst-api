'use strict'

const Antl = use('Antl')
const Database = use('Database')
const Helpers = use('Helpers')

class AdminTranslationController {
	async index({ request , params }){
		//let /* { name , text , locked, language_code} */ data = request.all()

		/* const undoNotate = (notated) =>{  
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
		
		const doNotate = (obj,target,prefix) => {
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

		return undoNotate(data) */

		//return {mensaje: `${language_code = `${params.id}`} ${name} ${text} ${locked}`}

		const langObject = require(Helpers.resourcesPath(`locales/frontend/${params.id}.json`))

        return langObject
	}
	
	async store({request}){
		const { language_code, key, text , locked} = request.all();

		return await Database.table('admin_translations').select('*')

		
	}

}

module.exports = AdminTranslationController
