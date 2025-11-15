export const add = (a: number, b: number): number => {
  throw new Error("Error in add", { cause: { a, b } })
  return a + b
}
