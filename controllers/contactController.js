const getContact = (req, res) => {
  res.status(200).json({ message: "Get contacts" });
};

const postContact = (req, res) => {
  res.status(201).json({ message: "contact created" });
};

const updateContact = (req, res) => {
  res.status(201).json({ message: `Update Contact ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(201).json({ message: `Delete Contact ${req.params.id}` });
};

module.exports = {
  getContact,
  postContact,
  updateContact,
  deleteContact,
};
