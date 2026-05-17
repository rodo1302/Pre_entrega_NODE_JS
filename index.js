console.log("Iniciando programa... ");

const url_API = "https://fakestoreapi.com";

const [, , metodo, catalogo, ...argumentos] = process.argv;

const argValidos = ["GET", "POST", "DELETE"];

const programaPrincipal = async () => {
  if (!argValidos.includes(metodo)) {
    console.log("Argumento inválido. Use GET, POST, DELETE.");
    return;
  } else if (!catalogo) {
    console.log("Falta el catálogo. Use products.");
    return;
  }
  switch (metodo) {
    case "GET":
      await getProdutos();
      break;
    case "POST":
      await postProduto();
      break;
    case "DELETE":
      await deleteProduto();
      break;
  }
};

const getProdutos = async () => {
  if (!/^products(\/\d+)?$/.test(catalogo)) {
    console.log("Catálogo inválido.");
    return;
  }
  try {
    const response = await fetch(`${url_API}/${catalogo}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const text = await response.text();

    if (!text) {
      console.log("Producto no encontrado.");
      return;
    }

    const data = JSON.parse(text);
    const productos = Array.isArray(data) ? data : [data];

    const tabla = productos.map(
      ({ id, title, price, category, description, image }) => {
        return {
          ID: id,
          Producto:
            title && title.length > 15
              ? title.slice(0, 15) + "..."
              : title || "Sin título",
          Precio: `$${price}`,
          Descripcion:
            description && description.length > 15
              ? description.slice(0, 15) + "..."
              : description || "Sin descripción",
          Categoria: category,
          Imagen:
            image && image.length > 15
              ? image.slice(0, 15) + "..."
              : image || "Sin imagen",
        };
      },
    );
    console.table(tabla);
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
};

const postProduto = async () => {
  if (catalogo === "products") {
    const [title, price, category] = argumentos;
    if (!title || !price || !category) {
      console.log("Faltan datos para crear producto.");
      return;
    }
    try {
      const response = await fetch(`${url_API}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: price,
          category: category,
        }),
      });
      const data = await response.json();
      const tabla = {
        ID: data.id,
        Producto: data.title,
        Precio: `$${data.price}`,
        Categoria: data.category,
      };
      console.table(tabla);
    } catch (error) {
      console.error("Error al obtener producto:", error);
    }
  }
};

const deleteProduto = async () => {
  try {
    const response = await fetch(`${url_API}/${catalogo}`, {
      method: "DELETE",
    });
    const data = await response.json();
    const id = catalogo.split("/").pop();
    console.log(`Producto con ID ${id} eliminado:`, data);
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};

programaPrincipal();
