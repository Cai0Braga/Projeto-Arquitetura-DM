import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  tituloApp: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputPesquisa: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 16,
  },
  listaContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  textoVazio: {
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  textoFab: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -3,
  },
});