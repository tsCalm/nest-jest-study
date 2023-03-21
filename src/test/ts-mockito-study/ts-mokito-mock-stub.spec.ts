import { User } from '../../user-module/user.entity';
import { UserRepository } from '../../user-module/user.repository';
import { UserFindOneService } from '../../user-module/user.service';
import { mock, when, instance } from 'ts-mockito';

it('[ts-mockito] 유저를 찾지 못하면 에러가 발생한다', async () => {
  // given
  const user = new User(1, 'test-user-1');

  const stubRepository: UserRepository = mock(UserRepository); // stub 객체 생성
  when(stubRepository.findone(1)).thenResolve(user); // when

  const sut = new UserFindOneService(instance(stubRepository));

  // when
  const actual = async () => {
    return await sut.execute(1);
  };
  // then
  expect(actual()).resolves.toEqual(user);
});
