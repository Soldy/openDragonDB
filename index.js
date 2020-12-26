'use strict';


const fBase = (require('./db.files.js')).base;
const gBase = (require('./db.groups.js')).base;
const mBase = (require('./db.modules.js')).base;
const aBase = (require('./db.apps.js')).base;
const vBase = (require('./db.views.js')).base;
const eBase = (require('./db.extensions.js')).base;
const pBase = (require('./db.projects.js')).base;
const commands = (require('./commands.js')).commands;

const openDragonDbBase = function(parentIn){
    /*
     * @public
     * @return {object}
     */
    this.openDragon = function(){
        return openDragon;
    };
    /*
     * @public
     * @return {string} || {bool}
     */
    this.commands = function(){
        return commands;
    };
    /*
     * @public
     * @return {object}
     */
    this.command = function(data){
        if(2 > data.length)
            return help();
        switch (data[1]) {
        case 'f':
        case 'file':
            return fDB.command(data);
        case 'g':
        case 'group':
            return gDB.command(data);
        case 'm':
        case 'modul':
        case 'module':
            return mDB.command(data);
        case 'v':
        case 'view':
            return vDB.command(data);
        case 'a':
        case 'app':
            return aDB.command(data);
        case 'x':
        case 'xtension':
        case 'extension':
            return eDB.command(data);
        case 'p':
        case 'project':
            return pDB.command(data);
        default:
            return help();
        }
    };
    /*
     * @public
     * @return {object}
     */
    this.file=function(){
        return fDB;
    };
    /*
     * @public
     * @return {object}
     */
    this.group=function(){
        return gDB;
    };
    /*
     * @public
     * @return {object}
     */
    this.module=function(){
        return mDB;
    };
    /*
     * @public
     * @return {object}
     */
    this.project=function(){
        return pDB;
    };
    /*
     * @public
     * @return {object}
     */
    this.app=function(){
        return aDB;
    };
    /*
     * @public
     * @return {object}
     */
    this.view=function(){
        return vDB;
    };
    /*
     * @public
     * @return {object}
     */
    this.extension=function(){
        return eDB;
    };
    /*
     * @private
     * @var {object}
     */
    let fDB = new fBase(this);
    /*
     * @private
     * @var {object}
     */
    let gDB = new gBase(this);
    /*
     * @private
     * @var {object}
     */
    let mDB = new mBase(this);
    /*
     * @private
     * @var {object}
     */
    let pDB = new pBase(this);
    /*
     * @private
     * @var {object}
     */
    let vDB = new vBase(this);
    /*
     * @private
     * @var {object}
     */
    let aDB = new aBase(this);
    /*
     * @private
     * @var {object}
     */
    let eDB = new eBase(this);
    /*
     * @private
     * @return {string}
     */
    let help = function(){
        return 'db help \n';
    };
    let openDragon = parentIn;
};
