import type { ReactNode } from 'react';
import './FulterButton.css'
interface FulterButtonProps {
    isActive: boolean;
    children: ReactNode;
    onClick: () => void;

}

export default function FulterButton({ isActive, children, onClick }: FulterButtonProps) {
    return (
        <button
            className={`FulterButton ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
