import React from 'react';

const ParentComponent = () => {
    const ChildComponent = (props) => {
        return (
            <p>{props.message}</p>
        );
    };
    return (
        <div>
            <ChildComponent message="I am sending you the message from parent component, it's an hi!" />
        </div>
    );
}

export default ParentComponent;
