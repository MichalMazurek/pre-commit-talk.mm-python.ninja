# Hook installation

```bash
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
```

## Running it on your files

```bash
$ pre-commit run -a
Trim Trailing Whitespace.................................................Passed
Fix End of Files.........................................................Passed
Check Yaml...............................................................Passed
Check for added large files..............................................Passed
```

## It runs on every commit

```bash
$ git commit -a -m "first commit"
Trim Trailing Whitespace.................................................Passed
Fix End of Files.........................................................Failed
hookid: end-of-file-fixer

Files were modified by this hook. Additional output:

Fixing Makefile

Check Yaml...............................................................Passed
Check for added large files..............................................Passed
```
