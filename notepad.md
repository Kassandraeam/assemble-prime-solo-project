If a checkbox is checked, do something.

need the await ('begin') for sure.
Don't need the query?
do need the 
await Promise.all(pizzas.map) stuff.
do need the await client.query('COMMIT') stuff.
catch (error)
and the finally.




















router.post('/', async (req, res) => {
    const client = await pool.connect();

    try {
        const {
            customer_name,
            street_address,
            city,
            zip,
            type,
            total,
            pizzas
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;`, [customer_name, street_address, city, zip, type, total]);
        const orderId = orderInsertResults.rows[0].id;

        await Promise.all(pizzas.map(pizza => {
            const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
            const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/order', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});