interface Objj {
    a: string;
    b: number;
    c: boolean;
}

type ReadonlyObj = Readonly<Objj>;

type PartialObj = Partial<Objj>;

type PickObj = Pick<Objj, 'a' | 'b'>;

type RecordObj = Record<'x' | 'y', Objj>