function FormInput({name, type}:{name:string, type:string}) {
    return <input
        type={type}
        required
        className={"py-2 px-3 rounded-lg w-full !appearance-none outline-none focus:outline-none border-2 transition-all border-slate-100 focus:border-blue-500 placeholder:capitalize"}
        placeholder={name+"..."} name={name}/>
}

export default FormInput