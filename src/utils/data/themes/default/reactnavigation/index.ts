import { DarkStyledTheme, LightStyledTheme } from '../styled'

export const LightReactNavigationTheme = {
  background: LightStyledTheme.palette.primary.background.default,
  primary: LightStyledTheme.palette.company.primary,
  card: LightStyledTheme.palette.secondary.background.default,
  text: LightStyledTheme.palette.primary.color.default,
  border: LightStyledTheme.palette.primary.color.default,
  notification: LightStyledTheme.palette.company.tertiary,
} as const

export const DarkReactNavigationTheme = {
  background: DarkStyledTheme.palette.primary.background.default,
  primary: DarkStyledTheme.palette.company.primary,
  card: DarkStyledTheme.palette.secondary.background.default,
  text: DarkStyledTheme.palette.primary.color.default,
  border: DarkStyledTheme.palette.primary.color.default,
  notification: DarkStyledTheme.palette.company.tertiary,
} as const
