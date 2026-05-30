export let nav = [
  {
    id: 'hjw',
    text: '首页',
    anchor: '#hjw'
  },
  {
    id: 'gy',
    text: '关于我们',
    anchor: '#gy'
  },
  {
    id: 'xm',
    text: '项目介绍',
    anchor: '#xm'
  },
  {
    id: 'fz',
    text: '发展规划',
    anchor: '#fz'
  },
  {
    id: 'hz',
    text: '合作伙伴',
    anchor: '#hz'
  },
  {
    id: 'jr',
    text: '加入我们',
    anchor: '#jr'
  },
  {
    id: 'btm',
    text: '',
    anchor: '#btm'
  },
]

export let list = nav.map(item => {
  return item.id
})

export let tips = nav.map(item => {
  return item.text
})