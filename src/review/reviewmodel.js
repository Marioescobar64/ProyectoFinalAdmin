'use strict';

import mongoose from 'mongoose';

const supervisionSchema = new mongoose.Schema({
    practica: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Practice',
        required: [true, 'La práctica es obligatoria']
    },
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El supervisor es obligatorio']
    },
    comentario: {
        type: String,
        required: [true, 'El comentario es obligatorio'],
        trim: true,
        maxLength: [500, 'El comentario no puede exceder los 500 caracteres']
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    }
}, {
    timestamps: true
});

supervisionSchema.index({ practica: 1 });
supervisionSchema.index({ supervisor: 1 });
supervisionSchema.index({ fecha: 1 });
supervisionSchema.index({ practica: 1, supervisor: 1 });

export default mongoose.model('Supervision', supervisionSchema);