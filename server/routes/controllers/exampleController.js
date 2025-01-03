const getExample = (req, res) => {
    res.json({ message: "Example route is working!" });
};

module.exports = { getExample };
