---
title: "Table of Contents Demo"
date: 2024-01-16
description: "Demonstrates the auto-generated table of contents"
toc: true
draft: true
---

This page demonstrates the auto-generated table of contents feature. The ToC is built from all headings on the page.

## Getting Started

This is the first section of the document. It covers the basics of getting started.

### Prerequisites

Before you begin, make sure you have the following installed:

- Hugo (extended version)
- Node.js and npm
- A text editor

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/example/repo.git
cd repo
npm install
```

## Configuration

This section covers configuration options.

### Basic Settings

Configure your site in `hugo.toml`:

```toml
baseURL = 'https://example.com/'
title = 'My Site'
theme = 'paper-tui'
```

### Advanced Options

For more control, you can customize:

- Colors and typography
- Navigation menus
- Footer content

#### Custom Colors

Define your color palette in CSS variables:

```css
:root {
  --bg: #faf8f3;
  --text: #1a1a1a;
}
```

#### Typography Settings

Adjust font sizes and line heights as needed.

## Usage

Learn how to use the various features.

### Writing Content

Create new content with:

```bash
hugo new posts/my-post.md
```

### Shortcodes

Use built-in shortcodes for enhanced functionality:

- `figure` - for images with captions
- `highlight` - for syntax highlighted code
- `mermaid` - for diagrams

## Deployment

Deploy your site to various platforms.

### Static Hosting

Build and deploy to any static host:

```bash
hugo --minify
```

### CI/CD

Automate deployments with GitHub Actions or similar.

## Conclusion

That covers the main features. Check the documentation for more details.
