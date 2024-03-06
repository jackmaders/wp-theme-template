# Wordpress Theme Template

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE) [![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white)](https://wordpress.org/) [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1a2a33?style=for-the-badge&logo=prettier&logoColor=white)

Boilerplate template for a Wordpress Theme using Vite, Typescript, & Tailwind CSS.

## Features

- Vite for ultra-fast development and build
- Tailwind CSS for utility-first styling
- Pre-configured linters and formatters (PHP Linter, ESLint, Stylelint, Prettier)

## Getting Started

### Prerequisites

- Node.js (current LTS version)
- WordPress development environment

### Setup

Install the dependencies

```bash
npm install
```

Copy .env.example as .env

```bash
cp .env.example .env
```

Update the `VITE_WORDPRESS_THEMES_DIR` environment variable to point to your themes directory. You may need to pre-emptively create this folder and set appropriate permissions.

This is where the project will output the theme files to during build and development.

```properties
VITE_WORDPRESS_THEMES_DIR=/path-to-wordpress/wp-content/themes/
```

### Build

The project compiles the javascript and CSS, before copying the output to the build directory. The /theme folder is used as the usual /public folder so it's content are copied to the root of the build directory as-is.

```bash
npm run build
```

### Development

The project includes a development script, which runs the build command, and then rebuilds the theme if there are any changes to files in the /src and /theme folders. Any changes should be visible after a page refresh.

```bash
npm run build:watch
```

Navigate to your Wordpress Dashboard and then theme should be visible

### Linting and Formatting

The project uses these packages to maintain code quality:

- **PHPLint:** A node wrapper around the native PHP Linter. Handles linting for php files.
- **Stylelint:** Handles linting for css files.
- **ESLint:** Uses the recommended config for Typescript. Handles linting for js & ts files.
- **Prettier:** Uses recommended config with @prettier/plugin-php for PHP and the official tailwindcss plugin. Handles formatting for all files.

To lint and format the project, use the following command:

```bash
npm run lint
```

If you want to lint a specific language or just format project without linting, run a specific command:

```bash
# PHPLint
npm run lint:phplint

# ESLint
npm run lint:eslint

# Stylelint
npm run lint:stylelint

# Prettier
npm run format
```

### Structure

```bash
📁.vscode                       # vscode settings
📁src                           # front-end project
└── 📁images                    # images to be processed by vite
    └── 📁brands                # brand logos
    └── 📁heroicons             # svg icons
└── 📁scripts                   # typescript
    └── 📁templates             # template-specific typescript
        └── 📄_index_.ts        # dynamic imports for template scripts
└── 📁styles                    # styling code
    └── 📁plugins               # plugin-specific styling
    └── 📁tailwind              # tailwind-specific styling
        └── 📄base.css          # define base styling
        └── 📄components.css    # define component classes
        └── 📄utilities.css     # define additional utilities
    └── 📁templates             # template-specific styling
    └── 📄main.css              # css entrypoint
└── 📄index.ts                  # vite entrypoint
📁theme                         # wordpress theme files
└── 📁functions                 # wordpress functionality
    └── 📄head.php              # add metadata and scripts to <head/>
    └── 📄theme_support.php     # define functionality for theme
└── 📁templates                 # repeated markup across pages
    └── 📄footer.php            # footer template
    └── 📄hero.php              # hero template
    └── 📄navigation.php        # navbar template
└── 📄404.php                   # page-not-found template
└── 📄archive.php               # post listing template
└── 📄front-page.php            # home page template
└── 📄functions.php             # import files in /functions
└── 📄home.php                  # latest posts template
└── 📄index.php                 # fallback template
└── 📄search.php                # search results template
└── 📄singular.php              # posts and pages template
└── 📄style.css                 # wordpress theme metadata
📄.env.example                  # example environment veriables
📄.eslintrc                     # eslint config
📄.gitignore                    # globs for git to ignore
📄.postcssrc                    # postcss config for tailwind
📄.prettierignore               # globs for prettier to ignore
📄.prettierrc                   # prettier config
📄.stylelintrc                  # stylelint config
📄LICENSE                       # License file
📄README.md                     # Readme file
📄package-lock.json             # dependency tree
📄package.json                  # project config
📄tailwind.config.js            # tailwind config
📄tsconfig.json                 # typescript config
📄vite.config.js                # vite config
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
