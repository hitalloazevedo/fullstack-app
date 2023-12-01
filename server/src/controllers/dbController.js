import supabase from "../services/dbConnection.js";

async function getProducts() {
  const { data, error } = await supabase.from("produtos").select();

  if (data !== null) {
    return data;
  }
  return error;
}

async function addProduct(id, des, size) {
  const { data, error } = await supabase
    .from("produtos")
    .insert({ cod: id, description: des, size: size })
    .select();

  if (data !== null) {
    return data;
  }
  return error;
}

async function updateProduct(id, des, size) {
  const { error } = await supabase
    .from("produtos")
    .update({
      cod: Number(id),
      description: String(des),
      size: String(size),
    })
    .eq("cod", id);

  if (error) {
    return error;
  } else {
    return { message: "updated!" };
  }
}

async function deleteProduct(id) {
  const { error } = await supabase.from("produtos").delete().eq("cod", id);
  if (error) {
    return error;
  } else {
    return { message: "deleted!" };
  }
}

const dbController = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default dbController;
