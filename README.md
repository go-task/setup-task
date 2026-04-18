<div align="center">
  <a href="https://taskfile.dev">
    <img src="./res/task.png"  width="200px" height="200px" alt="Task" />
  </a>
  <a href="https://github.com/features/actions">
    <img src="./res/actions.png" width="200px" height="200px" alt="GitHub Actions" />
  </a>

  <h1>Task GitHub Action</h1>

  <p>
    A <a href="https://docs.github.com/en/actions">GitHub Actions</a> action that makes the <a href="https://taskfile.dev">Task</a> task runner / build tool available to use in your workflow.
  </p>

  <p>
    <a href="https://taskfile.dev/installation/">Installation</a> | <a href="https://taskfile.dev/usage/">Documentation</a> | <a href="https://twitter.com/taskfiledev">Twitter</a> | <a href="https://bsky.app/profile/taskfile.dev">Bluesky</a> | <a href="https://fosstodon.org/@task">Mastodon</a> | <a href="https://discord.gg/6TY36E39UK">Discord</a>
  </p>
</div>

[![CI status](https://github.com/go-task/setup-task/actions/workflows/ci.yml/badge.svg)](https://github.com/go-task/setup-task/actions/workflows/ci.yml)
[![Sync Labels status](https://github.com/go-task/setup-task/actions/workflows/sync-labels-npm.yml/badge.svg)](https://github.com/go-task/setup-task/actions/workflows/sync-labels-npm.yml)

## Inputs

### `version`

The version of [Task](https://taskfile.dev) to install.
Can be an exact version (e.g., `3.4.2`) or a version range (e.g., `3.x`).

**Default**: `3.x`

### `repo-token`

[GitHub access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) used for GitHub API requests.

**Default**: [`GITHUB_TOKEN`](https://docs.github.com/actions/security-guides/automatic-token-authentication)

## Usage

To get the action's default version of Task just add this step:

```yaml
- name: Install Task
  uses: go-task/setup-task@v2
```

If you want to pin a major or minor version you can use the `.x` wildcard:

```yaml
- name: Install Task
  uses: go-task/setup-task@v2
  with:
    version: 2.x
```

To pin the exact version:

```yaml
- name: Install Task
  uses: go-task/setup-task@v2
  with:
    version: 2.6.1
```
