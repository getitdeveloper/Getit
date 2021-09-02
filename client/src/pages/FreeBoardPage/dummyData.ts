import faker from 'faker';

interface DummyData {
  id: number;
  writer: string;
  writerImage: string;
  title: string;
  tagType: string[];
  text: string;
  writeDate: number;
  likeCount: number;
  commentCount: number;
}
// 더미데이터
export const dummyData: DummyData[] = [
  {
    id: 0,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자', '디자이너'],
    text: `### 프론트엔드 개발자가 되는 법
    * 인터넷 강의
    * 국비 학원 다니기
    * 스터디하기
    * 개인 클론 프로젝트 하기
    
    뭐가 가장 좋을까요?? 고수님들의 조언이 필요합니다ㅠㅠㅠㅠ
    `,
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 1,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 2,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['디자이너'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 3,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['디자이너'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 4,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 5,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자', '기획자'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 6,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['기획자', '디자이너'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 7,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자', '디자이너', '기획자'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 8,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자'],
    text: ` **아니 도대체 뭐가 문제길래 오류가 자꾸 뜨는 걸까요?? python 고수님들을 모십니다!!**

    \`\`\`python
    a, b = map(int, input().split())
    print(a+b)

    # input : [1, 2, 4] 
    \`\`\`

    
    `,
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 9,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['기획자'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 10,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
  {
    id: 11,
    writer: faker.name.findName(),
    writerImage: '/icons/user.svg',
    title: faker.name.title(),
    tagType: ['개발자', '디자이너', '기획자'],
    text: faker.lorem.text(),
    writeDate: Date.now(),
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 9),
  },
];
