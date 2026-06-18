import { MouseEventHandler } from 'react'
import Icon from './Icon'

export default function IconButton({ iconName, className, onClick }: { iconName: string, className?: string, onClick?: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button className={className} onClick={onClick}>
            <Icon iconName={iconName} className={className} />
        </button>
    )
}