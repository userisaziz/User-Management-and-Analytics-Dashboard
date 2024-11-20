import React from 'react';
import './ValueField.scss';

// import 'react-loading-skeleton/dist/skeleton.css';
// import Skeleton from 'react-loading-skeleton';

const ValueField = (props) => {
    const { label, children, className, isLoading } = props;
    const customClassName = `ValueField ${className}`;
    return (
        <div className={customClassName}>
            <label className="ValueField--Label">{label}</label>
            {/* {isLoading && (
                <div>
                    <Skeleton className="ValueField--Description" />
                </div>
            )} */}
            {!isLoading && (
                <div className="ValueField--Description">{children ? children : '-'}</div>
            )}
        </div>
    );
};

export default ValueField;
