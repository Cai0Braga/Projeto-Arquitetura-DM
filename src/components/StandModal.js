import { Text, View, TextInput, Pressable, Modal } from 'react-native';
import { modalStyles } from '../styles/modalStyles';

export default function StandModal({
  visible,
  isEdicao,
  nome,
  setNome,
  desc,
  setDesc,
  imageUrl,
  setImageUrl,
  onSalvar,
  onCancelar,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancelar}
    >
      <View style={modalStyles.modalCentralizado}>
        <View style={modalStyles.modalConteudo}>
          <Text style={modalStyles.modalTitulo}>
            {isEdicao ? 'Editar Stand' : 'Novo Stand'}
          </Text>

          <TextInput
            style={modalStyles.input}
            placeholder="Nome do Stand"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={modalStyles.input}
            placeholder="Descricao do Stand"
            value={desc}
            onChangeText={setDesc}
            multiline
          />

          <TextInput
            style={modalStyles.input}
            placeholder="Url da imagem do Stand"
            value={imageUrl}
            onChangeText={setImageUrl}
            autoCapitalize="none"
          />

          <View style={modalStyles.botoesModal}>
            <Pressable
              style={[modalStyles.botaoModal, modalStyles.botaoCancelar]}
              onPress={onCancelar}
            >
              <Text style={modalStyles.textoBotao}>Cancelar</Text>
            </Pressable>

            <Pressable
              style={[modalStyles.botaoModal, modalStyles.botaoSalvar]}
              onPress={onSalvar}
            >
              <Text style={modalStyles.textoBotao}>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}