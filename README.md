# 📚 Aplicación Web de Compartición de Guías de Aprendizaje para Instructores SENA

**GFPI-F-135 V04**  
**PROCESO DE GESTIÓN DE FORMACIÓN PROFESIONAL INTEGRAL**  
**FORMATO MATERIAL DE APOYO – ACTIVIDADES**

---

## 🧠 Enunciado

La red de instructores del SENA quiere contar con una **aplicación web** que les permita compartir **guías de aprendizaje** para los diferentes programas de formación. La aplicación permitirá a los instructores registrarse, iniciar sesión, subir guías y consultar las guías existentes.

---

## 🚀 Tecnologías Utilizadas

- **Python 3**
- **Flask** (framework web)
- **MongoDB** (base de datos NoSQL)
- **MongoEngine** (ODM para MongoDB en Flask)
- **DataTables.js** (para tablas interactivas)
- **Render** (para despliegue)
- **Bootstrap** (estilos)

---

## 🧩 Funcionalidades Principales

### 👤 Registro de Instructores

Cada instructor puede registrarse con los siguientes datos:

- Nombre completo  
- Correo electrónico  
- Regional (seleccionada desde una lista que viene de la base de datos)  

> Al registrarse, el sistema le envía al instructor su **usuario y contraseña** para ingresar.

---

### 🔐 Autenticación

- Iniciar sesión con credenciales asignadas
- Cerrar sesión

---

### 📤 Subida de Guías de Aprendizaje

Los instructores registrados pueden subir guías con la siguiente información:

- **Nombre de la Guía**
- **Descripción**
- **Programa de Formación** (seleccionado desde una lista)
- **Documento en PDF** (adjunto obligatorio)
- **Fecha y hora de subida** (automática)
- **Instructor que realiza la subida** (obtenido desde sesión)

---

### 📄 Listado de Guías

Visualización de guías en una tabla interactiva usando **DataTables**, mostrando:

- Nombre de la guía  
- Descripción  
- Programa de formación  
- Nombre del instructor  
- Regional  
- Fecha de publicación  
- Ícono PDF para ver la guía

> 🔒 **Solo los instructores autenticados** pueden subir o consultar las guías.

---
