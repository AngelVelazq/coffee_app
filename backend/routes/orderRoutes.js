const express = require('express');
const supabase = require('../db/supabaseClient');

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    const { customer_id, total_price, status } = req.body;

    if (!customer_id || !total_price || !status) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
        .from('orders')
        .insert([{ customer_id, total_price, status }], { returning: '*' });

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Order created successfully!', order: data[0] });
});

// Get all orders
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('orders').select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

// Get a single order by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', id)
        .maybeSingle();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    if (!data) {
        return res.status(404).json({ error: 'Order not found' });
    }

    res.json(data);
});

// Update an order
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { customer_id, total_price, status } = req.body;

    const { data, error } = await supabase
        .from('orders')
        .update({ customer_id, total_price, status })
        .eq('id', id)
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    if (!data) {
        return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ message: 'Order updated successfully', order: data });
});

// Delete an order
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('orders')
        .delete()
        .eq('id', id)
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    if (!data || data.length === 0) {
        return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ message: 'Order deleted successfully' });
});

module.exports = router;