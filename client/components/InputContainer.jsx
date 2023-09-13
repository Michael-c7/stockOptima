
const InputContainer = ({ type, name, labelText }) => {
  return (
    <div className="flex flex-col text-left my-4">
        <label htmlFor={name} className='font-light capitalize mb-1'>{labelText || name}</label>
        <input type={type} id={type} name={name} required className="border rounded border-gray-200 p-1 w-full"/>
    </div>
  )
}

export default InputContainer