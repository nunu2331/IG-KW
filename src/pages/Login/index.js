import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrimaryInputForm from '../components/PrimaryInputForm';
import PrimaryButton from '../components/PrimaryButton';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageModalVisible: false,
    };
    this.onPressNextLogin = this.onPressNextLoginBtn.bind();
  }

  handleClick = () => {
    this.setState({ languageModalVisible: !this.state.languageModalVisible });
  };
  onPressNextLoginBtn = () => {
      this.props.navigation.navigate('Dashboard')
  }
  render() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
          <View style={styles.container}>

            <View style={styles.sectionTop}>
              <View style={styles.languageContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.handleClick();
                  }}>
                  <Text>
                    <Text>English (United States) </Text>
                    <Icon name="caret-down" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.sectionMiddle}>
              <View>
                <Image
                  resizeMode={'contain'}
                  style={styles.instaLogo}
                  source={require('../assets/images/instagramLogo.png')}
                />
              </View>

              <View style={styles.inputItem}>
                <PrimaryInputForm
                  placeHolderText={'Phone Number ,Email or Password'}
                />
                {/* </TouchableWithoutFeedback> */}
              </View>

              <View style={styles.inputItem}>
                <PrimaryInputForm placeHolderText={'Password'} />
              </View>

              <View style={styles.inputButton}>
                <PrimaryButton
                  buttonBg={colors.primary}
                  text={colors.secondary}
                  label={'Next'}
                  onPress={this.onPressNextLogin}
                />
              </View>

              <View style={styles.inputItem}>
                <Text style={styles.subTitle}>
                  <Text style={styles.forgotPasswordText}>
                    Forgot your Login Details?
                  </Text>{' '}
                  <Text style={styles.link}>Get Help In Signin?</Text>
                </Text>
                <Text style={styles.subTitleOR}>OR</Text>
              </View>
              <View style={styles.inputButton}>
                <PrimaryButton
                  buttonBg={colors.secondary}
                  text={colors.primary}
                  label={'Login With Facebook'}
                />
              </View>
            </View>

            <View style={styles.sectionBottom}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register1')} style={styles.bottomContainer}>
                <Text style={styles.subTitle}>
                  <Text style={styles.noAccount}>Dont Have an account?</Text>{' '}
                  <Text style={styles.link}>SignUp.</Text>
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
    );
  }
}

export default Login;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  sectionTop: {
    display: 'flex',
    flex: 1,
  },
  sectionMiddle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  sectionBottom: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  languageContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginTop: 12,
  },
  instaLogo: {
    width: '100%',
    height: '50%',
    alignSelf: 'center',
    paddingBottom: 80,
  },
  inputItem: {
    //   padding:5,
    marginTop: 10,
    marginHorizontal: 25,
  },
  inputButton: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  subTitle: {
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: colors.gray,
  },
  link: {
    color: colors.primary,
  },
  subTitleOR: {
    textAlign: 'center',
    margin: 15,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  noAccount: {
    color: colors.gray,
  },
});