# FAKE BLOG

## 목차

- [1.페이지 소개](#페이지-소개)
- [2.와이어 프레임](#와이어-프레임)
- [3.API 명세](#API-명세)
- [4.Issue](#Issue)
- [5.컨벤션](#컨벤션)
- [6.Git Flow](Git-Flow)

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

## 페이지 소개

가상 블로그. 테마를 #000, #2FF40A 두가지 색상으로 잡고 코드를 짜는듯 한 UI 구성으로 만들어 봤습니다.<br/> 브라우저안에 또 하나의 브라우저처럼 보이는게 특징입니다.<br/>
로그인, 로그아웃, 회원가입, 각 게시물, 카테고리 마다의 CRUD 등의 기능이 있습니다.

### 로그인&회원가입 페이지

- 유효성 검사를 통해 정의되지 않은 내용들로는 회원가입,로그인이 진행되지 않습니다.
  ![fakebloglogin](https://github.com/rmdkak/lv4/assets/124483981/9452fe0d-a160-4803-953f-55763c03c4a6)
  ![fakeblogsignup](https://github.com/rmdkak/lv4/assets/124483981/0f62e544-7157-4139-97ad-221ca593bf03)

### 메인페이지

- 작성한 게시물과 카테고리가 보이는 메인 화면입니다. 카테고리 밑에 +버튼으로 카테고리를 추가할 수 있으며, 게시글을 작성할 시엔 //WRITE 버튼을 눌러 작성 페이지로 이동할 수 있습니다.
  ![fakeblogmainpage](https://github.com/rmdkak/lv4/assets/124483981/f809d91f-c4c5-4685-a2fb-0e0cf8172c3e)

### 게시물 작성 페이지

- 상단부터 카테고리, 제목, 내용을 작성해 type=submit 버튼을 클릭하면 작성이 완료됩니다. 유효성 검사를 통해 제목, 내용을 작성하지 않았다거나, 카테고리를 지정하지않으면 alert을 통해 작성되지 않은 부분을 안내해주고 게시물이 업로드되지 않습니다.
  ![fakeblogwitetest](https://github.com/rmdkak/lv4/assets/124483981/ae2dfe55-176e-48d3-9ff0-c674306c006b)

### 디테일 페이지

- 메인 페이지에서 게시물을 클릭하면 볼 수 있는 상세 페이지입니다. 지정된 카테고리 명과 제목, 내용을 확인할 수 있으며 하단에 수정 버튼(type=edit), 삭제 버튼(type=delete)를 통해 해당 기능을 사용할 수 있으며 삭제할 시에 모달창이 나오며 삭제 여부에 대해 다시 한번 확인합니다.
  ![fakeblogdetail](https://github.com/rmdkak/lv4/assets/124483981/99fc6a25-c186-4052-af1d-0c3bbf3160f6)
  ![fakeblogdelete](https://github.com/rmdkak/lv4/assets/124483981/5ad6f52f-ab3e-4476-95b8-cec6222d64d9)

### 게시물 수정 페이지

- 게시물 작성 페이지와 형태와 내용은 동일하며 수정할 내용을 작성 후 완료하면 메인 페이지로 이동하며 기존 내용은 사라지고 수정된 게시물을 확인할 수 있습니다.
  ![fakeblogwitetest](https://github.com/rmdkak/lv4/assets/124483981/ae2dfe55-176e-48d3-9ff0-c674306c006b)

## 와이어 프레임

![와이어 프레임](https://github.com/rmdkak/lv4/assets/124483981/82057eb0-fa34-4530-b39c-500fd7fafd4d)

### [Figam URL](https://www.figma.com/file/WFukckYJFfhqWhfn8rBzGk/%EB%82%B4%EB%B0%B0%EC%BA%A0-%EA%B0%9C%EC%9D%B8-%EA%B3%BC%EC%A0%9C-lv4-%EA%B9%80%EC%84%B1%ED%9B%88?type=design&node-id=0-1&mode=design&t=X8nmFY770h4ZWMec-0)

## API 명세

![API 명세](https://github.com/rmdkak/lv4/assets/124483981/d8b9d230-0099-491b-a68f-36d1625cd7b5)

## Issue

완성하지 못한 부분

- token 유효 시간이 만료되어서 로그아웃 될 시 alert등으로 안내하지 못했음.
- console로 출력되는 오류들 아직 해결 못함
- 댓글 기능 구현 못했음

## 컨벤션

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Docs : 문서 변경
- Style : 코드 포맷팅 등 스타일 관련 변경
- Refactor : 코드 리팩토링
- Chore : 설정 변경 등의 기타 변경사항
- Design : CSS 등 사용자 UI 디자인 변경
- Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업
- Resolve: 병합시 충돌 해결

## Git Flow

![gitflow](https://github.com/rmdkak/lv4/assets/124483981/e2fe55b9-a34b-45ad-999b-ef395891936b)
