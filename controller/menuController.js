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
    },
    createMenu: async (req, res) => {
        try {
            const {
                name,
                typeId,
                open,
                close,
                rating,
                address,
                phoneNumber,
                menuId,
                thumbnail
            } = req.body;
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = menuController;