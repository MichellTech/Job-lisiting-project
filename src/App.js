import hero1 from './images/bg-header-mobile.svg'
import hero2 from './images/bg-header-desktop.svg'
import remove from './images/icon-remove.svg'
import data from './data'
import { useEffect, useState } from 'react'

function App() {
  const [generalopp, setGeneralopp] = useState(data)

  const [general, setGeneral] = useState([])
  const [reset, setReset] = useState(false)
  const [filter1, setFilter1] = useState('')
  const [closer, setCloser] = useState(0)
  const [filter2, setFilter2] = useState('')

  const [filter3, setFilter3] = useState('')
  const [filter4, setFilter4] = useState('')
  const [filter5, setFilter5] = useState('')
  const [filter6, setFilter6] = useState('')
  const [filter7, setFilter7] = useState('')
  const [modal, setModal] = useState(false)

  // data

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
                  {filter1 ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center '>
                      <h1>{filter1}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        // onClick={() => handlecancel()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* level */}
                  {filter2 ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center '>
                      <h1>{filter2}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        // onClick={() => handlecancel2()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* lan 1 */}
                  {filter3 ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center '>
                      <h1>{filter3}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        // onClick={() => handlecancel3()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* lan 2 */}
                  {filter4 ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center '>
                      <h1>{filter4}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        // onClick={() => handlecancel4()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* lanlauge 3 */}
                  {filter5 ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center '>
                      <h1>{filter5}</h1>
                      <img
                        src={remove}
                        alt=''
                        // onClick={() => handlecancel5()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* tools1 */}
                  {filter6 ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center '>
                      <h1>{filter6}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        // onClick={() => handlecancel6()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* tools2 */}
                  {filter7 ? (
                    <div className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan pl-2   cursor-pointer flex justify-end gap-2 items-center '>
                      <h1>{filter7}</h1>
                      <img
                        src={remove}
                        alt=''
                        className='bg-DesaturatedDarkCyan px-1 py-1 h-full'
                        // onClick={() => handlecancel7()}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div
                  className='font-sans font-bold cursor-pointer'
                  // onClick={() => handleclear()}
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
                id,
                tools,
              } = item
              return (
                <div className='px-6 py-10 mt-2 mx-auto max-w-sm md:max-w-lg md:py-2  lg:max-w-full'>
                  <div className='bg-white shadow-md rounded-md mx-0 px-4 py-6 space-y-4 relative lg:flex lg:justify-between gap-1 lg:mx-20 lg:py-4 lg:space-y-0'>
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
                              <h1 className='bg-DesaturatedDarkCyan text-white px-3 py-1 rounded-full '>
                                NEW!
                              </h1>
                              <h1 className='bg-LightGrayishblue text-white px-3 py-1 rounded-full '>
                                FEATURED
                              </h1>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        {/* position and timer */}
                        <div className='font-sans text-LightGrayishblue text-xl font-bold mt-4 md:mt-1'>
                          <h1 className=''>{position}</h1>
                        </div>
                        {/* time,role,ofice */}
                        <div className='font-sans flex items-baseline gap-4 text-VeryDarkGrayishCyan mt-2 md:mt-1'>
                          <h1 className='text-xl'>{postedAt}</h1>
                          <h1 className='text-xl'>.</h1>
                          <h1 className='text-xl'>{contract}</h1>
                          <h1 className='text-xl'>.</h1>
                          <h1 className='text-xl'>{location}</h1>
                        </div>
                      </div>
                    </div>
                    {/* divider */}
                    <div className=' border-b border-black  lg:hidden'></div>
                    {/* lower part */}
                    <div
                      className='font-sans space-x-4 space-y-4 md:space-x-2 lg:space-x-2
                '
                    >
                      {/* role */}
                      <h1
                        className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                        // onClick={() => handlerole(role)}
                      >
                        {role}
                      </h1>
                      {/* level */}
                      <h1
                        className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                        // onClick={() => handlelevel(level)}
                      >
                        {level}
                      </h1>
                      {/* tools */}
                      {tools[0] ? (
                        <h1
                          className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                          // onClick={() => handletool1(tools[0])}
                        >
                          {tools[0]}
                        </h1>
                      ) : (
                        ''
                      )}
                      {tools[1] ? (
                        <h1
                          className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                          // onClick={() => handletool2(tools[1])}
                        >
                          {tools[1]}
                        </h1>
                      ) : (
                        ''
                      )}

                      {/* lamguages */}
                      <h1
                        className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                        // onClick={() => handlelanguage1(languages[0])}
                      >
                        {languages[0]}
                      </h1>
                      {languages[1] ? (
                        <h1
                          className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                          // onClick={() => handlelanguage2(languages[1])}
                        >
                          {languages[1]}
                        </h1>
                      ) : (
                        ''
                      )}
                      {languages[2] ? (
                        <h1
                          className='text-DesaturatedDarkCyan font-bold bg-LightGrayishCyan inline-block px-4 py-1 rounded-md cursor-pointer'
                          // onClick={() => handlelanguage3(languages[2])}
                        >
                          {languages[2]}
                        </h1>
                      ) : (
                        ''
                      )}
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
