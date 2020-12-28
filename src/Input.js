function Input({className, onChange, placeholder, value, name, type, label, id}) {
    return (
        <div className={className}>
            {label && <label className='label' htmlFor={id}>{label}</label>}
            <input onChange={(event) => onChange(event.target.value)} type={type} className='input'
                   placeholder={placeholder} value={value} name={name} />
        </div>
    );
}

export default Input;
