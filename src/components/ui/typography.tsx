export function H1({ children }: { children: React.ReactNode }) {
    return <h1 className="text-4xl font-bold">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
    return <h2 className="text-3xl font-bold">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
    return <h3 className="text-2xl font-bold">{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
    return <h4 className="text-xl font-bold">{children}</h4>;
}

export function P({ children }: { children: React.ReactNode }) {
    return <p className="text-base">{children}</p>;
}

export function Small({ children }: { children: React.ReactNode }) {
    return <small className="text-sm">{children}</small>;
}

export function Lead({ children }: { children: React.ReactNode }) {
    return <p className="text-lg text-muted-foreground">{children}</p>;
}

export function Muted({ children }: { children: React.ReactNode }) {
    return <p className="text-sm text-muted-foreground">{children}</p>;
}

export function Quote({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">{children}</blockquote>;
}

export function Code({ children }: { children: React.ReactNode }) {
    return <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">{children}</code>;
}

export function Pre({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto">{children}</pre>;
}

export function Label({ children }: { children: React.ReactNode }) {
    return <span className="text-xs font-medium uppercase text-muted-foreground">{children}</span>;
}

export function Kbd({ children }: { children: React.ReactNode }) {
    return <kbd className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm border border-border">{children}</kbd>;
}

export function Del({ children }: { children: React.ReactNode }) {
    return <del className="line-through text-muted-foreground">{children}</del>;
}

export function Ins({ children }: { children: React.ReactNode }) {
    return <ins className="underline text-foreground">{children}</ins>;
}

export function Hr() {
    return <hr className="my-4 border-t border-border" />;
}

export function Br() {
    return <br />;
}

export function Ul({ children }: { children: React.ReactNode }) {
    return <ul className="list-disc list-inside space-y-1">{children}</ul>;
}

export function Ol({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal list-inside space-y-1">{children}</ol>;
}

export function Li({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} className="text-primary underline">{children}</a>;
}

export function Strong({ children }: { children: React.ReactNode }) {
    return <strong className="font-semibold">{children}</strong>;
}

export function Em({ children }: { children: React.ReactNode }) {
    return <em className="italic">{children}</em>;
}

export function Span({ children }: { children: React.ReactNode }) {
    return <span>{children}</span>;
}

export function Div({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function Paragraph({ children }: { children: React.ReactNode }) {
    return <p className="mb-4">{children}</p>;
}

export function Blockquote({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>;
}

export function Preformatted({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto mb-4">{children}</pre>;
}

export function HorizontalRule() {
    return <hr className="my-4 border-t border-border" />;
}

export function LineBreak() {
    return <br />;
}

export function UnorderedList({ children }: { children: React.ReactNode }) {
    return <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>;
}

export function OrderedList({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>;
}

export function ListItem({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

export function Anchor({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} className="text-primary underline">{children}</a>;
}

export function StrongText({ children }: { children: React.ReactNode }) {
    return <strong className="font-semibold">{children}</strong>;
}

export function EmphasizedText({ children }: { children: React.ReactNode }) {
    return <em className="italic">{children}</em>;
}

export function SpanText({ children }: { children: React.ReactNode }) {
    return <span>{children}</span>;
}

export function DivContainer({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function ParagraphWithMargin({ children }: { children: React.ReactNode }) {
    return <p className="mb-4">{children}</p>;
}

export function BlockquoteWithMargin({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>;
}

export function PreformattedWithMargin({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto mb-4">{children}</pre>;
}

export function HorizontalRuleWithMargin() {
    return <hr className="my-4 border-t border-border" />;
}

export function LineBreakElement() {
    return <br />;
}

export function UnorderedListWithMargin({ children }: { children: React.ReactNode }) {
    return <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>;
}

export function OrderedListWithMargin({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>;
}

export function ListItemElement({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

export function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} className="text-primary underline">{children}</a>;
}

export function StrongElement({ children }: { children: React.ReactNode }) {
    return <strong className="font-semibold">{children}</strong>;
}

export function EmphasizedElement({ children }: { children: React.ReactNode }) {
    return <em className="italic">{children}</em>;
}

export function SpanElement({ children }: { children: React.ReactNode }) {
    return <span>{children}</span>;
}

export function DivElement({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function ParagraphElement({ children }: { children: React.ReactNode }) {
    return <p className="mb-4">{children}</p>;
}

export function BlockquoteElement({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>;
}

export function PreformattedElement({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto mb-4">{children}</pre>;
}

export function HorizontalRuleElement() {
    return <hr className="my-4 border-t border-border" />;
}

export function LineBreakElementAlt() {
    return <br />;
}

export function UnorderedListElement({ children }: { children: React.ReactNode }) {
    return <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>;
}

export function OrderedListElement({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>;
}

export function ListItemElementAlt({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

export function AnchorElement({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} className="text-primary underline">{children}</a>;
}

export function StrongTextElement({ children }: { children: React.ReactNode }) {
    return <strong className="font-semibold">{children}</strong>;
}

export function EmphasizedTextElement({ children }: { children: React.ReactNode }) {
    return <em className="italic">{children}</em>;
}

export function SpanTextElement({ children }: { children: React.ReactNode }) {
    return <span>{children}</span>;
}

export function DivContainerElement({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function ParagraphWithMarginElement({ children }: { children: React.ReactNode }) {
    return <p className="mb-4">{children}</p>;
}

export function BlockquoteWithMarginElement({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>;
}

export function PreformattedWithMarginElement({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto mb-4">{children}</pre>;
}

export function HorizontalRuleWithMarginElement() {
    return <hr className="my-4 border-t border-border" />;
}

export function LineBreakElementAlt2() {
    return <br />;
}

export function UnorderedListWithMarginElement({ children }: { children: React.ReactNode }) {
    return <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>;
}

export function OrderedListWithMarginElement({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>;
}

export function ListItemElementAlt2({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

export function AnchorLinkElement({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} className="text-primary underline">{children}</a>;
}

export function StrongElementAlt({ children }: { children: React.ReactNode }) {
    return <strong className="font-semibold">{children}</strong>;
}

export function EmphasizedElementAlt({ children }: { children: React.ReactNode }) {
    return <em className="italic">{children}</em>;
}

export function SpanElementAlt({ children }: { children: React.ReactNode }) {
    return <span>{children}</span>;
}

export function DivElementAlt({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function ParagraphElementAlt({ children }: { children: React.ReactNode }) {
    return <p className="mb-4">{children}</p>;
}

export function BlockquoteElementAlt({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>;
}

export function PreformattedElementAlt({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto mb-4">{children}</pre>;
}

export function HorizontalRuleElementAlt() {
    return <hr className="my-4 border-t border-border" />;
}

export function LineBreakElementAlt3() {
    return <br />;
}

export function UnorderedListElementAlt({ children }: { children: React.ReactNode }) {
    return <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>;
}

export function OrderedListElementAlt({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>;
}

export function ListItemElementAlt3({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

export function AnchorElementAlt({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} className="text-primary underline">{children}</a>;
}

export function StrongTextElementAlt({ children }: { children: React.ReactNode }) {
    return <strong className="font-semibold">{children}</strong>;
}

export function EmphasizedTextElementAlt({ children }: { children: React.ReactNode }) {
    return <em className="italic">{children}</em>;
}

export function SpanTextElementAlt({ children }: { children: React.ReactNode }) {
    return <span>{children}</span>;
}

export function DivContainerElementAlt({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function ParagraphWithMarginElementAlt({ children }: { children: React.ReactNode }) {
    return <p className="mb-4">{children}</p>;
}

export function BlockquoteWithMarginElementAlt({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>;
}

export function PreformattedWithMarginElementAlt({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto mb-4">{children}</pre>;
}

export function HorizontalRuleWithMarginElementAlt() {
    return <hr className="my-4 border-t border-border" />;
}

export function LineBreakElementAlt4() {
    return <br />;
}

export function UnorderedListWithMarginElementAlt({ children }: { children: React.ReactNode }) {
    return <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>;
}

export function OrderedListWithMarginElementAlt({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>;
}

export function ListItemElementAlt4({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

export function AnchorLinkElementAlt({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} className="text-primary underline">{children}</a>;
}

export function StrongElementAlt2({ children }: { children: React.ReactNode }) {
    return <strong className="font-semibold">{children}</strong>;
}

export function EmphasizedElementAlt2({ children }: { children: React.ReactNode }) {
    return <em className="italic">{children}</em>;
}

export function SpanElementAlt2({ children }: { children: React.ReactNode }) {
    return <span>{children}</span>;
}

export function DivElementAlt2({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function ParagraphElementAlt2({ children }: { children: React.ReactNode }) {
    return <p className="mb-4">{children}</p>;
}

export function BlockquoteElementAlt2({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>;
}

export function PreformattedElementAlt2({ children }: { children: React.ReactNode }) {
    return <pre className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto mb-4">{children}</pre>;
}

export function HorizontalRuleElementAlt2() {
    return <hr className="my-4 border-t border-border" />;
}