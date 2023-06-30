import React from 'react';
import './Gallery.css';
import { BsLink45Deg } from 'react-icons/bs';

function GalleryCards() {
    return (
        <div className='gallery-container'>
            <div>
            <div className='head'>
                <p className='gallery-head-text'>Official ut</p>
                <p className='gallery-head-link'>Ipsum Lorem</p>
            </div>

            <div className='gallery-cards'>
                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            // style={{ height: '150px', width: '250px' }}
                            style={{ height: '9.375rem', width: '15.625rem' }}
                            
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                     <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div> 
                     
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            style={{ height: '150px', width: '250px' }}
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                    <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            style={{ height: '150px', width: '250px' }}
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                    <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            style={{ height: '150px', width: '250px' }}
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                    <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div>
                </div>

                {/* second row */}
                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            style={{ height: '150px', width: '250px' }}
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                    <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            style={{ height: '150px', width: '250px' }}
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                    <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            style={{ height: '150px', width: '250px' }}
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                    <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                            alt='snow'
                            style={{ height: '150px', width: '250px' }}
                        />
                    </div>
                    <div className='card-text'>
                        <p>Adipiscing unde vel so dolore, consequatur</p>
                    </div>
                    <div className='card-button'>
                        <div className='card-btns'>
                            <div className='card-link'> <BsLink45Deg /></div>
                            <div className='card-btn-text'>Ipsum Lorem</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default GalleryCards;