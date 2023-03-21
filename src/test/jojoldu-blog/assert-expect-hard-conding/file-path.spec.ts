import { FilePath } from './file-path.class';

it('하드 코딩된 결과 검증', () => {
  const sut = new FilePath('fields', 'that later', 'determine', 'a folder');
  const expected = 'C:\\Output Folder\\fields\\that later\\determine\\a folder';

  expect(sut.fullPath).toBe(expected);
});

it('소프트 코딩된 결과 검증', () => {
  const sut = new FilePath('fields', 'that later', 'determine', 'a folder');
  const expected = `C:\\Output Folder\\${[
    sut.path1,
    sut.path2,
    sut.path3,
    sut.path4,
  ].join('\\')}`;
  expect(sut.fullPath).toBe(expected);
});
