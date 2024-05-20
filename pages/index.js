import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Home</title>
        <h1>Student</h1>
        <form>
          <label htmlFor="username">Username:</label><br />
          <input type="text" id="username" name="user" /><br />
          <label htmlFor="pwd">Password:</label><br />
          <input type="password" id="pwd" name="pwd" />
        </form>
      </div>
    );
  }
});
  )
