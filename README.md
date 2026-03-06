# Autoestima Empresarial — Web

Landing page y sitio web para **Autoestima Empresarial**, la sub-marca de **Gnozin Navarro** enfocada en líderes PyME (fundadores y herederos).

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** + **shadcn/ui v4**
- **framer-motion** para animaciones del quiz
- **Vitest** + **Testing Library** para tests
- Despliegue en **Vercel**

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
npm run test       # Correr tests una vez
npm run test:watch # Correr tests en modo watch
npm run build      # Build de producción
```

## Estructura

```
src/
├── app/
│   ├── page.tsx          # Landing + quiz de triaje
│   ├── programa/         # Programa Encaje (6 semanas)
│   ├── nosotros/         # Sobre Gnozin Navarro
│   ├── casos/            # Casos de éxito
│   └── contacto/         # Formulario de contacto
├── components/
│   ├── triage-quiz.tsx   # Quiz G1/G2 con sub-preguntas
│   ├── nav.tsx           # Navegación principal
│   ├── footer.tsx        # Footer con branding @GNOZIN
│   └── ui/               # Componentes shadcn/ui
├── lib/
│   └── triage-data.ts    # Datos y lógica del triaje
└── __tests__/
    ├── triage-data.test.ts   # 15 tests de datos y lógica
    └── triage-quiz.test.tsx  # 10 tests de componente
```

## Quiz de Triaje

El quiz clasifica al visitante en dos perfiles:

- **G1 — Fundador**: Creó su empresa, no puede delegar, cobra menos de lo que vale
- **G2 — Heredero**: Heredó la empresa, busca su identidad como líder

Después de las 3 preguntas de perfil, se hacen 2 sub-preguntas específicas para personalizar el resultado y el CTA.

## Despliegue

El proyecto está configurado para Vercel. Solo conecta el repo de GitHub y Vercel detectará Next.js automáticamente.

```bash
npx vercel          # Deploy de preview
npx vercel --prod   # Deploy de producción
```

## Branding

Colores Gnozin: Blue `#0B6ABF` · Navy `#0A3D6B` · Sky `#4A9FE5` · Ice `#E8F1FA`
Tipografía: Montserrat (headings) + Source Sans 3 (body)
