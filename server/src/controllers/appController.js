import dbController from "./dbController.js";

const produtos_get = async (req, res) => {
  const response = await dbController.getProducts();
  const data = await response;
  res.status(200).send(data);
};

const editar_post = async (req, res) => {
  const id = req.params.id;
  const { cod, description, size } = req.body;
  const response = await dbController.updateProduct(id, description, size);
  if (response.message == "updated!") {
    res.status(200).send(response);
  } else {
    res.status(400).send((response.message = "error not updated"));
  }
};

const cadastrar_post = async (req, res) => {
  const { id, description, size } = req.body;
  const response = await dbController.addProduct(id, description, size);
  if (response?.code === "23505") {
    res.status(400).send(response);
  } else {
    res.status(201).send({ response, msg: "created" });
  }
};

const deletar_post = async (req, res) => {
  const id = req.params.id;
  const response = await dbController.deleteProduct(id);
  if (response.message == "deleted!") {
    res.status(202).send(response);
  } else {
    res.status(400).send((response.message = "error not deleted"));
  }
};

const appController = {
  produtos_get,
  editar_post,
  cadastrar_post,
  deletar_post,
};

export default appController;
