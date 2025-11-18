import React from 'react'
import HooksPagination from '~/components/reactHooks/Paginate'

const ReactHooks = () => {
  return (
    <div className='overflow-auto' >
        <h1>React Hooks</h1>
        <p>A hook is function that gives you access to React's internal Memory. You gain access to a value and a command to modify this value</p>
       <p>Lets deep dive into each hooks and understand them</p>

            <div  >
                 <HooksPagination itemsPerPage={1}  />
            </div>

    </div>
  )
}

export default ReactHooks