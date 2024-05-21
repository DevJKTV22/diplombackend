import Donation from "../models/donation.js";

// Get all donations
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.findAll();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get donation by ID
export const getDonationById = async (req, res) => {
  const { id } = req.params;
  try {
    const donation = await Donation.findByPk(id);
    if (!donation) {
      res.status(404).json({ message: "Donation not found" });
      return;
    }
    res.json(donation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new donation
export const createDonation = async (req, res) => {
  try {
    const { author, text, summ } = req.body;
    const newDonation = await Donation.create({ author, text, summ });
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update donation by ID
export const updateDonationById = async (req, res) => {
  const { id } = req.params;
  try {
    const donation = await Donation.findByPk(id);
    if (!donation) {
      res.status(404).json({ message: "Donation not found" });
      return;
    }
    await donation.update(req.body);
    res.json({ message: "Donation updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete donation by ID
export const deleteDonationById = async (req, res) => {
  const { id } = req.params;
  try {
    const donation = await Donation.findByPk(id);
    if (!donation) {
      res.status(404).json({ message: "Donation not found" });
      return;
    }
    await donation.destroy();
    res.json({ message: "Donation deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};