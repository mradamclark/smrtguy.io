---
title: "Mermaid Diagrams"
date: 2024-01-15
description: "Examples of Mermaid diagrams in Hugo"
mermaid: true
draft: true
---

Mermaid lets you create diagrams using text definitions. Here are some examples.

## Flowchart

{{< mermaid >}}
flowchart LR
    A[Start] --> B{Decision}
    B -->|Yes| C[Do something]
    B -->|No| D[Do something else]
    C --> E[End]
    D --> E
{{< /mermaid >}}

## Sequence Diagram

{{< mermaid >}}
sequenceDiagram
    participant User
    participant Server
    participant Database

    User->>Server: HTTP Request
    Server->>Database: Query
    Database-->>Server: Results
    Server-->>User: HTTP Response
{{< /mermaid >}}

## State Diagram

{{< mermaid >}}
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing: Start
    Processing --> Success: Complete
    Processing --> Error: Fail
    Success --> [*]
    Error --> Idle: Retry
{{< /mermaid >}}

## Entity Relationship Diagram

{{< mermaid >}}
erDiagram
    USER ||--o{ POST : creates
    USER {
        int id PK
        string username
        string email
    }
    POST ||--|{ COMMENT : has
    POST {
        int id PK
        string title
        text content
        int user_id FK
    }
    COMMENT {
        int id PK
        text content
        int post_id FK
        int user_id FK
    }
{{< /mermaid >}}

## Git Graph

{{< mermaid >}}
gitGraph
    commit
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout main
    merge feature
    commit
{{< /mermaid >}}

---

To use Mermaid in your posts, add `mermaid: true` to your front matter and use the mermaid shortcode.
