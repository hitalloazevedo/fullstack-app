import getProducts from "./getProducts";

async function loadInputContent(codField, descriptionField, sizeField, id){
    const data = await getProducts()
    data.forEach(element => {
        if (element.cod == id) {
            codField.value = element.cod
            descriptionField.value = element.description
            sizeField.value = element.size
        }
    });
}

export default loadInputContent