#!/bin/bash

# CDN 快速配置脚本

echo "🚀 CDN 配置向导"
echo "=================="
echo ""

# 检查是否已存在 .env.production
if [ -f ".env.production" ]; then
    echo "⚠️  发现已存在的 .env.production 文件"
    read -p "是否覆盖？(y/n): " overwrite
    if [ "$overwrite" != "y" ]; then
        echo "❌ 已取消"
        exit 0
    fi
fi

# 选择 CDN 服务商
echo "请选择 CDN 服务商："
echo "1. 阿里云 OSS + CDN"
echo "2. 腾讯云 COS + CDN"
echo "3. AWS S3 + CloudFront"
echo "4. ImageKit"
echo "5. 自定义 CDN 地址"
echo ""
read -p "请输入选项 (1-5): " choice

case $choice in
    1)
        echo ""
        echo "📝 阿里云 OSS + CDN 配置"
        read -p "请输入 CDN 地址（如：https://cdn.example.com）: " cdn_url
        ;;
    2)
        echo ""
        echo "📝 腾讯云 COS + CDN 配置"
        read -p "请输入 CDN 地址（如：https://cdn.example.com）: " cdn_url
        ;;
    3)
        echo ""
        echo "📝 AWS S3 + CloudFront 配置"
        read -p "请输入 CloudFront 地址（如：https://d1234567890.cloudfront.net）: " cdn_url
        ;;
    4)
        echo ""
        echo "📝 ImageKit 配置"
        read -p "请输入 ImageKit URL（如：https://ik.imagekit.io/your-id）: " cdn_url
        ;;
    5)
        echo ""
        echo "📝 自定义 CDN 配置"
        read -p "请输入 CDN 地址: " cdn_url
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

# 验证 CDN 地址格式
if [[ ! $cdn_url =~ ^https?:// ]]; then
    echo "❌ CDN 地址格式错误，必须以 http:// 或 https:// 开头"
    exit 1
fi

# 移除末尾的斜杠
cdn_url=$(echo "$cdn_url" | sed 's:/*$::')

# 创建 .env.production 文件
cat > .env.production << EOF
# CDN 配置
# 生成时间: $(date)

# CDN 基础地址
NEXT_PUBLIC_CDN_BASE_URL=$cdn_url

# 是否启用 CDN
NEXT_PUBLIC_USE_CDN=true
EOF

echo ""
echo "✅ 配置完成！"
echo ""
echo "📄 已创建 .env.production 文件："
echo "   NEXT_PUBLIC_CDN_BASE_URL=$cdn_url"
echo "   NEXT_PUBLIC_USE_CDN=true"
echo ""
echo "📋 下一步："
echo "   1. 确保图片已上传到 CDN"
echo "   2. 运行: npm run build"
echo "   3. 部署到服务器"
echo ""
echo "💡 提示："
echo "   - 确保 CDN 地址已配置 HTTPS（SSL 证书）"
echo "   - 确保图片路径与 public/ 目录结构一致"
echo "   - 查看 CDN_SETUP_GUIDE.md 获取详细说明"
echo ""






