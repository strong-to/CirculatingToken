/**
 * 从 public 目录加载文案的 Hook
 * 服务端使用默认值，客户端 hydration 后从 public 目录异步加载最新数据
 * 始终优先展示 public 目录的数据
 */

import { useState, useEffect } from 'react';
import { texts as defaultTexts } from './resources';

export function useTexts() {
  const [texts, setTexts] = useState(defaultTexts);

  useEffect(() => {
    // 客户端 hydration 后，从 public 目录异步加载最新数据
    // 添加时间戳和禁用缓存，确保获取最新数据
    const loadTexts = async () => {
      try {
        const timestamp = Date.now();
        const response = await fetch(`/launchpad/stepTwo/text/texts.json?t=${timestamp}`, {
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
        setTexts(data);
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

