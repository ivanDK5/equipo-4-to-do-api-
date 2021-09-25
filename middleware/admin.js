const mongoose=require('mongoose');
const Usuario=mongoose.model('Usuario');

module.exports=(err,req,res,next)=>{
 Usuario.findById(req.usuario.id).populate({path:'rol',select:'nombre'})
 .then( user=>{
   if(err){next(err)}
   if(user){
    const {rol}=user;
    if(rol.nombre==='admin'){
      return next()
    }else{
      return res.status(403).send({
        status:'403',
        type:'Forbbiden',
        msj:'No tienes permisos necesarios'})
    }
  }else{
    return res.status(404).send({
      status:'404',
      type:'Not found',
      msj:'No se encontro registro'})
   }
 
 }).catch(next)
}