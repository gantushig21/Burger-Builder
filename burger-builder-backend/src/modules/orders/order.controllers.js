import Order from './order.model';

export async function orderBurger(req, res) {
    try {
        const order = await Order.create(req.body);

        return res.status(200).json(order);
    } catch (err) {
        return res.status(500).json(err);
    }
}