import React from 'react';
import {block} from '../utils/cn';
import {UserAvatar, UserAvatarSize} from '../UserAvatar';
import './User.scss';

const b = block('user');

export interface UserProps {
    name?: string;
    description?: string;
    imgUrl?: string;
    size?: UserAvatarSize;
    className?: string;
}

export function User({name, description, imgUrl, size = 'm', className}: UserProps) {
    const compact = size === 'xs';

    return (
        <div className={b({size}, className)}>
            {imgUrl && <UserAvatar imgUrl={imgUrl} size={size} className={b('avatar')} />}
            {(name || description) && (
                <div className={b('info')}>
                    {name && <span className={b('name')}>{name}</span>}
                    {!compact && description && (
                        <span className={b('description')}>{description}</span>
                    )}
                </div>
            )}
        </div>
    );
}
