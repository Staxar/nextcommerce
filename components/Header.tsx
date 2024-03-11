import { HeaderMenu } from './HeaderMenu'
import Basket from './Basket'
import HeaderAvatar from './HeaderAvatar'

function Header() {
    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed left-0 top-0 flex w-full items-center justify-between p-8 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-full  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <HeaderMenu />
                <div className="flex items-center gap-4">
                    <HeaderAvatar />
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default Header
