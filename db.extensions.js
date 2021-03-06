'use strict';
const temprc = (require('temprc')).temprc;


exports.extensionBase=function(parentIn){
    /*
     * @param {string}
     * @public
     * @return {string} || {bool}
    */
    this.search = function(name){
        return search(name);
    };

    /*
     * @public
     * @return {object}
     */
    this.command = function(data){
        if(3 > data.length)
            return help();
        switch (data[2]) {
        case 'a':
        case 'add':
            return commandAdd(data);
        case 'l':
        case 'list':
            return commandList();
        case 'd':
        case 'det':
            return commandDel(data);
        case 'g':
        case 'get':
            return commandGet(data);
        default:
            return help();
        }
    };
    /*
     * @param {array}
     * @private
     * @return {string}
     */
    const commandAdd = function(data){
        if(4 > data.length)
            return help();
        let id = search(data[3]);
        if ( id !== false)
            return (cn+' already exist \n');
        add(data[3]);
        return (cn+' '+data[3]+' added \n');
    };
    /*
     * @param {array}
     * @private
     * @return {string}
     */
    const commandGet = function(data){
        if(4 > data.length)
            return help();
        let id = search(data[3]);
        if ( id === false)
            return (cn+' not found \n');
        let details = get(id);
        return JSON.stringify(
            details,
            null,
            4
        );
    };
    /*
     * @param {array}
     * @private
     * @return {string}
     */
    const commandDel = function(data){
        if(4 > data.length)
            return help();
        if ( get(data[3]) === false)
            return (cn+' not found \n');
        del(data[3]);
        return (cn+' '+data[3]+' deleted \n');
    };
    /*
     * @private
     * @return {string}
     */
    const commandList = function(){
        return JSON.stringify(
            list(),
            null,
            4
        );
    };
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

    };
    /*
     * @param {string}
     * @private
     * @return {string} || {bool}
     */
    let get = function(id){
        return DB.get(id);
    };
    /*
     * @param {string}
     * @private
     * @return {string} || {bool}
     */
    let del = function(id){
        if(DB.del(id))
            return true;
        return false;
    };
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
    };
    /*
     * @param {string}
     * @private
     * @return {string} || {bool}
     */

    let add = function(idat){
        DB.add(idat);
    };
    /*
     * @private
     * @var {object}
     */
    const DB = new temprc(
        'od_db/extensions.json'
    );
    /*
     * @private
     * @return {string}
     */
    const help = function(){
        return ('db '+cn+' help \n');
    };
    /*
     * @private
     * @var {object}
    */
    const openDragonDb = parentIn;
    /*
     * @private
     * @var {string}
     */
    const cn = 'extension';
};
