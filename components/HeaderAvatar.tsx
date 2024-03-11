import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

function HeaderAvatar() {
    return (
        <Link href={'/profile'}>
            <Avatar>
                <AvatarImage src="https://github.com/Staxar.png" />
                <AvatarFallback>
                    <small className="text-sm font-medium leading-none">
                        MD
                    </small>
                </AvatarFallback>
            </Avatar>
        </Link>
    )
}

export default HeaderAvatar
