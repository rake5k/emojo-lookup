'use strict'

module.exports.getMain = (repo) => async (request, reply) => {
  console.debug(request.query);
  let instance = request.query.i;
  console.info('Fetching emojis from:', instance);
  const emojos = await repo.fetch(instance);
  console.debug(emojos);
  return reply.view("/templates/main.ejs", { emojos });
}
