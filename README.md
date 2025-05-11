# モダンJavaScript学習環境

モダンなJavaScript開発のための学習環境です。

## 初回セットアップ

### Node.jsのインストール

nvmを使用している場合：

```bash
nvm install
nvm use
```

直接Node.js 22.9.0をインストールしている場合は不要です。

### 依存パッケージのインストール

```bash
npm ci  # 厳密なインストール（package-lock.jsonを使用）
# または
npm install  # 通常のインストール
```

## 使い方

開発サーバーの起動:

```bash
npm run dev
# → http://localhost:5173 でアクセス
```

ビルド:

```bash
npm run build
```

テスト実行:

```bash
npm run test
```

リントとフォーマット:

```bash
npm run lint
npm run format
```

## 注意点

- Node.jsのバージョンは`.nvmrc`で指定されています（22.9.0）
- ESLint v9 のFlat Config形式を使用しています
- Viteを使用した開発環境です

## 次のステップ

- TypeScriptへの移行
- Reactの導入
- テスト環境の拡充
