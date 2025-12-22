#!/bin/bash
# 同步文案文件从 public 目录到组件目录
# 使用方法: ./scripts/sync-texts.sh

echo "开始同步文案文件..."

# Home 页面组件
cp public/home/YourNextWorld/text/texts.json components/Home/com/YourNextWorld/text/texts.json && echo "✓ YourNextWorld"
cp public/home/InstitutionalGrade/text/texts.json components/Home/com/InstitutionalGrade/text/texts.json && echo "✓ InstitutionalGrade"
cp public/home/LetEveryShare/text/texts.json components/Home/com/LetEveryShare/text/texts.json && echo "✓ LetEveryShare"
cp public/home/BuildWithThe/text/texts.json components/Home/com/BuildWithThe/text/texts.json && echo "✓ BuildWithThe"
cp public/home/WhereUsingBecomes/text/texts.json components/Home/com/WhereUsingBecomes/text/texts.json && echo "✓ WhereUsingBecomes"

# TokenMarketplace 页面组件
cp public/tokenMarketplace/ContentCard/text/texts.json components/TokenMarketplace/com/ContentCard/text/texts.json && echo "✓ ContentCard"

echo ""
echo "所有文案文件已同步完成！"








