import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {QuoteContainer,QuoteText, Author}  from './QuoteStyles'
import { QUOTE_API_KEY } from '../config'

function Quote() {
  const quoteRequest = axios.create({
    method: 'POST',
    baseURL: 'https://api.api-ninjas.com/v1/quotes?category=happiness',
    headers: { 'X-Api-Key': QUOTE_API_KEY },
  })
  const [data, setData] = useState(null)
  useEffect(() => {
    quoteRequest
      .get()
      .then((response) => {
        setData(response.data[0])
      })
      .catch(function (error) {
        console.error(error)
      })
 // eslint-disable-next-line
  }, [])


  console.log(data)
  if (!data) return null
  return (
    <QuoteContainer>
      <QuoteText>{data.quote}</QuoteText>
      <Author>{data.author}</Author>
    </QuoteContainer>
  )
}

export default Quote
