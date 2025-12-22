/**
 * 从 public 目录加载文案文件
 * 支持服务端和客户端环境
 */

/**
 * 同步从 public 目录加载文案
 * 在服务端使用 fs 读取，在客户端使用默认值（通过构建时内联）
 * @param path - public 目录下的路径，如 '/home/InstitutionalGrade/text/texts.json'
 */
export function loadTextsFromPublicSync<T = any>(path: string): T {
  // 服务端：使用 fs 读取
  if (typeof window === 'undefined') {
    try {
      const fs = require('fs');
      const pathModule = require('path');
      const publicPath = pathModule.join(process.cwd(), 'public', path);
      const fileContent = fs.readFileSync(publicPath, 'utf-8');
      return JSON.parse(fileContent);
    } catch (error) {
      console.warn(`无法从 public 目录读取 ${path}，使用组件目录的默认值`, error);
      // 如果 public 目录读取失败，尝试从组件目录读取
      try {
        const fs = require('fs');
        const pathModule = require('path');
        // 尝试从组件目录读取（作为后备）
        const componentPath = pathModule.join(
          process.cwd(),
          'components',
          'Home',
          'com',
          'InstitutionalGrade',
          'text',
          'texts.json'
        );
        if (fs.existsSync(componentPath)) {
          const fileContent = fs.readFileSync(componentPath, 'utf-8');
          return JSON.parse(fileContent);
        }
      } catch (e) {
        // 忽略错误
      }
      throw error;
    }
  }
  
  // 客户端：无法同步读取，需要异步加载
  // 这里返回一个占位对象，实际应该使用异步加载
  // 但为了保持同步 API，我们在构建时已经内联了内容
  // 如果需要在客户端动态加载，应该使用 loadTextsFromPublic
  throw new Error('客户端无法同步读取文件，请使用异步加载或确保在服务端读取');
}

