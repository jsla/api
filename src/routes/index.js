/*
    This file just auomatically loads all files in the routes directory and the then merges the arrays together.
*/


var fs = require( 'fs' )

function getModules( done ) {
    fs.readdir( __dirname , function( err, files ) {
        
        var modules;

        if ( err ) return done( err )
        

        files = files.filter( filterFiles )
        modules = files.map( loadModule ).filter( function( n ) { return n; })
        done( null, modules )
    } )
}

function loadModule( file ) {
    var res
    try {
        res = require( __dirname + '/' + file )
    }
    catch ( e ) {
        res = null
    }
    return res
}

function filterFiles( file ) {
    if ( /index/.test( file ) ) {
        return false
    }
    return /\.js$/.test( file )
}

function mergeRoutes( routes ) {
    function arrays( arr ) {
        return Array.isArray( arr )
    }

    return Array.prototype.concat.apply( [], routes.filter( arrays ) )
}

exports.getRoutes = function( done ) {
    getModules( function( err, modules ) {
        if ( err ) {
            return done( err )
        }
        done( null, mergeRoutes( modules ) )
    } )
}