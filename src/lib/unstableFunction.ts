export const unstableFunction = (a: number, b: number): number => {
  throw new Error("Error in unstableFunction", { cause: { a, b } })
  return a + b
}
