'use strict';


const fBase = (require('./db.files.js')).base;
const gBase = (require('./db.groups.js')).base;
const mBase = (require('./db.modules.js')).base;
const pBase = (require('./db.projects.js')).base;
const aBase = (require('./db.apps.js')).base;
const vBase = (require('./db.views.js')).base;
const eBase = (require('./db.extensions.js')).base;

const openDragonDbBase = {
    /*
     * @public
     * @return {object}
     */
    this.file=function(){
        return fDB;
    }
    /*
     * @public
     * @return {object}
     */
    this.group=function(){
        return gDB;
    }
    /*
     * @public
     * @return {object}
     */
    this.module=function(){
        return mDB;
    }
    /*
     * @public
     * @return {object}
     */
    this.project=function(){
        return pDB;
    }
    /*
     * @public
     * @return {object}
     */
    this.app=function(){
        return aDB;
    }
    /*
     * @public
     * @return {object}
     */
    this.view=function(){
        return vDB;
    }
    /*
     * @public
     * @return {object}
     */
    this.extension=function(){
        return eDB;
    }
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
     * @var {object}
     */
    let init = function(){
    }
}
