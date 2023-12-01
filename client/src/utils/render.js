const render = (obj, display, func) => {
    obj.map(element => {
        const {cod, description, size} = element
        display.appendChild(func(cod, description, size))
    })
}

export default render