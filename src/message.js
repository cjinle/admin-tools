
// const littleEndian = (() => {
//   const buffer = new ArrayBuffer(2);
//   new DataView(buffer).setInt16(0, 256, true);
//   return new Int16Array(buffer)[0] === 256;
// })()

const pack = function(id, str) {
  // console.log("pack")
  let len = str.length
  let buffer = new ArrayBuffer(8 + len)
  let view = new DataView(buffer)
  view.setUint32(0, len)
  view.setUint32(4, id)
  for (let i = 0; i < len; i++) {
    let code = str.charCodeAt(i)
    view.setInt8(8 + i, code)
  }
  return buffer
}

const unpack = function(buffer) {
  if (!buffer || !(buffer instanceof ArrayBuffer)) {
    console.log("buffer type err", buffer)
    return
  }
  let view = new DataView(buffer)
  let msg = {}
  msg.len = view.getUint32(0)
  msg.id = view.getUint32(4)
  msg.buffer = buffer.slice(8)
  msg.data = {}
  
  let enc = new TextDecoder("utf-8")
  try {
    msg.data = JSON.parse(enc.decode(new Int8Array(msg.buffer)))
  } catch (error) {
    console.log(error, enc.decode(msg.buffer))
  }
  return msg
}

export { pack, unpack }

