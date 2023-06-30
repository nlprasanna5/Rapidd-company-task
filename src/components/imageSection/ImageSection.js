import React from 'react'
import { BsLink45Deg } from 'react-icons/bs';
import './ImageSection.css';

function ImageSection() {
    return (
        <div className='image-container'>
            <div className='first-image'>
                <div className='sea-image'>
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                        alt='sea'
                        className='images-snow'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className='link-btn-container'>
                    <div className='links'>
                        <BsLink45Deg />
                        Ipsum Lorem
                    </div>
                    <div className='links'>
                        <BsLink45Deg />
                        Ipsum Lorem
                    </div>
                    <div className='links'>
                        <BsLink45Deg />
                        Ipsum Lorem
                    </div>
                </div>
            </div>

            <div className='second-image'>
                <div className='second-img-text'>
                    <p>Numquam. <span>Esse aliquip do,magni.</span></p>
                    <h3>Minima ad for vitae sit</h3>
                    <a href='#' className='anchor-links' >Lorem Ipsum</a>
                </div>

                <div className='second-img-container'>
                    <div className='second-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg'
                            alt='flower'
                            style={{ height: '22svh', width: '100%' }}

                        />
                    </div>
                    <div className='second-img-bottom-text'>
                        <div className='second-img-link'>
                            <BsLink45Deg />
                            Ipsum Lorem
                        </div>
                        <div className='para'>
                        <p>Adipiscing unde vel so dolore,consequatur.</p>
                        </div>
                       <div className='second-link'>
                       <a href='#' className='anchor-links'>Ipsum Lorem</a>
                       </div>
                        

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ImageSection