+++
title = 'Markdown & Hugo Demo'
date = 2024-01-01
draft = true
description = 'A demonstration of markdown and Hugo template features'
+++

This page demonstrates all the default markdown and Hugo features available.

---

## Text Formatting

**Bold text** using double asterisks or __double underscores__.

*Italic text* using single asterisks or _single underscores_.

***Bold and italic*** using triple asterisks.

~~Strikethrough~~ using double tildes.

This is `inline code` using backticks.

---

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## Links

[External link](https://gohugo.io)

[Link with title](https://gohugo.io "Hugo's Homepage")

<https://gohugo.io> - Autolink

---

## Lists

### Unordered List

- Item one
- Item two
  - Nested item
  - Another nested item
- Item three

### Ordered List

1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item

### Task List

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

---

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

> Nested blockquotes work too:
>
> > This is nested inside the first blockquote.

---

## Code Blocks

### Inline Code

Use `backticks` for inline code like `const x = 42`.

### Fenced Code Blocks

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

```javascript
// JavaScript example
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
```

```python
# Python example
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

```bash
# Shell commands
hugo server -D
npm install
git status
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <p>Hello, World!</p>
  </body>
</html>
```

```css
/* CSS example */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}
```

---

## Tables

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Cell 1       | Cell 2         | Cell 3        |
| Cell 4       | Cell 5         | Cell 6        |
| Cell 7       | Cell 8         | Cell 9        |

  {{<side-by-side>}}
  | Col A | Col B |
  |-------|-------|
  | 1     | 2     |
  | 3     | 4     |

  | Col X | Col Y |
  |-------|-------|
  | A     | B     |
  | C     | D     |
  {{</side-by-side>}}

---

## Horizontal Rules

Three or more dashes, asterisks, or underscores:

---
***
___

---
## Images

![Placeholder Image](https://via.placeholder.com/600x200 "Image title text")

---

## Footnotes

Here's a sentence with a footnote[^1].

And another one[^note].

[^1]: This is the first footnote.
[^note]: This is a named footnote.

---

## Definition Lists

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

---

## Abbreviations

The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

---

## Hugo Built-in Shortcodes

### Figure

{{< figure src="https://via.placeholder.com/600x300" title="Figure Title" caption="This is a figure caption" alt="Placeholder" >}}

### Highlight (with line numbers)

{{< highlight go "linenos=table,hl_lines=3" >}}
package main

import "fmt"

func main() {
    fmt.Println("Highlighted code block")
}
{{< /highlight >}}

### YouTube

{{< youtube dQw4w9WgXcQ >}}

### Gist

{{< gist spf13 7896402 >}}

---

## HTML in Markdown

Hugo allows raw HTML in markdown:

<details>
<summary>Click to expand</summary>

This content is hidden by default using native HTML `<details>` and `<summary>` tags.

- Works with markdown inside
- **Bold** and *italic* too

</details>

<mark>Highlighted text</mark> using the `<mark>` tag.

<kbd>Ctrl</kbd> + <kbd>C</kbd> for keyboard shortcuts.

---

## Emojis

Hugo supports emoji shortcodes: :smile: :rocket: :thumbsup:

(Note: Requires `enableEmoji = true` in config)

---

## Math (if enabled)

Inline math: $E = mc^2$

Block math:

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

(Note: Requires math rendering to be configured)
