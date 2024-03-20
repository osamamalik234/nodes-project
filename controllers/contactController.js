const getContact = (req, res) => {
  res.status(200).json({ message: "Get contacts" });
};

const postContact = (req, res) => {
    const { name, email } = req.body;

  // Check if the required properties are present
  if (name && email) {
    // Display user information
    console.log(name, email);
    res.status(200).send(`Name: ${name}, Email: ${email}`);
  } else {
    // Handle missing data
    res.status(400)
    throw new Error("All fields are  not available");
  }
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
