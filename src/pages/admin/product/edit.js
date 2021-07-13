import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';

import { useHistory, Link, useParams } from 'react-router-dom';

const AdminProductEditPage = ({ onEdit }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let history = useHistory();
    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products/${id}`);
                const data = await response.json();
                setProduct(data);
                reset(data);
            } catch (errors) {
                console.log(errors)
            }
        };
        getProduct();
    }, []);

    const onSubmit = (data) => {
        const newData = {
            id: id,
            ...data
        };
        onEdit(newData);
        history.push('/admin/product');

    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Sửa sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='/admin/product/' className='btn btn-primary'>Quay trở lại</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        defaultValue={product.name}
                        {...register('name', { required: true })} />
                </div>
                <div className="mb-3">
                    <td>
                        <select className="cbx"
                            defaultValue={product.type} {...register('type', { required: true })} style={{ witch: "100px", height: "50px" }}>
                            <option value="">Chọn loại</option>
                            <option value="Đồ ăn" >Đồ ăn</option>
                            <option value="Đồ uống">Đồ uống</option>

                        </select>
                    </td>
                </div>
                <div className="mb-3">
                    <label htmlFor="product-image" className="form-label">Hình sản phẩm</label>
                    <div><img src={product.image} width='380px' height='300px' border='1px solid dark'></img></div>
                    <input type="text"
                        className="form-control"
                        id="product-image"
                        defaultValue={product.image}
                        {...register('image', { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        defaultValue={product.price}
                        {...register('price', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label">Số lượng</label>
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        defaultValue={product.quantity}
                        {...register('quantity', { required: true })} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        id="product-status"
                        {...register('status')}
                    />
                    <label className="form-check-label" htmlFor="product-status">Còn hàng</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminProductEditPage
