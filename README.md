# react-application-sample

## How do I get set up?

パッケージマネージャとして `pnpm` を採用しています。

### `pnpm` 導入

```sh
npm install -g pnpm
```

### パッケージのインストール

```sh
pnpm install
```

### React プロジェクトを動かす

#### AWS 環境で動かす場合（認証に Amazon Cognito を使用）

```sh
pnpm dev
```

#### ローカル端末で動かす場合（認証はモック機能を使用）

```sh
pnpm devlocal
```
