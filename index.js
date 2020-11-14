'use strict';




let projectsDB ;
let viewsDB ;
let applicationsDB ;
let modulesDB ;
let groupsDB ;
let extensionsDB ;
let filesDB ;

const openDragonDbBase = {
    let init = function(){
        projectsDB = new (require('temprc')).temprc(
            'db/projects.json'
        );
        viewsDB = new (require('temprc')).temprc(
            'db/views.json'
        );
        applicationsDB = new (require('temprc')).temprc(
            'db/applicationss.json'
        );
        modulesDB = new (require('temprc')).temprc(
            'db/modules.json'
        );
        groupsDB = new (require('temprc')).temprc(
            'db/groups.json'
        );
        extensionsDB = new (require('temprc')).temprc(
            'db/extensions.json'
        );
        filesDB = new (require('temprc')).temprc(
            'db/files.json'
        );
    }
}
