import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "../paginas/TelaInicial";
import Curriculo from "../paginas/Curriculo";
import InfoPessoais from "../paginas/InfoPessoais";


const Stack = createNativeStackNavigator();

export default function Rotas() {

    return (
    <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown : false}} />
        <Stack.Screen name="Curriculo" component={Curriculo} options={{headerShown : false}}/>
        <Stack.Screen name="InfoPessoais" component={InfoPessoais} options={{headerShown : false}}/>
    </Stack.Navigator>
    )
    
}