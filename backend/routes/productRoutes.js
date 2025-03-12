const express = require('express');
const supabase = require('../db/supabaseClient');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();

    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    if (!data) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(data);
});

// Create a new product
router.post('/', async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
        .from('products')
        .insert([{ name, description, price }], { returning: '*' });

    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Product created successfully!', product: data[0] });
});

// Update a product
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const { data, error } = await supabase
        .from('products')
        .update({ name, description, price })
        .eq('id', id)
        .select();

    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    if (!data) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully', product: data });
});

// Delete a product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)
        .select();

    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    if (!data || data.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
});

module.exports = router;