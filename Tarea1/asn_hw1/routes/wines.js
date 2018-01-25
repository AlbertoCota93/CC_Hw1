/* 
 ***************************************************
 *     APLICACIONES Y SERVICIOS EN LA NUBE         *
 *                   ITESO                         *
 *                                                 * 
 *    Actividad 1: Diseño de un WebService         *
 *    Codigo Base: Alvaro Parres (parres@iteso.mx) * 
 *                                                 * 
 *    Alumno: Alberto Cota Aceves                  *
 *    Exp: is694734                                *
 *                                                 *
 ***************************************************
 *                                                 *
 * Instrucciones: Complete el codigo basado en     * 
 * las indicaciones descritas en el documento      *
 *                                                 *
 ***************************************************
 */

var Wine = require('../models/wine');

//Phase 1
exports.findAll = function(req, res) {
    Wine.find(function(err,wines){
        if(err)
            res.send(500,err.message);

    console.log('All wines Request');
    res.status(200).jsonp(wines);
    })
    //Modified the res.send code to return two JSON Objects 
    /*
     *Put Phase2 Code here.
     */ 

};

exports.findById = function(req, res) {

    console.log('ID: '+req.params.id+' Wine Request');
    //Modified the res.send line to send a JSON Object with the requested ID. 
    res.send({"id":req.params.id, "name":"nombre", "description":"DESCRIPCION"});    

    /*
     * The next code is for Phase 2.
     * 
     * Modified this method to return one specific wine from collection.
     * You have to use the method findById which has the next syntaxis:
     *      findById(id, callback(err, result))
     *   
     */                            

};

/*
* The next code is for Phase 2.
* 
*  Create the methods:
*    addWine
*    deleteWine
*    updateWine
*    
*  Some hints about this tree method are in HomeWork document.
*/
          