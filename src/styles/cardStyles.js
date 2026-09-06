import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardTitulo: {
    fontWeight: 'bold',
  },
  cardDescricao: {
    color: '#444',
  },
  acoesCard: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 8,
  },
  botaoAcao: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  botaoEditar: {
    backgroundColor: '#007bff',
  },
  botaoExcluir: {
    backgroundColor: '#dc3545',
  },
  textoBotaoAcao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});