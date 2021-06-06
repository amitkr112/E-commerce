import bcrypt from 'bcrypt'
const data = {
    users: [
        {
            name: 'Amit',
            email: 'admin@example.com',
            // NOTE: IN DATABASE THE PLAINTEXT PASSWORD IS NOT SECURE HENCE IN ORDER TO SECURE THIS WE USE 
            // BCRYPT TO HASH IT 
            // 8 IS USED FOR MANUAL SOLVER
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true

        },
        {
            name: 'John',
            email: 'user@example.com',
            // NOTE: IN DATABASE THE PLAINTEXT PASSWORD IS NOT SECURE HENCE IN ORDER TO SECURE THIS WE USE 
            // BCRYPT TO HASH IT 
            // 8 IS USED FOR MANUAL SOLVER
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false

        }
    ]
    ,
    products: [
        {
            // Product Description

            name: "Adidas Shirt",
            category: "Shirts",
            image: "/images/p1.jpg",
            price: 120,
            brand: "Adidas",
            rating: 5,
            numReviews: 10,
            countInStock: 10,
            description: "High quality shirt"
        }, {

            name: "Raymond Shirt",
            category: "Shirts",
            image: "/images/p2.jpg",
            price: 130,
            brand: "Raymond",
            rating: 4.5,
            numReviews: 20,
            countInStock: 20,
            description: "High quality shirt"
        }, {

            name: "Denim Shirt",
            category: "Shirts",
            image: "/images/p3.jpg",
            price: 110,
            brand: "Denim",
            rating: 4,
            numReviews: 5,
            countInStock: 0,
            description: "High quality shirt"
        }, {

            name: "Adidas Pant",
            category: "Pants",
            image: "/images/p4.jpg",
            price: 150,
            brand: "Adidas",
            rating: 5,
            numReviews: 100,
            countInStock: 50,
            description: "High quality pant"
        }, {

            name: "Denim Pants",
            category: "Pants",
            image: "/images/p5.jpg",
            price: 160,
            brand: "Adidas",
            rating: 5,
            numReviews: 1000,
            countInStock: 60,
            description: "High quality shirt"
        }, {

            name: "Raymond Pants",
            category: "Pants",
            image: "/images/p6.jpg",
            price: 100,
            brand: "Raynmond",
            rating: 5,
            numReviews: 50,
            countInStock: 40,
            description: "High quality shirt"
        }
    ]
}
export default data