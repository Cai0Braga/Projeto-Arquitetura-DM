import { useState } from 'react';
import { standService } from '../service/standService';

export const useStandsViewModel = () => {
  const [texto, setTexto] = useState('');
  const [modal, setModal] = useState(false);
  const [listaStands, setlistaStands] = useState([]);
  const [idEmEdicao, setIdEmEdicao] = useState(null);

  const [nome, setNome] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const abrirModalNovo = () => {
    setIdEmEdicao(null);
    setNome('');
    setDesc('');
    setImageUrl('');
    setModal(true);
  };

  const abrirModalEditar = (stand) => {
    setIdEmEdicao(stand.id);
    setNome(stand.nome);
    setDesc(stand.desc);
    setImageUrl(stand.imageUrl);
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };

  const salvarStand = () => {
    const resultado = standService.salvar(
      listaStands,
      idEmEdicao,
      nome,
      desc,
      imageUrl
    );

    if (resultado.sucesso) {
      setlistaStands(resultado.lista);
      setNome('');
      setDesc('');
      setImageUrl('');
      setIdEmEdicao(null);
      setModal(false);
    }
  };

  const deletarStand = (id) => {
    const novaLista = standService.excluir(listaStands, id);
    setlistaStands(novaLista);
  };

  const standsFiltrados = standService.filtrar(listaStands, texto);

  return {
    texto,
    setTexto,
    modal,
    idEmEdicao,
    nome,
    setNome,
    desc,
    setDesc,
    imageUrl,
    setImageUrl,
    standsFiltrados,
    abrirModalNovo,
    abrirModalEditar,
    fecharModal,
    salvarStand,
    deletarStand,
  };
};