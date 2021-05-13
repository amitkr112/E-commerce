import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
export default function HomeScreen() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/api/products')
                setProducts(data)
                setLoading(false)
            }
            catch (err) {
                setError(err.message)
                setLoading(false)
            }

        };
        fetchData();
    }, [])
    return (
        <div>
            {/* In order to use javascript inside react we should use curly bracket and write our js code inside it */}
            {
                loading ? <LoadingBox></LoadingBox> :
                    error ? <MessageBox variant="danger">{error}</MessageBox> :
                        <div className="row center">
                            {
                                products.map(product => (
                                    <Product key={product.id} product={product}></Product>


                                ))

                            }
                        </div>

            }


        </div>
    )
}
