module.exports = function(app) {
	var customers = require('../controllers/customer.controller.js');

	app.post('/api/customers',customers.create);

	app.get('/api/customers',customers.findAll);

	app.get('/api/customers/:id', customers.findOne);
 
    // Update a Customer with Id
    app.put('/api/customers/:id', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:id', customers.delete);
}