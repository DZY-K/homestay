export function residueLength(ref) {
  const scrollWidth = ref.current.scrollWidth
  const clientWidth = ref.current.clientWidth
  const residueWidth = scrollWidth - clientWidth
  return residueWidth
}