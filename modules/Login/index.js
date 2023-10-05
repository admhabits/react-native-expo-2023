/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import CheckBox from '@react-native-community/checkbox';
import {BaseContainerLogin, Button} from 'components';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {postLogin} from '../../redux/login/login.actions';

const Login = ({navigation}) => {
  const dipatch = useDispatch();
  const {login} = useSelector(state => state);
  const [isShowPassword, setShowPassword] = useState(true);
  const [isParam, setParam] = useState({
    username: '',
    password: '',
    remember: false,
  });
  const [onClickSubmit, setOnClickSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const errorInput = param => {
    if (isParam[param] === '') {
      return <Text style={styles.messageError}>Wajib di isi</Text>;
    }
  };

  const onSubmit = () => {
    setOnClickSubmit(true);
    if (isParam !== '' && isParam.password !== '') {
      setLoading(true);
      dipatch(postLogin(isParam));
    }
  };

  useEffect(() => {
    if (login?.data?.token !== null && login?.data?.token !== 'error') {
      navigation.navigate('Home');
    }
  }, [login]);

  return (
    <BaseContainerLogin onPressBack={() => navigation.navigate('Home')}>
      {onClickSubmit && login.data.token === null && isLoading ? (
        <ActivityIndicator size="large" />
      ) : null}
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={e => setParam({...isParam, username: e})}
        />
        <View style={styles.underline} />
        {onClickSubmit ? errorInput('username') : null}
      </View>
      <View style={{...styles.input, marginTop: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={isShowPassword}
            onChangeText={e => setParam({...isParam, password: e})}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!isShowPassword)}
            style={{marginTop: 7}}>
            {isShowPassword ? (
              <Icon name="eye" size={20} color="#000" />
            ) : (
              <Icon name="eye-slash" size={20} color="#000" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.underline} />
        {onClickSubmit ? errorInput('password') : null}
      </View>
      <View style={styles.inputCheckbox}>
        <CheckBox
          value={isParam.remember}
          onValueChange={newValue => setParam({...isParam, remember: newValue})}
        />
        <Text>Ingat Saya</Text>
      </View>
      <View style={{marginTop: 30, paddingHorizontal: 20}}>
        <Button onPress={() => onSubmit()}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              fontFamily: 'Montserrat-Regular',
            }}>
            Masuk
          </Text>
        </Button>
        {login.data.token === 'error' ? (
          <Text style={styles.messageError}>
            Username atau password yang anda masukan salah
          </Text>
        ) : null}
      </View>

      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          paddingRight: 20,
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={{color: '#2D29F5'}}>Lupa Password?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileHome')}>
          <Text style={{color: '#000'}}>Belum Punya Akun?</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30, paddingHorizontal: 20}}>
        <Button
          type={'outline'}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              fontFamily: 'Montserrat-Regular',
            }}>
            Daftar Disini!
          </Text>
        </Button>
      </View>
    </BaseContainerLogin>
  );
};

export default Login;
const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    width: '50%',
  },
  underline: {
    width: '100%',
    marginTop: -6,
    height: 2,
    backgroundColor: '#000',
  },
  textInput: {
    height: 40,
    paddingLeft: -5,
    fontSize: 15,
    width: '90%',
  },
  button: {
    backgroundColor: 'red',
  },
  inputCheckbox: {
    marginTop: 8,
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    height: '100%',
    width: '100%',
  },
  menu: {
    marginTop: 50,
    backgroundColor: '#fff',
    height: 800,
    width: '100%',
    borderRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 15,
  },
  box: {
    width: '99%',
    display: 'flex',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 35,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  boxChild: {
    width: '90%',
    display: 'flex',
    marginLeft: 50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    height: 35,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxKeluar: {
    width: '99%',
    display: 'flex',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 35,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerNavigasi: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  profile: {
    fontSize: 24,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  messageError: {
    fontSize: 10,
    color: 'red',
    marginTop: 1,
    fontFamily: 'Roboto-Regular',
  },
});
