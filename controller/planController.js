const { default: mongoose } = require("mongoose");
const Place = require("../model/Place");
const Plan = require("../model/Plan");

const planController = {
    getAllPlan: async (req, res) => {
        try {
            const plans = await Plan.find();
            return res.status(200).json(plans);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    },
    createPlan: async (req, res) => {
        try {
            const {
                name,
                min_budget,
                max_budget,
                from,
                to,
                goWithId,
                totalHour,
                places,
                status,
                userId
            } = req.body;

            const newPlan = new Plan({
                name,
                min_budget,
                max_budget,
                from,
                to,
                goWithId: new mongoose.Types.ObjectId(goWithId),
                totalHour,
                places: places.map(p => ({
                    placeId: new mongoose.Types.ObjectId(p.placeId),
                    order: p.order
                })),
                status,
                userId: mongoose.Types.ObjectId(userId)
            });

            await newPlan.save();

            return res.status(201).json(newPlan);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json({ message: 'Failed to create plan', error });
        }
    },
    getRandomElement: (arr) => arr[Math.floor(Math.random() * arr.length)],

    createRandomPlan: async (req, res) => {
        try {
            const { userId } = req.body;
            // Lấy tất cả các địa điểm phân loại
            const foodPlaces = await Place.find({ typeId: '66e8579a7901776112067f37' });
            const drinkPlaces = await Place.find({ typeId: '66e857a97901776112067f38' });
            const entertainmentPlaces = await Place.find({ typeId: '66e857b27901776112067f39' });
            console.log('foodPlaces', foodPlaces)
            console.log('drinkPlaces', drinkPlaces)
            console.log('entertainmentPlaces', entertainmentPlaces)

            if (!foodPlaces.length || !drinkPlaces.length || !entertainmentPlaces.length) {
                return res.status(400).json({ message: 'Không đủ dữ liệu để tạo kế hoạch' });
            }

            // Chọn ngẫu nhiên một địa điểm từ mỗi loại
            const selectedFoodPlace = planController.getRandomElement(foodPlaces);
            const selectedDrinkPlace = planController.getRandomElement(drinkPlaces);
            const selectedEntertainmentPlace = planController.getRandomElement(entertainmentPlaces);

            // Tạo dữ liệu kế hoạch mới
            const newPlan = new Plan({
                name: 'Kế hoạch của bạn',
                min_budget: 0, // Thay đổi tùy theo nhu cầu
                max_budget: 0, // Thay đổi tùy theo nhu cầu
                from: new Date(), // Thay đổi tùy theo nhu cầu
                to: new Date(),
                date: new Date(), // Thay đổi tùy theo nhu cầu
                goWithId: null, // Thay đổi tùy theo nhu cầu
                totalHour: 0, // Thay đổi tùy theo nhu cầu
                places: [
                    { placeId: selectedFoodPlace._id, order: 1 },
                    { placeId: selectedDrinkPlace._id, order: 2 },
                    { placeId: selectedEntertainmentPlace._id, order: 3 }
                ],
                status: 'drafts',
                userId: new mongoose.Types.ObjectId(userId) // Thay đổi tùy theo nhu cầu
            });

            // Lưu kế hoạch mới vào cơ sở dữ liệu
            const savedPlan = await newPlan.save();

            return res.status(201).json(savedPlan);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo kế hoạch' });
        }
    }
}

module.exports = planController;