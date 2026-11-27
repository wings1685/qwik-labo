import { component$, isDev } from "@qwik.dev/core";
import { DocumentHeadTags, RouterOutlet, useQwikRouter } from "@qwik.dev/router";

import "./global.css";

export default component$(() => {
	useQwikRouter();
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

	return (
		<>
			<head>
				<meta charset="utf-8" />
				{!isDev && (
				<link
					rel="manifest"
					href={`${import.meta.env.BASE_URL}manifest.json`}
				/>
				)}
				<DocumentHeadTags />
			</head>
			<body lang="ja">
				<RouterOutlet />
			</body>
		</>
	);
});
