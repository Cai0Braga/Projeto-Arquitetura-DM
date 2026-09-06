import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import { useStandsViewModel } from '../viewmodel/useStandsViewModel';
import StandCard from '../components/StandCard';
import StandModal from '../components/StandModal';
import { homeStyles } from '../styles/homeStyles';

export default function HomeScreen() {
  const vm = useStandsViewModel();

  return (
    <View style={homeStyles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={homeStyles.header}>
          <Text style={homeStyles.tituloApp}>Meus Stands</Text>
        </View>

        <TextInput
          style={homeStyles.inputPesquisa}
          placeholder="Pesquise um Stand !"
          value={vm.texto}
          onChangeText={(valor) => vm.setTexto(valor)}
        />

        <FlatList
          data={vm.standsFiltrados}
          keyExtractor={(stands) => stands.id}
          renderItem={({ item }) => (
            <StandCard
              stand={item}
              onEditar={vm.abrirModalEditar}
              onExcluir={vm.deletarStand}
            />
          )}
          contentContainerStyle={homeStyles.listaContainer}
          ListEmptyComponent={
            <Text style={homeStyles.textoVazio}>
              {vm.texto
                ? 'Nenhum Stand encontrado.'
                : 'Nenhum Stand cadastrado ainda.'}
            </Text>
          }
        />

        <Pressable style={homeStyles.fab} onPress={vm.abrirModalNovo}>
          <Text style={homeStyles.textoFab}>+</Text>
        </Pressable>

        <StandModal
          visible={vm.modal}
          isEdicao={Boolean(vm.idEmEdicao)}
          nome={vm.nome}
          setNome={vm.setNome}
          desc={vm.desc}
          setDesc={vm.setDesc}
          imageUrl={vm.imageUrl}
          setImageUrl={vm.setImageUrl}
          onSalvar={vm.salvarStand}
          onCancelar={vm.fecharModal}
        />
      </KeyboardAvoidingView>
    </View>
  );
}