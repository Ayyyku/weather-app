const degree = {
    19: "bg-blue-700",
    29: "bg-blue-500",
    30: "bg-yellow-500",
}


const weatherCard = ({ weather }) => {
    if (!weather) return null
    return (
        <>
        <div className={`rounded-xl p-4 backdrop-blur-xl w-3/6 mx-auto ${weather.current.temp_c < 19 ? degree[19] : weather.current.temp_c < 29 ? degree[29]: weather.current.temp_c > 30 ? degree[30]: "bg-white"}`}>
            <h1 className="text-slate-900 text-xl uppercase font-sans ">{weather.location.name}</h1>
            <h3>{weather.location.region}</h3>
            <p>{weather.location.localtime}</p>
            <p>{weather.current.temp_c}</p>
            <img src={weather.current.condition.icon} alt="" />
        </div>
        </>
    )
}

export default weatherCard