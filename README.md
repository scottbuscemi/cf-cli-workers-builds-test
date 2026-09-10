# cf CLI Workers Builds test

This repository verifies that the new Cloudflare `cf deploy` command runs in
Workers Builds without using Wrangler.

Workers Builds configuration:

- Build command: `npm run build`
- Deploy command: `npm run deploy`

The build script writes the Worker to Cloudflare's Build Output API format.
The deploy script runs `cf deploy --prebuilt` against that output.
