import Catatan from "../models/CatatanModel.js";

export const getCatatan = async (req, res) => {
    try {
        const response = await Catatan.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCatatanById = async (req, res) => {
    try {
        const user = await Catatan.findOne({ where: { id: req.params.id } });
        if (!user) return res.status(404).json({ msg: "info tidak ditemukan" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE USER
export const createCatatan = async (req, res) => {
    try {
        await Catatan.create(req.body);
        res.status(201).json({ msg: "Catatan berhasil diupload" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE USER
export const updateCatatan = async (req, res) => {
    try {
        const user = await Catatan.findOne({ where: { catatan_id: req.params.id } });
        if (!user) return res.status(404).json({ msg: "Catatan tidak ditemukan" });
        
        await Catatan.update(req.body, { where: { catatan_id: req.params.id } });
        res.status(200).json({ msg: "Catatan berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteCatatan = async (req, res) => {
    try {
        const user = await Catatan.findOne({ where: { catatan_id: req.params.id } });
        if (!user) return res.status(404).json({ msg: "Catatan tidak ditemukan" });
        
        await Catatan.destroy({ where: { catatan_id: req.params.id } });
        res.status(200).json({ msg: "Catatan berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
