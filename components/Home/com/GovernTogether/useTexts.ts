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
    fetch(`/home/GovernTogether/text/texts.json?t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setTexts(data);
      })
      .catch(error => {
        console.warn('无法从 public 目录加载最新文案，使用默认值', error);
      });
  }, []);

  return texts;
}

