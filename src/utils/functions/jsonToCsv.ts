import { isObject, isArray, isNumber } from 'lodash-es'

const jsonToCSV = (data: any[]): string => {
  let csv = ''

  const headers = Object.keys(data[0])
  csv += headers.join(',') + '\n'

  data.forEach((obj) => {
    const values: any[] = headers.map((header) => {
      const value = obj[header]
      if (isArray(value)) {
        return value.join(' ')
      } else if (isNumber(value)) {
        return value.toFixed(2)
      } else if (isObject(value)) {
        return JSON.stringify(value)
      } else {
        return value
      }
    })
    csv += values.join(',') + '\n'
  })

  return csv
}
export const downloadJSONAsCSV = (data: any[]): void => {
  let csvData: string = jsonToCSV(data)
  let blob: Blob = new Blob([csvData], { type: 'text/csv' })
  let url: string = window.URL.createObjectURL(blob)
  let a: HTMLAnchorElement = document.createElement('a')
  a.href = url
  a.download = 'data.csv'
  document.body.appendChild(a)
  a.click()
}
