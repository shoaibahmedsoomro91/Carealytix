import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from './Colors';
import Fonts from './Fonts';

const big = hp('4.01%') //34;
const extralarge = hp('3.95%') //32;
const large = hp('3%') //24; 
const medium = hp('2.4%') //20
const lables = hp('2.15%') //18;
const body = hp('1.95%') //16;
const regular = hp('1.65%') //14;
const caption = hp('1.46%') //12;

const FontSizes = {
  /* fontSize */
  big,
  extralarge,
  large,
  medium,
  lables,
  body,
  regular,
  caption,
};
export default FontSizes;
