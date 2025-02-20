import { Text, View } from "react-native";
import { PrimeiroComponente, SegundoComponente }  from "./Components/VariosComponentes";
import Somar  from "./Components/Somar";
import estilo from './Components/Estilo';


export default function App() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.textoPadrao}>Aula 04 - Mobile</Text>
      <PrimeiroComponente/>
      <SegundoComponente/>
      <Somar/>
    </View>
  )
}