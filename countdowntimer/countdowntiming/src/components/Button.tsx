const Button = ({name, onClick}: { name: string; onClick: ()=>void})=>{
    return (
        <>
        <button type="button" onClick={onClick}>{name}</button>
        </>
    )
}

export default Button;