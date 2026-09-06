import { Text, View, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import { cardStyles } from '../styles/cardStyles';

export default function StandCard({ stand, onEditar, onExcluir }) {
  return (
    <Card style={cardStyles.card}>
      <Card.Cover source={{ uri: stand.imageUrl }} />
      <Card.Title title={stand.nome} titleStyle={cardStyles.cardTitulo} />
      <Card.Content>
        <Text style={cardStyles.cardDescricao}>{stand.desc}</Text>
      </Card.Content>
      <View style={cardStyles.acoesCard}>
        <Pressable
          style={[cardStyles.botaoAcao, cardStyles.botaoEditar]}
          onPress={() => onEditar(stand)}
        >
          <Text style={cardStyles.textoBotaoAcao}>Editar</Text>
        </Pressable>
        <Pressable
          style={[cardStyles.botaoAcao, cardStyles.botaoExcluir]}
          onPress={() => onExcluir(stand.id)}
        >
          <Text style={cardStyles.textoBotaoAcao}>Excluir</Text>
        </Pressable>
      </View>
    </Card>
  );
}