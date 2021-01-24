// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const process = require('process')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { validateEmail, validateLength } = require('./validations')

const NAME_MIN_LENGTH = 3
const NAME_MAX_LENGTH = 50
const DETAILS_MIN_LENGTH = 10
const DETAILS_MAX_LENGTH = 1e3

const handler = async (event) => {

  console.log('api', process.env.SENDGRID_API_KEY)
  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined',
    }
  }

  const body = JSON.parse(event.body)

  console.log({body})

  // try {
  //   validateLength('body.name', body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  // } catch (error) {
  //   return {
  //     statusCode: 403,
  //     body: error.message,
  //   }
  // }

  // try {
  //   validateEmail('body.email', body.email)
  // } catch (error) {
  //   return {
  //     statusCode: 403,
  //     body: error.message,
  //   }
  // }

  // try {
  //   validateLength('body.details', body.details, DETAILS_MIN_LENGTH, DETAILS_MAX_LENGTH)
  // } catch (error) {
  //   return {
  //     statusCode: 403,
  //     body: error.message,
  //   }
  // }

  const emailToSend = {
    to: process.env.CONTACT_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: `gameboxtruck.com | ${body.name} sent a message from`,
    fromname: 'body.name',
    replyto: 'body.email',
    text: `${body.message} --- PHONE: ${body.phone}`,
    html: `
      <h1>${body.name} sent a message,</h1>

      <p>
        ${body.message.replace(new RegExp('\n', 'g'), '<br />')}
      </p>

      <p>
        <small><strong>Phone:</strong></small>
        </br>
        ${body.phone}
      </p>

      <p style="font-size: 10px; text-align: center;">
        Sent from gameboxtruck.com
      </p>
    `
  }

  try {
    const response = await sgMail.send(emailToSend)
    console.log('success', { response })
    return { statusCode: 200, body: JSON.stringify(response) }
  } catch (error) {
    console.log({error})
    return { statusCode: 500, body: 'failed dawg' }
  }
}

module.exports = { handler }
