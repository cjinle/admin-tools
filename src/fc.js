const FC = {
  hello: () => {
    console.log("function hello call!");
  },
  games: [
    { id: '1', name: '泰语' },
    { id: '2', name: '印尼' },
    { id: '4', name: '缅甸' },
    { id: '5', name: '马来' },
    { id: '6', name: '墨西哥' },
    { id: '7', name: '菲律宾' }
  ],
  saveLocalData: (values) => {
    for (let k in values) {
      localStorage.setItem(k, values[k]);
    }
  },
  getLocalData: (field = "") => {
    if (field.length > 0) {
      return localStorage.getItem(field);
    }
    return { gid: localStorage.getItem('gid') || "1", mid: localStorage.getItem('mid') || "" };
  }

};

export default FC;