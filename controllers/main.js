'use strict';

module.exports.getMain = (repo) => async (request, reply) => {
  let instance = request.query.i;
  if (!instance) {
    return reply.view('/templates/main.ejs', { instance });
  }

  try {
    console.info('Fetching emojis from:', instance);
    const emojos = await repo.fetchEmojos(instance);
    return reply.view('/templates/result.ejs', { instance, emojos });
  } catch (error) {
    return reply.view('/templates/fail.ejs', { instance });
  }
};
