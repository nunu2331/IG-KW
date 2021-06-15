import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../config/Colors';
import PhoneInputForm from '../components/PhoneInputForm';
import PrimaryButton from '../components/PrimaryButton';
export class Register1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneEnabled: true,
    };
    this.onPressNext=this.onPressNextBtn.bind()
  }

  switchButton(val) {
    this.setState({ isPhoneEnabled: val });
  }
  onPressNextBtn=()=>{
    this.props.navigation.navigate('Register2')
  }

  render() {
    const { isPhoneEnabled } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={require('../assets/images/avatar.jpg')}
            />
          </View>
          <View style={styles.switchTitleWrapper}>
            <TouchableOpacity
              onPress={() => this.switchButton(true)}
              style={[
                styles.titleSwitch,
                {
                  borderBottomColor: isPhoneEnabled
                    ? colors.black
                    : colors.gray,
                },
              ]}>
              <Text
                style={[
                  styles.title,
                  { color: isPhoneEnabled ? colors.black : colors.gray },
                ]}>
                PHONE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.switchButton(false)}
              style={[
                styles.titleSwitch,
                {
                  borderBottomColor: isPhoneEnabled
                    ? colors.gray
                    : colors.black,
                },
              ]}>
              <Text
                style={[
                  styles.title,
                  { color: isPhoneEnabled ? colors.gray : colors.black },
                ]}>
                EMAIL
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.phoneNumberInputWrapper}>
            <PhoneInputForm />
          </View>
          <View style={styles.notificationWrapper}>
            <Text style={styles.notificationText}>
              You may recieve SMS updates from instagram and can opt out at any
              time.
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            <PrimaryButton
              label={'Next'}
              text={colors.secondary}
              buttonBg={colors.primary}
              onPress={this.onPressNext}
            />
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={styles.bottomContainer}>
            <Text style={styles.login}>
              <Text style={styles.alreradyAccount}>Already have an account?</Text>{' '}
              <Text style={styles.logIn}>LogIn.</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default Register1;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20%',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  switchTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 30,
    marginTop: 30,
  },
  titleSwitch: {
    display: 'flex',
    flex: 1,

    borderBottomWidth: 2,
  },
  title: {
    textAlign: 'center',
    padding: 15,
    fontWeight: '700',
  },
  phoneNumberInputWrapper: {
    display: 'flex',
    margin: 30,
  },
  notificationWrapper: {
    padding: 30,
    paddingTop: 10,
  },
  notificationText: {
    color: colors.gray,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginLeft: 15,
    marginRight: 15,
  },
  topContainer: {
    display: 'flex',
    flex: 1,
  },
  bottomContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  login: {
    textAlign: 'center',
  },
  alreradyAccount: {
    color: colors.gray,
  },
  logIn: {
    fontWeight: '700',
    color: colors.primary,
  },
});