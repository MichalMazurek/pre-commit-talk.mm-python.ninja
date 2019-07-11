# Hook installation

```bash
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
```

## Running it on your files

```bash
$ pre-commit run -a
Trim Trailing Whitespace.............................(no files to check)Skipped
Fix End of Files.....................................(no files to check)Skipped
Check Yaml...........................................(no files to check)Skipped
Check for added large files..........................(no files to check)Skipped
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
