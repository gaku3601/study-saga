export default {
  increment: () => {
    return { type: 'INC_REQUEST' }
  },
  decrement: () => {
    return { type: 'DEC_REQUEST' }
  },
}
