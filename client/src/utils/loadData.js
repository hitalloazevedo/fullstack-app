import getProducts from "./getProducts";

async function loadData(id){
    const data = await getProducts()
    let obj = {}
    data.forEach(element => {
        if (element.cod == id) {
            obj = element
        }
    });
    return obj
}

export default loadData