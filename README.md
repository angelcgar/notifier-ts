# notifier-ts

Una librería de notificaciones toast ligera y sin dependencias, escrita en TypeScript.

## Descripción

**notifier-ts** es una librería minimalista para mostrar notificaciones temporales (toast messages) en aplicaciones web. Diseñada para ser simple, rápida y fácil de integrar en cualquier proyecto JavaScript o TypeScript.

### Características principales

- **Cero dependencias**: Completamente standalone, sin librerías externas
- **Framework-agnostic**: Funciona con cualquier framework o vanilla JS
- **TypeScript nativo**: Tipado completo para mejor experiencia de desarrollo
- **Ligera**: Código mínimo y eficiente
- **4 tipos de notificación**: success, error, info, warning
- **Animaciones suaves**: Transiciones CSS elegantes
- **Auto-dismissal**: Las notificaciones se cierran automáticamente
- **Gestión inteligente del DOM**: Crea y limpia elementos dinámicamente

## Instalación

```bash
npm install notifier-ts
# o
pnpm add notifier-ts
# o
yarn add notifier-ts
```

## Uso básico

```typescript
import { notify } from 'notifier-ts';

// Notificación de éxito
notify('¡Operación completada!', { type: 'success' });

// Notificación de error
notify('Algo salió mal', { type: 'error' });

// Notificación informativa
notify('Nueva actualización disponible', { type: 'info' });

// Notificación de advertencia
notify('Ten cuidado con esta acción', { type: 'warning' });

// Con duración personalizada
notify('Mensaje breve', { 
  type: 'success', 
  duration: 2000 // 2 segundos
});
```

## API

### `notify(message, options?)`

Muestra una notificación en pantalla.

#### Parámetros

- **message** (string): El texto a mostrar en la notificación
- **options** (object, opcional):
  - **type** ('success' | 'error' | 'info' | 'warning'): Tipo de notificación (default: 'info')
  - **duration** (number): Duración en milisegundos antes de auto-cerrarse (default: 3000)

#### Retorno

- **string**: ID único de la notificación

## Tipos de notificación

| Tipo | Color | Uso recomendado |
|------|-------|------------------|
| `success` | Verde | Operaciones exitosas, confirmaciones |
| `error` | Rojo | Errores, fallos en operaciones |
| `info` | Azul | Información general, avisos neutros |
| `warning` | Amarillo | Advertencias, precauciones |

## Posicionamiento

Las notificaciones aparecen en la esquina superior derecha de la pantalla por defecto, con un diseño apilado cuando hay múltiples notificaciones.

## Estilos

La librería incluye estilos predefinidos que se inyectan automáticamente. Las notificaciones incluyen:

- Animación de fade-in con deslizamiento
- Sombras para profundidad visual
- Colores codificados por tipo
- Responsive y adaptable a diferentes tamaños de pantalla

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Modo desarrollo
pnpm dev

# Compilar para producción
pnpm build
```

## Estructura del proyecto

```
notificacion-fn/
├── src/
│   └── notifier.ts          # Código fuente principal
├── dist/
│   ├── notifier.js          # Compilado JavaScript
│   └── notifier.d.ts        # Definiciones TypeScript
├── package.json
└── tsconfig.json
```

## Configuración técnica

- **Lenguaje**: TypeScript 5.8.3
- **Build tool**: Vite 7.0.4
- **Package manager**: pnpm 10.0.0+
- **Formato de módulo**: ESM
- **Target**: ES6
- **Licencia**: MIT

## Roadmap

Características planeadas para futuras versiones:

- [ ] Soporte para múltiples notificaciones simultáneas mejorado
- [ ] Prevención de notificaciones duplicadas
- [ ] Opciones de posicionamiento personalizables
- [ ] Soporte para contenido HTML/JSX
- [ ] Botón de cierre manual
- [ ] Notificaciones persistentes (sin auto-cierre)
- [ ] Temas personalizables (dark/light mode)
- [ ] Iconos SVG para cada tipo
- [ ] Versiones específicas para React, Vue, Svelte
- [ ] Soporte SSR

## Autor

**AngelCG**

## Licencia

MIT

## Versión actual

1.4.0

---

**¿Encontraste un bug o tienes una sugerencia?** Abre un issue en el repositorio.
