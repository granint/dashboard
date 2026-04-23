import { cn } from "@/lib/utils";

interface TitleProps {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
};

const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
};

export default function Title({
    children,
    size = 'base',
    className,
    as: Component = 'h2',
    weight = 'medium'
}: Readonly<TitleProps>) {
    return (
        <Component className={cn(sizeClasses[size], weightClasses[weight], className, "dark:text-white")}>
            {children}
        </Component>
    );
}