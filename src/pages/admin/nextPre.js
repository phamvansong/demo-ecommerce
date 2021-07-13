import React from 'react'
import { Link } from 'react-router-dom';

const NextPre = ({ postsPerPage, totalPosts, pageNb }) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div>
            <div className="nextPre" style={{ textAlign: 'center' }}>  {pageNumber.map(number => (
                <div key={number} className="" style={{ display: 'inline-block', marginLeft: '15px' }}>
                    <Link onClick={() => pageNb(number)} heft="/admin/product" id="nut" className="cuttom-buttonn" style={{ textDecoration: 'none', color: 'black' }}>
                        <span >{number}</span>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}

export default NextPre
