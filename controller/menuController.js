const Menu = require("../model/Menu");

const menuController = {
    getAllMenu: async (req, res) => {
        try {
            const menu = await Menu.find();
            return res.status(200).json(menu);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = menuController;