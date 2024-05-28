import { useEffect, RefObject } from 'react';

export const useClickOutside = (menuRef: RefObject<HTMLElement>, buttonRef: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if ((!menuRef.current || !menuRef.current.contains(e.target as Node)) && 
                (!buttonRef.current || !buttonRef.current.contains(e.target as Node))) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, buttonRef, callback]);
};