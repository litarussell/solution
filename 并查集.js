/**
 * 并查集
 */
function MergeSet() {
  let f = {}

  function find(x) {
    if (!(x in f)) f[x] = x
    if (x !== f[x]) f[x] = find(f[x])
    return f[x]
  }

  function union(x, y) {
    f[find(x)] = find(y)
  }
  return {
    find,
    union // 将集合x合并到集合y
  }
}