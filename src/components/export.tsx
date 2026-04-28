'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';
import ArrayToXLSX from 'ssr-xlsx-export';

interface ExportButtonProps {
    /** 获取数据的异步函数 */
    fetchData: () => Promise<any[]>;
    /** 导出的文件名（不含扩展名） */
    fileName?: string;
    /** 工作表名称 */
    sheetName?: string;
    /** 工作表头 */
    headers: string[];
    /** 按钮文字 */
    buttonText?: string;
    /** 导出中文字 */
    loadingText?: string;
    /** 按钮变体 */
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    /** 按钮大小 */
    size?: 'default' | 'sm' | 'lg' | 'icon';
    /** 是否禁用 */
    disabled?: boolean;
    /** 自定义类名 */
    className?: string;
    /** 数据映射函数（用于选择导出哪些字段） */
    transformData?: (item: any) => Record<string, any>;
    /** 导出成功回调 */
    onSuccess?: () => void;
    /** 导出失败回调 */
    onError?: (error: Error) => void;
}

export default function ExportButton(
    {
        fetchData,
        fileName = 'export data',
        sheetName = 'data',
        headers,
        buttonText = 'export',
        loadingText = 'exporting...',
        variant = 'outline',
        size = 'sm',
        className = 'h-8 gap-1',
        disabled = false,
        onSuccess,
        onError,
    }: ExportButtonProps) {

    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        if (isExporting) return; // 防止重复点击

        setIsExporting(true);

        try {
            let data = await fetchData();

            console.log(data    );
            ArrayToXLSX(data, {
                filename: fileName,
                sheetName: sheetName,
                headers: headers,
                headerStyle: {
                    // font: { bold: true, color: { rgb: 'FF0000' } },
                    // alignment: { horizontal: 'center' },
                },
            });

            onSuccess?.();
        } catch (error) {
            console.error("Error exporting:", error);
            onError?.(error as Error)
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <Button
            size={size}
            variant={variant}
            className={className}
            onClick={handleExport}
            disabled={disabled || isExporting}
        >
            <Download className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                {isExporting ? loadingText : buttonText}
            </span>
        </Button>
    );
}