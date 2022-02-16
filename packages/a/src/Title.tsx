import {PropsWithChildren} from 'react'

function Title({children}: PropsWithChildren<unknown>) {
    return (
        <div
            style={{
                color: '#000',
                fontSize: '1.5rem',
            }}>
            {children}
        </div>
    )
}

export default Title
