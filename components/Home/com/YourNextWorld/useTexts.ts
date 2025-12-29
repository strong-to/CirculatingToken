/**
 * 从 public 目录加载文案的 Hook
 * 服务端使用默认值，客户端 hydration 后从 public 目录异步加载最新数据
 * 始终优先展示 public 目录的数据
 */

import { useState, useEffect } from 'react';
import { texts as defaultTexts } from './resources';
import { CDN_PREFIX } from '@/utils/cdn';

const TEXTS_URL = `${CDN_PREFIX}/home/YourNextWorld/text/texts.json`;

export function useTexts() {
  const [texts, setTexts] = useState(defaultTexts);

  useEffect(() => {
    // 客户端 hydration 后，从 public 目录异步加载最新数据
    // 添加时间戳和禁用缓存，确保获取最新数据
    const loadTexts = async () => {
      try {
        const timestamp = Date.now();
        const response = await fetch(`${TEXTS_URL}?t=${timestamp}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        // 将 JSON 数据转换为与 resources.ts 中 texts 对象相同的格式
        setTexts({
          mainTitle: typeof data.mainTitle === 'object' && data.mainTitle !== null
            ? {
                line1: data.mainTitle.line1 || defaultTexts.mainTitle.line1,
                line2: data.mainTitle.line2 || defaultTexts.mainTitle.line2,
              }
            : defaultTexts.mainTitle,
          buttonViewMore: data.buttonViewMore || defaultTexts.buttonViewMore,
          buttonLaunch: data.buttonLaunch || defaultTexts.buttonLaunch,
          buttonLaunchProject: data.buttonLaunch || data.buttonLaunchProject || defaultTexts.buttonLaunchProject,
          linkLearnMore: data.linkLearnMore || defaultTexts.linkLearnMore,
          cardDatasets: data.cardDatasets || defaultTexts.cardDatasets,
          cardComputePool: data.cardComputePool || defaultTexts.cardComputePool,
          cardFoundationalModels: data.cardFoundationalModels || defaultTexts.cardFoundationalModels,
          cardWorkflows: data.cardWorkflows || defaultTexts.cardWorkflows,
          cardAiAgents: data.cardAiAgents || defaultTexts.cardAiAgents,
        });
      } catch (error) {
        console.warn('无法从 public 目录加载最新文案，使用默认值', error);
      }
    };
    
    // 立即加载一次
    loadTexts();
    
    // 如果页面可见，每 2 秒检查一次更新（开发模式）
    if (process.env.NODE_ENV === 'development') {
      const interval = setInterval(() => {
        if (document.visibilityState === 'visible') {
          loadTexts();
        }
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, []);

  return texts;
}
