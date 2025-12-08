import { ContentCardProps } from '../com/types'

// 卡片数据配置
export const cardData: ContentCardProps[] = [
  {
    backgroundImage: '/images/TokenMarketplace/content/bg.png',
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: '/images/TokenMarketplace/content/icon1.png',
      title: 'TENSOR GRID',
      subtitle: 'DBAI0000002',
      descriptions: ['THIS IS A GPU COMPUTE AI TOOL', 'THIS IS'],
      buttons: ['Table', 'Comp', 'GPU', 'Optimize']
    },
    hover: {
      icon: '/images/TokenMarketplace/content/icon1.png',
      title: 'TENSOR GRID',
      subtitle: 'DBAI0000002',
      descriptions: ['THIS IS A GPU COMPUTE AI TOOL', 'THIS IS'],
      buttons: ['Table', 'Comp', 'GPU', 'Optimize']
    },
    clicked: {
      icon: '/images/TokenMarketplace/content/icon2.png',
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: '24h Revenue',
          value: '$6550,521',
          buttonText: 'Details'
        },
        {
          label: 'Market Cap',
          value: '$76,144,900',
          buttonText: 'Share'
        },
        {
          label: 'Total Users',
          value: '2,110,977',
          buttonText: 'Market'
        },
        {
          label: 'User Rating',
          value: '',
          buttonText: 'Favorites',
          rating: 3
        }
      ]
    }
  },
  // 第二个卡片 - 可以自定义不同的数据
  {
    backgroundImage: '/images/TokenMarketplace/content/bg.png',
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: '/images/TokenMarketplace/content/icon1.png',
      title: 'TENSOR GRID',
      subtitle: 'DBAI0000002',
      descriptions: ['THIS IS A GPU COMPUTE AI TOOL', ''],
      buttons: ['Table', 'Comp', 'GPU', 'Optimize']
    },
    hover: {
      icon: '/images/TokenMarketplace/content/icon1.png',
      title: 'TENSOR GRID',
      subtitle: 'DBAI0000002',
      descriptions: ['THIS IS A GPU COMPUTE AI TOOL', ''],
      buttons: ['Table', 'Comp', 'GPU', 'Optimize']
    },
    clicked: {
      icon: '/images/TokenMarketplace/content/icon2.png',
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: '24h Revenue',
          value: '$6550,521',
          buttonText: 'Details'
        },
        {
          label: 'Market Cap',
          value: '$76,144,900',
          buttonText: 'Share'
        },
        {
          label: 'Total Users',
          value: '2,110,977',
          buttonText: 'Market'
        },
        {
          label: 'User Rating',
          value: '',
          buttonText: 'Favorites',
          rating: 3
        }
      ]
    }
  }
]

