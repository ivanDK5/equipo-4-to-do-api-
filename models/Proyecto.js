
/** Clase que representa un proyecto de trabajo y sus atributos*/
const mongoose = require('mongoose');

//se crea el Schema de Proyecto

const ProyectoSchema =  new mongoose.Schema({
    nombre:{type: String, required: true},
    descripcion:{type: String, required: true},
    tag:{type: mongoose.Schema.Types.ObjectId,ref:'Tag', required: true},
  //  contexto: {type: mongoose.Schema.Types.ObjectId,ref: 'Contexto', required: true}, ESPERANDO
    estatus:{type: mongoose.Schema.Types.ObjectId,ref:'Estatus', required: true}   
},{timestamps: true, collection: 'projects'});


ProyectoSchema.methods.publicData = function()
{
  const{
  _id,
  nombre,
  descripcion,
  tag,
  //contexto,
  estatus
  }  =this.toObject();
  return {
    id: _id,
    nombre: nombre,
    descripcion: descripcion,
    tag: tag,
    //contexto: contexto,
    estatus: estatus
  };
};

mongoose.model('Proyecto', ProyectoSchema);
