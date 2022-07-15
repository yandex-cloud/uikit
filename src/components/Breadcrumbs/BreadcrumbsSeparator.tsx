import {memo} from 'react';
import * as React from 'react';
import {block} from '../utils/cn';
import {BreadcrumbsProps} from './Breadcrumbs';

type Props = Pick<BreadcrumbsProps, 'renderItemDivider'>;

const b = block('breadcrumbs');

export const BreadcrumbsSeparator = memo(function BreadcrumbsSeparator({renderItemDivider}: Props) {
    return renderItemDivider ? (
        <div className={b('divider')}>{renderItemDivider()}</div>
    ) : (
        <span className={b('divider')}>/</span>
    );
});

BreadcrumbsSeparator.displayName = 'Breadcrumbs.Separator';
