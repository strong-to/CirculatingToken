// ChatContent 卡片数据配置 - 30个条目（按图2的5行6列顺序）
export interface ChatContentCardData {
  title: string
  subtitle: string // DBAI ID
  buttons: string[] // 最多4个按钮
  descriptions: string[] // 描述文本，通常2行
}

export const chatContentData: ChatContentCardData[] = [
  // Row 1
  {
    title: 'ATMO SET',
    subtitle: 'DBAI0000009',
    buttons: ['Text', 'Meteorology', 'Summarize', 'Data'],
    descriptions: ['THIS IS A METEOROLOGY', 'INSTRUCTION AI DATASET.']
  },
  {
    title: 'CODE WEAVER',
    subtitle: 'DBAI0000020',
    buttons: ['Code', 'Computing', 'Generate&Edit', 'Text'],
    descriptions: ['THIS IS A PRROGRAMMING', 'ASSISTANT AI WORKFLOW.']
  },
  {
    title: 'FRAME FLOW',
    subtitle: 'DBAI0000017',
    buttons: ['Details', 'Share', 'Market', 'Favorites'],
    descriptions: ['THIS IS A VIDEO', 'CREATION AI WORKFLOW.']
  },
  {
    title: 'ECHO MIND',
    subtitle: 'DBAI0000005',
    buttons: ['Audio', 'Generate', 'Computing', 'Code'],
    descriptions: ['THIS IS AN AUDIO', 'FOUNDATION AI MODEL.']
  },
  {
    title: 'TENSOR GRID',
    subtitle: 'DBAI0000002',
    buttons: ['Table', 'Computing', 'Optimize', 'GPU'],
    descriptions: ['THIS IS A GPU COMPUTE AI', 'TOOL.']
  },
  {
    title: 'MEDI PROMPT',
    subtitle: 'DBAI0000007',
    buttons: ['Text', 'Biomedical', 'Summarize', 'Data'],
    descriptions: ['THIS IS A MEDICAL', 'INSTRUCTION AI DATASET.']
  },
  // Row 2
  {
    title: 'LEX GUIDE',
    subtitle: 'DBAI0000006',
    buttons: ['Text', 'Document', 'Summarize', 'Law'],
    descriptions: ['THIS IS A LEGAL INSTRUCTION', 'AI DATASET.']
  },
  {
    title: 'PRIME CORE',
    subtitle: 'DBAI0000001',
    buttons: ['Table', 'Computing', 'Optimize', 'CPU'],
    descriptions: ['THIS IS A CPU COMPUTE', 'AI TOOL.']
  },
  {
    title: 'EDU FORM',
    subtitle: 'DBAI0000012',
    buttons: ['Text', 'Education', 'Summarize', 'Data'],
    descriptions: ['THIS IS EDUCATION', 'INSTRUCTION AI DATASET.']
  },
  {
    title: 'STAR SAGE',
    subtitle: 'DBAI0000022',
    buttons: ['Emotion', 'Divination', 'Analyze', 'Predict'],
    descriptions: ['THIS IS AN ASTROLOGY', 'ASSISTANT AI AGENT.']
  },
  {
    title: 'ECONOSET',
    subtitle: 'DBAI0000011',
    buttons: ['Text', 'Markets & Trade', 'Summarize', 'Data'],
    descriptions: ['THIS IS AN ECONOMIC', 'INSTRUCTION AI DATASET.']
  },
  {
    title: 'TRANSIT FLOW',
    subtitle: 'DBAI0000008',
    buttons: ['Text', 'Transportation', 'Summarize', 'Data'],
    descriptions: ['THIS IS A TRANSPORTATION', 'INSTRUCTION AI DATASET.']
  },
  // Row 3
  {
    title: 'WELL GUIDE',
    subtitle: 'DBAI0000025',
    buttons: ['Data', 'Healthcare', 'Analyze', 'Explain'],
    descriptions: ['THIS IS A HEALTH GUIDANCE', 'AI AGENT.']
  },
  {
    title: 'ART REFER',
    subtitle: 'DBAI0000013',
    buttons: ['Text', 'Art&Culture', 'Summarize', 'Data'],
    descriptions: ['THIS IS AN ART INSTRUCTION', 'AI DATASET.']
  },
  {
    title: 'SPORT CUE',
    subtitle: 'DBAI0000010',
    buttons: ['Text', 'Entertainment', 'Summarize', 'Data'],
    descriptions: ['THIS IS A SPORTS', 'INSTRUCTION AI DATASET.']
  },
  {
    title: 'VERBA',
    subtitle: 'DBAI0000003',
    buttons: ['Text', 'Generate', 'Computing', 'Code'],
    descriptions: ['THIS IS A LANGUAGE', 'FOUNDATION AI MODEL.']
  },
  {
    title: 'TRIP MATE',
    subtitle: 'DBAI0000024',
    buttons: ['Travel', 'Multimodality', 'Summarize', 'Text'],
    descriptions: ['THIS IS A TRAVEL PLANNING', 'AI AGENT.']
  },
  {
    title: 'INDUS DRAFT',
    subtitle: 'DBAI0000018',
    buttons: ['Chart', 'Manufacturing', 'Generate&Edit', 'Text'],
    descriptions: ['THIS IS AN INDUSTRIAL DESIGN', 'AI WORKFLOW.']
  },
  // Row 4
  {
    title: 'PET BOT',
    subtitle: 'DBAI0000029',
    buttons: ['Audio', 'Virtual Pet', 'Generate', 'Explain'],
    descriptions: ['THIS IS A VIRTUAL', 'PET AI AGENT.']
  },
  {
    title: 'SPECTRA',
    subtitle: 'DBAI0000004',
    buttons: ['Image', 'Generate', 'Computing', 'Code'],
    descriptions: ['THIS IS A VISION', 'FOUNDATION AI MODEL.']
  },
  {
    title: 'SOUND FORGE',
    subtitle: 'DBAI0000015',
    buttons: ['Audio', 'Entertainment', 'Generate&Edit', 'Text'],
    descriptions: ['THIS IS AN AUDIO CREATION', 'AI WORKFLOW.']
  },
  {
    title: 'RES LAB SET',
    subtitle: 'DBAI0000014',
    buttons: ['Text', 'Research&Science', 'Summarize', 'Data'],
    descriptions: ['THIS IS A SCIENTIFIC', 'INSTRUCTION AI DATASET.']
  },
  {
    title: 'PIXEL STREAM',
    subtitle: 'DBAI0000016',
    buttons: ['Image', 'Entertainment', 'Generate&Edit', 'Text'],
    descriptions: ['THIS IS AN IMAGE', 'CREATION AI WORKFLOW.']
  },
  {
    title: 'FIN PILOT',
    subtitle: 'DBAI0000026',
    buttons: ['Text', 'Data', 'Chart', 'Analyze'],
    descriptions: ['THIS IS A FINANCIAL', 'ANALYSIS AI AGENT.']
  },
  // Row 5
  {
    title: 'COMPANIO',
    subtitle: 'DBAI0000027',
    buttons: ['Dialogue', 'Digital Companion', 'Entertainment', 'Emotion'],
    descriptions: ['THIS IS A DIGITAL', 'COMPANION AI AGENT.']
  },
  {
    title: 'ARCHI PILOT',
    subtitle: 'DBAI0000019',
    buttons: ['Chart', 'Architecture', 'Generate&Edit', 'Text'],
    descriptions: ['THIS IS AN ARCHITECTURAL', 'DESIGN AI WORKFLOW.']
  },
  {
    title: 'QUANT LOOP',
    subtitle: 'DBAI0000021',
    buttons: ['Data', 'Markets & Trade', 'Predict', 'Analyze'],
    descriptions: ['THIS IS A QUANTITATIVE', 'TRADING AI WORKFLOW.']
  },
  {
    title: 'KID LEARN',
    subtitle: 'DBAI0000030',
    buttons: ['Text', 'Early Education', 'Teach', 'Explain'],
    descriptions: ['THIS IS AN EARLY', 'EDUCATION AI AGENT.']
  },
  {
    title: 'VOCA BBRIDGE',
    subtitle: 'DBAI0000023',
    buttons: ['Audio', 'Translation', 'Understand', 'Dialogue'],
    descriptions: ['THIS IS A SPEECH', 'TRANSLATION AI AGENT.']
  },
  {
    title: 'STYLE CRAFT',
    subtitle: 'DBAI0000028',
    buttons: ['Image', 'Styling', 'Generate', 'Classify'],
    descriptions: ['THIS IS A STYLING', 'ASSISTANT AI AGENT.']
  }
]

