## Winning!

```yaml
repos:
  - repo: https://github.com/gvanderest/pylama-pre-commit
    rev: 0.1.2
    hooks:
      - id: pylama
  - repo: https://github.com/asottile/seed-isort-config
    rev: v1.9.0
    hooks:
      - id: seed-isort-config
  - repo: https://github.com/pre-commit/mirrors-isort
    rev: v4.3.20 # Use the revision sha / tag you want to point at
    hooks:
      - id: isort
  - repo: https://github.com/ambv/black
    rev: 19.3b0
    hooks:
      - id: black
default_language_version:
  python: python3.7
```
