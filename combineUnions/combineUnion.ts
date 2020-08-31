type Merge<T> = { [K in keyof T]: T[K] };

type Spread<L, R> = Merge<L & { [K in keyof R]?: undefined }>;

type CombineUnion<L, R> = Spread<L, R> | Spread<R, L>;
