const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')
const { Schema } = mongoose;


const userSchema = new Schema({
  name: { type: String, required: true, },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['PACIENTE', 'MEDICO'], default: 'PACIENTE' },
  email: { type: String, required: true, unique: true },
  cpf: { type: Number, require: true, unique: true},
  endereco: { rua: { type: String, require: true}, bairro: { type: String, require: true}, cidade: { type: String, require: true}, estado: { type: String, require: true}, pais: { type: String, require: true}},
  medicos: [{ type: mongoose.Types.ObjectId, ref: 'Medico', required: true }],
  ativo: { type: Boolean, required: true, default: true },
});

userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;