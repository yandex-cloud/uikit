import React from 'react';
import {DOMProps, QAProps} from '../types';

export type TextInputView = 'normal' | 'clear';

export type TextInputSize = 's' | 'm' | 'l' | 'xl';

export type TextInputPin =
    | 'round-round'
    | 'brick-brick'
    | 'clear-clear'
    | 'round-brick'
    | 'brick-round'
    | 'round-clear'
    | 'clear-round'
    | 'brick-clear'
    | 'clear-brick';

export type TextInputState = 'error';

export interface TextInputProps extends DOMProps, QAProps {
    /**
     * Control view
     * @default 'normal'
     */
    view?: TextInputView;
    /**
     * @default 'm'
     */
    size?: TextInputSize;
    /**
     * Corner rounding
     * @default 'round-round'
     */
    pin?: TextInputPin;
    id?: string;
    tabIndex?: number;
    /**
     * HTML name attribute, will be autogenerated if not specified
     */
    name?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string;
    /**
     * clear button
     */
    hasClear?: boolean;
    autoFocus?: boolean;
    autoComplete?: boolean | 'on' | 'off' | string;
    /**
     * validation error
     */
    error?: string | boolean;
    /**
     * Textarea
     * @default false
     */
    multiline?: boolean;
    /**
     * text, password etc.
     */
    type?: string;
    /**
     * The number of rows in textarea. If not specified, the hight will be automatically calculated based on content.
     */
    rows?: number;
    /**
     * Minimum number of rows in textarea when the hight is autogenerated.
     */
    minRows?: number;
    /**
     * Maximum number of rows in textarea when the hight is autogenerated.
     */
    maxRows?: number;
    onUpdate?: (value: string) => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    controlRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
    controlProps?:
        | React.InputHTMLAttributes<HTMLInputElement>
        | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}
