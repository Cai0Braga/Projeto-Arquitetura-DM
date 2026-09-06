export const createStand = (nome, desc, imageUrl, id = null) => ({
  id: id || Date.now().toString(),
  nome,
  desc,
  imageUrl,
});