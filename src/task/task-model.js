'use strict';

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es obligatorio'],
        trim: true,
        maxLength: [255, 'El título no puede exceder los 255 caracteres']
    },
    descripcion: {
        type: String,
        trim: true,
        maxLength: [1000, 'La descripción no puede exceder los 1000 caracteres']
    },
    fechaInicio: {
        type: Date,
        required: [true, 'La fecha de inicio es obligatoria']
    },
    fechaFin: {
        type: Date
    },
    estado: {
        type: String,
        enum: ['pendiente', 'en progreso', 'completada'],
        default: 'pendiente'
    },

   
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: [true, 'El estudiante es obligatorio']
    },


    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
        required: [true, 'El supervisor es obligatorio']
    }

}, {
    timestamps: true
});


taskSchema.index({ estudiante: 1 });
taskSchema.index({ supervisor: 1 });
taskSchema.index({ estado: 1 });

export default mongoose.model('Task', taskSchema);