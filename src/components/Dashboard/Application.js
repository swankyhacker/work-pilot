import React from 'react'

function Application({Date, Status, Role, Company, IsTitle}) {
  return (
    <div class="grid grid-cols-4 ga-x-3 items-stretch py-2"> 
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Company}
        </div>
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Role}
        </div>
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Date}
        </div>
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Status}
        </div>
    </div>
  )
}

export default Application