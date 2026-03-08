'use strict'

import Review from './reviewmodel.js'


// ==============================
// CREATE REVIEW
// ==============================

export const createReview = async (req, res) => {

    try {

        const data = req.body

        const review = new Review(data)

        await review.save()

        return res.status(201).json({
            success: true,
            message: 'Review creada correctamente',
            review
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error al crear la review',
            error
        })

    }

}


// ==============================
// GET ALL REVIEWS
// ==============================

export const getReviews = async (req, res) => {

    try {

        const reviews = await Review.find()
            .populate('practica')
            .populate('supervisor')

        return res.json({
            success: true,
            reviews
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error al obtener reviews'
        })

    }

}


// ==============================
// GET REVIEW BY ID
// ==============================

export const getReviewById = async (req, res) => {

    try {

        const { id } = req.params

        const review = await Review.findById(id)
            .populate('practica')
            .populate('supervisor')

        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review no encontrada'
            })
        }

        return res.json({
            success: true,
            review
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error al obtener review'
        })

    }

}


// ==============================
// UPDATE REVIEW
// ==============================

export const updateReview = async (req, res) => {

    try {

        const { id } = req.params
        const data = req.body

        const review = await Review.findByIdAndUpdate(
            id,
            data,
            { new: true }
        )

        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review no encontrada'
            })
        }

        return res.json({
            success: true,
            message: 'Review actualizada',
            review
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error al actualizar review'
        })

    }

}


// ==============================
// DELETE REVIEW
// ==============================

export const deleteReview = async (req, res) => {

    try {

        const { id } = req.params

        const review = await Review.findByIdAndDelete(id)

        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review no encontrada'
            })
        }

        return res.json({
            success: true,
            message: 'Review eliminada'
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error al eliminar review'
        })

    }

}
