export const standRepository = {
  add: (lista, novoStand) => [...lista, novoStand],

  update: (lista, id, dadosAtualizados) =>
    lista.map((item) =>
      item.id === id ? { ...item, ...dadosAtualizados } : item
    ),

  delete: (lista, id) => lista.filter((item) => item.id !== id),

  filterByNome: (lista, termo) =>
    lista.filter((item) =>
      item.nome.toLowerCase().includes(termo.toLowerCase())
    ),
};