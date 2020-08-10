import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        text: string;
    }>
}
const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value='' id={name} {...rest}>
                <option value='' disabled>Selecione uma opção</option>
                {options.map(item => {
                    return <option key={item.value} value={item.value}>{item.text}</option>
                })}
            </select>
        </div>
    );
}

export default Select;