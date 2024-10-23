class utils {

  getRandomLettersString(length = 16, upperCase) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('')
    let value = ''

    if (!upperCase) {
      for (let i = 0; i < length; i++) {
        value += chars[Math.floor(Math.random() * chars.length)]
      }
    } else {
      for (let i = 0; i < length; i++) {
        value += chars[Math.floor(Math.random() * chars.length)].toUpperCase()
      }
    }
    return value
  }


  /**
   * Generates a random string of numbers.
   * @param {number} length How long the string should be.
   * @returns {value} A randomized string.
   */


  getRandomNumbers(length = 6) {
    const chars = '1234567890'.split('')
    let value = ''

    for (let i = 0; i < length; i++) {
      value += chars[Math.floor(Math.random() * chars.length)]
    }
    return value
  }


  getRandomString(length = 16, upperCase) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('')
    let value = ''

    if (!upperCase) {
      for (let i = 0; i < length; i++) {
        value += chars[Math.floor(Math.random() * chars.length)]
      }
    } else {
      for (let i = 0; i < length; i++) {
        value += chars[Math.floor(Math.random() * chars.length)].toUpperCase()
      }
    }
    return value
  }

  async checkStatusCode(res, expectedStatus) {
    const reqData = await JSON.parse(JSON.stringify(res)).req

    // Log request details
    // console.log(`Request URL     : ${JSON.stringify(reqData.url)}`)
    // console.log(`Request Method  : ${JSON.stringify(reqData.method)}`)

    if (res.status === expectedStatus) {
      console.log(`Response Status: ${res.status}`)
      return res
    }
    // Log unexpected status
    console.error(`Unexpected Response Status: ${res.status}`)
    // Log request details
    this.logRequestDetails(res)

    try {
      // Process response based on content type
      const contentType = res.headers['content-type']
      if (contentType && contentType.includes('application/json')) {
        // Handle JSON response
        try {
          // console.log(res)
          const responseBody = res.body // supertest response body is already parsed
          console.error(`Response Body: ${JSON.stringify(responseBody)}`)
        } catch (jsonError) {
          console.error('Error parsing JSON response body:', jsonError.message)
        }
      } else {
        // Handle non-JSON or no response body
        console.error('Non-JSON or No Response Body')
      }
    } catch (error) {
      console.error('Error processing response:', error.message)
    }

    throw new Error(`Unexpected response status: ${res.status}`)
  }

}

export default new utils()
