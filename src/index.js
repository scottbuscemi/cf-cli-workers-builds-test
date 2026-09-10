export default {
  fetch(request) {
    return Response.json({
      ok: true,
      message: "Deployed by cf from Workers Builds",
      url: request.url,
    });
  },
};
