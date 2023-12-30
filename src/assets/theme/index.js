const theme = {
  color: {
    primaryColor: '#FF0033',
    secondaryColor: '#008489',
    bgColor: '#F0F0F0'
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 2px 3px 1px rgba(0,0,0,0.1);
    }
    `
  },
  borderRadius: {
    radius: `
    border-radius: 30px;
    `
  },
  fontSize: {
    size: `
    font-size: 12px;
    `
  },
  itemActiveBgColor: {
    bgColor: `
    itemActiveBg: #000;
    `
  }
}
export default theme