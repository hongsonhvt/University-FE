export type RetrievableData<D> = {
  data?: D;
};

export type RetrieveData<
  T extends RetrievableData<D>,
  D = any,
> = T['data'] extends (infer K)[] | undefined
  ? K[]
  : T['data'] extends infer K | undefined
  ? K
  : never;
