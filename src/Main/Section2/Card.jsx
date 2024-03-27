import React from 'react'

export const Card = ({img,title,text}) => {
  return (
    <>
     <div class="relative overflow-hidden rounded-lg border bg-white p-2 cursor-pointer hover:bg-[#f1f5f9] hover:shadow-lg transition-all duration-200 ease-in-out">
            <div class="flex flex-col gap-3 justify-between rounded-md p-6">
              <img
                alt="team"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                class="w-20 h-20 dark:filter dark:invert-[0.9]"
                style={{color:"transparent"}}
              src={img}
              />
              <div class="space-y-2">
                <h3 class="font-bold">{title}</h3>
                <p class="text-sm text-[#64748b]">
                 {text}
                </p>
              </div>
            </div>
          </div>
    </>
  )
}
