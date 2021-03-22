import { useMemo } from 'react';
import { toRad, translateZ } from 'react-native-redash/lib/module/v1';
import { scale, verticalScale } from 'react-native-size-matters';
import Animated, {
  interpolate,
  event,
  multiply,
  useValue,
  concat,
  Extrapolate,
  sin,
  abs,
  set,
  add,
} from 'react-native-reanimated';
import { ViewStyle } from 'react-native';
import { CHART_HEIGHT } from '../constants';

const offset = verticalScale(150);
const HEIGHT = CHART_HEIGHT - offset;
const OPACITY = HEIGHT;

const useCardFlipOnScroll = (): [
  (...args: any[]) => void,
  Animated.AnimateStyle<ViewStyle[]>
] => {
  const scrollY = useValue(0);
  const opacity = interpolate(scrollY, {
    inputRange: [0, OPACITY],
    outputRange: [1, 0],
  });
  const rotateX = concat(
    interpolate(scrollY, {
      inputRange: [0, HEIGHT],
      outputRange: [0, -90],
      extrapolate: Extrapolate.CLAMP,
    }),
    'deg'
  );

  const x = multiply(-HEIGHT / 2, sin(toRad(abs(rotateX))));

  const animatedViewStyle = useMemo(
    () => [
      { opacity },
      {
        transform: [
          { perspective: 600 },
          { rotateX: rotateX },
          translateZ(600, x),
        ],
      },
    ],
    [x, opacity, rotateX]
  );

  const onScrollEvent = event([
    {
      nativeEvent: {
        contentOffset: {
          y: (y) => set(scrollY, add(y, scale(-35))),
        },
      },
    },
  ]);

  return [onScrollEvent, animatedViewStyle];
};

export default useCardFlipOnScroll;
