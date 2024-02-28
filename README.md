This uses the [Next.js](https://nextjs.org/) template to reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

## Reproduction Steps

```bash
npm i 
npm run build
```

```
Route (pages)                             Size     First Load JS
┌ ○ /                                     780 B          78.9 kB
├   └ css/6ab5fea530a348de.css            367 B
└ ○ /404                                  182 B          78.3 kB
+ First Load JS shared by all             78.1 kB
  ├ chunks/framework-2c16ac744b6cdea6.js  45.2 kB
  ├ chunks/main-d7239acbfe0deb02.js       31.9 kB
  └ other shared chunks (total)           945 B

○  (Static)  prerendered as static content
```

## Patch

```bash
rm -rf .next
npm run patch
npm run build
```

```

Route (pages)                             Size     First Load JS
┌ ○ /                                     682 B          78.7 kB
├   └ css/6ab5fea530a348de.css            367 B
└ ○ /404                                  182 B          78.2 kB
+ First Load JS shared by all             78 kB
  ├ chunks/framework-2c16ac744b6cdea6.js  45.2 kB
  ├ chunks/main-d7239acbfe0deb02.js       31.9 kB
  └ other shared chunks (total)           907 B

○  (Static)  prerendered as static content
```

As you can see, the size of the first load JS is reduced by ~100 bytes.
For a larger project, this would be more significant.

## Patch:

```diff
diff --git a/node_modules/next/dist/build/webpack/config/blocks/css/loaders/client.js b/node_modules/next/dist/build/webpack/config/blocks/css/loaders/client.js
index e482b46..1b35d91 100644
--- a/node_modules/next/dist/build/webpack/config/blocks/css/loaders/client.js
+++ b/node_modules/next/dist/build/webpack/config/blocks/css/loaders/client.js
@@ -39,7 +39,7 @@ function getClientStyleLoader({ hasAppDir, isAppDir, isDevelopment, assetPrefix
         loader: MiniCssExtractPlugin.loader,
         options: {
             publicPath: `${assetPrefix}/_next/`,
-            esModule: false
+            esModule: true
         }
     };
 }
 ```