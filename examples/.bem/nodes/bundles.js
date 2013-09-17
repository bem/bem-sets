'use strict';

var PATH = require('path');

exports.extendMake = function (registry) {
    registry.decl('BundleNode', {

        getTechs : function() {
            return [
                'bemjson.js',
                'bemdecl.js',
                'deps.js',
                'css',
                'js'
            ];
        },

        getLevels : function() {
            var resolve = PATH.resolve.bind(PATH, this.root);
            return ['common.blocks', 'desktop.blocks'].map(function(lvl) {
                return resolve(lvl);
            });
        }

    });
};
