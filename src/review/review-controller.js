import Supervision from './reviewmodel.js';

export const getSupervisionRecords = async (req, res) => {
  try {

    const {
      page = 1,
      limit = 10,
      practica,
      supervisor
    } = req.query;

    const filter = {};

    if (practica) {
      filter.practica = practica;
    }

    if (supervisor) {
      filter.supervisor = supervisor;
    }

    const supervisions = await Supervision.find(filter)
      .populate('practica')
      .populate('supervisor')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Supervision.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: supervisions,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        limit: Number(limit)
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error getting supervision records',
      error: error.message
    });

  }
};


export const getSupervisionById = async (req, res) => {
  try {

    const { id } = req.params;

    const supervision = await Supervision
      .findById(id)
      .populate('practica')
      .populate('supervisor');

    if (!supervision) {
      return res.status(404).json({
        success: false,
        message: 'Supervision record not found'
      });
    }

    res.status(200).json({
      success: true,
      data: supervision
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error getting supervision record',
      error: error.message
    });

  }
};


export const createSupervision = async (req, res) => {
  try {

    const data = req.body;

    const supervision = new Supervision(data);

    await supervision.save();

    res.status(201).json({
      success: true,
      message: 'Supervision created successfully',
      data: supervision
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: 'Error creating supervision',
      error: error.message
    });

  }
};


export const updateSupervision = async (req, res) => {
  try {

    const { id } = req.params;

    const supervision = await Supervision.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!supervision) {
      return res.status(404).json({
        success: false,
        message: 'Supervision record not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Supervision updated successfully',
      data: supervision
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: 'Error updating supervision',
      error: error.message
    });

  }
};


export const deleteSupervision = async (req, res) => {
  try {

    const { id } = req.params;

    const supervision = await Supervision.findByIdAndDelete(id);

    if (!supervision) {
      return res.status(404).json({
        success: false,
        message: 'Supervision record not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Supervision deleted successfully'
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error deleting supervision',
      error: error.message
    });

  }
};
