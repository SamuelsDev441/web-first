import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Home</title>
        <h1>Student</h1>
    </head>
    <body>
        <form action="/portal">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="user"><br>
            <label for="pwd">Password:</label><br>
            <input type="password" id="pwd" name="pwd">
          </form>
    </body>
    </html>
  )
}
