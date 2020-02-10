import React from 'react';

const userAccount = props => {
    return (
        <div className="qki-header-nav__account-user">
            <p>Login as {props.username}</p>
        </div>
    )
}

export default userAccount;