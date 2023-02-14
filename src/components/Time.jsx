import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import { TimeContainer, TimeText, Greeting} from './TimeStyles'

function Time() {
  let today = new Date()
  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return 'Good Morning, Andrey.'
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return 'Good Afternoon, Andrey.'
    } else if (today.getHours() >= 17 && today.getHours() < 124) {
      return 'Good Evening, Andrey.'
    } else {
      return 'What are you doin up at this hour?'
    }
  }
  return (
    <TimeContainer>
      <TimeText>
        <Moment format="LT"></Moment>
      </TimeText>
      <Greeting>{greeting()}</Greeting>
    </TimeContainer>
  )
}

export default Time
