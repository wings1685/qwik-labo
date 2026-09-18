# Qwik Labo

別リポジトリの「[同一 Astro 上で Solid / Svelte / Vue / React を動作させる実験場](https://github.com/wings1685/xross-astro)」の、疑似的 Qwik 環境においての Qwik 専用実験場です。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- Qwik City 1.20.0
- Valibot

## Experiments

この実験場では以下を行いました。

- Qwik 標準機能のみを使用した、同一機能を供給するフォーム機構の考察・構築
- Qwik の状態管理の伝播速度計測
- Context の Setter / Getter 化

## Related Articles

- [フォームライブラリの使用をやめてみた](https://wings.hatenablog.com/entry/withoutFormLibraries)
- [フォームライブラリの使用をやめてみた（Qwik 編）](https://wings.hatenablog.com/entry/qwikForm)
- [同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）](https://wings.hatenablog.com/entry/benchmark)
- [【第 2 回】 同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）](https://wings.hatenablog.com/entry/benchmarkSecond)
- [【第 3 回】 同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）](https://wings.hatenablog.com/entry/benchmarkThird)
- [【番外編】 同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）](https://wings.hatenablog.com/entry/benchmarkFinal)
- [SolidStart / SvelteKit / Qwik City の Context を Getter / Setter 化したかった](https://wings.hatenablog.com/entry/context)

## Folder Map

```
src/
├─ _global/
│ ├─ contexts/
│ ├─ styles/
├─ _test/
├─ components/
│ ├─ features/
│ │ ├─ form/
│ ├─ router-head/
│ ├─ routes/
│ │ ├─ form/
│ │ ├─ performance01/
│ │ ├─ performance02/
│ │ ├─ performance03/
│ │ ├─ performance04/
│ ├─ pages/
│ ├─ shared/
├─ routes/
│ ├─ form/
│ ├─ performance01/
│ ├─ performance02/
│ ├─ performance03/
│ ├─ performance04/
```
