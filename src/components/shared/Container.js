import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-32'>
            {children}
        </div>
    );
};

export default Container;