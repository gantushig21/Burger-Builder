import Order from './order.model';

export async function orderBurger(req, res) {
    try {
        const order = await Order.create({
            ingredients: req.body.ingredients,
            price: req.body.price,
            customer: {
                name: req.body.orderData.name,
                address: {
                    street: req.body.orderData.street,
                    zipCode: req.body.orderData.zipCode,
                    country: req.body.orderData.country
                },
                email: req.body.orderData.email
            },
            deliveryMethod: req.body.orderData.deliveryMethod,
            userId: req.body.userId
        });

        return res.status(200).json(order);
    } catch (err) {
        return res.status(500).json(err);
    }
}

export async function getOrders(req, res) {
    try {
        const orders = await Order.find({
            userId: req.user._id
        });

        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json(err);
    }
}