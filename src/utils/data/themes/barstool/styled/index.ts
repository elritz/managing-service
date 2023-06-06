// import { DefaultTheme } from '../../../../@types/theme/syled'

import { DefaultTheme } from '@src/@types/theme/syled'
import { bfsCompanyColors } from '../../barfriends/index'
import * as colors from '../../colors'
import { darkCompanyColors, lightCompanyColors } from '../colors'

export const LightStyledTheme: DefaultTheme = {
  theme: 'light',
  palette: {
    bfscompany: {
      ...bfsCompanyColors,
    },
    company: {
      ...lightCompanyColors,
    },
    background: {
      paper: colors.grey[50],
    },
    primary: {
      background: {
        default: colors.grey[300],
        dark: colors.grey[300],
        light: colors.grey[300],
        accent: colors.grey[300],
      },
      color: {
        default: colors.grey[800],
        dark: colors.grey[800],
        light: colors.grey[800],
        accent: colors.grey[800],
      },
    },
    secondary: {
      background: {
        default: colors.grey[300],
        dark: colors.grey[300],
        light: colors.grey[300],
        accent: colors.grey[300],
      },
      color: {
        default: colors.grey[800],
        dark: colors.grey[800],
        light: colors.grey[800],
        accent: colors.grey[800],
      },
    },
    tertiary: {
      background: {
        default: colors.grey[300],
        dark: colors.grey[300],
        light: colors.grey[300],
        accent: colors.grey[300],
      },
      color: {
        default: colors.grey[800],
        dark: colors.grey[800],
        light: colors.grey[800],
        accent: colors.grey[800],
      },
    },
    quaternary: {
      background: {
        default: colors.grey[300],
        dark: colors.grey[300],
        light: colors.grey[300],
        accent: colors.grey[300],
      },
      color: {
        default: colors.grey[800],
        dark: colors.grey[800],
        light: colors.grey[800],
        accent: colors.grey[800],
      },
    },
  },
} as const

export const DarkStyledTheme: DefaultTheme = {
  theme: 'dark',
  palette: {
    bfscompany: {
      ...bfsCompanyColors,
    },
    company: {
      ...darkCompanyColors,
    },
    background: {
      paper: colors.grey[900],
    },
    primary: {
      background: {
        default: colors.grey[800],
        dark: colors.grey[900],
        light: colors.grey[700],
        accent: '#AE3639',
      },
      color: {
        default: colors.grey[100],
        dark: colors.grey[300],
        light: colors.grey[50],
        accent: '#AE3639',
      },
    },
    secondary: {
      background: {
        default: colors.grey[400],
        dark: colors.grey[800],
        light: colors.grey[300],
        accent: '#AE3639',
      },
      color: {
        default: colors.grey[100],
        dark: colors.grey[300],
        light: colors.grey[50],
        accent: '#AE3639',
      },
    },
    tertiary: {
      background: {
        default: colors.grey[300],
        dark: colors.grey[300],
        light: colors.grey[300],
        accent: '#AE3639',
      },
      color: {
        default: colors.grey[800],
        dark: colors.grey[800],
        light: colors.grey[800],
        accent: '#AE3639',
      },
    },
    quaternary: {
      background: {
        default: colors.grey[300],
        dark: colors.grey[300],
        light: colors.grey[300],
        accent: colors.grey[300],
      },
      color: {
        default: colors.grey[800],
        dark: colors.grey[800],
        light: colors.grey[800],
        accent: '#AE3639',
      },
    },
  },
} as const
