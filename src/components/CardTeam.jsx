import user from "../assets/User.png"

const CardTeam = ({ nombre, cargo }) => {
    
    return(
        <div className="flex flex-col items-center mb-8 mt-8 lg:mr-8 w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
            <img src={user} className="border rounded-full mx-auto w-1/3 md:w-1/2" alt="Img User"/>    
            <p className="text-center text-lg text-black">{nombre}</p>
            <p className="text-center text-lg text-black">{cargo}</p>
        </div>
    )

}

export default CardTeam