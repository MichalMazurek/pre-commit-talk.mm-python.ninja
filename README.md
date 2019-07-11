# Pre-commit in 5 minutes – lightning talk

The presentation has been done using [mkdocs](https://mkdocs.org), edition and building instructions below:

[![Build Status](https://travis-ci.org/MichalMazurek/pre-commit-talk.mm-python.ninja.svg?branch=master)](https://travis-ci.org/MichalMazurek/pre-commit-talk.mm-python.ninja)

## Install dependencies

You need poetry for that: [https://poetry.eustace.io](https://poetry.eustace.io)

```
poetry install
```

## Building

```
make docs
```

or

```
poetry run mkdocs build
```

## Development

### Using pre-commit hooks ;)

Use https://pre-commit.com

```bash
pip install pre-commit
pre-commit install
```

### Previewing in your browser

Edit files in `docs/` directory.

```
make serve
```

or

```
poetry run mkdocs serve
```
