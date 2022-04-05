import { IQuery } from '../interfaces/Query'

export const parseParams = (params: IQuery = {}) => {
  let parsedResult = {}

  if (params.perPage) {
    parsedResult['p:show'] = params.perPage
  }

  if (params.page) {
    parsedResult['p:current'] = params.page
  }

  if (params.sort && params.sortOrder) {
    parsedResult['orderBy'] = params.sort + '|' + params.sortOrder
  }

  if (params.filter) {
    for (let key of Object.keys(params.filter)) {
      if (key != '' && params.filter[key] !== '') {
        parsedResult['f:' + key] = params.filter[key]
      }
    }
  }
  return parsedResult
}

export const parsePublicParams = (params: IQuery = {}) => {
  let parsedResult = {}

  if (params.perPage) {
    parsedResult['pageRecordsShow'] = params.perPage
  }

  if (params.page) {
    parsedResult['currentPage'] = params.page
  }

  if (params.filter) {
    for (let key of Object.keys(params.filter)) {
      if (key != '' && params.filter[key] !== '') {
        parsedResult[key] = params.filter[key]
      }
    }
  }
  return parsedResult
}
