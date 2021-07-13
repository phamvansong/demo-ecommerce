import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import NextPre from '../nextPre'

const AdminProductPage = (props) => {
    const inputS = useRef("")
    const getSearchItem = () => {
        props.searchKeyword(inputS.current.value)
    }

    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">QUẢN LÝ SẢN PHẨM</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='/admin/product/add' className='btn btn-primary'>Thêm sản phẩm</Link>
                </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group "style={{marginLeft:'300px'}}>
                    <input ref={inputS} name="keyword" type="text" className="form-control" placeholder="Nhập từ khóa ..."
                        value={props.searchItem} onChange={getSearchItem}>
                    </input>
                    <td>
                        <select className="cbx" onChange={props.setPrice} style={{ witch: "60px", height: "40px", marginLeft: '20px' }}>
                            <option value="" selected>Chọn khoảng giá</option>
                            <option value="1" >0-100</option>
                            <option value="2" >100-500</option>
                            <option value="3" >500-1000</option>
                            <option value="4" >Lớn hơn 1000</option>
                            <option value="0">Tất cả </option>
                        </select>
                    </td>
                    <td>
                        <select className="cbx" onChange={props.setType} style={{ witch: "60px", height: "40px", marginLeft: '20px' }}>
                            <option value=""> Chọn loại</option>
                            <option value="1" >Đồ ăn</option>
                            <option value="2">Đồ uống</option>
                            <option value="0">Tất cả </option>
                        </select>
                    </td>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Số lượng</th>
                            <th>Loại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} width="50" height="50" /></td>
                                <td>{product.price}</td>
                                <td>{product.status ? 'Còn hàng' : 'Hết hàng'}</td>
                                <td>{product.quantity}</td>
                                <td>{product.type}</td>
                                <th>
                                    <Link to={`/admin/product/${product.id}`} className="btn btn-primary">Edit</Link>
                                    <button onClick={() => props.onRemove(product.id)} className="btn btn-danger">Xóa</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <NextPre {...props} />
        </div>
    )
}

export default AdminProductPage
