import {StyleSheet, Pressable, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  DISABLE_BACKGROUND_COLOR,
  PRIMARY_GRADIENT_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../styles/colors';
import React, {ReactNode} from 'react';

interface props extends React.ComponentProps<typeof Pressable> {
  title: string;
  icon?: ReactNode;
  gradientColors?: (string | number)[];
  disableGradientColors?: (string | number)[];
}

const Button: React.FC<props> = ({
  title,
  disabled = false,
  icon,
  gradientColors = [
    PRIMARY_GRADIENT_COLOR.COLOR_1,
    PRIMARY_GRADIENT_COLOR.COLOR_2,
    PRIMARY_GRADIENT_COLOR.COLOR_3,
  ],
  disableGradientColors = [
    DISABLE_BACKGROUND_COLOR,
    DISABLE_BACKGROUND_COLOR,
    DISABLE_BACKGROUND_COLOR,
  ],
  ...other
}) => {
  return (
    <Pressable {...other}>
      <LinearGradient style={style.button} colors={gradientColors}>
        {disabled ? (
          <ActivityIndicator size="large" color={PRIMARY_TEXT_COLOR} />
        ) : (
          <Text style={style.text}>{title}</Text>
        )}
        {icon}
      </LinearGradient>
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 340,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: PRIMARY_TEXT_COLOR,
    marginRight: 20,
  },
});

export default Button;
