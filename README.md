# Pre_entrega_npm start_JS

El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal.

# 🛒 FakeStoreAPI CLI App

Aplicación de consola desarrollada con npm start.js para consumir la API pública de FakeStoreAPI utilizando métodos HTTP.

La aplicación permite:

- Obtener productos (`GET`)
- Crear productos (`POST`)
- Eliminar productos (`DELETE`)
- Mostrar resultados en formato tabla con `console.table()`
- Manejar errores y validaciones de endpoints

---

# 🚀 Tecnologías utilizadas

- npm start.js
- Fetch API
- JavaScript ESModules
- FakeStoreAPI

---

# 📦 Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/rodo1302/Pre_entrega_npm start_JS.git
```

---

## 2. Entrar a la carpeta

```bash
cd Pre_entrega_npm start_JS
```

---

## 3. Ejecutar aplicación

```bash
node index.js
npm start
npm run start
```

---

# 🌐 API utilizada

- https://fakestoreapi.com

---

# ⚙️ Uso de la aplicación

La aplicación utiliza argumentos por consola:

```bash
npm start index.js <METODO> <CATALOGO> [ARGUMENTOS]
```

---

# 📖 Métodos disponibles

## ✅ GET

Obtiene productos desde la API.

### Obtener todos los productos

```bash
npm start index.js GET products
```

---

### Obtener producto por ID

```bash
npm start index.js GET products/1
```

---

## ✅ POST

Crea un nuevo producto.

```bash
npm start index.js POST products "Notebook" 1500 electronics
```

---

## ✅ DELETE

Elimina un producto por ID.

```bash
npm start index.js DELETE products/1
```

---

# 📋 Ejemplo de salida

```bash
┌─────────┬────┬──────────────────┬─────────┬──────────────┐
│ (index) │ ID │ Producto         │ Precio  │ Categoria    │
├─────────┼────┼──────────────────┼─────────┼──────────────┤
│ 0       │ 1  │ Fjallraven...    │ $109.95 │ men's cloth. │
└─────────┴────┴──────────────────┴─────────┴──────────────┘
```

---

# 🛡️ Manejo de errores

La aplicación contempla:

- Métodos HTTP inválidos
- Catálogos incorrectos
- IDs inexistentes
- Respuestas vacías de la API
- Errores HTTP
- Errores de conexión

---

# 🧠 Conceptos aplicados

- Async/Await
- Fetch API
- APIs REST
- Manejo de promesas
- Manejo de errores con try/catch
- Desestructuración
- Arrays y objetos
- Métodos de arrays (`map`, `slice`)
- Validaciones
- Expresiones regulares
- Console Table

---

# 📂 Estructura del proyecto

```bash
📦 Pre_entrega
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

# 👨‍💻 Autor

Proyecto desarrollado por Rodolfo.
