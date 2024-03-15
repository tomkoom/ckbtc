export const formatId = (str: string): string => {
  return str.substring(0, 11) + ".." + str.substring(str.length - 3)
}
