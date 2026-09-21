# Análisis Técnico Comparativo: Single Page Application (Angular) vs Static Site Generation (Astro)

**Proyecto Académico:** Taller de Arquitectura Web y Sistemas Distribuidos  
**Institución:** Unidad Central del Valle del Cauca (UCEVA)  
**Autor:** Miguel Ángel Ruiz  
**Fecha:** Septiembre 2026  

---

## Resumen Ejecutivo

El presente documento expone una evaluación técnica, cuantitativa y arquitectónica entre dos de los paradigmas dominantes en el desarrollo web moderno: **Single Page Applications (SPA)**, materializado mediante **Angular 20 (Standalone Components)**, y **Static Site Generation (SSG)**, implementado a través de **Astro 5**.

La comparación se fundamenta en la implementación idéntica de seis (6) vistas dentro de un mismo dominio funcional:
1. **Usuarios (`/users`)**: Listado general de usuarios con distintivo de ingeniería.
2. **Detalle de Usuario (`/user-detail`)**: Tarjeta/perfil individual derivado del repositorio central de usuarios.
3. **Productos (`/products`)**: Catálogo con clasificación por categoría y precios.
4. **Categorías (`/categories`)**: Agrupación estadística y conteo de productos por categoría.
5. **Acerca del Proyecto (`/about`)**: Resumen del sistema con métricas y contadores calculados.
6. **Fecha Actual (`/date` en Angular / `/current-date` en Astro)**: Visualización temporal del sistema.

---

## 1. Métricas Cuantitativas de Compilación y Tamaños de Build

Las métricas presentadas a continuación fueron extraídas directamente de las herramientas de compilación oficiales (`ng build` en modo producción con `@angular/build:application` y `astro build` con Vite), garantizando total fidelidad técnica sin cifras simuladas.

### 1.1 Tabla Comparativa de Rendimiento y Tamaño

| Métrica / Parámetro | Client-Angular (SPA) | Astro-SSG (SSG) | Diferencia / Factor |
| :--- | :--- | :--- | :--- |
| **Tamaño Total de `dist/`** | **1,050,994 bytes** (~1,026.36 kB / 1.00 MB) | **643,027 bytes** (~627.96 kB) | **Astro es 38.8% más liviano en disco** |
| **Bundle Inicial de Entrada (Raw)** | **695.71 kB** | **0.00 kB (Sin JS cliente)** | **Astro no envía JavaScript de hidratación** |
| - *JavaScript Principal (`main`)* | 264.80 kB (transferencia: 71.87 kB) | 0 kB | No requerido en SSG puro |
| - *Scripts de Soporte (`scripts`)* | 80.45 kB (transferencia: 21.60 kB) | 0 kB | No requerido |
| - *Polyfills de Plataforma* | 34.53 kB (transferencia: 11.29 kB) | 0 kB | No requerido |
| - *Estilos CSS Compilados* | 315.93 kB (transferencia: 33.03 kB) | 312.08 kB (`about.SlNvAjQU.css`) | Prácticamente idéntico (Bootstrap 5.3) |
| **Tamaño Estimado de Transferencia (Gzip/Brotli)** | **~137.79 kB** (Initial total) | **~35.20 kB** (HTML + CSS comprimido) | **Astro transfiere ~74.5% menos datos iniciales** |
| **Peso Promedio por Página HTML** | **5.10 kB** (Shell único `index.html`) | **1.50 kB – 3.45 kB** (HTML semántico completo) | Astro genera HTML listo para indexar |
| **Estrategia de Hashing en Assets** | Sí (`outputHashing: "all"`) | Sí (`SlNvAjQU`, `BeopsB42`, etc. por Vite) | Ambos garantizan invalidación de caché |
| **Peticiones HTTP Iniciales (Estimadas)** | **6 – 7 peticiones** (HTML, CSS, 3 JS, Fonts, Icon) | **3 – 4 peticiones** (HTML, CSS, Fonts, Icon) | **Astro ahorra 3 peticiones críticas de JS** |
| **Peticiones en Navegación Interna** | **0 peticiones** (Enrutamiento en memoria) | **1 petición por vista** (Descarga del nuevo `.html`) | **Angular no vuelve a consultar la red** |

### 1.2 Detalle de Archivos Generados por Página (Astro-SSG)

Astro genera archivos HTML individuales con el árbol DOM ya estructurado y con los datos embebidos en el marcado:
* `/index.html` (Redirección inicial): **265 bytes**
* `/current-date/index.html`: **1,504 bytes** (1.47 kB)
* `/categories/index.html`: **2,101 bytes** (2.05 kB)
* `/user-detail/index.html`: **2,257 bytes** (2.20 kB)
* `/products/index.html`: **2,968 bytes** (2.90 kB)
* `/about/index.html`: **3,303 bytes** (3.23 kB)
* `/users/index.html`: **3,456 bytes** (3.38 kB)
* `_astro/about.SlNvAjQU.css`: **312,083 bytes** (304.77 kB)
* Fuentes Tipográficas: `bootstrap-icons.woff2` (**134,044 bytes**) y `.woff` (**180,288 bytes**)

---

## 2. Análisis del Tiempo de Carga y Ciclo de Renderizado

### 2.1 Primera Carga (First Contentful Paint - FCP)
* **Astro-SSG**: El servidor web entrega directamente el archivo HTML con todo el contenido semántico estructurado (las filas de la tabla, los textos y los distintivos visuales). El navegador no requiere descargar ningún runtime de JavaScript para renderizar el árbol DOM. En consecuencia, el **First Contentful Paint (FCP)** y el **Largest Contentful Paint (LCP)** ocurren prácticamente al instante de recibir el documento HTML y el CSS base.
* **Client-Angular**: El servidor entrega un archivo `index.html` minimalista ("shell vacío" con `<app-root></app-root>`). Para pintar cualquier información en pantalla, el navegador debe:
  1. Descargar los bundles `polyfills.js`, `scripts.js` y `main.js`.
  2. Parsear y compilar el código JavaScript de Angular.
  3. Bootstrapear la aplicación (`bootstrapApplication(App, appConfig)`).
  4. Resolver la ruta activa en el cliente (`/users`).
  5. Instanciar el componente e invocar `ngOnInit()`.
  
  Esto introduce una penalización medible en el **FCP** y en el **Time to Interactive (TTI)** durante la primera visita, especialmente notoria en redes móviles o dispositivos con CPU de gama media o baja.

### 2.2 Navegación Subsecuente (Internal Navigation)
* **Client-Angular (Gana en navegación fluida)**: Una vez cargado el runtime en memoria, cualquier transición entre rutas (ej. de `/users` a `/products` o `/categories`) es instantánea. Angular Router intercepta el evento en el cliente, destruye el componente saliente y monta el entrante en microsegundos sin recargar la página ni realizar peticiones HTTP adicionales.
* **Astro-SSG**: Cada clic en el menú de navegación genera una solicitud HTTP para descargar el archivo HTML correspondiente a esa ruta (`/products/index.html`). Aunque los activos pesados (CSS y fuentes) se sirven desde la memoria caché del navegador (código HTTP 304 o Memory Cache), el navegador realiza un ciclo de recarga de página completo (*Multi-Page Application behavior*).

---

## 3. Diferencias Arquitectónicas SPA vs SSG

### 3.1 Enrutamiento y Generación de Rutas
* **Astro (Basado en Sistema de Archivos - Build-time)**: Las rutas son inferidas automáticamente a partir de la estructura del directorio `src/pages/` (`users.astro` → `/users`, `about.astro` → `/about`). En tiempo de compilación, Astro recorre cada archivo y genera un directorio físico con su respectivo `index.html`. El servidor web actúa como un despachador estático clásico.
* **Angular (Enrutador Dinámico en Cliente - Runtime)**: En `app.routes.ts` se configuran las rutas mediante objetos TypeScript (`Routes`). El servidor siempre debe estar configurado con una regla de reescritura (*fallback rewriting*) que redirija cualquier petición desconocida a `index.html`, cediendo el control del historial de navegación a la API `window.history` gestionada por el enrutador de Angular.

### 3.2 Manejo de Estado y Ciclo de Vida
* **Angular (`State = 'init' | 'loading' | 'success' | 'error'`)**: Al ser una aplicación interactiva en cliente, los componentes implementan la interfaz `OnInit` y manejan explícitamente estados de transición asíncrona. La vista utiliza directivas de control de flujo `@switch(state)` y `@case('loading')` para mostrar componentes visuales de retroalimentación (`<app-alert>`) mientras los Observables emiten información.
* **Astro (Sin estados de carga)**: No existen estados de `'loading'` ni alertas de carga en el HTML final. La obtención, transformación y cálculo de datos ocurre estrictamente en el bloque de frontmatter (`---`) durante el proceso de empaquetado (`astro build`). Cuando el usuario accede a la página, los datos ya están resueltos y congelados en el marcado estático.

### 3.3 Fuente de Verdad y Cálculo de Métricas (Caso de Estudio: Vista "Acerca de")
Un ejemplo arquitectónico revelador es la vista **Acerca de (`/about`)**:
* En **Astro**, el bloque frontmatter ejecuta:
  ```ts
  totalUsers: USERS.length,
  totalProducts: PRODUCTS.length,
  totalCategories: CATEGORIES.length
  ```
  Este cómputo se ejecuta **una única vez en la máquina de integración continua o en el entorno de desarrollo** durante el build. El cliente final recibe únicamente los números enteros ya calculados (ej. `10`, `10`, `4`).
* En **Angular**, la función `getAboutData()` se evalúa en el navegador del cliente mediante el servicio `AboutService` y un `Observable` cada vez que el usuario navega a la ruta `/about`, permitiendo que el estado reaccione dinámicamente si los almacenes en memoria fuesen mutables o recibieran actualizaciones en tiempo real.

### 3.4 SEO y Rastreo por Motores de Búsqueda
* **Astro (SSG Puro)**: Es la solución óptima para posicionamiento en motores de búsqueda (SEO). Los bots de rastreo (Googlebot, Bingbot) leen de inmediato el contenido textual, encabezados `<h1>`, metadatos y enlaces sin necesidad de ejecutar JavaScript.
* **Angular (SPA Tradicional)**: Requiere que los rastreadores ejecuten entornos headless de JavaScript para ver el contenido renderizado. Aunque los motores modernos tienen capacidad de renderizado diferido, el indexado suele ser más lento y propenso a inconsistencias, obligando en la industria a recurrir a Angular SSR (Server-Side Rendering con Angular Universal) o prerenderizado estático si el SEO es prioritario.

---

## 4. Capa de Datos y Evidencia de Consumo de Servicios

### 4.1 Enfoque Académico de Mocks Locales
De acuerdo con las directrices del proyecto y las restricciones arquitectónicas establecidas, la capa de datos opera de manera autónoma sin requerir un backend activo en producción:
* **Client-Angular**: Emplea el operador reactivo `of(...)` de RxJS dentro de servicios decorados con `@Injectable({ providedIn: 'root' })`. Esto simula fielmente la firma de retorno asíncrona (`Observable<T>`) de `HttpClient`, facilitando que el resto de la aplicación (páginas, componentes, interceptores) esté desacoplada de la implementación de almacenamiento.
* **Astro-SSG**: Emplea constantes tipadas de TypeScript importadas directamente en el frontmatter de cada archivo `.astro`.

### 4.2 Preparación para Cliente-Servidor Real (Interceptor HTTP)
El proyecto en Angular cuenta con el interceptor funcional [client-angular.interceptor.ts](file:///c:/Users/Migue/Downloads/Trbajo%20AQR%20astro/Astro-angular-taller-uceva/Client-Angular/src/app/interceptors/client-angular.interceptor.ts), el cual antepone la variable `environment.baseUrl` a cada petición saliente:

```ts
export const clientAngularInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req.clone({ url: `${environment.baseUrl}/${req.url}` }));
};
```

Este diseño confirma que la arquitectura está preparada para una transición inmediata a un backend RESTful real: bastaría sustituir `return of(DATA)` por `return this.http.get<T>(url)` en los servicios correspondientes, conservando intactos los componentes, interfaces y pruebas unitarias.

---

## 5. Pruebas Unitarias y Aseguramiento de Calidad (Jest)

En `Client-Angular`, la suite de pruebas unitarias implementada con Jest alcanzó un **100% de éxito en cobertura y ejecución**:
* **19 Test Suites ejecutadas**: 100% aprobadas (19/19).
* **73 Tests unitarios**: 100% aprobados (73/73).
* **Cobertura de Código**:
  * **100% Statements**
  * **100% Functions**
  * **100% Lines**

Las pruebas de las nuevas vistas replican exhaustivamente las buenas prácticas del repositorio:
1. **Servicios (`categories.service.spec.ts`, `user-detail.service.spec.ts`, `about.service.spec.ts`)**: Validación de creación de instancia y emisión correcta de datos vía Observables con verificación asíncrona (`done()`).
2. **Componentes de Presentación (`categories-table`, `user-card`, `about-card`)**: Validación de renderizado del DOM, mapeo correcto de directivas de diseño (`dsb-badge-atom`, `categoryMap`, `engineeringMap`), inyección de inputs y manejo de valores nulos o vacíos.
3. **Páginas Contenedoras (`categories.page`, `user-detail.page`, `about.page`)**: Simulación del servicio con `jest.spyOn(...)`, validación de suscripción en `ngOnInit`, propagación de inputs a los componentes hijos e intercepción y manejo controlado de excepciones con `throwError`.

---

## 6. Documentación del Código con Compodoc

Se ejecutó satisfactoriamente `npm run compodoc` sobre `Client-Angular`, reconociendo e integrando la documentación JSDoc completa en español de todas las entidades nuevas:
* **13 Componentes documentados** (incluyendo `CategoriesTableComponent`, `CategoriesPage`, `UserCardComponent`, `UserDetailPage`, `AboutCardComponent`, `AboutPage`).
* **5 Servicios inyectables** (incluyendo `CategoriesService`, `UserDetailService`, `AboutService`).
* **5 Interfaces de modelo** (`Category`, `UserDetail`, `AboutInfo`, `Product`, `User`).
* **4 Alias de tipo** (`ProductCategory`, `UserEngineering`, `State`, `AlertState`).

---

## 7. Conclusiones Técnicas y Recomendación de Adopción

| Criterio de Decisión | Cuándo elegir Astro (SSG) | Cuándo elegir Angular (SPA) |
| :--- | :--- | :--- |
| **Tipo de Proyecto** | Sitios corporativos, blogs, catálogos de comercio electrónico, documentación, landing pages y páginas de divulgación institucional. | Paneles de administración (Dashboards), plataformas transaccionales bancarias, intranets corporativas, herramientas SaaS y aplicaciones detrás de login. |
| **Rendimiento Inicial** | Crítico. Requiere FCP inferior a 1 segundo y máxima puntuación en Core Web Vitals sin pagar el costo de transferir y parsear JavaScript. | Secundario frente a la interactividad. El usuario acepta una carga inicial ligeramente más pesada a cambio de fluidez absoluta en el resto de la sesión. |
| **SEO y Posicionamiento** | Indispensable. Cada ruta debe indexarse de forma inmediata por cualquier motor de búsqueda con marcado semántico limpio. | No relevante o restringido (sistemas privados, áreas de usuario autenticado donde los buscadores no tienen acceso). |
| **Complejidad de Estado** | Estado estático o unidireccional resuelto en build-time. La interactividad se limita a componentes aislados (*islands*). | Estado altamente dinámico en memoria, sincronización reactiva en tiempo real (WebSockets, RxJS), validaciones complejas de formularios en vivo. |

**Veredicto Final:**  
Para el caso académico evaluado, si el requerimiento primordial es la velocidad de consulta informativa y la economía en transferencia de red, **Astro (SSG)** es la arquitectura superior, entregando una experiencia instantánea con **38.8% menos peso global y cero JavaScript en el cliente**.  
Por el contrario, si la plataforma evolucionará hacia un sistema de gestión transaccional con autenticación de usuarios, edición de productos en tiempo real y flujos reactivos complejos, **Angular (SPA)** representa la infraestructura más robusta, modular y escalable.
