import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

// Custom hook que detecta si el usuario hace click fuera de un elemento
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: AnyEvent) => void,
    noRef?: RefObject<T>,
) => {
    useEffect(() => {
        const listener = ( event: AnyEvent ) => {
            const el = ref?.current;
            const noEl = noRef?.current;

            if ( !el || el.contains( event.target as Node ) || (noEl && noEl.contains(event.target as Node)) ) {
                return;
            }

            handler(event);
        };

        document.addEventListener( 'mousedown', listener );
        document.addEventListener( 'touchstart', listener );

        return () => {
            document.removeEventListener( 'mousedown', listener );
            document.removeEventListener( 'touchstart', listener );
        };

        // eslint-disable-next-line
    }, [ ref, handler ]);
}
