/**
 * 将指定DOM元素导出为图片并下载
 * 使用html2canvas库将DOM元素转换为canvas，然后导出为图片
 * 
 * @param elementId 要导出的DOM元素ID
 * @param fileName 下载的文件名
 */
export const downloadCardAsImage = async (elementId: string, fileName: string = 'card'): Promise<void> => {
  try {
    // 实际执行图片下载
    const html2canvas = (await import('html2canvas')).default;
    
    const element = document.getElementById(elementId);       
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }
    
    // 创建canvas
    const canvas = await html2canvas(element, {
      allowTaint: true,
      useCORS: true,
      scale: 2, // 更高的分辨率
      backgroundColor: null, // 保持透明背景
      logging: false,
    });
    
    // 转换为图片 - 使用JPG格式代替PNG
    const image = canvas.toDataURL('image/jpeg', 0.9); // 使用90%的质量
    
    // 创建下载链接
    const link = document.createElement('a');
    link.download = `${fileName}.jpg`; // 使用.jpg扩展名
    link.href = image;
    link.click();
    
  } catch (error) {
    console.error('Download failed:', error);
    alert('Failed to download image. Please try again.');
  }
};

/**
 * 将卡片保存为JSON格式，供后续编辑
 * @param cardData 卡片数据
 * @param fileName 下载的文件名
 */
export const saveCardAsJSON = (cardData: any, fileName: string = 'card_config'): void => {
  try {
    const dataStr = JSON.stringify(cardData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const link = document.createElement('a');
    link.download = `${fileName}.json`;
    link.href = dataUri;
    link.click();
  } catch (error) {
    console.error('保存卡片配置时出错:', error);
    throw error;
  }
}; 