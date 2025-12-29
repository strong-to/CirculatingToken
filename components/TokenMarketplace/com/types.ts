export interface DataCard {
  label: string
  value: string
  buttonText: string
  rating?: number // 0-5, 用于显示星星
}

export interface ContentCardState {
  icon: string
  title: string
  subtitle: string
  descriptions: string[]
  buttons: string[]
}

export interface ContentCardProps {
  backgroundImage: string
  hoverColor?: string
  clickColor?: string
  initial: ContentCardState
  hover: ContentCardState
  clicked: {
    icon: string
    title: string
    subtitle: string
    dataCards: DataCard[]
  }
}

