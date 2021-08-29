import faker from 'faker';

interface DummyData {
  title: string;
  memberCount: number;
  memberType: string[];
  text: string;
  expireDate: number;
}
// 더미데이터
export const dummyData: DummyData[] = [
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '디자이너'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '디자이너', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '디자이너'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '디자이너'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '디자이너', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['디자이너', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '디자이너', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['디자이너', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '디자이너', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
  {
    title: faker.name.title(),
    memberCount: Math.floor(Math.random() * 9),
    memberType: ['개발자', '기획자'],
    text: faker.lorem.text(),
    expireDate: Date.now(),
  },
];
