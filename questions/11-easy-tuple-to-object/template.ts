type TupleToObject<T extends readonly T[]> = {
  [P in keyof T]: P
}
