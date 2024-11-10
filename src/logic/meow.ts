import { gzip, ungzip } from 'pako'

type MeowTable = { [key: string]: string }

const meowTable: MeowTable = {
  '!': '00000',
  '?': '00001',
  '~': '00010',
  '.': '00011',
  'nya?': '00100',
  'nya~': '00101',
  'nya!': '00110',
  'nya.': '00111',
  '！': '01000',
  '？': '01001',
  '～': '01010',
  '。': '01011',
  'nya？': '01100',
  'nya～': '01101',
  'nya！': '01110',
  'nya。': '01111',
  '喵!': '10000',
  '喵?': '10001',
  '喵~': '10010',
  '喵.': '10011',
  '喵呜?': '10100',
  '喵呜~': '10101',
  '喵呜!': '10110',
  '喵呜.': '10111',
  '喵！': '11000',
  '喵？': '11001',
  '喵～': '11010',
  '喵。': '11011',
  '喵呜？': '11100',
  '喵呜～': '11101',
  '喵呜！': '11110',
  '喵呜。': '11111',
}

const reverseMeowTable: MeowTable = Object.fromEntries(
  Object.entries(meowTable).map(([key, value]) => [value, key]),
)

const meowLength = 5

export function meowEncode(cat: string, zipcat: boolean = true): string {
  let meows = new TextEncoder().encode(cat)
  const compressMeow = meows.length > 50 && zipcat

  if (compressMeow) {
    meows = compressMeowData(meows)
  }

  let binary = ''
  for (const meow of meows) {
    binary += meow.toString(2).padStart(8, '0')
  }

  const meowString = binaryToMeow(binary)

  return compressMeow ? meowString + 'Σ(っ°Д°;)っ' : meowString + '_(:з」∠)_'
}

export function meowDecode(cat: string): string {
  cat = cat.replace('nia', 'nya')

  if (!cat.endsWith('_(:з」∠)_') && !cat.endsWith('Σ(っ°Д°;)っ')) {
    throw new Error('Invalid meow encoding')
  }

  const compressed = cat.endsWith('Σ(っ°Д°;)っ')
  let meowSequence = cat.slice(0, compressed ? -9 : -8) // Remove ending emoticon

  let binary = ''
  let tempMeow = ''

  meowSequence = meowSequence.split(' ').join('')

  for (const meow of meowSequence.split('')) {
    tempMeow += meow
    if (meowTable[tempMeow]) {
      binary += meowTable[tempMeow]
      tempMeow = ''
    }
  }

  return binaryToText(binary, compressed)
}

function binaryToMeow(binary: string): string {
  binary = binary.padStart(meowLength * Math.ceil(binary.length / meowLength), '0')
  let meow = ''

  for (let i = 0; i < binary.length; i += meowLength) {
    const chunk = binary.slice(i, i + meowLength)
    meow += reverseMeowTable[chunk]
  }

  return meow
}

function binaryToText(binary: string, compressed: boolean): string {
  binary = binary.padStart(8 * Math.ceil(binary.length / 8), '0')

  const byteArray: Uint8Array = new Uint8Array(binary.length / 8)
  for (let i = 0; i < binary.length; i += 8) {
    byteArray[i / 8] = parseInt(binary.slice(i, i + 8), 2)
  }

  let result = compressed ? decompressMeowData(byteArray.slice(1, byteArray.length)) : byteArray.slice(1, byteArray.length)
  return new TextDecoder().decode(result)
}

function compressMeowData(data: Uint8Array): Uint8Array {
  return gzip(data)
}

function decompressMeowData(data: Uint8Array): Uint8Array {
  return ungzip(data)
}
