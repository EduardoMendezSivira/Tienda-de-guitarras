export default function Guitar({guitar, aggAlCarrito}) {
    const {id, name, description, price, image} = guitar

    return (
        <div className="
            transition-transform 
            transform 
            hover:scale-105
            hover:shadow-lg 
            duration-300 
            ease-in-out
        ">
            <div className="grid grid-cols-[123px_240px] h-[240px] bg-base-100 border-1 border-gray-700 ">
                <div className="indicator">
                    <span className="indicator-item p-1 rounded-md bg-[#fd7e14]">Nuevo</span>                  
                    <img src={`/img/${image}.jpg`} alt="imagen guitarra" className="h-[238px] w-[140px]"/>  
                </div>
                <div className="h-[240px] w-[240px] col-start-2 col-end-3 p-6">
                    <div className="flex justify-center">
                        <h1 className="card-title font-bold">{name}</h1>
                    </div>
                    <p className="text-sm pl-4">{description}</p>
                    <p className="flex justify-end card-title text-lime-500 text-3xl font-extrabold">${price}</p>
                    <div>
                        <button className="btn ml-6 mt-2 bg-[#fd7e14] text-white" onClick={()=>document.getElementById('my_modal_2').showModal(aggAlCarrito(guitar)) }>Agregar al Carrito</button>
                        <dialog id="my_modal_2" className="modal">
                        <div className="modal-box text-white">
                            <h3 className="font-bold text-lg">Agregado al carrito con Exito!</h3>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}