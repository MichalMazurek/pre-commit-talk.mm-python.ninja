## Definition

Git **hooks are scripts** that Git executes before or after events such as: commit, push, and receive. Git hooks are a built-in feature - no need to download anything. Git hooks are run locally.

These hook scripts are only limited by a **developer's imagination**. Some example hook scripts include:

- **pre-commit**: Check the commit message for spelling errors.
- **pre-receive**: Enforce project coding standards.
- **post-commit**: Email/SMS team members of a new commit.
- **post-receive**: Push the code to production.

source: [https://githooks.com](https://githooks.com)

## Location of hooks in project:

It's in `.git/hooks`

```
$ ls -lah .git/hooks
total 112
drwxr-xr-x  14 michal  staff   448B 10 Jul 19:03 .
drwxr-xr-x  10 michal  staff   320B 10 Jul 19:04 ..
...
-rwxr-xr-x   1 michal  staff   424B 10 Jul 19:03 pre-applypatch.sample
-rwxr-xr-x   1 michal  staff   5.1K 10 Jul 19:03 pre-commit
-rwxr-xr-x   1 michal  staff   1.6K 10 Jul 19:03 pre-commit.sample
...
```
