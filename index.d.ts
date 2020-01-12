declare global {
    interface Window {
        CbScrollTop: any
    }
}

interface More {
    [key: string]: any
}

interface Options extends More {
    type?: "image" | "emoji"
    source?: string
    animated?: boolean
    offset?: number
    done?: Function
}

declare class CbScrollTop {
    public container: HTMLElement;
    public content: HTMLElement;
    public image: HTMLImageElement;
    public config: any;
    public VERSION: string;
    public AUTHOR: string;
    private status: number;

    constructor(options: Options);
    private createContent(): void;
    private listenScroll(): void;
    private setStyle(style: More);
}
export = CbScrollTop;