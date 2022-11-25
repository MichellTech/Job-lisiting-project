import hero1 from './images/bg-header-mobile.svg'
import hero2 from './images/bg-header-desktop.svg'
import remove from './images/icon-remove.svg'
import data from './data'
import { useEffect, useState } from 'react'

function App() {
  const [generalopp, setGeneralopp] = useState(data)
  const [general, setGeneral] = useState(data)
  const [resetrole, setResetrole] = useState(0)
  const [resetpoints, setResetpoints] = useState(0)
  const [resetlevel, setResetlevel] = useState(0)
  const [resetlanguages, setResetlanguages] = useState(0)
  const [resettools, setResettools] = useState(0)
  const [filterrole, setFilterrole] = useState('')
  const [filterlevel, setFilterlevel] = useState('')
  const [filterlanguages, setFilterlanguages] = useState('')
  const [filtertools, setFiltertools] = useState('')
  const [modal, setModal] = useState(false)

  // filteration
  const filterData = () => {
    if (filterrole || filterlanguages || filterlevel || filtertools) {
      let newData = general.filter(
        (item) =>
          item.role.includes(filterrole) &&
          item.level.includes(filterlevel) &&
          item.languages.find((item) => item.includes(filterlanguages)) &&
          item.tools.find((item) =>
            item === '' ? [...item] : item.includes(filtertools)
          )
      )
      setGeneralopp(newData)
    } else setGeneralopp(data)
  }
  console.log(generalopp)
  // use effect to handle the filteration when they change
  useEffect(() => {
    if (filterrole) {
      filterData()
    } else if (!filterrole) {
      filterData()
    }
    if (filterlevel) {
      filterData()
    } else if (!filterlevel) {
      filterData()
    }
    if (filterlanguages) {
      filterData()
    } else if (!filterlanguages) {
      filterData()
    }
    if (filtertools) {
      filterData()
    } else if (!filtertools) {
      filterData()
    }

    totalresetpoints()
  }, [filterrole, filterlevel, filterlanguages, filtertools])

  // useeffect to handle points used to track the number of values in the tray filter tray
  useEffect(() => {
    if (resetpoints < 1) {
      setModal(false)
    }
  }, [resetpoints])

  // functions to instigate the filteration process
  const handlerole = (role) => {
    setFilterrole(role)
    setModal(true)
    setResetrole(1)
  }

  const handlelevel = (level) => {
    setFilterlevel(level)
    setModal(true)
    setResetlevel(1)
  }

  const handlelanguages = (item) => {
    setFilterlanguages(item)
    setModal(true)
    setResetlanguages(1)
  }

  const handletools = (item) => {
    setFiltertools(item)
    setModal(true)
    setResettools(1)
  }

  // function to clear all the inputs
  const handleclear = () => {
    setFilterrole('')
    setFilterlevel('')
    setFilterlanguages('')
    setFiltertools('')
    setModal(false)
  }

  // function to handle all cancel requests
  const cancelrole = () => {
    setFilterrole('')
    setResetrole(0)
  }
  const cancellevel = () => {
    setFilterlevel('')
    setResetlevel(0)
  }
  const cancellanguages = () => {
    setFilterlanguages('')
    setResetlanguages(0)
  }
  const canceltools = () => {
    setFiltertools('')
    setResettools(0)
  }

  const totalresetpoints = () => {
    let total = resetrole + resetlevel + resetlanguages + resettools
    setResetpoints(total)
  }

  return (
    <>
      {/* app div */}
      <div className='bg-LightGrayishCyan min-h-screen '>
        {/* hero */}
        <div className='bg-DesaturatedDarkCyan relative mb-20'>
          <img src={hero1} alt='' className='w-full md:hidden' />
          <img src={hero2} alt='' className='w-full hidden md:block ' />
          {/* filter box */}
          {modal ? (
            <div className=' absolute -bottom-20 md:-bottom-10 left-0 right-0  px-6 py-10 mt-2 mx-auto max-w-sm md:max-w-lg md:py-2  lg:max-w-full   '>
              {/* inner */}
              <div className='bg-white shadow-cyan-500 rounded-md mx-0 px-4 py-6 space-y-0 lg:mx-20 flex justify-between items-center gap-2'>
                <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6 '>
                  {/* role */}
                  {filterrole ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center text-center '>
                      <h1>{filterrole}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        onClick={() => cancelrole()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* level */}
                  {filterlevel ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center text-center '>
                      <h1>{filterlevel}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        onClick={() => cancellevel()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* lan 1 */}
                  {filterlanguages ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center text-center '>
                      <h1>{filterlanguages}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        onClick={() => cancellanguages()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* lan 2 */}
                  {filtertools ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center text-center '>
                      <h1>{filtertools}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        onClick={() => canceltools()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div
                  className='font-sans font-bold cursor-pointer'
                  onClick={() => handleclear()}
                >
                  <h1 className=''>Clear</h1>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        {/* lisitings */}
        {generalopp
          ? generalopp.map((item, index) => {
              const {
                logo,
                company,
                position,
                postedAt,
                contract,
                location,
                languages,
                featured,
                role,
                level,

                tools,
              } = item
              return (
                <div className='px-6 py-10 mt-2 mx-auto max-w-sm md:max-w-lg md:py-2  lg:max-w-full'>
                  <div className='bg-white shadow-md rounded-md mx-0 px-4 py-6 space-y-4 relative lg:flex lg:justify-between gap-2 items-center lg:mx-20 lg:py-4 lg:space-y-0'>
                    {/* border */}
                    {featured ? (
                      <div className='border-l-4 border-DesaturatedDarkCyan absolute left-0 top-0 z-50 bottom-0'></div>
                    ) : (
                      ''
                    )}
                    {/* top part */}
                    <div className=' md:flex items-center gap-6'>
                      {/* image */}
                      <div className='absolute -top-12  md:relative md:top-0 '>
                        <img src={logo} alt='' />
                      </div>
                      <div>
                        {/* company and tag */}
                        <div className='font-sans flex items-center gap-10 mt-8 md:mt-1'>
                          <h1 className='text-DesaturatedDarkCyan font-bold text-xl'>
                            {company}
                          </h1>
                          {featured ? (
                            <div className='flex items-center gap-4'>
                              <h1 className='bg-DesaturatedDarkCyan text-white px-3 py-1 rounded-full text-xs '>
                                NEW!
                              </h1>
                              <h1 className='bg-LightGrayishblue text-white px-3 py-1 rounded-full text-xs '>
                                FEATURED
                              </h1>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        {/* position and timer */}
                        <div className='font-sans text-LightGrayishblue text-xl font-bold mt-4 md:mt-1'>
                          <h1 className='text-lg'>{position}</h1>
                        </div>
                        {/* time,role,ofice */}
                        <div className='font-sans flex items-baseline gap-4 text-VeryDarkGrayishCyan mt-2 md:mt-1'>
                          <h1 className='text-sm'>{postedAt}</h1>
                          <h1 className='text-xl'>.</h1>
                          <h1 className='text-sm'>{contract}</h1>
                          <h1 className='text-xl'>.</h1>
                          <h1 className='text-sm'>{location}</h1>
                        </div>
                      </div>
                    </div>
                    {/* divider */}
                    <div className=' border-b border-black  lg:hidden'></div>
                    {/* lower part */}
                    <div className='font-sans grid text-center grid-cols-3 gap-2 lg:grid-cols-4 lg:flex'>
                      {/* role */}
                      <h1
                        className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                        onClick={() => handlerole(role)}
                      >
                        {role}
                      </h1>
                      {/* level */}
                      <h1
                        className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                        onClick={() => handlelevel(level)}
                      >
                        {level}
                      </h1>
                      {/* tools */}
                      {tools
                        ? [...tools].map((item, index) => {
                            if (item === '') {
                              return null
                            } else
                              return (
                                <h1
                                  className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                                  onClick={() => handletools(item)}
                                >
                                  {item}
                                </h1>
                              )
                          })
                        : 'hello'}

                      {/* lamguages */}
                      {languages
                        ? [...languages].map((item, index) => {
                            return (
                              <h1
                                key={index}
                                className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                                onClick={() => handlelanguages(item)}
                              >
                                {item}
                              </h1>
                            )
                          })
                        : ''}
                    </div>
                  </div>
                </div>
              )
            })
          : ''}
      </div>
    </>
  )
}

export default App
