// lib/slugify.ts
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // 中文转拼音（可选，如果需要）
    // .replace(/[^\w\s-]/g, '')
    // 将空格和特殊字符替换为连字符
    .replace(/\s+/g, '-')        // 空格 -> 连字符
    .replace(/[^\w\-]+/g, '')    // 移除特殊字符
    .replace(/\-\-+/g, '-')      // 合并多个连字符
    .replace(/^-+/, '')           // 移除开头的连字符
    .replace(/-+$/, '');          // 移除结尾的连字符
}

// 使用示例
slugify("如何学习 Next.js！") 
// 输出: "ru-he-xue-xi-next-js"（如果有拼音库）
// 或: "next-js"（如果只保留英文）