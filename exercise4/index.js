const express = require('express')
const app = express()
const bodyparser = require('body-parser');
const port = 3000
const { v4: uuidv4 } = require('uuid');

app.use(bodyparser.json());


let products = [{
    id: uuidv4(),
    name: "Tv",
    manufacturer: "Samsung",
    category: "electronics",
    description: "foo",
    price: 400
}]


let users = [{
    id: uuidv4(),
    customername: "Aku",
    address: "Paratiisitie 13",
    invoices: products
}]





//Get all products
app.get('/products', (req, res) => {
    res.json(products);
})

//Get all users
app.get('/users', (req, res) => {
    res.json(users)
})


//Get all purchaces
app.get('/invoices', (req,res) => {
    res.json(invoices)
})

//Get single purchase
app.get('/invoices/:id', (req, res) => {

    const p = users.find(i => i.id === req.params.id,)

    res.json(p);
})

//Get invoices of a user

app.get('/users/:id/invoices', (req, res) => {
    const result = users.findIndex(p => p.id === req.params.id);
    if(result !== -1) {
        users.splice(result, 1, {id: req.params.id, customername: req.params.customername, address: req.params.address, invoices: req.params.invoices});
        res.send(result);
    } else {
        res.send('No such invoice');
    }
})

//Get single product
app.get('/products/invoices', (req, res) => {
   
    const result = products.find(p => p.id === req.params.id,)
    

   res.json(result);
})

//Get single user

app.get('/users/:id', (req, res) => {
    
    const getUser = users.find(u => u.id === req.params.id,)

    res.json(getUser);
})

//Create new user 
app.post('/users',(req, res) => {
    console.log('Creating new user');
    console.log(req.body);
    
    users.push({
        id: uuidv4(),
        customername: req.body.customername,
        address: req.body.address
    })
    res.send('user created')
})



//Create new product
app.post('/products', (req, res) => {
    console.log('Creating new product');
    console.log(req.body);

    products.push({
        id:uuidv4(),
        name:req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        price: req.body.price
    })
    res.send('product created')
})

//modify product
app.put('/products/:id', (req, res) => {
    const result = products.findIndex(products => products.id === req.params.id);
    if(result !== -1) {
        products.splice(result, 1, {id: req.params.id, manufacturer: req.params.manufacturer, category: req.body.category, description: req.params.description, price: req.params.price});
        res.send('Modifying success');
    } else {
        res.send('No such product found');
    }

})

//Delete invoice
app.delete('invoices/:id', (req, res) => {
    
    const result = invoices.findIndex(invoices => invoices.id === req.params.id);
    if(result !== -1) {
        invoices.splice(result, 1, {id: req.params.id, customer: req.params.customer, product: req.params.product});
        res.send('deleting invoice succeeded');
    } else {
        res.send('No such invoice found');
    }
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})