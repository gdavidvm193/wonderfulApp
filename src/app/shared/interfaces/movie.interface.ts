export interface Movie {
    title: string;
    release: Date;
    description: string;
    image: string | ArrayBuffer;
    trash?: boolean;
}
