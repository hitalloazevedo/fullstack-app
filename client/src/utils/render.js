const render = (obj, display, func) => {
    obj.map(element => {
        const {cod, description, size} = element
        display.appendChild(func(cod, description, size))
        return 0
    })
    return (<></>)
}

export default render