import React from 'react'
import { DateContainer } from './DateStyles'

function DateToday() {
  let today = new Date()
  let month = today.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  } else {
    month = today.getMonth() + 1
  }
  let date = `${today.getDate()}/${month}/${today.getFullYear()}`

  console.log(date)

  return (
    <DateContainer className="Date">
      <p>{date}</p>
    </DateContainer>
  )
}

export default DateToday
