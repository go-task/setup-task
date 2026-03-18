# Changelog

## Unreleased

- **BREAKING**: Upgraded to Node 24. Requires a GitHub Actions runner with
  Node.js 24 support
  ([#10](https://github.com/go-task/setup-task/pull/10) by @vmaerten).

## v1.1.0 - 2026-03-17

- Added configurable HTTP retry for API requests
  ([#7](https://github.com/go-task/setup-task/pull/7) by @vmaerten).

## v1.0.0 - 2025-09-12

- Forked [arduino/setup-task](https://github.com/arduino/setup-task) (by @pd93).
- Default `repo-token` to `{{github.token}}`
  ([arduino/setup-task#642](https://github.com/arduino/setup-task/pull/642) by
  @shrink).
- Fixed a bug where the action would fail is Task pushed a tag without a release
  ([arduino/setup-task#490](https://github.com/arduino/setup-task/pull/490),
  [arduino/setup-task#1193](https://github.com/arduino/setup-task/pull/1193) by
  @trim21).
