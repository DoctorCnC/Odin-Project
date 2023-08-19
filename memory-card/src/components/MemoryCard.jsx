import React from 'react';

const MemoryCard = ({ card, onClick }) => {
    return (
        <div className={`memory-card ${card.isFlipped ? 'flipped' : ''}`} onClick={() => onClick(card)}>
            <div className='inner'>
                <div className='front'>
                    
                    {card.value}
                </div>
                <div className='back'>
                    ?
                </div>
            </div>
        </div>
    );
};

export default MemoryCard;

