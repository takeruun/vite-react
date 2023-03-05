# Vite react-app
vite 利用した react アプリ
https://ja.vitejs.dev/

## 立ち上げ
```sh
$ yarn dev


VITE v4.1.4  ready in 584 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

## ビルド
```sh
$ yarn build


yarn run v1.22.19
$ tsc && vite build
vite v4.1.4 building for production...
✓ 948 modules transformed.
dist/index.html                  0.40 kB
dist/assets/index-f98a384e.js  301.35 kB │ gzip: 96.57 kB
✨  Done in 9.72s.
```

### 所感
超早い

`create-react-app`の React + webpack環境は立ち上げにだいたい 5s くらいかかってた

webpack のようにたくさん設定する必要ない