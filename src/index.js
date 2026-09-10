export default {
  fetch(request) {
    return Response.json({
      ok: true,
      message: "Deployed by cf from Workers Builds",
      build: "workers-builds-1",
      url: request.url,
    });
  },
};
