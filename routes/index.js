module.exports = {
  getStatus: (req, res) => {
    res.json({ status: true });
  },
  doSomething: (req, res) => {
    res.sendStatus(200);
  }
};
