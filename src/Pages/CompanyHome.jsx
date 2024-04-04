import React from 'react'


const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export function CompanyHome() {
  const [showModal, setShowModal] = React.useState(false);


  return (
    <>
      <div className="relative w-full bg-gray-100 mt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setShowModal(true)}
            >
              Add Services
            </button>
          </div>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Add Company Services
                      </h3>
                    </div>
                    {/*body*/}
                    <div className='ml-5 mr-5'>
                      <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900">
                              {' '}
                              Service Name{' '}
                            </label>
                            <div className="mt-2">
                              <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter the name of service"
                              ></input>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <label htmlFor="" className="text-base font-medium text-gray-900">
                                {' '}
                                Price{' '}
                              </label>
                            </div>
                            <div className="mt-2">
                              <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="Number"
                                placeholder="Enter the price of service"
                              ></input>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <label htmlFor="" className="text-base font-medium text-gray-900">
                                {' '}
                                Description{' '}
                              </label>
                            </div>
                            <div className="mt-2 mb-7">
                              <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter the description of service"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Add Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          
        </div>
      </div>  
    </>
  )
}
