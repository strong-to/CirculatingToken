#!/bin/bash

# 修复 WebP 文件权限问题的脚本

echo "🔧 修复 WebP 文件权限问题..."
echo ""

# 查找所有由 root 拥有的 WebP 文件
ROOT_WEBP_FILES=$(find public -name "*.webp" -user root 2>/dev/null)

if [ -z "$ROOT_WEBP_FILES" ]; then
    echo "✅ 没有找到需要修复的文件"
    exit 0
fi

COUNT=$(echo "$ROOT_WEBP_FILES" | wc -l | tr -d ' ')
echo "📊 找到 $COUNT 个需要修复的文件"
echo ""

# 询问是否删除这些文件
read -p "是否删除这些由 root 拥有的 WebP 文件？(y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "❌ 已取消"
    exit 0
fi

# 尝试删除（需要 sudo）
echo "🗑️  正在删除文件..."
echo "$ROOT_WEBP_FILES" | while read file; do
    if sudo rm -f "$file" 2>/dev/null; then
        echo "   ✅ 已删除: $file"
    else
        echo "   ❌ 删除失败: $file (可能需要手动删除)"
    fi
done

echo ""
echo "✅ 修复完成！现在可以重新运行: npm run optimize-images"


