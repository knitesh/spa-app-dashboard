/* eslint-disable no-console */
import * as AppNavbar from "@nitex/app-nav-bar";
export default function Root(props) {
  console.log({ ...AppNavbar });
  return (
    <section>
      Hello {props.name} is mounted!
      <AppNavbar.BigBlock />
    </section>
  );
}
