'use strict'
const temprc = (require('temprc')).temprc;

exports.groupBase=function(parentIn){
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
     * @param {string}
     * @private
     * @return {string} || {bool}
     */
    let add =function(name){
        let id = ((Math.floor(Math.random()*36).toString(36)+
            DB.size+
            (Math.floor(Math.random()*36).toString(36));
        if (search(name) !== false)
            return false;
        let packet = ({
            "serial"      : DB.size, 
            "id"          : id,
            "name"        : name, // name
            "files"       : []
         });
         DB.add(
             id,
             packet
         );
         return true;
    }
    /*
     * @private
     * @var {object}
     */
    const DB = new temprc(
        'od_db/groups.json'
    );
    const openDragonDb = parentIn;
}
