import { component$ } from "@builder.io/qwik";

type Props = {
	picKey: string;
};

export default component$((props: Props) => {
	return (
		<div class="pic01">
			<div class="pic02">
				<div class="pic03">
					<div class="pic04">
						<div class="pic05">
							<p>{ props.picKey } の画像</p>
						</div>
					</div>
				</div>
			</div>
			<div class="pic02">
				<div class="pic03">
					<div class="pic04">
						<div class="pic05">
							<img src={ `/images/performance/${props.picKey}.webp` } alt={ `${props.picKey} の alt` } width={ undefined } height={ undefined } />
						</div>
					</div>
				</div>
			</div>
			<div class="pic02">
				<div class="pic03">
					<div class="pic04">
						<div class="pic05">
							<img src={ `/images/performance/${props.picKey}_sp.webp` } alt={ `${props.picKey}_sp の alt` } width={ undefined } height={ undefined } />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
});
