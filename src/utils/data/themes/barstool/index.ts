import nativebase from './nativebase'
import {
  DarkReactNavigationTheme,
  LightReactNavigationTheme,
} from './reactnavigation'
import { DarkStyledTheme, LightStyledTheme } from './styled'

export const lighttheme = {
  styled: { ...LightStyledTheme },
  nativebase: {
    colors: nativebase,
  },
  rn: {
    colors: { ...LightReactNavigationTheme },
  },
} as const

export const darktheme = {
  styled: { ...DarkStyledTheme },
  nativebase: {
    colors: nativebase,
  },
  rn: {
    colors: { ...DarkReactNavigationTheme },
  },
} as const

export const barstooltheme = {
  mobile: {
    light: lighttheme,
    dark: darktheme,
  },
}
