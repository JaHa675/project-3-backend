const router = require("express").Router();

router.get('/', async (req, res) => {
    try {
        const data = await User.findAll({ include: { all: true } });
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await User.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No user with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
      req.body.user_name = req.body.user_name.toLowerCase();
      const data = await User.findOne({ where: { user_name: req.body.user_name } })
      if (!data) {
        res.status(400).json({ msg: "'Incorrect email or password, please try again'" });
        return;
      }
      const validPassword = await data.checkPassword(req.body.password);
      if (validPassword) {
        console.log(data)
        req.session.user = { user_id: data.id, logged_in: true };
        await User.update({ is_online: true }, { where: { id: data.id } });
        req.session.save(() => {
          return res.json(data);
        })
      } else {
        return res.status(400).json({ msg: "'Incorrect email or password, please try again'" })
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    }
  });

export default router