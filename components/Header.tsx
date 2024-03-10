import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            
            <Avatar>
              <AvatarImage src="https://github.com/Staxar.png" />
              <AvatarFallback><small className="text-sm font-medium leading-none">MD</small></AvatarFallback>
            </Avatar>
        </p>
  </div>
  )
}

export default Header