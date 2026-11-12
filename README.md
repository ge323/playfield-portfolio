# PLAYFIELD — 게임·앱 개발자 포트폴리오

이 폴더는 VS Code에서 독립적으로 열어 편집할 수 있는 프로젝트입니다. Manus 계정이나 별도 API 키 없이 정적 포트폴리오를 실행할 수 있습니다.

## VS Code에서 실행하기

1. ZIP을 원하는 폴더에 압축 해제합니다.
2. [Node.js 22 LTS](https://nodejs.org/)를 설치합니다.
3. VS Code에서 압축 해제된 `playfolio-vscode` 폴더를 **폴더째** 엽니다.
4. VS Code 메뉴에서 **Terminal → New Terminal**을 열고 아래 명령을 실행합니다.

```powershell
npm install --global pnpm@10.18.0
pnpm install
pnpm dev:static
```

5. 브라우저에서 <http://localhost:3000>을 엽니다. 개발 서버를 끄려면 터미널에서 `Ctrl+C`를 누르세요.

`node_modules`와 빌드 산출물은 ZIP에 포함하지 않았습니다. 따라서 처음 한 번 `pnpm install`이 필요합니다. 포트 3000이 이미 사용 중이면 해당 프로그램을 종료한 뒤 다시 실행하세요.

## 작품·이미지 수정

- 작품 제목, 설명, 분야, 플랫폼, 연도, 링크는 `client/src/data/games.ts`에서 수정합니다.
- 사용자 썸네일은 `client/public/images/` 폴더에 들어 있습니다. 기존 이미지 파일을 교체하거나 새 이미지를 추가할 수 있습니다.
- 썸네일이 없는 ‘바다거북스프(&채팅방)’은 이미지 추가 예정 카드로 표시됩니다. 나중에 이미지를 추가할 때는 `client/public/images/`에 복사하고 해당 프로젝트 항목에 `image: "/images/파일명.png"`을 지정하면 됩니다.
- 개발자 이름·이메일·기술 스택·소셜 링크도 같은 `games.ts`의 `profile` 항목에서 수정합니다.

정적 결과물을 만들려면 `pnpm build:static`을 실행하세요. 이 ZIP은 현재 프로젝트의 독립 사본이므로, 여기서 바꾼 내용이 Manus 미리보기나 원격 프로젝트에 자동 동기화되지는 않습니다.
