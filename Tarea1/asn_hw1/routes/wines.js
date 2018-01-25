//import { read } from 'fs';

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
    Wine.findById(req.params.id, function(err,result){
        if(err)
            res.send(500,err.message);
    
    console.log('wine requested: ' + result);
    res.status(200).jsonp(result);
    })
                          

};

exports.addWine=function(req,res){
    Wine.addWine(req.body,function(err,wines){
            if(err)
              return  res.status(500).send(err.message);
            
            console.log ('Wine added: '+ req.body);
            res.status(200).jsonp(wines);
    })
};


exports.deleteWine = function(req,res){
    Wine.deleteWine({"id": req.params.id} ,function(err,result){
            if(err)
                return res.status(500).send(err.message);

            result.status(200).jsonp("wine removed: " + req.params.id);
    });

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
          