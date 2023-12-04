import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const uiWidthPx = 540;

export function pxTodp(uiPx: number): number {
  return (uiPx * deviceWidth) / uiWidthPx;
}
