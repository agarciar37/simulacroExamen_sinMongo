import { FunctionComponent } from "preact";

const LoginForm: FunctionComponent = () => (
  <form action="/" method="GET">
    <input type="text" name="dni" placeholder="Introduce tu DNI"/><br/>
    <input type="password" name="password" placeholder="Password"/><br/>
    <button type="submit">Log-in</button>
  </form>
)

export default LoginForm;