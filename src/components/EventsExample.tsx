import React, {FC, useState, useRef} from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="управляемый"/>
            <input ref={inputRef} type="text" placeholder="не управляемый"/>
            <button onClick={clickHandler}>Button</button>
            <div draggable onDrag={dragHandler} style={{marginTop: 20, width: 200, height: 200, background: 'red'}}></div>
            <div onDrop={dropHandler} onDragOver={dragWithPreventHandler} onDragLeave={leaveHandler} style={{marginTop: 20, width: 200, height: 200, background: isDrag ? 'blue' : 'red'}}></div>
        </div>
    )
}

export default EventsExample