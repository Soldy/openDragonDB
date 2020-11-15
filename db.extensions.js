'use strict'
const temprc = (require('temprc')).temprc;


exports.extensionBase=function(parentIn){
    /*
     * @param {string}
     * @private
     * @return {string} || {bool}
     */
    let search = function(name){
        let list = DB.all();
        for(let i in list)
            if(list[i].name === name)
            return i;
        return false;

    }
    /*
     * @param {string}
     * @private
     * @return {string} || {bool}
     */
    let get = function(id){
        return DB.get(id);
    }
    /*
     * @param {string}
     * @private
     * @return {string} || {bool}
     */
    let del = function(id){
       if(DB.del(id))
           return true;
       return false;
    }
    /*
     * @param {string}
     * @private
     * @return {string} || {bool}
     */

    let list = function(){
        let out = [];
        let list = DB.all();
        for(let i in list)
            out.push(list[i].name);
        return out;
    }
    /*
     * @private
     * @var {object}
     */
    const DB = new temprc(
        'od_db/extensions.json'
    );
    const openDragonDb = parentIn;
}
