import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AdminProductAddPage = ({ onAdd }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();

    const onSubmit = (data) => {
        const newData = {
            id: uuidv4(),
            ...data
        }
        onAdd(newData);
        history.push('/admin/product');

    }
    return (
        <div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Thêm sản phẩm</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <Link class="btn btn-primary" to="/admin/product">Quay trở lại</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <div className="form-text text-danger">Bạn bắt buộc phải nhập tên sản phẩm</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        {...register('price', { required: true })} />
                    {errors.price && <div className="form-text text-danger">Bạn bắt buộc phải nhập giá sản phẩm</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label">Số lượng</label>
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        {...register('quantity', { required: true })} />
                    {errors.quantity && <div className="form-text text-danger">Bạn bắt buộc phải nhập số lượng sản phẩm</div>
                    }
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

export default AdminProductAddPage
