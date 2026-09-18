import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "@/_global/styles/global.sass";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
	  <a href="/form">form</a>
	  <br />
	  <a href="/performance01">performance01</a>
	  <br />
	  <a href="/performance02">performance02</a>
	  <br />
	  <a href="/performance03">performance03</a>
	  <br />
	  <a href="/performance04">performance04</a>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
