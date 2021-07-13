import React from 'react'
import './../assets/index.css'
import NextPre from '../pages/admin/nextPre'

const WebsiteLayout = (props) => {
    return (
        <div>
            <div>
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="link-secondary" href="#"></a>
                        </div>
                        <div className="col-4 text-center">
                            <p className="blog-header-logo text-dark " href="#">TIỆM CÔ HÀNG XÉN</p>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                            </a>
                            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>
                <div className="nav-scroller py-1 mb-2 " >
                    <nav className="nav d-flex justify-content-left ">
                        <a className="p-2 link-secondary" href="#">Trang chủ</a>
                        <a className="p-2 link-secondary" href="#">Sản phẩm</a>
                        <a className="p-2 link-secondary" href="#">Tin tức - Sự kiện</a>
                        <a className="p-2 link-secondary" href="#">Hướng dẫn mua hàng</a>
                        <a className="p-2 link-secondary" href="#">Chính sách đổi trả</a>
                        <a className="p-2 link-secondary" href="#">Liên hệ</a>
                    </nav>
                </div>
                <main className="container">
                    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                        <div className="col-md-40 px-2">
                            <h1 className="display-4 fst-italic" style={{ color: "red" }}>BIG Sale từ ngày 02/06 - 29/06</h1>
                            <p className="lead my-3">Giống như sự kiện Summer Sale hàng năm, có rất nhiều sản phẩm đang giảm giá nhiều đến mức các khách hàng không thể bảo qua được chúng ví dụ như Bánh Bông Lan giảm 40%, Mít Sấy giảm 34%,... và rất nhiều sản phẩm khác có giá cực rẻ đang chờ đón khách hàng.</p>
                            <p className="lead mb-0"><a href="#" className="text-white fw-bold">Xem thêm...</a></p>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">BÁNH PANDAN</strong>
                                    <h3 className="mb-0">Lá nếp đậu xanh</h3>
                                    <div className="mb-1 text-muted">June 12</div>
                                    <p className="card-text mb-auto">Chuẩn vị miền Tây, cắn một miếng bánh dẻo thơm, hòa cùng vị bùi bùi, rồi uống ngụm trà thơm nóng khiến người ăn nhớ mãi😋</p>
                                    <a href="#" className="stretched-link">Đọc tiếp ...</a>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img className="mb-4" src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/195158564_943640006418243_1080092714273119583_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=F8kq524qLxsAX8IS6aB&tn=2TNFkOZ0GgDHkz-S&_nc_ht=scontent.fhan5-6.fna&oh=52ca38773e0481ef71b209d31b96dffa&oe=60E699C5" alt width={200} height={250} />
                                    {/* <svg className="bd-placeholder-img" width={200} height={250} img="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-success">BÁNH MỲ DẺO</strong>
                                    <h3 className="mb-0">Bánh mỳ dẻo socola tươi</h3>
                                    <div className="mb-1 text-muted">June 14</div>
                                    <p className="mb-auto">Socola dẻo nguyên chất bao phủ hộp bánh mang vị hơi đăng đắng xịn sò thơm thơm ngon ngon như scl nhập khẩu ấy ạ 😭</p>
                                    <a href="#" className="stretched-link">Đọc tiếp</a>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img className="mb-4" src="https://scontent.fhan5-5.fna.fbcdn.net/v/t1.6435-9/197637208_943634833085427_5837428590065695431_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_ohc=2HB6xQfgJJAAX8Trs-a&_nc_ht=scontent.fhan5-5.fna&oh=d0590fa2355ad87a62c26e83a2e84751&oe=60E52288" alt width={200} height={250} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-8">
                            <h3 className="pb-4 mb-4 fst-italic border-bottom">CÁC SẢN PHẨM KHÁC</h3>
                            <article className="blog-post">
                                <div className="col-md-50">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">BÁNH CỐM</strong>
                                            <h3 className="mb-0">Cốm làng vòng</h3>
                                            <div className="mb-1 text-muted">January 12</div>
                                            <p className="card-text mb-auto"> Vỏ bánh mềm, dai ko phải bàn về nó😋😋Riêng nhân bánh bếp em thay đổi khẩu vị chung nhất, nhân mềm, thơm. 😋</p>
                                            <a href="#" className="stretched-link">Đọc tiếp ...</a>
                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img className="mb-4" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/198254942_943633689752208_5313706105846274164_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=qQyjSzcyxhUAX80OcwG&_nc_ht=scontent-hkt1-1.xx&oh=719f654113c33d16e98405135f063cf6&oe=60E69F20" alt width={200} height={250} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-50">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">BÁNH BÒ</strong>
                                            <h3 className="mb-0">Bánh bò thốt nốt</h3>
                                            <div className="mb-1 text-muted">May 12</div>
                                            <p className="card-text mb-auto">Bánh được làm từ đường thốt nốt đặc biệt An Giang, nước cốt dừa thơm ngậy, có cùi dừa nhân bên trong, ăn sần sật rất thú vị.</p>
                                            <a href="#" className="stretched-link">Đọc tiếp ...</a>
                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img className="mb-4" src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/192739879_943636379751939_1393453335194165451_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_ohc=VWoLVBDkp4gAX92CO7v&_nc_ht=scontent.fhan5-2.fna&oh=76d324f94b28f5203f6378026104b391&oe=60E575E1" alt width={200} height={250} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-50">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">BÁNH MỲ DẺO</strong>
                                            <h3 className="mb-0">Bánh mỳ dẻo phô mai tươi</h3>
                                            <div className="mb-1 text-muted">June 12</div>
                                            <p className="card-text mb-auto">Bánh mì mềm mịn, dẻo kết dính vào nhau luôn, ăn bánh mì mềm xong nhân kem phô mai dẻo dẻo nhai 1 tý là tan trong miệng luôn</p>
                                            <a href="#" className="stretched-link">Đọc tiếp ...</a>
                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img className="mb-4" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/192197600_943634303085480_4716921552365350689_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=pNI49iYLIKMAX9wli0F&_nc_ht=scontent-hkt1-1.xx&oh=a5d63be15c08aa00d5dcc5c34bec8bbe&oe=60E4869B" alt width={200} height={250} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-50">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">BÁNH RUỐC</strong>
                                            <h3 className="mb-0">Sâu gà nhân kem phô mai</h3>
                                            <div className="mb-1 text-muted">Dec 12</div>
                                            <p className="card-text mb-auto">Thật sự ai sợ nghiện thì đừng nên ăn nhéee, mà hong ngại sợ nghiện thì lại phải ăn đấyyy. </p>
                                            <a href="#" className="stretched-link">Đọc tiếp ...</a>
                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img className="mb-4" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/191709368_943628769752700_304151266855972104_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=AAH8_SK85fgAX_7BKau&_nc_ht=scontent-hkg4-1.xx&oh=a613d772a949fb4b33ea1ee4db5be789&oe=60E429FD" alt width={200} height={250} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-50">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">SỮA CHUA</strong>
                                            <h3 className="mb-0">Sữa chua cốm non</h3>
                                            <div className="mb-1 text-muted">May 03</div>
                                            <p className="card-text mb-auto">Mấy hôm nay nắng nóng khách nhà em hỏi sữa chua nhìu lắm lun, nay em nó đã cập bến tại Cô Hàng Xén rùi đây ạ 🥰 </p>
                                            <a href="#" className="stretched-link">Đọc tiếp ...</a>
                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img className="mb-4" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/193261943_942346649880912_9158755570264416318_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=9lbsqCRf3yMAX-QezRU&_nc_ht=scontent-hkg4-1.xx&oh=75d0da161bac6149a1097f86046d8cdc&oe=60E52725" alt width={200} height={250} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <NextPre {...props} />
                        </div>
                        <div className="col-md-4">
                            <div className="position-sticky" style={{ top: '2rem' }}>
                                <div className="p-4 mb-3 bg-light rounded">
                                    <h4 className="fst-italic">GIỚI THIỆU</h4>
                                    <p className="mb-0">Ở đây bán đồ ăn vặt Sài Gòn giữa lòng thành phố Cảng nhộn nhịp. Ngoài ra còn có những món ăn vặt hot hit nhập khẩu từ nước bạn Đài Loan, Thái Lan, nội địa Trung,.. </p>
                                </div>
                                <div className="p-4">
                                    <h4 className="fst-italic">TOP SẢN PHẨM CÁC THÁNG</h4>
                                    <ol className="list-unstyled mb-0">
                                        <li><a href="#">Tháng 4 2021</a></li>
                                        <li><a href="#">Tháng 3 2021</a></li>
                                        <li><a href="#">Tháng 2 2021</a></li>
                                        <li><a href="#">Tháng 1 2021</a></li>
                                        <li><a href="#">Tháng 12 2020</a></li>
                                        <li><a href="#">Tháng 11 2020</a></li>
                                        <li><a href="#">Tháng 10 2020</a></li>
                                        <li><a href="#">Tháng 9 2020</a></li>
                                    </ol>
                                </div>
                                <div className="p-4">
                                    <h4 className="fst-italic">Các trang web và liên kết xã hội</h4>
                                    <ol className="list-unstyled">
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Zalo</a></li>
                                        <li><a href="#">Facebook</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="blog-footer">
                    <p><a href="https://www.facebook.com/cohangxen.since2016/about/?ref=page_internal">TIỆM BÁNH CÔ HÀNG XÉN</a></p>
                    <p>
                        <a href="https://www.google.com/maps/place/17+L%C3%BD+Th%C6%B0%E1%BB%9Dng+Ki%E1%BB%87t,+Quang+Trung,+H%E1%BB%93ng+B%C3%A0ng,+H%E1%BA%A3i+Ph%C3%B2ng,+Vi%E1%BB%87t+Nam/@20.8606422,106.6775484,17z/data=!3m1!4b1!4m5!3m4!1s0x314a7af451b699e9:0x1634b06e207a96c4!8m2!3d20.8606372!4d106.6797371">Địa chỉ: 17 Lý Thường Kiệt, Hồng Bàng Hải Phòng</a>
                    </p>
                    <p>Liên hệ: 078 337 6998</p>
                </footer>
            </div>
            <div className="panel panel-default">
                <div className="panel heading">casc si</div>
                <div className="list-group">
                    <a href="#" className="list-group-item">a</a>
                    <a href="#" className="list-group-item">B</a>
                    <a href="#" className="list-group-item">c</a>
                    <a href="#" className="list-group-item">d</a>
                </div>
            </div>
        </div>
    )
}

export default WebsiteLayout
