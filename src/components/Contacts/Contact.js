import React from 'react'

function Contact({Name, Email, Phone, Company, IsTitle}) {
  return (
    <div class="grid grid-cols-4 ga-x-3 items-stretch py-2"> 
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Name}
        </div>
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Email}
        </div>
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Phone}
        </div>
        <div class={`${IsTitle ? "font-bold": "font-normal"}`}>
            {Company}
        </div>
    </div>
  )
}

export default Contact