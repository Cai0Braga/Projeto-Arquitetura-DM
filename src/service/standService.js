import { createStand } from '../entity/stand';
import { standRepository } from '../repository/standRepository';

export const standService = {
  validarCampos: (nome, desc, imageUrl) => {
    return Boolean(nome.trim() && desc.trim() && imageUrl.trim());
  },

  salvar: (lista, id, nome, desc, imageUrl) => {
    if (!standService.validarCampos(nome, desc, imageUrl)) {
      alert('Por favor preencha todos os campos !');
      return { sucesso: false, lista };
    }

    if (id) {
      const listaAtualizada = standRepository.update(lista, id, {
        nome,
        desc,
        imageUrl,
      });
      return { sucesso: true, lista: listaAtualizada };
    }

    const novoStand = createStand(nome, desc, imageUrl);
    const listaAtualizada = standRepository.add(lista, novoStand);
    return { sucesso: true, lista: listaAtualizada };
  },

  excluir: (lista, id) => {
    return standRepository.delete(lista, id);
  },

  filtrar: (lista, texto) => {
    return standRepository.filterByNome(lista, texto);
  },
};