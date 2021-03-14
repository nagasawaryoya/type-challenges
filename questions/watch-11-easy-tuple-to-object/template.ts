type TupleToObject<T extends readonly [...T]> = {
  [P in T[number]]: P;
}
