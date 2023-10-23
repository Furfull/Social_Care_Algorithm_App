import React, {useState} from "react";
import { View, Text, Image, Switch, Select, Option, Label } from "react-native"
import styles from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';


export default function Fields(){

    const [openDeficiencia, setOpenDeficiencia] = useState(false);
    const [valueDeficiencia, setValueDeficiencia] = useState(null);
    const [itemsDeficiencia, setItemsDeficiencia] = useState([
        {label: 'Prefiro não informar.', value: 'nda'},
        {label: 'Não.', value: 'nao'},
        {label: 'Sim. Física', value: 'fisica'},
        {label: 'Sim. Visual', value: 'visual'},
        {label: 'Sim. Auditiva', value: 'auditiva'},
        {label: 'Sim. Intelectual', value: 'intelectual'},
        {label: 'Sim. Psicossocial', value: 'psicossocial'},
        {label: 'Sim. Outra', value: 'outra'},
    ]);

    const [openGender, setOpenGender] = useState(false);
    const [valueGender, setValueGender] = useState(null);
    const [itemsGender, setItemsGender] = useState([
        {label: 'Prefiro não informar.', value: 'nda'},
        {label: 'Homem cis', value: 'hcis'},
        {label: 'Mulher cis', value: 'mcis'},
        {label: 'Homem trans', value: 'ht'},
        {label: 'Mulher trans', value: 'mt'},
        {label: 'Não binário', value: 'nb'},
        {label: 'Outros', value: 'outros'},
    ]);

    const [openSexual, setOpenSexual] = useState(false);
    const [valueSexual, setValueSexual] = useState(null);
    const [itemsSexual, setItemsSexual] = useState([
        {label: 'Prefiro não informar.', value: 'nda'},
        {label: 'Heterossexual', value: 'htr'},
        {label: 'Homossexual', value: 'homo'},
        {label: 'Bissexual', value: 'bi'},
        {label: 'Assexual', value: 'ace'},
        {label: 'Panssexual', value: 'pan'},
        {label: 'Outros', value: 'outros'},
    ]);

    const [openEtnia, setOpenEtnia] = useState(false);
    const [valueEtnia, setValueEtnia] = useState(null);
    const [itemsEtnia, setItemsEtnia] = useState([
        {label: 'Prefiro não informar.', value: 'nda'},
        {label: 'Branca', value: 'branca'},
        {label: 'Preta', value: 'preta'},
        {label: 'Parda', value: 'parda'},
        {label: 'Amarela', value: 'amarela'},
        {label: 'Indígena', value: 'indgena'},
        {label: 'Outros', value: 'outros'},
    ]);

    const [openRenda, setOpenRenda] = useState(false);
    const [valueRenda, setValueRenda] = useState(null);
    const [itemsRenda, setItemsRenda] = useState([
        {label: 'Prefiro não informar.', value: 'nda'},
        {label: 'Menos de 1 salário mínimo.', value: '-1'},
        {label: 'De 1 a 3 salários mínimos.', value: '1'},
        {label: '4 a 7 salários mínimos.', value: '2'},
        {label: '7 a 10 salários mínimos.', value: '3'},
        {label: 'Mais de 10 salários mínimos.', value: '4'},
    ]);


    return(
        <View style={styles.boxTitle}>

            <View style={styles.MarginLogo}>

            <View
                style={{
                    flex: 1,
                    padding: 5,
                    paddingRight:60
                }}>
                <DropDownPicker
                    open={openDeficiencia}
                    value={valueDeficiencia}
                    items={itemsDeficiencia}
                    setOpen={setOpenDeficiencia}
                    setValue={setValueDeficiencia}
                    setItems={setItemsDeficiencia}
                    placeholder={'Possui Deficiência?'}
                    dropDownDirection="TOP"
                
                />
            </View>

            </View>

            <View style={styles.MarginLogoBody}>

            <View
                style={{
                    flex: 1,
                    padding: 5,
                    paddingRight:60
                }}>
                <DropDownPicker
                    open={openGender}
                    value={valueGender}
                    items={itemsGender}
                    setOpen={setOpenGender}
                    setValue={setValueGender}
                    setItems={setItemsGender}
                    placeholder={'Qual seu genero?'}
                    dropDownDirection="TOP"
                />
            </View>

            </View>

            <View style={styles.MarginLogoBody}>

            <View
                style={{
                    flex: 1,
                    padding: 5,
                    paddingRight:60
                }}>
                <DropDownPicker
                    open={openSexual}
                    value={valueSexual}
                    items={itemsSexual}
                    setOpen={setOpenSexual}
                    setValue={setValueSexual}
                    setItems={setItemsSexual}
                    placeholder={'Qual sua sexualidade?'}
                    dropDownDirection="TOP"
                />
            </View>

            </View>

            <View style={styles.MarginLogoBody}>

            <View
                style={{
                    flex: 1,
                    padding: 5,
                    paddingRight:60
                }}>
                <DropDownPicker
                    open={openEtnia}
                    value={valueEtnia}
                    items={itemsEtnia}
                    setOpen={setOpenEtnia}
                    setValue={setValueEtnia}
                    setItems={setItemsEtnia}
                    placeholder={'Qual sua cor, raça ou etnia?'}
                    dropDownDirection="TOP"
                />
            </View>

            </View>

            <View style={styles.MarginLogoBody}>

            <View
                style={{
                    flex: 1,
                    padding: 5,
                    paddingRight:60
                }}>
                <DropDownPicker
                    open={openRenda}
                    value={valueRenda}
                    items={itemsRenda}
                    setOpen={setOpenRenda}
                    setValue={setValueRenda}
                    setItems={setItemsRenda}
                    placeholder={'Qual sua renda familiar?'}
                    dropDownDirection="TOP"
                    
                />
            </View>

            </View>
            
            <View style={styles.MarginView}>
            <Text style={styles.TextEsqueciMinhaSenha}
            onPress={() => null}
            >Alterar dados de cadastro</Text>
            </View>


        </View>
    )
}
