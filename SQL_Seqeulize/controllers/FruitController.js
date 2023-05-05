class FruitController {
  constructor(model, sequelize) {
    this.model = model;
    this.sequelize = sequelize;
  }

  list = async (req, res) => {
    try {
      let data = await this.model.findAll();
      console.log("Controller data", data);
      return res.json({ fruit: data, message: "success" });
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  rawSelect = async (req, res) => {
    let { query } = req.body;
    console.log(query);
    let [results] = await this.sequelize.query(
      `SELECT * FROM users_addresses WHERE users_id = ${req.body.users_id}`
    );
    console.log("rawSelect", results);
    res.json({ fruit: results, message: "Success" });
  };

  add = async (req, res) => {
    let fruitToAdd = req.body;
    let fruitAdded = await this.model.create(fruitToAdd);
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };

  edit = async (req, res) => {
    let fruitToAdd = req.body;
    let fruitToReplace = req.params.id;
    let fruitToEdit = await this.model.findByPk(fruitToReplace);
    await fruitToEdit.update(fruitToAdd);
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };

  delete = async (req, res) => {
    let fruitToDelete = req.params.id;
    await this.model.destroy({ where: fruitToDelete });
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };
}
module.exports = FruitController;
