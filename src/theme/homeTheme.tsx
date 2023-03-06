import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },

  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    // marginTop: 10,
    marginBottom: 20,
    paddingLeft: 75,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    color: 'white',
    fontSize: 20,
  },
  inputFieldIOS: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4.27,
    elevation: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  buttonReturn: {
    position: 'absolute',
    top: 50,
    left: 20,
   
  },
});
