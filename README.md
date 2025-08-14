# Sistema de Gestión de Restaurante

Una aplicación moderna de gestión de restaurantes desarrollada con Next.js, TypeScript y TailwindCSS. Esta solución integral facilita la administración de operaciones de restaurante, incluyendo gestión de pedidos, catálogo de productos y autenticación de usuarios con control de acceso basado en roles.

## 🚀 Características Principales

- **Autenticación Segura**

  - Inicio y cierre de sesión
  - Control de acceso por roles (Administrador/Personal)

- **Gestión de Productos**

  - Visualización
  - Añadir productos (solo administradores)

- **Gestión de Pedidos**

  - Crear y gestionar pedidos
  - Seguimiento en tiempo real
  - Cálculo automático de totales

- **Diseño Responsive**

  - Interfaz intuitiva con TailwindCSS
  - Soporte para modo oscuro

## 🛠️ Tecnologías Utilizadas

- **Frontend**

  - Next.js 15 (App Router)
  - React 19 con TypeScript
  - TailwindCSS para estilos
  - React Query para gestión de estado
  - Axios para peticiones HTTP

- **Gestión de Estado**

  - React Context API
  - Local Storage para persistencia de sesión

- **Herramientas de Desarrollo**

  - TypeScript para seguridad de tipos
  - ESLint para calidad del código
  - Prettier para formato del código

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Directorio principal de Next.js
│   ├── (auth)/             # Rutas protegidas
│   │   ├── pedidos/        # Gestión de pedidos
│   │   ├── productos/      # Gestión de productos
│   │   └── perfil/         # Perfil de usuario
│   ├── components/         # Componentes reutilizables
│   └── context/            # Proveedores de contexto
│
├── features/               # Módulos por funcionalidad
│   ├── auth/               # Autenticación
│   ├── orders/             # Gestión de pedidos
│   └── products/           # Catálogo de productos
│
└── lib/                    # Utilidades compartidas
```

## 🚀 Comenzando

### Requisitos

- Node.js 18.0.0 o superior
- npm o yarn como gestor de paquetes

### Instalación

1. Clonar el repositorio:

   ```bash
   git clone [https://github.com/AironRuda/restaurant-app.git](https://github.com/AironRuda/restaurant-app.git)
   cd restaurant-app

   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar variables de entorno:

   ```bash
   cp .env.example .env
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Acceder a la aplicación:
   ```bash
   http://localhost:3000
   ```

## Roles de Usuario

- Administrador: Acceso completo a todas las funciones
- Personal: Acceso limitado a la gestión de productos
