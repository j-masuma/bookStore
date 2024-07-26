/* eslint-disable react/prop-types */

function Cards( {items} ) {
  
  return (
    <div className="my-4 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img
                src={items.image}
                alt="Books" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {items.name}
                <div className="badge badge-secondary">{items.category}</div>
                </h2>
                <p>{items.description}</p>
                <div className="card-actions justify-between ">
                <div className= " cursor-pointer text-xs px-2 py-1 rounded-full border-[2px] shadow">${items.price}</div>
                <div className="cursor-pointer text-xs px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">Read Now</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
