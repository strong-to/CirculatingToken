import { ContentCardProps } from '../com/types'
import { images, texts } from '../com/ContentCard/resources'

// 卡片数据配置 - 30个条目（按图一6行5列的顺序）
export const cardData: ContentCardProps[] = [
  // Row 1, Col 1: TENSOR GRID (DBAI0000002)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon1,
      title: 'TENSOR GRID',
      subtitle: 'DBAI0000002',
      descriptions: ['THIS IS A GPU COMPUTE AI TOOL'],
      buttons: ['Table', 'Computing', 'GPU', 'Optimize']
    },
    hover: {
      icon: images.icons.icon1,
      title: 'TENSOR GRID',
      subtitle: 'DBAI0000002',
      descriptions: ['THIS IS A GPU COMPUTE AI TOOL'],
      buttons: ['Table', 'Computing', 'GPU', 'Optimize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 1, Col 2: EDU FORM (DBAI0000012)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon2,
      title: 'EDU FORM',
      subtitle: 'DBAI0000012',
      descriptions: ['THIS IS EDUCATION INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Education', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon2,
      title: 'EDU FORM',
      subtitle: 'DBAI0000012',
      descriptions: ['THIS IS EDUCATION INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Education', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 1, Col 3: ECONOSET (DBAI0000011)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon3,
      title: 'ECONOSET',
      subtitle: 'DBAI0000011',
      descriptions: ['THIS IS AN ECONOMIC INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Markets & Trade', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon3,
      title: 'ECONOSET',
      subtitle: 'DBAI0000011',
      descriptions: ['THIS IS AN ECONOMIC INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Markets & Trade', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 1, Col 4: TRANSIT FLOW (DBAI0000008)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon4,
      title: 'TRANSIT FLOW',
      subtitle: 'DBAI0000008',
      descriptions: ['THIS IS A TRANSPORTATION INSTRUCTION AI DATASET',],
      buttons: ['Text', 'Transportation', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon4,
      title: 'TRANSIT FLOW',
      subtitle: 'DBAI0000008',
      descriptions: ['THIS IS A TRANSPORTATION INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Transportation', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 1, Col 5: RES LAB (DBAI0000014)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon5,
      title: 'RES LAB',
      subtitle: 'DBAI0000014',
      descriptions: ['THIS IS A SCIENTIFIC INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Research&Science', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon5,
      title: 'RES LAB',
      subtitle: 'DBAI0000014',
      descriptions: ['THIS IS A SCIENTIFIC INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Research&Science', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 2, Col 1: FRAME FLOW (DBAI0000017)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon6,
      title: 'FRAME FLOW',
      subtitle: 'DBAI0000017',
      descriptions: ['THIS IS A FRAME FLOW AI TOOL'],
      buttons: ['Text', 'Data', 'Image', 'Video']
    },
    hover: {
      icon: images.icons.icon6,
      title: 'FRAME FLOW',
      subtitle: 'DBAI0000017',
      descriptions: ['THIS IS A FRAME FLOW AI TOOL'],
      buttons: ['Text', 'Data', 'Image', 'Video']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 2, Col 2: QUANT LOOP (DBAI0000021)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon7,
      title: 'QUANT LOOP',
      subtitle: 'DBAI0000021',
      descriptions: ['THIS IS A QUANTITATIVE TRADING AI WORKFLOW'],
      buttons: ['Data', 'Markets & Trade', 'Text', 'Predict&Analyze']
    },
    hover: {
      icon: images.icons.icon7,
      title: 'QUANT LOOP',
      subtitle: 'DBAI0000021',
      descriptions: ['THIS IS A QUANTITATIVE TRADING AI WORKFLOW'],
      buttons: ['Data', 'Markets & Trade', 'Text', 'Predict&Analyze']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 2, Col 3: ART REFER (DBAI0000013)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon8,
      title: 'ART REFER',
      subtitle: 'DBAI0000013',
      descriptions: ['THIS IS AN ART INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Art&Culture', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon8,
      title: 'ART REFER',
      subtitle: 'DBAI0000013',
      descriptions: ['THIS IS AN ART INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Art&Culture', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 2, Col 4: INDUS DRAFT (DBAI0000018)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon9,
      title: 'INDUS DRAFT',
      subtitle: 'DBAI0000018',
      descriptions: ['THIS IS AN INDUSTRIAL DESIGN AI WORKFLOW'],
      buttons: ['Chart', 'Manufacturing', 'Text', 'Generate&Edit']
    },
    hover: {
      icon: images.icons.icon9,
      title: 'INDUS DRAFT',
      subtitle: 'DBAI0000018',
      descriptions: ['THIS IS AN INDUSTRIAL DESIGN AI WORKFLOW'],
      buttons: ['Chart', 'Manufacturing', 'Text', 'Generate&Edit']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 2, Col 5: SPECTRA (DBAI0000004)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon10,
      title: 'SPECTRA',
      subtitle: 'DBAI0000004',
      descriptions: ['THIS IS A VISION FOUNDATION AI MODEL'],
      buttons: ['Image', 'Generate', 'Code', 'Computing']
    },
    hover: {
      icon: images.icons.icon10,
      title: 'SPECTRA',
      subtitle: 'DBAI0000004',
      descriptions: ['THIS IS A VISION FOUNDATION AI MODEL'],
      buttons: ['Image', 'Generate', 'Code', 'Computing']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 3, Col 1: PIXEL STREAM (DBAI0000016)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon11,
      title: 'PIXEL STREAM',
      subtitle: 'DBAI0000016',
      descriptions: ['THIS IS AN IMAGE CREATION AI WORKFLOW'],
      buttons: ['Image', 'Entertainment', 'Text', 'Generate&Edit']
    },
    hover: {
      icon: images.icons.icon11,
      title: 'PIXEL STREAM',
      subtitle: 'DBAI0000016',
      descriptions: ['THIS IS AN IMAGE CREATION AI WORKFLOW'],
      buttons: ['Image', 'Entertainment', 'Text', 'Generate&Edit']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 3, Col 2: VERBA (DBAI0000003)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon12,
      title: 'VERBA',
      subtitle: 'DBAI0000003',
      descriptions: ['THIS IS A LANGUAGE FOUNDATION AI MODEL'],
      buttons: ['Text', 'Generate', 'Code', 'Computing']
    },
    hover: {
      icon: images.icons.icon12,
      title: 'VERBA',
      subtitle: 'DBAI0000003',
      descriptions: ['THIS IS A LANGUAGE FOUNDATION AI MODEL'],
      buttons: ['Text', 'Generate', 'Code', 'Computing']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 3, Col 3: ATMO SET (DBAI0000009)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon13,
      title: 'ATMO SET',
      subtitle: 'DBAI0000009',
      descriptions: ['THIS IS A METEOROLOGY INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Meteorology', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon13,
      title: 'ATMO SET',
      subtitle: 'DBAI0000009',
      descriptions: ['THIS IS A METEOROLOGY INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Meteorology', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 3, Col 4: CODE WEAVER (DBAI0000020)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon14,
      title: 'CODE WEAVER',
      subtitle: 'DBAI0000020',
      descriptions: ['THIS IS A PROGRAMMING ASSISTANT AI WORKFLOW'],
      buttons: ['Code', 'Computing', 'Text', 'Generate&Edit']
    },
    hover: {
      icon: images.icons.icon14,
      title: 'CODE WEAVER',
      subtitle: 'DBAI0000020',
      descriptions: ['THIS IS A PROGRAMMING ASSISTANT AI WORKFLOW'],
      buttons: ['Code', 'Computing', 'Text', 'Generate&Edit']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 3, Col 5: PRIME CORE (DBAI0000001)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon15,
      title: 'PRIME CORE',
      subtitle: 'DBAI0000001',
      descriptions: ['THIS IS A CPU COMPUTE AI TOOL'],
      buttons: ['Table', 'Computing', 'CPU', 'Optimize']
    },
    hover: {
      icon: images.icons.icon15,
      title: 'PRIME CORE',
      subtitle: 'DBAI0000001',
      descriptions: ['THIS IS A CPU COMPUTE AI TOOL'],
      buttons: ['Table', 'Computing', 'CPU', 'Optimize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 4, Col 1: COMPANIO (DBAI0000027)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon16,
      title: 'COMPANIO',
      subtitle: 'DBAI0000027',
      descriptions: ['THIS IS A DIGITAL COMPANION AI AGENT'],
      buttons: ['  Chart', '     Architecture', 'Text', '   Generate&Edit']
    },
    hover: {
      icon: images.icons.icon16,
      title: 'COMPANIO',
      subtitle: 'DBAI0000027',
      descriptions: ['THIS IS A      Architecture AI AGENT'],
      buttons: ['  Chart', 'Digital Companion', 'Text', '   Generate&Edit']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 4, Col 2: ARCHI PILOT (DBAI0000019)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon17,
      title: 'ARCHI PILOT',
      subtitle: 'DBAI0000019',
      descriptions: ['THIS IS AN ARCHITECTURAL DESIGN AI WORKFLOW'],
      buttons: ['Chart', 'Architecture', 'Text', 'Generate&Edit']
    },
    hover: {
      icon: images.icons.icon17,
      title: 'ARCHI PILOT',
      subtitle: 'DBAI0000019',
      descriptions: ['THIS IS AN ARCHITECTURAL DESIGN AI WORKFLOW'],
      buttons: ['Chart', 'Architecture', 'Text', 'Generate&Edit']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 4, Col 3: ECHO MIND (DBAI0000005)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon18,
      title: 'ECHO MIND',
      subtitle: 'DBAI0000005',
      descriptions: ['THIS IS AN AUDIO FOUNDATION AI MODEL'],
      buttons: ['Audio', 'Generate', 'Code', 'Computing']
    },
    hover: {
      icon: images.icons.icon18,
      title: 'ECHO MIND',
      subtitle: 'DBAI0000005',
      descriptions: ['THIS IS AN AUDIO FOUNDATION AI MODEL'],
      buttons: ['Audio', 'Generate', 'Code', 'Computing']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 4, Col 4: TRIP MATE (DBAI0000024)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon19,
      title: 'TRIP MATE',
      subtitle: 'DBAI0000024',
      descriptions: ['THIS IS A TRAVEL PLANNING AI AGENT'],
      buttons: ['Travel', 'Multimodality', 'Text', 'Summarize']
    },
    hover: {
      icon: images.icons.icon19,
      title: 'TRIP MATE',
      subtitle: 'DBAI0000024',
      descriptions: ['THIS IS A TRAVEL PLANNING AI AGENT'],
      buttons: ['Travel', 'Multimodality', 'Text', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 4, Col 5: KID LEARN (DBAI0000030)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon20,
      title: 'KID LEARN',
      subtitle: 'DBAI0000030',
      descriptions: ['THIS IS AN EARLY EDUCATION AI AGENT'],
      buttons: ['Text', 'Early Education', 'Teach', 'Explain']
    },
    hover: {
      icon: images.icons.icon20,
      title: 'KID LEARN',
      subtitle: 'DBAI0000030',
      descriptions: ['THIS IS AN EARLY EDUCATION AI AGENT'],
      buttons: ['Text', 'Early Education', 'Teach', 'Explain']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 5, Col 1: PET BOT (DBAI0000029)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon21,
      title: 'PET BOT',
      subtitle: 'DBAI0000029',
      descriptions: ['THIS IS A VIRTUAL PET AI AGENT'],
      buttons: ['Audio', 'Virtual Pet', 'Text', 'Generate&Explain']
    },
    hover: {
      icon: images.icons.icon21,
      title: 'PET BOT',
      subtitle: 'DBAI0000029',
      descriptions: ['THIS IS A VIRTUAL PET AI AGENT'],
      buttons: ['Audio', 'Virtual Pet', 'Text', 'Generate&Explain']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 5, Col 2: ART REFER (DBAI0000013) - 重复项
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon22,
      title: 'ART REFER',
      subtitle: 'DBAI0000013',
      descriptions: ['THIS IS AN ART INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Art&Culture', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon22,
      title: 'ART REFER',
      subtitle: 'DBAI0000013',
      descriptions: ['THIS IS AN ART INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Art&Culture', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 5, Col 3: STYLE CRAFT (DBAI0000028)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon23,
      title: 'STYLE CRAFT',
      subtitle: 'DBAI0000028',
      descriptions: ['THIS IS A STYLING ASSISTANT AI AGENT'],
      buttons: ['Image', 'Styling', 'Text', 'Generate&Classify']
    },
    hover: {
      icon: images.icons.icon23,
      title: 'STYLE CRAFT',
      subtitle: 'DBAI0000028',
      descriptions: ['THIS IS A STYLING ASSISTANT AI AGENT'],
      buttons: ['Image', 'Styling', 'Text', 'Generate&Classify']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 5, Col 4: STAR SAGE (DBAI0000022)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon24,
      title: 'STAR SAGE',
      subtitle: 'DBAI0000022',
      descriptions: ['THIS IS AN ASTROLOGY ASSISTANT AI AGENT'],
      buttons: ['Emotion', 'Divination', 'Text', 'Analyze&Predict']
    },
    hover: {
      icon: images.icons.icon24,
      title: 'STAR SAGE',
      subtitle: 'DBAI0000022',
      descriptions: ['THIS IS AN ASTROLOGY ASSISTANT AI AGENT'],
      buttons: ['Emotion', 'Divination', 'Text', 'Analyze&Predict']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 5, Col 5: VOCA BBRIDGE (DBAI0000023)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon25,
      title: 'VOCA BBRIDGE',
      subtitle: 'DBAI0000023',
      descriptions: ['THIS IS A SPEECH TRANSLATION AI AGENT'],
      buttons: ['Audio', 'Translation', 'Speech', 'Understand&Dialogue']
    },
    hover: {
      icon: images.icons.icon25,
      title: 'VOCA BBRIDGE',
      subtitle: 'DBAI0000023',
      descriptions: ['THIS IS A SPEECH TRANSLATION AI AGENT'],
      buttons: ['Audio', 'Translation', 'Speech', 'Understand&Dialogue']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 6, Col 1: SOUND FORGE (DBAI0000015)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon26,
      title: 'SOUND FORGE',
      subtitle: 'DBAI0000015',
      descriptions: ['THIS IS AN AUDIO CREATION AI WORKFLOW'],
      buttons: ['Audio', 'Entertainment', 'Text', 'Generate&Edit']
    },
    hover: {
      icon: images.icons.icon26,
      title: 'SOUND FORGE',
      subtitle: 'DBAI0000015',
      descriptions: ['THIS IS AN AUDIO CREATION AI WORKFLOW'],
      buttons: ['Audio', 'Entertainment', 'Text', 'Generate&Edit']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 6, Col 2: SPORT CUE (DBAI0000010)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon27,
      title: 'SPORT CUE',
      subtitle: 'DBAI0000010',
      descriptions: ['THIS IS A SPORTS INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Entertainment', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon27,
      title: 'SPORT CUE',
      subtitle: 'DBAI0000010',
      descriptions: ['THIS IS A SPORTS INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Entertainment', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 6, Col 3: FIN PILOT (DBAI0000026)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon28,
      title: 'FIN PILOT',
      subtitle: 'DBAI0000026',
      descriptions: ['THIS IS A FINANCIAL ANALYSIS AI AGENT'],
      buttons: ['Text', 'Data,Chart', 'Finance','Analyze&Predict']
    },
    hover: {
      icon: images.icons.icon28,
      title: 'FIN PILOT',
      subtitle: 'DBAI0000026',
      descriptions: ['THIS IS A FINANCIAL ANALYSIS AI AGENT'],
      buttons: ['Text', 'Data,Chart', 'Finance','Analyze&Predict']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 6, Col 4: MEDI PROMPT (DBAI0000007)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon29,
      title: 'MEDI PROMPT',
      subtitle: 'DBAI0000007',
      descriptions: ['THIS IS A MEDICAL INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Biomedical', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon29,
      title: 'MEDI PROMPT',
      subtitle: 'DBAI0000007',
      descriptions: ['THIS IS A MEDICAL INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Biomedical', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  },
  // Row 6, Col 5: LEX GUIDE (DBAI0000006)
  {
    backgroundImage: images.background,
    hoverColor: '#083FD8',
    clickColor: '#CB2C22',
    initial: {
      icon: images.icons.icon30,
      title: 'LEX GUIDE',
      subtitle: 'DBAI0000006',
      descriptions: ['THIS IS A LEGAL INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Law', 'Data', 'Summarize']
    },
    hover: {
      icon: images.icons.icon30,
      title: 'LEX GUIDE',
      subtitle: 'DBAI0000006',
      descriptions: ['THIS IS A LEGAL INSTRUCTION AI DATASET'],
      buttons: ['Text', 'Law', 'Data', 'Summarize']
    },
    clicked: {
      icon: images.clickedIcon,
      title: 'FrameFlow',
      subtitle: 'DBAI0000017',
      dataCards: [
        {
          label: texts.dataCardLabels.revenue24h,
          value: '$6,550,521',
          buttonText: texts.dataCardButtons.details
        },
        {
          label: texts.dataCardLabels.marketCap,
          value: '$76,144,900',
          buttonText: texts.dataCardButtons.share
        },
        {
          label: texts.dataCardLabels.totalUsers,
          value: '2,110,977',
          buttonText: texts.dataCardButtons.market
        },
        {
          label: texts.dataCardLabels.userRating,
          value: '',
          buttonText: texts.dataCardButtons.favorites,
          rating: 4
        }
      ]
    }
  }
]
