import { useFormContext } from 'react-hook-form';

export function RadioField({
  name,
  label,
  options,
  styleLabelList,
  styleLabelItem,
  styleInput,
  styleMessage,
  className,
  select,
  ...passProps
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className}>
      <label className={styleLabelList}>{label}</label>
      <div className={select}>
        {options.map((value) => (
          <div key={value}>
            <label className={styleLabelItem} htmlFor={value}>
              {value}
            </label>
            <input className={styleInput} type="radio" value={value} {...passProps} {...register(name)} />
          </div>
        ))}
      </div>
      <span className={styleMessage}>{errors[name]?.message}</span>
    </div>
  );
}
