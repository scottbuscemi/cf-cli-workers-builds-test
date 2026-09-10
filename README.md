# cf CLI Workers Builds test

This repository verifies that the new Cloudflare `cf deploy` command builds and
deploys a Worker from Workers Builds.

Workers Builds configuration:

- Build command: *(empty)*
- Deploy command: `npx cf deploy`

The project uses the Cloudflare Vite plugin as the build implementation consumed
by `cf deploy`. Workers Builds invokes the pinned local `cf` dependency through
`npx`.
