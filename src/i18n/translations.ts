export type Locale = 'zh-CN' | 'en-US';

interface Translations {
  [key: string]: {
    [locale in Locale]: string;
  };
}

// 所有翻译文本
export const translations: Translations = {
  // 通用文本
  'app.name': {
    'zh-CN': 'AI卡片生成器',
    'en-US': 'AI Card Generator',
  },
  'app.tagline': {
    'zh-CN': '使用AI卡片生成器，快速制作出令人惊叹的卡片。',
    'en-US': 'Use AI Card Generator to quickly create stunning cards.',
  },
  'app.description': {
    'zh-CN': '让AI卡片生成器助您一臂之力，发送令人难忘的卡片给您的亲友客户。只需在下面文字框中描述完美卡片，然后观看系统为您生成的专属模板。专为商业安全而设计。',
    'en-US': 'Let the AI Card Generator help you send memorable cards to your friends, family, and customers. Just describe your perfect card in the text box below, then watch as the system generates a customized template for you. Designed for business security.',
  },

  // 主页内容
  'home.title.start': {
    'zh-CN': '使用',
    'en-US': 'Use',
  },
  'home.title.end': {
    'zh-CN': '卡片生成器，快速制作出令人惊叹的卡片。',
    'en-US': 'Card Generator to quickly create stunning cards.',
  },

  // 卡片生成器
  'generator.placeholder': {
    'zh-CN': '描述您想生成的内容...',
    'en-US': 'Describe what you want to generate...',
  },
  'generator.button.generate': {
    'zh-CN': '现在生成',
    'en-US': 'Generate Now',
  },
  'generator.button.generating': {
    'zh-CN': '正在生成...',
    'en-US': 'Generating...',
  },
  'generator.examples': {
    'zh-CN': '试试看',
    'en-US': 'Try these',
  },
  'generator.styleSelect': {
    'zh-CN': '选择风格:',
    'en-US': 'Select Style:',
  },
  'generator.error': {
    'zh-CN': '生成卡片时发生错误，请稍后再试',
    'en-US': 'An error occurred while generating cards. Please try again later.',
  },

  // 风格
  'style.modern': {
    'zh-CN': '现代简约',
    'en-US': 'Modern Minimalist',
  },
  'style.elegant': {
    'zh-CN': '华丽复古',
    'en-US': 'Elegant Vintage',
  },
  'style.natural': {
    'zh-CN': '自然有机',
    'en-US': 'Natural Organic',
  },
  'style.business': {
    'zh-CN': '商务正式',
    'en-US': 'Business Formal',
  },

  // 卡片网格
  'cardGrid.title': {
    'zh-CN': '您的AI生成卡片',
    'en-US': 'Your AI-Generated Cards',
  },
  'cardGrid.button.useTemplate': {
    'zh-CN': '使用此模板',
    'en-US': 'Use This Template',
  },
  'cardGrid.button.download': {
    'zh-CN': '下载',
    'en-US': 'Download',
  },
  'cardGrid.button.regenerate': {
    'zh-CN': '重新生成',
    'en-US': 'Regenerate',
  },
  'cardGrid.downloadAlert': {
    'zh-CN': '下载卡片',
    'en-US': 'Download card',
  },

  // 卡片预览
  'cardPreview.sampleImage': {
    'zh-CN': '示例卡片',
    'en-US': 'Sample Card',
  },
  'cardPreview.prompt': {
    'zh-CN': '提示词',
    'en-US': 'Prompt',
  },
  'cardPreview.close': {
    'zh-CN': '关闭',
    'en-US': 'Close',
  },
  'cardPreview.viewLarger': {
    'zh-CN': '查看大图',
    'en-US': 'View Larger',
  },
  'cardPreview.zoomIn': {
    'zh-CN': '放大',
    'en-US': 'Zoom In',
  },
  'cardPreview.zoomOut': {
    'zh-CN': '缩小',
    'en-US': 'Zoom Out',
  },

  // 卡片编辑器
  'editor.title': {
    'zh-CN': '编辑您的卡片',
    'en-US': 'Edit Your Card',
  },
  'editor.button.back': {
    'zh-CN': '返回',
    'en-US': 'Back',
  },
  'editor.selected': {
    'zh-CN': '您选择了',
    'en-US': 'You selected',
  },
  'editor.styleCard': {
    'zh-CN': '风格的卡片',
    'en-US': 'style card',
  },
  'editor.templateDesc': {
    'zh-CN': '模板描述:',
    'en-US': 'Template Description:',
  },
  'editor.button.save': {
    'zh-CN': '保存卡片',
    'en-US': 'Save Card',
  },
  'editor.button.download': {
    'zh-CN': '下载卡片',
    'en-US': 'Download Card',
  },
  'editor.placeholder.line1': {
    'zh-CN': '这里将显示卡片编辑器界面，但在此简化版本中省略了。',
    'en-US': 'Card editor interface would be shown here, but is omitted in this simplified version.',
  },
  'editor.placeholder.line2': {
    'zh-CN': '实际项目中，可以集成完整的编辑功能或跳转到专门的编辑页面。',
    'en-US': 'In the actual project, you can integrate a complete editing feature or redirect to a dedicated editing page.',
  },
  'editor.cardContent': {
    'zh-CN': '卡片内容',
    'en-US': 'Card Content',
  },
  'editor.textPlaceholder': {
    'zh-CN': '在此输入卡片文字...',
    'en-US': 'Enter card text here...',
  },
  'editor.textFormatting': {
    'zh-CN': '文字格式',
    'en-US': 'Text Formatting',
  },
  'editor.textColor': {
    'zh-CN': '文字颜色',
    'en-US': 'Text Color',
  },
  'editor.fontSize': {
    'zh-CN': '字体大小',
    'en-US': 'Font Size',
  },
  'editor.preview': {
    'zh-CN': '预览',
    'en-US': 'Preview',
  },
  'editor.tip': {
    'zh-CN': '提示:',
    'en-US': 'Tip:',
  },
  'editor.tipText': {
    'zh-CN': '您可以上传自己的背景图片，并调整文字的颜色和大小来创建完美的卡片。',
    'en-US': 'You can upload your own background image and adjust text color and size to create the perfect card.',
  },
  'editor.downloadError': {
    'zh-CN': '下载卡片时出错，请重试',
    'en-US': 'Error downloading card, please try again',
  },
  'editor.saveError': {
    'zh-CN': '保存卡片时出错，请重试',
    'en-US': 'Error saving card, please try again',
  },
  'editor.saveSuccess': {
    'zh-CN': '卡片配置已成功保存',
    'en-US': 'Card configuration saved successfully',
  },
  'editor.downloading': {
    'zh-CN': '正在下载...',
    'en-US': 'Downloading...',
  },
  'editor.saving': {
    'zh-CN': '正在保存...',
    'en-US': 'Saving...',
  },
  'editor.cardText': {
    'zh-CN': '卡片文字',
    'en-US': 'Card Text',
  },
  'editor.textAlign': {
    'zh-CN': '文字对齐',
    'en-US': 'Text Alignment',
  },
  'editor.alignLeft': {
    'zh-CN': '左对齐',
    'en-US': 'Left',
  },
  'editor.alignCenter': {
    'zh-CN': '居中',
    'en-US': 'Center',
  },
  'editor.alignRight': {
    'zh-CN': '右对齐',
    'en-US': 'Right',
  },
  'editor.uploadImage': {
    'zh-CN': '上传背景图片',
    'en-US': 'Upload Background Image',
  },
  'editor.download': {
    'zh-CN': '下载卡片',
    'en-US': 'Download Card',
  },
  'editor.saveConfig': {
    'zh-CN': '保存配置',
    'en-US': 'Save Config',
  },
  'editor.cancel': {
    'zh-CN': '取消',
    'en-US': 'Cancel',
  },

  // 图片上传
  'imageUploader.title': {
    'zh-CN': '上传背景图片',
    'en-US': 'Upload Background Image',
  },
  'imageUploader.dragAndDrop': {
    'zh-CN': '拖放图片到这里，或点击浏览',
    'en-US': 'Drag and drop an image here, or click to browse',
  },
  'imageUploader.browseFiles': {
    'zh-CN': '选择文件',
    'en-US': 'Browse Files',
  },
  'imageUploader.changeImage': {
    'zh-CN': '更换图片',
    'en-US': 'Change Image',
  },
  'imageUploader.removeImage': {
    'zh-CN': '移除图片',
    'en-US': 'Remove Image',
  },
  'imageUploader.uploadedImage': {
    'zh-CN': '已上传的图片',
    'en-US': 'Uploaded Image',
  },
  'imageUploader.supportedFormats': {
    'zh-CN': '支持的格式: JPG, PNG, GIF (最大 5MB)',
    'en-US': 'Supported formats: JPG, PNG, GIF (max 5MB)',
  },
  'imageUploader.invalidFileType': {
    'zh-CN': '文件类型无效，请上传图片文件',
    'en-US': 'Invalid file type. Please upload an image file.',
  },
  'imageUploader.fileTooLarge': {
    'zh-CN': '文件太大，最大支持5MB',
    'en-US': 'File is too large. Maximum size is 5MB.',
  },
  'imageUploader.uploadSuccess': {
    'zh-CN': '图片上传成功',
    'en-US': 'Image uploaded successfully',
  },

  // 使用方法部分
  'howToUse.title': {
    'zh-CN': '如何使用',
    'en-US': 'How To Use',
  },
  'howToUse.step1.title': {
    'zh-CN': '描述您的卡片',
    'en-US': 'Describe Your Card',
  },
  'howToUse.step1.description': {
    'zh-CN': '使用简单的文本提示告诉AI您想要创建什么样的卡片',
    'en-US': 'Tell our AI what kind of card you want to create with a simple text prompt',
  },
  'howToUse.step2.title': {
    'zh-CN': '选择风格',
    'en-US': 'Choose a Style',
  },
  'howToUse.step2.description': {
    'zh-CN': '从各种艺术风格中选择，以匹配场合和氛围',
    'en-US': 'Select from various artistic styles to match the mood and occasion',
  },
  'howToUse.step3.title': {
    'zh-CN': '下载和分享',
    'en-US': 'Download & Share',
  },
  'howToUse.step3.description': {
    'zh-CN': '获取高质量JPG图片格式的卡片，随时可供打印或数字分享',
    'en-US': 'Get your card as a high-quality JPG image ready to print or share digitally',
  },

  // 商业特性部分
  'businessFeatures.title': {
    'zh-CN': '为商业安全设计的AI卡片生成器',
    'en-US': 'AI Card Generator Designed for Business Security',
  },
  'businessFeatures.feature1.title': {
    'zh-CN': '商业安全',
    'en-US': 'Business Security',
  },
  'businessFeatures.feature1.description': {
    'zh-CN': '所有生成的内容均适用于商业用途，无需担心版权和许可问题',
    'en-US': 'All generated content is suitable for commercial use, with no concerns about copyright and licensing issues',
  },
  'businessFeatures.feature2.title': {
    'zh-CN': '多样化设计',
    'en-US': 'Diverse Designs',
  },
  'businessFeatures.feature2.description': {
    'zh-CN': '从简约到华丽，从现代到经典，满足不同企业和场合的需求',
    'en-US': 'From minimalist to ornate, modern to classic, meeting the needs of different businesses and occasions',
  },
  'businessFeatures.feature3.title': {
    'zh-CN': '高效创作',
    'en-US': 'Efficient Creation',
  },
  'businessFeatures.feature3.description': {
    'zh-CN': '节省设计时间和成本，几秒钟内生成专业质量的卡片设计',
    'en-US': 'Save design time and costs, generating professional quality card designs in just seconds',
  },

  // FAQ部分
  'faq.title': {
    'zh-CN': '常见问题',
    'en-US': 'Frequently Asked Questions',
  },
  'faq.question1': {
    'zh-CN': 'AI卡片生成器是否专为安全商业使用而设计？',
    'en-US': 'Is the AI Card Generator designed for secure commercial use?',
  },
  'faq.answer1': {
    'zh-CN': '是的，我们的卡片模板生成器专为商业安全和商业使用而设计。',
    'en-US': 'Absolutely, our card template generator is specifically designed for business security and commercial use.',
  },
  'faq.question2': {
    'zh-CN': '什么是AI卡片生成器？',
    'en-US': 'What is AI Card Generator?',
  },
  'faq.answer2': {
    'zh-CN': 'AI卡片生成器是一种生成式AI技术，允许您仅使用描述性提示来创建各种模板。',
    'en-US': 'AI Card Generator is a generative AI technology that allows you to create various templates using just descriptive prompts.',
  },
  'faq.question3': {
    'zh-CN': '如何最有效地使用AI卡片生成器？',
    'en-US': 'How can I most effectively use the AI Card Generator?',
  },
  'faq.answer3': {
    'zh-CN': '您的提示越具体，您就能获得更匹配您需求的卡片模板选项。在提示中包含您想要的风格、行业或主题将产生更好的结果。',
    'en-US': 'The more specific your prompt is, the better card template options you\'ll get that match your needs. Including the style you want, your industry, or theme in your prompt will yield better results.',
  },
  'faq.question4': {
    'zh-CN': '标准卡片尺寸是多少？',
    'en-US': 'What are the standard card dimensions?',
  },
  'faq.answer4': {
    'zh-CN': '我们的卡片模板自动调整为5 x 7英寸，这是标准卡片尺寸。如果需要，请使用调整大小功能输入您的自定义尺寸。',
    'en-US': 'Our card templates automatically adjust to 5 x 7 inches, which is the standard card size. Use the resize feature to input your custom dimensions if needed.',
  },
  'faq.question5': {
    'zh-CN': '如何自定义生成的卡片？',
    'en-US': 'How can I customize the generated cards?',
  },
  'faq.answer5': {
    'zh-CN': '生成卡片后，您可以选择"使用此模板"，然后添加自己的文本、更改字体大小和颜色，甚至上传自己的背景图片。',
    'en-US': 'After generating a card, you can select "Use This Template" and then add your own text, change font size and color, and even upload your own background image.',
  },

  // 生成的卡片
  'cards.generated': {
    'zh-CN': '生成的卡片',
    'en-US': 'Generated Cards',
  },
};

// 用于获取翻译的函数
export function t(key: string, locale: Locale = 'en-US'): string {
  // 检查key是否存在
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  // 如果指定的语言版本不存在，则回退到英文
  if (!translations[key][locale]) {
    console.warn(`Translation for key ${key} in locale ${locale} not found, falling back to English`);
    return translations[key]['en-US'] || key;
  }
  
  return translations[key][locale];
}

// 示例提示的翻译
export const examplePrompts: { [locale in Locale]: string[] } = {
  'zh-CN': [
    '公司节日贺卡',
    '现代简约风格感谢卡',
    '生日派对邀请函',
    '工作周年纪念卡',
    '同事生日祝福卡',
    '感谢顾客支持的卡片',
  ],
  'en-US': [
    'Company Holiday Card',
    'Modern Minimalist Thank You Card',
    'Birthday Party Invitation',
    'Work Anniversary Card',
    'Colleague Birthday Card',
    'Customer Appreciation Card',
  ],
}; 